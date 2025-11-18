# TruckSimAPI

This module will provide information from the in game API. This is the same API that most other applications use as well.

### Arguments

> **Fallback**: bool = False  
If enabled the module will return "not connected" instead of a virtual dictionary when no data is received from the game API.

### Return Data

TruckSimAPI will return a dictionary with all the data available from the api. In the following dictionary the table title is the parent key, and the values are child keys.

```python
# Update the API data
data = self.modules.TruckSimAPI.run()
# Example
value = data[parent_key][child_key]
speed = data["truckFloat"]["speed"]
```

:::tip

Use **CTRL+F** to search. There is a lot of data here!
:::

| **root** (no parent key) | **Description** |
| --- | --- |
| sdkActive | True if the SDK is active. |
| placeHolder | …   |
| pause | True if the game is paused. |
| placeHolder2 | …   |
| time | The current in-game time. |
| simulatedTime | Incrementing simulation time. |
| renderTime | The last frame's render time. |
| multiplayerTimeOffset | …   |

| scsValues | Description |
| --- | --- |
| telemetryPluginRevision | The revision of the telemetry plugin. |
| versionMajor | The major version of the game. |
| versionMinor | The minor version of the game. |
| game | The name of the game. `ETS2 / ATS / unknown` |
| telemetryVersionGameMajor | The major version of the telemetry plugin. |
| telemetryVersionGameMinor | The minor version of the telemetry plugin. |

| commonUI | Description |
| --- | --- |
| timeAbs | The absolute time in the game. |

| configUI | Description |
| --- | --- |
| gears | How many gears the truck has. |
| gearsReverse | How many reverse gears the truck has. |
| retarderStepCount | How many steps the retarder has. |
| truckWheelCount | How many wheels the truck has. |
| selectorCount | How many selectors the truck has. (no clue what this means btw) |
| timeAbsDelivered | The absolute time the delivery was made. (no clue what this means also) |
| maxTrailerCount | The maximum amount of trailers the truck can have. |
| unitCount | How many units of cargo the current job has. |
| plannedDistanceKm | The distance of the planned route in km. |

| truckUI | Description |
| --- | --- |
| shifterSlot | ?   |
| retarderBrake | ?   |
| lightsAuxFront | whether the front aux lights are on. |
| lightsAuxRoof | whether the roof aux lights are on. |
| truckWheelSubstance | Material of the wheels. |
| hshifterPosition | The position of the hshifter. |
| hshifterBitmask | No clue why this is here... |

| gameplayUI | Description |
| --- | --- |
| jobDeliveredDeliveryTime | The time the delivery was made. |
| jobStartingTime | The time the job started. |
| jobFinishedTime | The time the job finished. |

| commonInt | Description |
| --- | --- |
| restStop | ?   |

| truckInt | Description |
| --- | --- |
| gear | The current gear of the truck. |
| gearDashboard | The gear shown on the dashboard. |
| hshifterResulting | The resulting hshifter position. (I guess) |

| commonFloat | Description |
| --- | --- |
| scale | I would assume this is the scale of the game map, for ETS2 that's 1/19 and for ATS it's 1/20. |

| configFloat | Description |
| --- | --- |
| fuelCapacity | The fuel capacity of the truck. |
| fuelWarningFactor | The fuel warning factor, when the fuel is at this percentage the warning will show. |
| adblueCapacity | The adblue capacity of the truck. |
| adblueWarningFactor | The adblue warning factor, when the adblue is at this percentage the warning will show. |
| airPressureWarning | The air pressure warning factor, when the air pressure is at this percentage the warning will show. |
| airPressureEmergency | The air pressure emergency factor, when the air pressure is at this percentage the emergency warning will show. |
| oilPressureWarning | The oil pressure warning factor, when the oil pressure is at this percentage the warning will show. |
| waterTemperatureWarning | The water temperature warning factor, when the water temperature is at this percentage the warning will show. |
| batteryVoltageWarning | The battery voltage warning factor, when the battery voltage is at this percentage the warning will show. |
| engineRpmMax | The maximum RPM of the engine. |
| gearDifferential | The current (?) gear differential. |
| cargoMass | The mass of the cargo. |
| truckWheelRadius | The radius of the wheels. (array of len(16)) |
| gearRatiosForward | The forward gear ratios. (array of len(24)) |
| gearRatiosReverse | The reverse gear ratios. (array of len(8)) |
| unitMass | The mass of one unit. |

| truckFloat | Description |
| --- | --- |
| speed | The speed of the truck. In m/s.   For km/h multiply by 3.6.   For mph multiply by 2.236936. |
| engineRpm | The RPM of the engine. |
| userSteer | The steering input of the user. |
| userThrottle | The throttle input of the user. |
| userBrake | The brake input of the user. |
| userClutch | The clutch input of the user. |
| gameSteer | The steering input of the game. |
| gameThrottle | The throttle input of the game. |
| gameBrake | The brake input of the game. |
| gameClutch | The clutch input of the game. |
| cruiseControlSpeed | The speed of the cruise control. |
| airPressure | The air pressure of the truck. |
| brakeTemperature | The temperature of the brakes. |
| fuel | The amount of fuel. (%) |
| fuelAvgConsumption | The average fuel consumption of the truck. Note that this is broken like 50% of the time. |
| fuelRange | The range of the fuel in km. |
| adblue | The current amount of adblue. (%) |
| oilPressure | The current oil pressure |
| oilTemperature | The current oil temperature |
| waterTemperature | The current water temperature |
| batteryVoltage | The current battery voltage |
| lightsDasboard | ?   |
| wearEngine | The wear of the engine. |
| wearTransmission | The wear of the transmission. |
| wearCabin | The wear of the cabin. |
| wearChassis | The wear of the chassis. |
| wearWheels | The wear of the wheels. |
| truckOdometer | The odometer of the truck. |
| routeDistance | The distance left on the current route. |
| routeTime | The time left on the current route. |
| speedLimit | The current speed limit. In m/s. For km/h multiply by 3.6. For mph multiply by 2.236936. |
| truck_wheelSuspDeflection | The suspension deflection of the wheels. (array of len(16)) |
| truck_wheelVelocity | The velocity of the wheels. (array of len(16)) |
| truck_wheelSteering | The steering of the wheels. (array of len(16)) |
| truck_wheelRotation | The rotation of the wheels. (array of len(16)) |
| truck_wheelLift | The lift of the wheels. (array of len(16)) |
| truck_wheelLiftOffset | The lift offset of the wheels. (array of len(16)) |

| gameplayFloat | Description |
| --- | --- |
| jobDeliveredCargoDamage | The damage of the cargo. |
| jobDeliveredDistanceKm | The distance of the delivery in km.   For miles multiply by 0.621371. |
| refuelAmount | The last refuel amount. |

| jobFloat | Description |
| --- | --- |
| cargoDamage | The damage of the cargo for the current job. |

| configBool | Description |
| --- | --- |
| truckWheelSteerable | If the wheels are steerable (array of len(16)) |
| truckWheelSimulated | If the wheels are simulated (array of len(16)) |
| truckWheelPowered | If the wheels are powered (array of len(16)) |
| truckWheelLiftable | If the wheels are liftable (array of len(16)) |
| isCargoLoaded | If the cargo is loaded. |
| specialJob | If the job is special. |

| truckBool | Description |
| --- | --- |
| parkBrake | If the parking brake is on. |
| motorBrake | If the motor brake is on. |
| airPressureWarning | If the air pressure is below the warning level. |
| airPressureEmergency | If the air pressure is below the emergency level. |
| fuelWarning | If the fuel is below the warning level. |
| adblueWarning | If the adblue is below the warning level. |
| oilPressureWarning | If the oil pressure is below the warning level. |
| waterTemperatureWarning | If the water temperature is above the warning level. |
| batteryVoltageWarning | If the battery voltage is below the warning level. |
| electricEnabled | If the electric is enabled. |
| engineEnabled | If the engine is enabled. |
| wipers | If the wipers are on. |
| blinkerLeftActive | If the left blinker is active. |
| blinkerRightActive | If the right blinker is active. |
| blinkerLeftOn | If the left blinker is on (currently the light is enabled, this blinks with the light) |
| blinkerRightOn | If the right blinker is on (currently the light is enabled, this blinks with the light) |
| lightsParking | If the parking lights are on. |
| lightsBeamLow | If the low beam lights are on. |
| lightsBeamHigh | If the high beam lights are on. |
| lightsBeacon | If the beacon lights are on. |
| lightsBrake | If the brake lights are on. |
| lightsReverse | If the reverse lights are on. |
| lightsHazard | If the hazard lights are on. |
| cruiseControl | If the cruise control is on. |
| truck_wheelOnGround | If the wheels are on the ground. (array of len(16)) |
| shifterToggle | If the shifter is toggled. |
| differentialLock | If the differential lock is on. |
| liftAxle | If the axle is lifted. |
| liftAxleIndicator | If the lift axle indicator is on. |
| trailerLiftAxle | If the trailer axle is lifted. |
| trailerLiftAxleIndicator | If the trailer lift axle indicator is on. |

| gameplayBool | Description |
| --- | --- |
| jobDeliveredAutoparkUsed | If the autopark was used for the delivery. |
| jobDeliveredAutoloadUsed | If the autoload was used for the delivery. |

| configVector | Description |
| --- | --- |
| cabinPositionX | The X position of the cabin. |
| cabinPositionY | The Y position of the cabin. |
| cabinPositionZ | The Z position of the cabin. |
| headPositionX | The X position of the head. |
| headPositionY | The Y position of the head. |
| headPositionZ | The Z position of the head. |
| truckHookPositionX | The X position of the truck hook. |
| truckHookPositionY | The Y position of the truck hook. |
| truckHookPositionZ | The Z position of the truck hook. |
| truckWheelPositionX | The X position of the wheels. (array of len(16)) |
| truckWheelPositionY | The Y position of the wheels. (array of len(16)) |
| truckWheelPositionZ | The Z position of the wheels. (array of len(16)) |

| truckVector | Description |
| --- | --- |
| lv_accelerationX | The X linear acceleration of the truck. |
| lv_accelerationY | The Y linear acceleration of the truck. |
| lv_accelerationZ | The Z linear acceleration of the truck. |
| av_accelerationX | The X angular acceleration of the truck. |
| av_accelerationY | The Y angular acceleration of the truck. |
| av_accelerationZ | The Z angular acceleration of the truck. |
| accelerationX | The X acceleration of the truck. |
| accelerationY | The Y acceleration of the truck. |
| accelerationZ | The Z acceleration of the truck. |
| aa_accelerationX | ?   |
| aa_accelerationY | ?   |
| aa_accelerationZ | ?   |
| cabinAVX | The X angular velocity of the cabin. |
| cabinAVY | The Y angular velocity of the cabin. |
| cabinAVZ | The Z angular velocity of the cabin. |
| cabinAAX | ?   |
| cabinAAY | ?   |
| cabinAAZ | ?   |

| headPlacement | Description |
| --- | --- |
| cabinOffsetX | The X offset of the cabin. |
| cabinOffsetY | The Y offset of the cabin. |
| cabinOffsetZ | The Z offset of the cabin. |
| cabinOffsetrotationX | The X rotation offset of the cabin. |
| cabinOffsetrotationY | The Y rotation offset of the cabin. |
| cabinOffsetrotationZ | The Z rotation offset of the cabin. |
| headOffsetX | The X offset of the head. |
| headOffsetY | The Y offset of the head. |
| headOffsetZ | The Z offset of the head. |
| headOffsetrotationX | The X rotation offset of the head. |
| headOffsetrotationY | The Y rotation offset of the head. |
| headOffsetrotationZ | The Z rotation offset of the head. |

| truckPlacement | Description |
| --- | --- |
| coordinateX | The X coordinate of the truck. |
| coordinateY | The Y coordinate of the truck. |
| coordinateZ | The Z coordinate of the truck. |
| rotationX | The X rotation of the truck. |
| rotationY | The Y rotation of the truck. |
| rotationZ | The Z rotation of the truck. |

| configString | Description |
| --- | --- |
| truckBrandId | The brand ID of the truck. |
| truckBrand | The brand of the truck. |
| truckId | The ID of the truck. |
| truckName | The name of the truck. |
| cargoId | The ID of the cargo. |
| cargo | The name of the cargo. |
| cityDstId | The ID of the destination city. |
| cityDst | The name of the destination city. |
| compDstId | The ID of the destination company. |
| compDst | The name of the destination company. |
| citySrcId | The ID of the source city. |
| citySrc | The name of the source city. |
| compSrcId | The ID of the source company. |
| compSrc | The name of the source company. |
| shifterType | The type of the shifter. |
| truckLicensePlate | The license plate of the truck. |
| truckLicensePlateCountryId | The country ID of the license plate. |
| truckLicensePlateCountry | The country of the license plate. |
| jobMarket | The job market. |

| gameplayString | Description |
| --- | --- |
| fineOffence | The fine offence. |
| ferrySourceName | The name of the source ferry. |
| ferryTargetName | The name of the target ferry. |
| ferrySourceId | The ID of the source ferry. |
| ferryTargetId | The ID of the target ferry. |
| trainSourceName | The name of the source train. |
| trainTargetName | The name of the target train. |
| trainSourceId | The ID of the source train. |
| trainTargetId | The ID of the target train. |

| configLongLong | Description |
| --- | --- |
| jobIncome | The income of the current job. |

| gameplayLongLong | Description |
| --- | --- |
| jobCancelledPenalty | The penalty of the cancelled job. |
| jobDeliveredRevenue | The revenue of the delivered job. |
| fineAmount | The amount of the fine. |
| tollgatePayAmount | The amount paid at the tollgate. |
| ferryPayAmount | The amount paid at the ferry. |
| trainPayAmount | The amount paid at the train. |

| specialBool | Description |
| --- | --- |
| onJob | If the player is on a job. |
| jobFinished | If the job is finished. |
| jobDelivered | If the job is delivered. |
| jobCancelled | If the job is cancelled. |
| fined | If the player is fined. |
| tollgate | If the player is at a tollgate. |
| ferry | If the player is at a ferry. |
| train | If the player is at a train. |
| refuel | If the player is refueling. |
| refuelPayed | If the player has payed for the refuel. |