---
title: "Working with the overlay"
sidebar_label: "7. Working with the overlay"
---

The overlay is the main way for plugins to display information to users. We don't natively support editing the main ETS2LA window for security / simplicity, so instead you should create an overlay window. This overlay also supports rendering objects in 3d in the game world for more immersive features.

### Creating an overlay window
ETS2LA has made this as simple as possible, but make sure your .csproj file has a reference to `ETS2LA.Overlay` and you should be good to go. Below is an example:
```csharp
using ETS2LA.Overlay;
using Hexa.NET.ImGui;

// The window definition tells ETS2LA how to render your window,
// you can have as many windows as you want.
WindowDefinition def = new WindowDefinition 
{
    Title = "My Overlay Window",
    // Check the WindowDefinition struct for more options, such as
    // ImGui window flags.
};

// You can then register your window with ETS2LA, and provide a callback function
// that will be called for each frame the overlay is rendering.
OverlayHandler.Current.RegisterWindow(def, RenderWindow);

// You can use any ImGui commands here, the WindowDefinition also has a `NoWindow` option
// if you want to do the entire process yourself.
void RenderWindow()
{
    ImGui.Text("Hello, world!");
}
```
Once you've registered your window, ETS2LA will immediately show it to users. ETS2LA also handles closing and opening of the window by the user. **If the user closed your window, RenderWindow() won't be called,** however you don't have to run `RegisterWindow()` again. If you want to close the window without a user's input (for example on plugin disable), then you can run `OverlayHandler.Current.UnregisterWindow(WindowDefinition)`.

### Rendering in the game world
This works much the same as rendering windows, however you will need to use ETS2LA's specific rendering functions as ImGui doesn't provide these natively.
```csharp
using ETS2LA.Overlay;
using ETS2LA.Overlay.AR;
using Hexa.NET.ImGui;

// This is going to be matched to the overlayrenderer API
// soon enough (RegisterRenderCallback has two parameters)
ARRenderCallback callback = new ARRenderCallback 
{
    Definition = new ARRendererDefinition
    {
        Name = "Example AR Renderer"
    },
    Render3D = Render3D
};

OverlayHandler.Current.AR.RegisterRenderCallback(callback);

// You can use AR.Draw3D* functions here.
// Do not use ImGui functions outside of AR.BeginWindow/EndWindow!
void Render3D()
{
    ARRenderer AR = OverlayHandler.Current.AR;

    // You can render 3D objects using AR.Draw3D* functions.
    // These require you to use ARCoordinate objects, which are automatically converted
    // into the coordinate system you select. If you want to input world space coordinates
    // directly, you can also use Vector3s.
    AR.Draw3DLine(new ARCoordinate(Vector3.Zero, ARCoordinateCenter.Truck), new ARCoordinate(new Vector3(0, 0, 1), ARCoordinateCenter.Truck), 0xFFFFFFFF);

    // You can also render ImGui windows inside of the game world, these will be rendered as flat billboards.
    AR.BeginWindow("Example Window", forceHeight: 60, forceWidth: 270, flags: ImGuiWindowFlags.NoDecoration | ImGuiWindowFlags.AlwaysAutoResize, bgOpacity: 0.2f);
    ImGui.Text($"Position: ({position.X:F0}, {position.Y:F0}, {position.Z:F0})");
    ImGui.Text($"Speed: {speed*3.6:F1} km/h");

    // This example code moves the window into a HUD position in front of the truck, and
    // rotates it along with the truck rotation. Note how there has to be conversions between
    // the game's coordinate system and what we use here in ETS2LA.
    CameraData camera = CameraProvider.Current.GetCurrentData();
    Quaternion invQuat = Quaternion.Conjugate(camera.truckRotation);
    Vector3 euler = invQuat.ToEuler();
    Quaternion filteredRot = Quaternion.CreateFromYawPitchRoll(-euler.Y + 2 * (float)Math.PI, euler.Z + (float)Math.PI, 0);

    ARCoordinate offset = ARCoordinate.InDirection(filteredRot, 13, ARCoordinateCenter.Truck);
    offset += new ARCoordinate(new Vector3(0, -1, 0), ARCoordinateCenter.Truck);
    AR.EndWindow(offset, camera.truckRotation, 2, invertY: true);
}
```
These AR renderers cannot be closed by the user, so if you want to stop rendering you will have to call `OverlayHandler.Current.AR.UnregisterRenderCallback(ARRenderCallback)` with the same callback you registered with.