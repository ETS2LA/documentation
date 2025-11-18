# Explanation

The AR plugin provides an overlay on top of the game. This overlay contains all the code required to convert 3D coordinates into the game world. The API for this plugin is made to be as easy to use as possible for 3rd party developers.  

## Limitations

- AR cannot shade objects behind others. We do not have a depth map from the game, and as these objects are rendered on top of the game, not in the game world, there is no way for us to shade them.
- Text rendering is performed on a pixel to pixel basis, not a subpixel basis. This means that depending on the screen resolution text will move in steps instead of a smooth antialiased way.  
    

## Usage

AR is extremely simple to use. The plugin will automatically read the elements from the `AR` tag. All elements have to be in a list sent to this tag. Below is an extremely simple example.

```python
from Plugins.AR.classes import Coordinate, Line

def run(self):
    # Draw a line from below the camera to 20m forwards.
    start = Coordinate(0, -2, 0, relative=True, relative_rotation=True)
    end = Coordinate(0, -2, 20, relative=True, relative_rotation=True)
    line = Line(start, end) 

    ... 
    
    self.globals.tags.AR = [line, ...] # has to be a list
```

## Classes

[Classes](./Classes)