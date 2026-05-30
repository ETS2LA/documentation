---
title: "Working with units"
sidebar_label: "9. Working with units"
---

ETS2LA provides a unified way to convert between different units of measurement, and we have a global setting for users to choose their preferred units. This is available through the `ApplicationState`. Any time you use any information from the game that has units (for example speed, fuel, weight, etc...), you should make sure to convert it to the user's preferred units before using it.

### How do I convert between units?
```csharp
using ETS2LA.Logging;
using ETS2LA.Telemetry;
using ETS2LA.State;

var speed = GameTelemetry.Current.GetCurrentData().truckFloat.speed; // This is in m/s (scientific units)
var preferredUnits = StateSettingsHandler.Current.GetSettings().DisplayUnits;
// You can also get the full name with GetUnitName, usually the abbreviation is more useful.
var preferredUnitsSuffix = UnitConversions.GetUnitAbbreviation(UnitType.Speed, preferredUnits);
var convertedSpeed = UnitConversions.Convert(UnitType.Speed, speed, preferredUnits);

Logger.Info($"Current speed: {convertedSpeed} {preferredUnitsSuffix}");
```
If you're missing some units that you need to convert, then please message Tumppi066 on Discord or, open an issue / make a PR on the GitHub repo. We want to support any units that people need to use!