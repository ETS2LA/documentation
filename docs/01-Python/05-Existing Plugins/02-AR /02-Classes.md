# Classes
:::info

These first classes are the **root classes** used by the elements. If you are looking for the actual elements then please scroll down a bit to the **_Main AR Elements_** header.
:::

### Point

Points are 2D coordinates. This means that any object initialized with a point will be rendered at that 2D coordinate on the screen. Points are mainly used for Text and UI elements.

> **x**: float

> **y**: float

> **anchor**: Coordinate \= None  
The point will be an offset to said anchor's screen position. This is used by the HUD plugin to anchor the entire HUD on a single 3D point for realistic movement on truck rotation.

### Coordinate

Coordinates are 3D coordinates. These are the main component for most AR elements. When the program is running these coordinates will convert themselves to 2D coordinates to render based on.

> **x**: float

> **y**: float

> **z**: float

> **relative**: bool \= False  
The point will be an offset to the current head position.

> **rotation_relative**: bool \= False  
The point will also take into account the current head position. In this configuration X+ is right, Y+ is up and Z+ is forwards. You can use this to anchor a coordinate to some place around the truck.

### Fade

Fade will determine how the distance fading works. It can be added to most element classes.

> **prox_fade_end**: float \= 10  
The point at where the proximity fade ends.

> **prox_fade_start**: float \= 30  
The point at where the proximity fade starts.

> **dist_fade_start**: float \= 150  
The point at where the distance fade starts.

> **dist_fade_end**: float \= 170  
The point at where the distance fade ends.

### Color

A color is just a class for RGBA color values, it can be used by most element classes.

> **r**: int

> **g**: int

> **b**: int

> **a**: int \= 255

## Main AR Elements

### Rectangle

Will draw a 2D rectangle from the start and end points.

> **start**: Point | Coordinate

> **end**: Point | Coordinate

> **color:** Color = Color(255, 255, 255, 255)

> **fill**: Color = Color(0, 0, 0, 0)

> **thickess**: int = 1

> **fade**: Fade = Fade()

> **custom_distance**: float \= None

### Line

Will draw a line between the start and end points.

> **start**: Point | Coordinate

> **end**: Point | Coordinate

> **color:** Color = Color(255, 255, 255, 255)

> **thickess**: int = 1

> **fade**: Fade = Fade()

> **custom_distance**: float \= None

### Polygon

Will draw a polygon using all the given points.

> **points**: List\[Point | Coordinate\]

> **color:** Color = Color(255, 255, 255, 255)

> **fill**: Color = Color(0, 0, 0, 0)

> **thickess**: int = 1

> **closed**: bool \= True

This will control whether the polygon is closed between the first and the last point.

> **fade**: Fade = Fade()

> **custom_distance**: float \= None

### Circle

Will draw a circle around the given point.

> **center**: Point | Coordinate

> **radius**: float = 100

> **color:** Color = Color(255, 255, 255, 255)

> **fill**: Color = Color(0, 0, 0, 0)

> **thickess**: int = 1

> **fade**: Fade = Fade()

> **custom_distance**: float \= None

### Text

Will draw some text at the given pont. Please note that the text is drawn to the right of the selected point. There is currently no way to know how wide the text element will be once drawn.

> **point**: Point | Coordinate

> **text**: string

> **color:** Color = Color(255, 255, 255, 255)

> **thickess**: int = 12

> **fade**: Fade = Fade()

> **custom_distance**: float \= None

<br/>

:::info
The **custom_distance** parameter in many of the element classes is used to manually control the sorting order. By default the distance will be calculated based on the average between all points, but you can also manually set the distance to force an element to be drawn over another one.
:::