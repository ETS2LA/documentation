# SDKController

This module is a bit different from a normal module. Instead of using the run() file it just provides an object to interface with the SDK. We will explore how this works here!

## Usage

```python
# Remember to add the module to the description!
def init(self):
  self.controller = self.modules.SDKController.SCSController()
```

This will create an **SCSController** object into a local variable on the Plugin. You can then use the controller to send output to the game. Below is an example of how to use these controls.

```python
def run(self):
  self.controller.steering = 0.2 # Will steer 20% right.

  # Some controls are holds, these work as you expect.
  self.controller.horn = True # enable the button
  time.sleep(2)
  self.controller.horn = False # disable the button

  # But some work as actual buttons, these you have to cycle.
  self.controler.lblinker = True
  time.sleep(1/20)
  self.controler.lblinker = False
  # Now enabled

  self.controler.lblinker = True
  time.sleep(1/20)
  self.controler.lblinker = False
  # Now disabled
```

## Available Controls

| Variable Name | Description | Notes |
| --- | --- | --- |
| j_left | This has something to do with UI interaction. | This is an axis. |
| j_right | ^   | ^   |
| j_up | ^   | ^   |
| j_down | ^   | ^   |
| selectfcs | \-  |     |
| back | Go back to the last page. |     |
| skip | Skip the dialog. |     |
| scrol_up | Scroll up in the UI |     |
| scrol_down | Scroll down in the UI |     |
| mapzoom_in | Zoom the ingame map in |     |
| mapzoom_out | Zoom the ingame map out |     |
| trs_zoom_in | \-  |     |
| trs_zoom_out | \-  |     |
| joy_nav_prv | Previous tab in the minimap? |     |
| joy_nav_nxt | Next tab in the minimap? |     |
| joy_sec_prv | Previous tab in the truck minimap? |     |
| joy_sec_nxt | Next tab in the truck minimap? |     |
| scroll_j_x | Scroll X direction axis. |     |
| scroll_j_y | Scroll Y direction axis. |     |
| shortcut_1 | \-  |     |
| shortcut_2 | \-  |     |
| shortcut_3 | \-  |     |
| shortcut_4 | \-  |     |
| pause | Pause the game |     |
| screenshot | Take a screenshot |     |
| cam1 | Enter the specific camera. |     |
| cam2 | ^   |     |
| cam3 | ^   |     |
| cam4 | ^   |     |
| cam5 | ^   |     |
| cam6 | ^   |     |
| cam7 | ^   |     |
| cam8 | ^   |     |
| camcycle | Cycle the cameras |     |
| camreset | Reset the current camera |     |
| camrotate | Toggle camera rotation? | The default keybind is RMB |
| camzoomin | Zoom the current camera in | (this means change the FOV) |
| camzoonout | Zoom the current camera out | ^   |
| camzoom | Toggle camera zoom? | The default keybind is MMB |
| camfwd | Move the camera in that direction |     |
| camback | ^   |     |
| camleft | ^   |     |
| camright | ^   |     |
| camup | ^   |     |
| camdown | ^   |     |
| lookleft | Turn the camera left |     |
| lookright | Turn the camera right |     |
| camlr | Move the camera left / right | **BROKEN: Not set to axis** |
| camud | Move the camera up / down | **BROKEN: Not set to axis** |
| j_cam_lk_lr | Look left / right axis |     |
| j_cam_lk_ud | Look up / down axis |     |
| j_cam_mv_lr | Move left / right axis |     |
| j_cam_mv_ud | Move up / down axis |     |
| j_trzoom_in | Zoom something (tr?) |     |
| j_trzoom_out | ^   |     |
| j_mappan_x | Map pan X direction axis |     |
| j_mappan_y | Map pan Y direction axis |     |
| j_mapzom_in | Map zoom in axis | Only positive values |
| j_mapzom_out | Map zoom out axis | Only positive values |
| lookpos1 | Look forward |     |
| lookpos2 | Look up right |     |
| lookpos3 | Look up left |     |
| lookpos4 | Look right |     |
| lookpos5 | Look left |     |
| lookpos6 | Look up middle |     |
| lookpos7 | \-  | Only via SDK, no in game keybind. |
| lookpos8 | \-  | Only via SDK, no in game keybind. |
| lookpos9 | \-  | Only via SDK, no in game keybind. |
| looksteer | Toggle looking in the steering direction |     |
| lookblink | Toggle looking in the direction of the blinker |     |
| steering | Steering axis |     |
| aforward | Forward / accelerator axis | Only positive values |
| abackward | Backward / brake axis | Only positive values |
| clutch | Clutch axis |     |
| activate | Activate a green thing in the game world. |     |
| menu | Open the menu |     |
| engine | Start the engine |     |
| engineelect | Start the electrical systems |     |
| ignitionoff | Turn ignition off |     |
| ignitionon | Turn ignition on |     |
| ignitionstrt | Turn ignition to start |     |
| attach | Attach a trailer |     |
| frontsuspup | Raise the front suspension |     |
| frontsuspdwn | Lower the front suspension |     |
| suspreset | Reset the suspension |     |
| horn | \-  |     |
| airhorn | \-  |     |
| lighthorn | \-  |     |
| beacon | Turn on the beacon lights |     |
| motorbrake | Toggle motor(?) braking |     |
| engbraketog | Toggle engine braking |     |
| engbrakeup | Increase engine braking |     |
| engbrakedwn | Decrease engine braking |     |
| trailerbrake | Toggle the trailer brake |     |
| retarderup | Increase retarder |     |
| retarderdown | Decrease retarder |     |
| retarder0 | Set the retarder strength directly | Only via SDK, no in game keybind. |
| retarder1 | ^   | Only via SDK, no in game keybind. |
| retarder2 | ^   | Only via SDK, no in game keybind. |
| retarder3 | ^   | Only via SDK, no in game keybind. |
| retarder4 | ^   | Only via SDK, no in game keybind. |
| retarder5 | ^   | Only via SDK, no in game keybind. |
| liftaxle | Lift the axle |     |
| liftaxlet | Lift another axle? | Only via SDK, no in game keybind. |
| slideraxlefwd | Move a sliding axle forward | Only via SDK, no in game keybind. |
| slideaxlebwd | Move a sliding axle backwards | Only via SDK, no in game keybind. |
| slideaxleman | Manual sliding? | Only via SDK, no in game keybind. |
| diflock | Toggle the difflock |     |
| rwinopen | Open the right window |     |
| rwinclose | Close the right window |     |
| lwinopen | Open the left window |     |
| lwinclose | Close the left window |     |
| engbrakeauto | Set engine braking to automatic |     |
| retarderauto | Set retarder to automatic |     |
| embrake | Emergency brake | Only via SDK, no in game keybind. |
| laneassmode | Change the lane assist mode | Only via SDK, no in game keybind. |
| tranpwrmode | Change the transmission power mode | Only via SDK, no in game keybind. |
| parkingbrake | Toggle the parking brake |     |
| wipers | Change wiper option |     |
| wipersback | Change rear wiper option |     |
| wipers0 | Set wipers to this level | Only via SDK, no in game keybind. |
| wipers1 | ^   | Only via SDK, no in game keybind. |
| wipers2 | ^   | Only via SDK, no in game keybind. |
| wipers3 | ^   | Only via SDK, no in game keybind. |
| wipers4 | ^   | Only via SDK, no in game keybind. |
| cruiectrl | Toggle the cruise control |     |
| cruiectrlinc | Increase CC speed |     |
| cruiectrldec | Decrease CC speed |     |
| cruiectrlres | Reset the CC |     |
| accmode | Change the adaptive CC mode |     |
| laneassist | Toggle the lane assist on/off |     |
| light | Toggle lights |     |
| lightoff | Turn lights off |     |
| lightpark | Turn lights to park |     |
| lighton | Turn lights on |     |
| hblight | Turn on the high beams |     |
| lblinker | Turn on the left blinker | Toggle |
| lblinkerh | Turn on the left blinker | Hold |
| rblinker | Turn on the right blinker | Toggle |
| rblinkerh | Turn on the right blinker | Hold |
| flasher4way | Turn on the hazards |     |
| showmirrors | Toggle the UI mirrors |     |
| showhud | Toggle the HUD |     |
| navmap | Toggle the minimap |     |
| photo_mode | Toggle (or enter?) the photo mode |     |
| quicksave | \-  |     |
| quickload | \-  |     |
| radio | Toggle the radio |     |
| radionext | Next station |     |
| radioprev | Previous station |     |
| radioup | Volume up |     |
| radiodown | Volume down |     |
| display | \-  |     |
| quickpark | Trigger quickpark |     |
| dashmapzoom | Change the truck dashboard map zoom |     |
| tripreset | Reset the tripmeter |     |
| sb_activate | \-  | Default keybind capslock |
| sb_swap | \-  | Default keybind tab |
| infotainment | Turn on off the infotainment? | Only via SDK, no in game keybind. |
| photores | \-  |     |
| photomove | \-  |     |
| phototake | \-  |     |
| photofwd | \-  |     |
| photobwd | \-  |     |
| photoleft | \-  |     |
| photoright | \-  |     |
| photoup | \-  |     |
| photodown | \-  |     |
| photorolll | roll left |     |
| photorollr | roll right |     |
| photosman | \-  |     |
| photo_opts | \-  |     |
| photosnap | \-  |     |
| photo_hctrl | \-  |     |
| photonames | \-  |     |
| photozoomout | \-  |     |
| photozoomin | \-  |     |
| phot_z_j_out | Photomode Z axis out |     |
| phot_z_j_in | Photomode Z axis in |     |
| album_pgup | \-  |     |
| album_pgdn | \-  |     |
| album_itup | \-  |     |
| album_itdn | \-  |     |
| album_itlf | \-  |     |
| album_itrg | \-  |     |
| album_ithm | \-  |     |
| album_iten | \-  |     |
| album_itac | \-  |     |
| album_itop | \-  |     |
| album_itdl | \-  |     |
| camwalk_for | \-  |     |
| camwalk_back | \-  |     |
| camwalk_righ | \-  |     |
| camwalk_left | \-  |     |
| camwalk_run | \-  |     |
| camwalk_jump | \-  |     |
| camwalk_crou | \-  |     |
| camwalk_lr | \-  |     |
| camwalk_ud | \-  |     |
| gearup | Paddle shifter for gear up |     |
| geardown | Paddle shifter for gear down |     |
| gear0 | Neutral |     |
| geardrive | Drive (in semi automatics) |     |
| gearreverse | Reverse (in semi automatics) |     |
| gearuphint | \-  |     |
| geardownhint | \-  |     |
| transemi | Transmission to semi automatic |     |
| drive | Drive (in automatics) |     |
| reverse | Reverse (in automatics) |     |
| cmirrorsel | Select the center mirror |     |
| fmirrorsel | Select the front mirror |     |
| mirroryawl | Mirror yaw left |     |
| mirroryawr | Mirror yaw right |     |
| mirrorpitu | Mirror pitch up |     |
| mirrorpitl | Mirror pitch down(?) |     |
| mirrorreset | Reset mirror |     |
| quicksel1 | \-  | Keys 1 through 8 by default |
| quicksel2 | \-  | ^   |
| quicksel3 | \-  | ^   |
| quicksel4 | \-  | ^   |
| quicksel5 | \-  | ^   |
| quicksel6 | \-  | ^   |
| quicksel7 | \-  | ^   |
| quicksel8 | \-  | ^   |
| mpptt | \-  |     |
| replayhidec | \-  |     |
| gearsel1on | Special gear selector options | Used by 6 speed selectors for ex. |
| gearsel1off | ^   |     |
| gearsel1tgl | ^   |     |
| gearsel2on | ^   |     |
| gearsel2off | ^   |     |
| gearsel2tgl | ^   |     |
| gear1 | Select this gear directly |     |
| gear2 | ^   |     |
| gear3 | ^   |     |
| gear4 | ^   |     |
| gear5 | ^   |     |
| gear6 | ^   |     |
| gear7 | ^   |     |
| gear8 | ^   |     |
| gear9 | ^   |     |
| gear10 | ^   |     |
| gear11 | ^   |     |
| gear12 | ^   |     |
| gear13 | ^   |     |
| gear14 | ^   |     |
| gear15 | ^   |     |
| gear16 | ^   |     |
| adjuster | \-  |     |
| advpage0 | \-  |     |
| advpage1 | \-  |     |
| advpage2 | \-  |     |
| advpage3 | \-  |     |
| advpage4 | \-  |     |
| advpagen | \-  |     |
| advpagep | \-  |     |
| advmouse | \-  |     |
| advetamode | \-  |     |
| gar_man | \-  |     |
| advzoomin | \-  |     |
| advzoomout | \-  |     |
| assistact1 | \-  |     |
| assistact2 | \-  |     |
| assistact3 | \-  |     |
| assistact4 | \-  |     |
| assistact5 | \-  |     |
| adj_seats | Trigger seat adjustment |     |
| adj_mirrors | Trigger mirror adjustment |     |
| adj_lights | Trigger light adjustment |     |
| adj_uimirror | Trigger UI mirror adjustment |     |
| chat_act | Chat action(?) |     |
| quick_chat | Quick chat |     |
| cycl_zoom | Cycle zoom of something |     |
| name_tags | Toggle name tags |     |
| headreset | Reset head tracking |     |
| menustereo | \-  |     |

:::warning
Both ETS2 and ATS are constantly changing and some of these controls might not work anymore. If this happens then send **Tumppi066** a message on discord and we’ll look into it!
:::