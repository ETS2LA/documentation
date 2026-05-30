---
title: "Working with ETS2LA's state"
sidebar_label: "8. Working with ETS2LA's state"
---

If you want to create a plugin that does anything with the game data, or with steering and acceleration, then you'll want to use ETS2LA's unified `ApplicationState` to get rid of some of the boilerplate code that comes with processing user input.

### What does the ApplicationState include?
- General application state:
  - Currently used units
- Self driving related state:
  - Target speed,
  - Steering level (LKAS, Full FSD)
  - Should steer?
  - Acceleration level (AEB, ACC)
  - Should accelerate?
- Game state:
  - Is a game running?
  - The currently running game type (ATS, ETS2)
  - The currently running game version
  - The currently running game as a parsed `Installation` object, which includes game data to drive based off of.

The self driving related state is especially useful, as it gets changed based on ETS2LA's user input and assist features. So if you want to make an alternative ACC plugin you can just fetch the target speed and status from here, and it will work just as any other ACC plugin in ETS2LA.

### How do I access it?
```csharp
using ETS2LA.State;

ApplicationState.Current.DesiredSteeringLevel;
ApplicationState.Current.PauseSteeringAssist;
// etc...
```
You should check the `ApplicationState` class for a list of all available parameters, as this page might not get updated for every change.