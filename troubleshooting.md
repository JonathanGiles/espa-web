# Troubleshooting

If you are having trouble with your eSpa, there are a few steps you can take to make troubleshooting easier. This guide will help you identify common issues and provide solutions to help you get your eSpa up and running. Once you've worked through the guidance on this page, if you're still having trouble, please visit the [#troubleshooting](https://discord.gg/ntCR9hpW9x) channel on Discord for further assistance.

## Run the Latest Version

The first thing you need to do whenever you run into a problem is ensure you are running the latest version of the software. The eSpa software is updated regularly to fix bugs and add new features, and will automatically update on its own, if configured to do so. To update your eSpa, follow the instructions in the [Updating the Software](/firmware-updating) guide.

## Firmware Flashing Issues

If you're having trouble flashing firmware to your eSpa device (either initially or during updates), see the comprehensive [Troubleshooting Flashing Issues](/firmware-building#troubleshooting-flashing-issues) section in the Firmware Building guide. This covers common issues such as:

- Device not recognized by computer
- Failed connections and timeout errors
- Build and compilation errors
- Permission denied errors (Linux/Mac)
- "Timed out waiting for packet header" errors
- Out of memory issues
- Antivirus/firewall blocking
- Multiple devices connected

## Status Lights

### DIY Hardware

On [DIY hardware](/hardware-custom-build), it is recommended that a single LED be included to indicate the status of the eSpa. With a single LED, there are different blink intervals used to indicate various error states. The following table shows the meaning of the different blink intervals:

| Blink Interval       | Description                                                          |
|----------------------|----------------------------------------------------------------------|
| 100ms                | Failed to connect to Wifi - check settings are correct.              |
| 500ms                | Failed to connect to MQTT server - check settings are correct.       |
| 1000ms               | Failed to connect to Spa pool - ensure cables are connected properly.|
| Solid On (no blink)  | eSpa Wifi access point started and waiting for you to connect to it. |

### eSpa Mini and eSpa Max PCBs

[![Knight Rider Animation](/images/knight-rider.gif)](/images/knight-rider.gif)

On the [eSpa Mini and eSpa Max PCBs](/hardware-pcb), there are four LEDs that are used for status indication. The LEDs are labelled 1, 2, 3, and 4. When everything is working fine, the four LEDs will light up in an animation going backwards and forwards. When one or more of the lights is lit up, it indicates an error condition, and you can refer to the table below to identify the issue:

| LED 1            | LED 2            | LED 3            | LED 4            | Description                                                          |
|:----------------:|:----------------:|:----------------:|:----------------:|----------------------------------------------------------------------|
| :white_circle:   | :white_circle:   | :white_circle:   | :white_circle:   | *(Not used)*                                                         |
| :white_circle:   | :white_circle:   | :white_circle:   | :red_circle:     | Failed to connect to Wifi - check settings are correct.              |
| :white_circle:   | :white_circle:   | :red_circle:     | :white_circle:   | Failed to connect to Spa pool - ensure cables are connected properly.|
| :white_circle:   | :white_circle:   | :red_circle:     | :red_circle:     | *(Not used)*                                                         |
| :white_circle:   | :red_circle:     | :white_circle:   | :white_circle:   | Failed to connect to MQTT server - check settings are correct.       |
| :white_circle:   | :red_circle:     | :white_circle:   | :red_circle:     | *(Not used)*                                                         |
| :white_circle:   | :red_circle:     | :red_circle:     | :white_circle:   | *(Not used)*                                                         |
| :white_circle:   | :red_circle:     | :red_circle:     | :red_circle:     | *(Not used)*                                                         |
| :red_circle:     | :white_circle:   | :white_circle:   | :white_circle:   | *(Not used)*                                                         |
| :red_circle:     | :white_circle:   | :white_circle:   | :red_circle:     | *(Not used)*                                                         |
| :red_circle:     | :white_circle:   | :red_circle:     | :white_circle:   | *(Not used)*                                                         |
| :red_circle:     | :white_circle:   | :red_circle:     | :red_circle:     | *(Not used)*                                                         |
| :red_circle:     | :red_circle:     | :white_circle:   | :white_circle:   | *(Not used)*                                                         |
| :red_circle:     | :red_circle:     | :white_circle:   | :red_circle:     | *(Not used)*                                                         |
| :red_circle:     | :red_circle:     | :red_circle:     | :white_circle:   | *(Not used)*                                                         |
| :red_circle:     | :red_circle:     | :red_circle:     | :red_circle:     | eSpa Wifi access point started and waiting for you to connect to it. |

## Web Interface

If you have managed to power up your eSpa and configure it to connect to your WiFi, but you're not getting any data in MQTT (or your home automation system), your spa pool controller might be outputting data in a format that we have not yet seen, which means the eSpa team will need to get the information from you to add support. This happens occasionally, as spa pool controllers have different hardware and firmware.

To check this, you can use the web interface of your eSpa, and click on the 'Spa Response' button to get a text dump from your spa pool. With this information, please visit the [#troubleshooting](https://discord.gg/ntCR9hpW9x) channel on Discord and provide the information to the eSpa team.

## Home Assistant and MQTT

If nothing appears in Home Assistant, first check the status LEDs and web interface to ensure eSpa is connected properly.

### MQTT Explorer

[MQTT Explorer](http://mqtt-explorer.com/) is an invaluable tool for debugging MQTT issues. It lets you see all messages being published and helps identify connection problems.

1. Download and install [MQTT Explorer](http://mqtt-explorer.com/)
2. Connect to your MQTT broker using the same credentials as your eSpa
3. Look for topics published by your eSpa (typically under `espa/` or similar)
4. If you don't see any topics, your eSpa may not be connecting to MQTT correctly
5. Check the MQTT broker logs to see if the eSpa is attempting to connect

### Common MQTT Issues

**No Topics Appearing**: 
- Verify MQTT credentials in eSpa's web interface
- Check that your MQTT broker is running and accessible
- Ensure firewall isn't blocking MQTT port (typically 1883)
- Check eSpa status LEDs - LED 2 indicates MQTT connection issues

**Authentication Failures**:
- Double-check username and password in eSpa settings
- Verify the MQTT user has publish/subscribe permissions
- Check MQTT broker logs for authentication errors

**Home Assistant Not Discovering eSpa**:
- Ensure MQTT integration is installed and configured in Home Assistant
- Check that Home Assistant is connecting to the same MQTT broker
- Look for discovery messages under `homeassistant/` topic in MQTT Explorer
- Try restarting eSpa to trigger discovery messages

## Common Setup Issues

### Can't Find eSpa WiFi Access Point

If you don't see the `eSpa-wifi-AP` network:

1. **Check power**: Ensure eSpa is receiving power from the spa controller
2. **Check status LEDs**: All LEDs solid on (PCB) or single LED solid on (DIY) indicates AP mode
3. **Wait a moment**: eSpa takes 10-20 seconds to boot and start AP mode
4. **Already configured**: If eSpa was previously configured, it won't start in AP mode unless you reset it (see below)
5. **Check frequency**: Make sure your device can see 2.4GHz networks (eSpa doesn't support 5GHz)

### Resetting to Access Point Mode

To force eSpa back into access point mode (e.g., to change WiFi settings):

**Method 1: Web Interface**
1. Browse to your eSpa's IP address
2. Navigate to Settings
3. Click "Reset WiFi Settings" or "Start AP Mode"
4. eSpa will restart in AP mode

**Method 2: Serial Console**
1. Connect via USB and open serial monitor
2. Type `r` and press Enter to reset WiFi settings
3. eSpa will restart in AP mode

### eSpa Keeps Disconnecting from WiFi

If eSpa frequently loses WiFi connection:

1. **Signal strength**: Move eSpa closer to WiFi router or use a WiFi extender
2. **Interference**: Spa equipment can cause interference - try changing WiFi channel
3. **Router issues**: Some routers have aggressive power-saving that disconnects idle devices
4. **IP conflicts**: Assign a static IP to eSpa in your router's DHCP settings
5. **Power issues**: Ensure stable power from spa controller

### Can't Access Web Interface

If you can't reach the eSpa web interface:

1. **Find IP address**: Check your router's DHCP client list
2. **Check same network**: Ensure your computer/phone is on the same WiFi network
3. **Firewall**: Temporarily disable firewall to test
4. **Use mDNS**: Try `http://espa.local` (may work on some networks)
5. **Check status LEDs**: Ensure eSpa is connected (animated pattern on PCB)

## Spa Pool Connection Issues

### No Data from Spa Pool

If eSpa connects to WiFi and MQTT but you're not getting spa data:

1. **Check cable**: Ensure RJ-45 cable is fully seated in both eSpa and spa controller
2. **Verify EXP1 port**: Make sure you're connected to the correct port on spa controller
3. **Check web interface**: Click "Spa Response" button to see raw data from controller
4. **Status LEDs**: LED 3 on indicates spa connection problems
5. **Try different cable**: Some cables are wired for ethernet, not serial communication

### Spa Commands Don't Work

If you can see spa status but can't control it:

1. **Read-only mode**: Some spa controllers have the EXP1 port in read-only mode by default
2. **Permissions**: Check if spa controller requires enabling remote control
3. **Timing**: Commands may take 10-30 seconds to take effect
4. **Status refresh**: Refresh the web interface or check MQTT messages to verify command was received

### Unsupported Spa Controller

If you're getting garbled or no data from your spa:

1. Click "Spa Response" in web interface to get raw data
2. Take a photo or screenshot
3. Join [Discord](https://discord.gg/faK8Ag4wHn) and post in #troubleshooting
4. Include your spa controller brand and model
5. The eSpa team may need to add support for your specific controller

## Collecting Logs

If you have a problem, we are likely going to want to see the debug logs. There are two ways to get the logs:

### 1. Telnet

Telnet allows you to connect to your eSpa over the network to view logs without needing a USB cable.

1. Find your eSpa's IP address (check your router or the web interface)
2. Choose your favourite telnet client:
   - **Windows**: PuTTY, Windows Terminal, or built-in telnet client
   - **Mac/Linux**: Use the built-in `telnet` command in Terminal
3. Connect to the eSpa IP address on port 23 (default telnet port):
   ```bash
   telnet 192.168.1.100
   ```
4. Once connected, you'll see log output
5. Type `v` and press Enter to enable verbose logging for more detailed output
6. Type `h` and press Enter to see all available commands
7. Generate the problem and copy the logs
8. Save logs to a file or paste into Discord for help

::: tip
On Windows, you may need to enable the Telnet Client feature in "Turn Windows features on or off" before you can use telnet.
:::

### 2. USB Serial Connection

Connecting via USB provides the most reliable way to see logs, especially during boot or if network connectivity is problematic.

1. Connect the eSpa to your computer using a USB-C cable
2. Use your favourite tool to connect to the eSpa's serial interface:
   - **VSCode**: Built-in serial monitor or Platform.io extension
   - **Arduino IDE**: Tools > Serial Monitor
   - **PuTTY**: Select "Serial" connection type
   - **Screen (Mac/Linux)**: `screen /dev/tty.usbserial-* 115200`
   - **Platform.io CLI**: `pio device monitor`
3. Set baud rate to **115200** (important!)
4. You should see log output immediately
5. Type `v` and press Enter to enable verbose logging
6. Type `h` and press Enter to see all available commands
7. Generate the problem and copy the logs

### Finding the Serial Port

**Windows**:
- Check Device Manager under "Ports (COM & LPT)"
- Look for "USB-SERIAL CH340" or "CP210x" or similar
- Note the COM port number (e.g., COM3)

**Mac**:
```bash
ls /dev/tty.usb*
# or
ls /dev/cu.usb*
```

**Linux**:
```bash
ls /dev/ttyUSB*
# or
dmesg | grep tty
```

### What to Include When Asking for Help

When posting logs to Discord for troubleshooting:

1. **eSpa hardware**: Specify if you're using DIY, eSpa Mini, or eSpa Max
2. **Firmware version**: Check web interface or boot logs
3. **Spa controller**: Brand and model of your spa pool controller
4. **Problem description**: What's not working and when it started
5. **Status LEDs**: Current LED pattern (see chart above)
6. **Logs**: Copy relevant log output, especially:
   - Boot sequence
   - Error messages
   - Connection attempts
   - Verbose logs (`v` command) showing the specific problem
7. **Spa Response**: If spa pool related, include output from "Spa Response" button in web interface

::: tip
Before posting, try searching Discord for similar issues - your problem may already have a solution!
:::

## Advanced Debugging

### Serial Commands

When connected via serial (USB or Telnet), you can use these commands:

- `v` - Enable verbose logging
- `h` - Show help and list available commands
- `r` - Reset WiFi settings and restart in AP mode
- `i` - Show system information
- `s` - Show current spa status
- `w` - Show WiFi status

### Checking Memory and Performance

If eSpa seems slow or unstable:

1. Connect via serial or telnet
2. Type `i` to see system information including:
   - Free memory
   - Uptime
   - WiFi signal strength
   - Firmware version
3. Low free memory (under 10KB) may indicate a problem
4. Check for messages about heap fragmentation

### Factory Reset

If all else fails, you can perform a complete factory reset:

1. Connect via serial (USB)
2. Use Platform.io to erase flash completely:
   ```bash
   pio run --target erase
   ```
3. Re-flash the firmware using [web flash tool](https://flash.espa.diy) or Platform.io
4. Reconfigure WiFi and MQTT settings

::: warning
Factory reset will erase all settings including WiFi, MQTT, and any customizations. You'll need to reconfigure everything from scratch.
:::

## Still Need Help?

If you've tried everything above and still have issues:

1. Join the [eSpa Discord](https://discord.gg/faK8Ag4wHn)
2. Visit the [#troubleshooting channel](https://discord.gg/ntCR9hpW9x)
3. Provide all the information listed in "What to Include When Asking for Help" above
4. Be patient - most community members are in different timezones
5. Check back regularly for responses

The eSpa community is friendly and helpful - don't hesitate to ask for assistance!
