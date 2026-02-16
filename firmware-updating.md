# Updating the Firmware

::: info For End Users
This page is for eSpa users who want to update their device to the latest firmware. **If you're a developer wanting to build firmware from source or customize the code, see the [Firmware Building](/firmware-building) guide instead.**
:::

Keeping your eSpa firmware up to date ensures you have the latest features, bug fixes, and compatibility improvements. There are several ways to update your eSpa firmware, depending on whether your device is already connected to your network or needs to be connected via USB.

## Over-The-Air (OTA) Updates

The easiest way to update your eSpa is using Over-The-Air (OTA) updates. This method doesn't require any cables - the update happens wirelessly over your network.

### Automatic Updates

::: tip
Coming soon....maybe
:::

eSpa can be configured to automatically check for and install updates. To enable this:

1. Connect to your eSpa's web interface by browsing to its IP address
2. Navigate to the Settings page
3. Look for the "Auto Update" or "OTA Update" section
4. Enable automatic updates
5. Save your settings

With automatic updates enabled, your eSpa will periodically check for new firmware releases and install them automatically during off-peak hours.

### Manual OTA Updates

If you prefer to manually apply an update (instead of waiting for automatic OTA), use the device's built-in web interface:

1. **Download the correct firmware files** from the latest release  
   Visit: https://github.com/wayne-love/ESPySpa/releases  
   - For **eSpa Mini** or **eSpa Max v1.x** PCBs → download:  
     `firmware_espa-v1_ota.bin` (application firmware)  
     `spiffs_espa-v1.bin`     (file system / SPIFFS)  
   - For **eSpa Mini** or **eSpa Max v2.x** PCBs → download:  
     `firmware_espa-v2_ota.bin` (application firmware)  
     `spiffs_espa-v2.bin`       (file system / SPIFFS)

      (Tip: Check the eSpa model on the status page of the eSpa, if this is not shown then eSpa v1 use a esp32-c6 chip, eSpa v2 use a esp32-c6 chip)
   
2. **Update firmware on eSpa**  
   In a browser go to the device's IP address, for example:  
   `http://192.168.1.100`
   - Go to **Config** → **Firmware Updater**  
   - In the **Application Update File** : choose the file starting with `firmware_` (e.g. `firmware_espa-v2_ota.bin`)  
   - In the **File System Update File** : choose the file starting with `spiffs_` (e.g. `spiffs_espa-v2.bin`)

   Click **Install**.

3. **Wait for the process to finish**  
   - The update usually takes **1–3 minutes**.  
   - Do **not** close the browser tab or refresh the page during the upload/install.  
   - The device will automatically restart when complete.

::: tip
During the update your eSpa will be temporarily unavailable. It should reconnect to the network automatically after restarting (typically within 2–3 minutes total).
:::

::: tip
After the restart, refresh the web page and check the firmware version (usually shown on the status or main page) to confirm the update was successful.
If there are errors shown, try opening the web page in a private/incognito browser tab to avoid cache problems.
:::

::: warning
**Never power off the device during an OTA update!**  
Interrupting the process (power loss, unplugging, etc.) can corrupt the firmware. If this happens, you will need to re-flash via USB.
:::

::: warning
Always use the files that match your hardware version (v1.x or v2.x). If you are unsure which version you have, please see the [troubleshooting guide](https://espa.diy/troubleshooting.html).
:::

## USB Flashing (Web Tool)

If OTA updates aren't working, or if you need to recover from a failed update, you can flash the firmware directly via USB using our web-based flash tool. This method works great for initial setup, recovery, or when you want to ensure you have the latest version.

### Requirements

- A modern web browser (Chrome, Edge, or Opera - these support Web Serial API)
- A USB-C cable that supports data transfer (not just charging)
- Your eSpa hardware

### Steps

1. Disconnect your eSpa from the spa pool controller (if connected)
2. Connect your eSpa to your computer using a USB-C cable
3. Visit **[https://flash.espa.diy](https://flash.espa.diy)** in Chrome, Edge, or Opera browser
4. Select your device type from the dropdown menu:
   - **eSpa v1**: For eSpa Mini and eSpa Max v1.x PCBs
   - **eSpa v2**: For eSpa Mini and eSpa Max v2.x PCBs
   - **Custom**: For DIY builds or custom hardware
5. Browse the available firmware releases and click the **"Flash"** button next to the version you want (typically the latest release marked "LATEST")
6. When prompted, click **"Connect"** and select your eSpa device from the serial port list (usually appears as "USB Serial" or similar)
7. Follow the on-screen prompts to complete the flashing process
8. Wait for the process to complete - this usually takes 1-2 minutes
9. Once complete, disconnect the USB cable and reconnect your eSpa to the spa pool controller

::: tip
The web flash tool always provides the latest firmware releases directly from GitHub, so this is a great way to ensure you're fully up to date.
:::

::: warning
Keep your eSpa connected and don't close the browser tab during the flashing process. Interrupting the process may require you to start over.
:::

### Troubleshooting USB Flashing

If you encounter issues while flashing via USB:

- **Device not detected**: Try a different USB cable or port. Install CH340 or CP2102 drivers if needed.
- **Connection fails**: Hold the BOOT button on your device while clicking "Connect"
- **Process times out**: Try a different browser or restart your computer
- **For detailed troubleshooting**: See the [Flashing Issues](/firmware-building#troubleshooting-flashing-issues) guide

## Building from Source (Advanced)

If you need to build custom firmware or test pre-release development versions, see the [Firmware Building](/firmware-building) guide for instructions on setting up Platform.io and building from source.

## Checking Your Current Version

To check which firmware version you're currently running:

1. Browse to your eSpa's web interface
2. Look at the bottom of the page or in the System/About section
3. The version number will be displayed (e.g., "v2.3.1")

You can also check the version via serial monitor:
1. Connect via USB and open a serial connection
2. Look for the version information in the boot messages
3. Or type `v` and press Enter to see version and verbose logging

## Troubleshooting Update Issues

### OTA Update Fails

If OTA updates aren't working:

1. **Check network connectivity**: Make sure your eSpa is connected to WiFi (check status LEDs)
2. **Check internet access**: Your eSpa needs internet access to download updates
3. **Verify time settings**: Incorrect time/date can cause SSL certificate validation to fail
4. **Try manual update**: Use the web interface to manually trigger an update
5. **Fall back to USB**: If OTA continues to fail, use the USB flash method

### Device Won't Boot After Update

If your eSpa won't start properly after an update:

1. **Check status LEDs**: Refer to the [troubleshooting guide](/troubleshooting) to understand what the LEDs are indicating
2. **Try power cycle**: Disconnect power for 30 seconds, then reconnect
3. **Re-flash via USB**: Connect via USB and use the [web flash tool](https://flash.espa.diy) to re-flash the firmware
4. **Erase flash**: If problems persist, you may need to erase the flash completely:
   ```bash
   pio run --target erase
   pio run -e esp32dev --target upload
   ```

### Lost Settings After Update

Most updates preserve your settings (WiFi, MQTT, etc.), but occasionally a major update may require reconfiguration:

1. If your eSpa enters access point mode after an update, you'll need to reconfigure WiFi
2. Follow the [Getting Started](/getting-started) guide to reconnect to your network
3. Your MQTT settings should be preserved, but double-check them in the web interface

## Release Notes

To see what's new in each firmware version, check the [releases page](https://github.com/wayne-love/ESPySpa/releases) on GitHub. Each release includes detailed notes about new features, bug fixes, and any breaking changes.

## Beta Testing

Interested in testing new features before they're officially released? Join the [eSpa Discord](https://discord.gg/faK8Ag4wHn) and ask about beta testing in the #development channel. Beta testers get early access to new features and help us ensure quality releases.
