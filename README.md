# BattleBot-Control SERVO#
This software is a simple, low-cost control system for the cardboard BattleBot community project. The project must support all 
skill levels, from young students to advanced adult makers. Therefore, the chosen platform and technologies are common and 
well-documented: Arduino, HTML5 and javascript. The hope is to leverage common maker skills or build them in inexperienced participants.

*Note: This is the old reliable tank control version, updated to use continuous rotation servos, with Addicore parts and directions that match those used at the Comic-Con Museum during San Diego Maker Faire 2018.*

#### Platform specifications: ####

 1. Arduino core libraries for the [ESP8266](http://esp8266.github.io/Arduino/versions/2.3.0/doc/libraries.html#mdns-and-dns-sd-responder-esp8266mdns-library). 
 2. Control over WiFi from a mobile device or computer via a browser-based user interface.
 3. Cardboard robot body, ranging from a simple box, to a laser cut design from CAD. And using these parts from our local friendly supplier, <a href="http://www.addicore.com">Addicore</a>:
<table width="497">
<tbody>
<tr>
<td width="65" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Part #&quot;}">Part #</td>
<td width="237" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Component&quot;}">Component</td>
<td width="65" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Qty&quot;}">Qty</td>
<td width="65" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Price&quot;}">Price</td>
<td width="65" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Price&quot;}">Amount</td>
</tr>
<tr>
<td><a href="https://www.addicore.com/SearchResults.asp?Search=AD313">AD313</a></td>
<td>AA 4-Battery Case with Power Switch</td>
<td>1</td>
<td>$2.00</td>
<td>$2.00</td>
</tr>
<tr>
<td><a href="https://www.addicore.com/Boffintronics-RoboBoffin-Mini-p/ad495.htm">AD495</a></td>
<td>ESP8266 based Addicore Boffintronics-RoboBoffin-Mini. 
 If you buy the <a href="https://www.addicore.com/Cardboard-Sumo-Bot-AddiKit-p/ad494.htm">cardboard combat kit</a> from Addicore, the board will come pre-loaded and you get the cardboard pre-cut</td>
<td>1</td>
<td>$12.50</td>
<td>$12.50</td>
</tr>
<tr>
<td><a href="https://www.addicore.com/SearchResults.asp?Search=AD314">AD314</a></td>
<td>FEETECH (Fitec) FS90R Continuous Rotation Servo (9g)</td>
<td>2</td>
<td>$4.84</td>
<td>$9.68</td>
</tr>
<tr>
<td><a href="https://www.addicore.com/SearchResults.asp?Search=AD315">AD315</a></td>
<td>Wheel for FS90R Servo (60x8mm)</td>
<td>2</td>
<td>$2.35</td>
<td>$4.70</td>
</tr>
</tbody>
</table>
You will need 4 AA batteries preferably rechargeable. The code changes to support continuous rotation servos are available here:
<a href="https://github.com/JamesNewton/BattleBot-Control/tree/patch-2">https://github.com/JamesNewton/BattleBot-Control/tree/patch-2</a>

The goal is to keep the cost of a base "kit" to under 35USD.

 #### Reference CAD: ####
 To aid in ideation and your designs, reference CAD files are provided for standard Kit of Parts hardware and a handful of reference designs:
 
  * [Kit of Parts CAD](https://cad.onshape.com/documents/d5d1b32c4a18b4ebb4a5470a/w/1e2f7e3ea05ba14674303259/e/ee521e100952e2dbed4188e8) - High-fidelity models of the motors, MCU + motor shield and various battery options.
  * [Cardboard NewBot 2.0](https://cad.onshape.com/documents/af9a7cdc337296dac2031b55/w/f0c41006ebab68369c4ddb37/e/c21df5e57a729a578fc1df88) A revised, simpler NewBot designed for a workshop at the Bay Area Maker Faire. 
  * [Cardboard NewBot 1.0](https://cad.onshape.com/documents/f0340e1790b5a8dc21cf42b3/w/84b5d7791762dae47618e688/e/1b6152b64cf9e13c0b862c89) - A rectangular "box" robot made with tab and slot construction. Upon testing with actual kids (of many ages), this bot was discovered to be too hard to assemble.
  * ["(BOX) Factory of Sadness"](https://cad.onshape.com/documents/e8cde76fb8fa97701da61992/w/c29f61e2e364ccd29e25da63/e/e3f6378e05fc7aa48f5b6eb2) - A wedge-bot design with kill saw and 3D printed parts.
  * The SUMO bot shape is simple enough that the files were just drawn in the laser cutter software. At some point, we should probably re-create them in CAD. Let us know if you can help.
  
### Assembly ###
*All the needed parts*<BR>
<img src="pics/image1.jpg">

*Cardboard joined with hotglue*<BR>
<img src="pics/image2.jpg">

*Extra hotglue ready for servo*<BR>
<img src="pics/image3.jpg">

*Servo mounted*<BR>
<img src="pics/image4.jpg">

*Servos and board mounted*<BR>
<img src="pics/image5.jpg">

*Servos connected to D1 and D2. Brown on outside, yellow/orange inside*<BR>
<img src="pics/image6.jpg">
 
*Battery pack connected, Red to +, Black to -*<BR>
<img src="pics/image7.jpg">

## Basic Setup ##
This section describes the minimum steps needed to load this firmware onto your NodeMCU. The firmware should work out of the box
for a basic robot setup. Subsequent sections describe the development environment for customizing the firmware.

#### Installation steps: ####

 1. Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software). 
 2. Install the ESP8266 devtools add-on. Directions [here](http://www.instructables.com/id/Programming-the-ESP8266-12E-using-Arduino-software/?ALLSTEPS). In the Arduino IDE, go to File / Preferences, and under "Additional Boards Manager URLs:" add "http://arduino.esp8266.com/stable/package_esp8266com_index.json". Then under Tools / Boards / Boards Manager, and filter by ESP8266 and install the support files. OS X users must install serial port drivers. 
 3. Install the ESP8266FS file system upload add-on. Directions [here](http://esp8266.github.io/Arduino/versions/2.3.0/doc/filesystem.html).
 4. Install Arduino networking libraries. Currently, these are not available in the Library Manager and must be installed manually. Directions for installing Arduino libraries are available [here](https://www.arduino.cc/en/guide/libraries).
   * [ESPAsyncTCP](https://github.com/me-no-dev/ESPAsyncTCP)
   * [ESPAsyncWebServer](https://github.com/me-no-dev/ESPAsyncWebServer)
 5. The NodeMCU typically has an CP210x usb to serial chip, but to save money the manufacturer might have used a CH340 or CH341 chip. Windows will generally automatically find the driver, but if it doesn't: Identify the chip on your board by looking at the markings on the chip. The chip should can be just in front of the usb port. [CH340 and CH341 driver](https://blog.sengotta.net/signed-mac-os-driver-for-winchiphead-ch340-serial-bridge/) and [CP210x driver](https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx#mac).

#### Loading the firmware: ####

 1. Download this entire repository to your Arduino projects directory. Make sure the containing folder is called 'BattleBot-Control' (by default, GitHub will name the zip 'Battlebot-Control-\<branch name>').
 2. Open `BattleBot-Control.ino` in the Arduino IDE.
 3. Ensure the following settings are set in the "Tools" menu:
   * Board: "NodeMCU 1.0 (ESP-12E Module)"
   * CPU Frequency: "80 MHz"
   * Flash Size: "4M (3M SPIFFS)"
   * Upload Speed: "115200"
   * Choose correct serial port for module
 4. Run "Tools" > "ESP8266 Sketch Data Upload" to initialize the file system and load the HTML / javascript user interface
    files to the module. This process takes a while, since it is uploading a formatted 3MB file system image. Spend the time
    pondering what life was like for your great-grandfather on dial-up.
 5. Load the Sketch to the module, "Sketch" > "Upload".
 
#### Driving: ####
After the default firmware is loaded, the robot should be drivable. In the default configuration, the robot creates a WiFi access point (AP). If you connect to this network and enter the URL of the robot, a user interface will be served up in the browser, allowing you to drive.

 1. Connect to the WiFi network "BattleBot-xxxxxxxxxxxx". "xxxxxxxxxxxx" is a unique string for each robot. 
   * Use a phone or tablet to use the built-in touch interface.
   * Use a computer to use the mouse or a gamepad (coming soon).
 2. Navigate to the robot in a web browser.
   * On iOS, OS X and Linux, the robot can be found with mDNS at `http://battlebot.local/`.
   * On Android and Windows (without mDNS installed) use `http://192.168.4.1/` (in the default AP mode *only*). When connected to an external WiFi network, use an mDNS app like [ZeroConf Browser](https://play.google.com/store/apps/details?id=com.melloware.zeroconf) to find the IP address of the robot. TODO: add notes for connecting from Windows (involves installing mDNS / Bonjour for Windows).
   * You may need to explicitly type `http://` before the URL or IP to connect, as some browsers will assume `https://`, which is not supported.
 3. Enjoy.
 
## Development Setup ##
Connecting to the robot access point is inconvenient for development, since it generally precludes using the internet at the same time. For development, an alternative configuration is provided. In this setup, the robot will connect to an existing WiFi network. The development machine also connects to this network, making the robot and internet available at the same time.

To prevent hard-coding the network credentials in the source code, WiFi configuration is accomplished via a configuration file uploaded to the robot file system in the `data/` directory of this project.

data/wifi.config:
```
network_ssid:password
```
That is, the SSID of the network to connect to and the password, on one line, separated by a colon. This file should be created in the `data/` directory of this project. A `.gitignore` is present to prevent the file from being checked in to source control inadvertently.

The robot will attempt to connect to the configured network for 10 seconds. If the connection can't be established it will fall back to AP mode. See the *Status LED* section below. 

You can also force the robot to use AP mode by grounding pin D5 during startup (i.e. connect pins 'D' and 'G' of column 5 on the GPIO header strip and press RESET). This feature is useful if you inadvertently connect to a network, only to discover it has firewall rules preventing machine to machine communication.

To load the file on the robot, you can either reload the entire file system with the "ESP8266 Sketch Data Upload", or follow an alternative faster procedure:

 1. Connect to the robot in the default access point (AP) mode.
 2. Open a shell and navigate to base project directory, the one with this file in it.
 3. Run this command in the shell:
```
$ ./upload.sh wifi.config
```
This command will upload any file (relative to the root of the `data/` directory) to the robot file system.

When complete, reset the robot. The robot should now connect to the WiFi network specified in the file. To return to access point mode, simply delete the configuration file and reload the file system, or use the abreviated command (as above):
```
$ ./delete.sh wifi.config
```
This command will delete a file from the robot file system.

Note that the `upload.sh` and `delete.sh` can also be used to update the HTML resources on the robot during development. If `upload.sh` is run with no argument, it will upload all files in the `data/` directory. This is slow, but is still significantly faster than reloading the entire file system.

## Hardware Setup ##
The default firmware assumes a certain robot hardware / wiring configuration.

#### Wiring: ####

 * Motor channel A -> Right motor (as judged from *behind* the robot)
 * Motor channel B -> Left motor (as judged from *behind* the robot)
 * Motors should be wired so that a positive voltage on the A+/B+ terminal produces *forward* motion.

Get this wrong and the robot will not drive as expected with the default control interface.

#### Status LED: ####

The NodeMCU has two blue LEDs. One (the "front") LED is directly on ESP8266 board, near the antenna. The second (the "middle rear") LED is on the NodeMCU carrier board, closer to micro-USB connection. Due to the pin usage on the motor driver board, the connection to front LED is shared with the direction signal for the B motor channel. Therefore, this LED will be illuminated whenever the left motor is travelling in the reverse direction.

Luckily, the middle rear LED is connected to a dedicated line and can be used for general status. The default firmware utilizes different blink patterns on this LED to indicate various robot states. These states are:

 1. Solid on -> Robot is running various setup code, such as WiFi, mDNS and other hardware setup. In testing, these operations generally complete quickly, so this state isn't likely to be observed unless something goes wrong.
 2. 10Hz fast blink -> This state indicates the robot is trying to connect to a WiFi network (non-AP development mode with `wifi.config` loaded).
 3. Chirp blink (short on, long off) -> Robot is in an "idle" state, waiting for a client to connect.
 4. 1Hz medium blink -> Robot is in the "driving" state. Client is connected and the robot is actively receiving drive commands. 

Note, if the robot is in the driving state and the client becomes disconnected, the robot will stop and revert to the idle state after 2.5 seconds. This is a safety measure to prevent the robot from getting stuck on the last command it received and running away in the event of connection trouble.

#### Serial Monitor: ####
The robot emits various debugging messages over the USB serial connection. These can be observed from the Arduino IDE or in a dedicated serial terminal. The baud rate is 115200.

