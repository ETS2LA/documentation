# Camera

This module will output the current camera characteristics that our plugin extracts from the game. You can find the plugin code on [gitlab](https://gitlab.com/ETS2LA/ets2la_plugin).  

## Return Data

The camera module will return a **Camera** class. The camera class has the following attributes.

> **fov**: float  
The current **horizontal** fov of the camera.

> **position**: Position  
A class containing the current positions of the camera. Has the XYZ parameters with Y being height. **Please note that this position is the current position inside the current sector.** This will be expanded upon later.

> **cx**: float

> **cy**: float

> **rotation**: Quaternion  
Quaternion is a class containing the WXYZ parameters. It has a helper function **euler()** to convert the quaternion to normal **pitch, yaw, roll** values.

## Converting the position

You can convert the sector position to world space positions with the following code.

```python
camera = self.modules.Camera.run()
# Convert from sector position to worldspace
x = camera.position.x + camera.cx * 512
y = camera.position.y
z = camera.position.z + camera.cz * 512
```