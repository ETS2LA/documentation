---
title: "The Event System"
---

Now we're getting to our first library, [`ETS2LA.Backend.Events`](https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/blob/rewrite/ETS2LA.Backend/EventBus/Bus.cs#L3).

Most of inter-plugin communication is done via the ETS2LA `EventBus`. This bus provides an easy to use interface for plugins to listen to, and emit events between each other. We're also passing in events from the game into this bus, so that the same API can be used for everything.

### How does the events system work?
```cpp
using ETS2LA.Backend.Events;

// Provider will call .Publish to fire an event to all subscribers.
// You have to include the type of data you're sending as a generic parameter.
Events.Current.Publish<float>("ExampleProvider.CurMicroseconds", System.DateTime.Now.Microsecond);

// And now a subscriber can listen to that event via a callback function.
Events.Current.Subscribe<float>("ExampleProvider.CurMicroseconds", OnCurMicroseconds);

void OnCurMicroseconds(float microseconds)
{
    Console.WriteLine($"Current microseconds: {microseconds}");
}
```
And that's pretty much it. Those two commands are everything you need to get access to all the game telemetry data as well as data from 3rd party plugins. I've compiled a list below of the most commonly used events, but keep in mind that at least ETS2LA's official events have a typed way to get their ID. (e.g. `ETS2LA.Telemetry.TelemetryConstants.EventID`)

- TODO