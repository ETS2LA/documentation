---
title: Events
---
An excellent way to handle communications between plugins, in addition to **tags**, is using the ETS2LA event system. While tags are more focused on sending large amounts of data, you can use the event system to send *relatively small* amounts of information very easily.

### Why use events?

Tags are fantastic, but they do come with a certain amount of boilerplate code. Tags also have to be constantly *polled* meaning your plugin has to ask the backend "is there an update yet?" instead of the backend sending the information as soon as it's ready.

The event system itself was built from a need for a more performant (and faster) way for plugins to send information and well, events, to each other.

### How do I create and trigger events?

As with everything in ETS2LA this has been made to be as easy as possible for the Plugin developers. Below is some example code for _defining_ an event.

```python
# Plugins/MyPlugin/events.py

from ETS2LA.Events import Event

class MyEvent(Event):
    alias = "my_event"
    some_data: str
    some_other_data: float
```

Notice how just like the settings system, you explicitly define the variables you want an event to contain. This is preferred since other plugins can import your event, and know exactly what they contain. **For this reason please make sure you define events in an** `events.py` **(or similar) file. Make sure they don't import from your main plugin!**

Now to actually trigger events it's also very easy. You don't have to create an instance of the event, just call `trigger` function on the class itself with the variables you want to send. _(You can make a pure trigger event by not adding any variables to the class)_

Note that the `trigger` function expects an `EventSystem` instance, that can be imported from `ETS2LA.Events` as well.

```python
# Plugins/MyPlugin/some_file.py

from ETS2LA.Events import events
from Plugins.MyPlugin.classes import MyEvent

# You have to set the event information with kwargs
# Args are not supported, and it makes code easier to read!
MyEvent.trigger(events, 
    some_data="Hello World!", 
    some_other_data=15.49
)
```

Events can be triggered from any file inside your plugin process. Once triggered, the backend will send a copy of this event to all plugins, they can then use the event data as they wish. If you want to use the events internally in the plugin, you can add `queue=False` to the trigger call, and that will only emit the event inside the current plugin process.

### How do I listen to events?

Listening to events works much the same as triggering them. There's two ways to do it, but one is preferred over the other. We're keeping both ways alive until the controls system gets refactored to take into account new changes.

Probably the most useful, as well as the most used way of listening to events is using `events.on`. The code below should be fairly self explanatory.

```python
# Plugins/MyOtherPlugin/some_file.py

from ETS2LA.Events import events
from Plugins.MyPlugin.classes import MyEvent

@events.on(MyEvent)
def my_event_callback(event_instance: MyEvent, *args, **kwargs):
    event_instance.some_data # Hello World!
    kwargs["some_data"] # Hello World!

# You can also listen to events *without* importing the class
# This will just omit intellisense on the event_instance, so using the class is preferred.
@events.on("my_event")
def my_event_callback_classless(event_instance, *args, **kwargs):
    ...
```

As you can see, we provide the raw `Event` instance, as well as the args and kwargs it was called with. In most situations you will only use the instance, but the args and kwargs are there for backwards compatibility. _You still need to define_ `*args` _and_ `**kwargs` _or python will complain!_

Now in addition to listening for triggers, you can also wait until an event is triggered in a thread or the main process. Please note that it's recommended to _not_ block the main plugin process inside the `run` function. You should always create a thread listener.

```python
# Plugins/MyOtherPlugin/some_file.py

from ETS2LA.Events import events
from Plugins.MyPlugin.classes import MyEvent

try:
    event_instance, args, kwargs = events.wait_for(MyEvent, timeout=5)
    event_instance.some_data # Hello World!
except TimeoutError:
    print("Timed out")
```

The current thread will wait at the events call until the event is triggered from somewhere, or it reaches a timeout, in which case it will raise a `TimeoutError`. Remember to always handle timeout cases! By default ETS2LA will assume a 5 second timeout, you can adjust that however you want.

### Suggestions or improvements?

If you want us to add any features to the Event system then just ping **@Tumppi066** on Discord or send a message to `contact@ets2la.com` and we'll see what we can do 👍