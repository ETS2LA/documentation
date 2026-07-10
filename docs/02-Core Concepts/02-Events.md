---
title: "Event System"
sidebar_label: "Event System"
---

[`ETS2LA.Backend.Events`](https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist/blob/rewrite/ETS2LA.Backend/EventBus/Bus.cs#L3)

Almost all inter-plugin communication is done via the ETS2LA `EventBus`. This bus provides an interface for plugins to listen to, and emit events between each other, as well as the backend. We're also passing in events from the game into this bus, so that the same API can be used for everything.

### How does the events system work?
```csharp
using ETS2LA.Backend.Events;

// Subscriber can listen to that event via a callback function.
Events.Current.Subscribe<float>("ExampleProvider.CurMicroseconds", OnCurMicroseconds);

// Provider will call .Publish to fire an event to all subscribers.
Events.Current.Publish<float>("ExampleProvider.CurMicroseconds", System.DateTime.Now.Microsecond);

void OnCurMicroseconds(float microseconds)
{
    Console.WriteLine($"Current microseconds: {microseconds}");
}
```
And that's pretty much it. Those two commands are everything you need to get access to all the game telemetry data as well as data from 3rd party plugins. I've compiled a list below of the most commonly used events, but keep in mind that at least ETS2LA's official events have a typed way to get their ID as shown below.

- **Telemetry Events** : (`ETS2LA.Telemetry.`) `GameTelemetry.Current.EventString`
  - Publishes: `GameTelemetryData`, check it's page for more information.
- **Backend Plugin State Changes** : (`ETS2LA.Backend.`) `Enabled/Disabled`
  - Publishes: `string` that contains the plugin's name
  - Alternatively `.Enabled/Disabled.PluginName` for events specific to a single plugin.
- **Game SDK Updates** : (`ETS2LA.SDK.`)
  - Camera Data - Publishes: `CameraData` at `.Camera.Data`.
  - Navigation Data - Publishes: `NavigationData` at `.Navigation.Data`.
  - Parked Vehicles - Publishes: `ParkedVehicleData` at `.ParkedVehicles.Data`.
  - Semaphores - Publishes: `SemaphoreData` at `.Semaphores.Data`.
  - Traffic Data - Publishes: `TrafficData` at `.Traffic.Data`.
- **Game Telemetry Updates** : (`ETS2LA.Telemetry.`) `.Data`
  - Publishes: `GameTelemetryData`
- **UI Page Changes** : (`ETS2LA.UI.`) `.SwitchedPage`
  - Publishes: `string` that contains the new page's name.
  - Alternatively `.SwitchedPage.PageName` for events specific to a single page.
  - Also `.SwitchedPage.Settings.PageName` for events specific to a single settings page.

:::warning
Ensure that both plugins have access to the same class definitions that are used for events. see the previous page for an example of the problems that you could encounter otherwise!
:::

:::danger
When calling `Events.Publish`, **all subscribers are handled synchronously**. Ensure your subscription functions are simple, as you could be causing slowdowns in other parts of the program otherwise!
:::