# Firmware

The eSpa firmware is available for download from the [eSpa GitHub repository](https://github.com/wayne-love/ESPySpa). It is a [Platform.io project](https://platformio.org/), which makes it really easy to build and upload to your [hardware](/hardware). This page covers building, flashing, and configuring the firmware.

::: warning
This project will not work on all spa pools. Refer to the [compatibility](/compatibility) page to understand if your spa pool is compatible with this project.
:::

## Features

The eSpa firmware is designed to be easy to use, and to provide a lot of features to integrate your spa pool into your home automation. Some of the features include:

- **Temperature control**: The firmware can control the spa pool temperature, and can turn the heater on and off to maintain the temperature setpoint.
- **MQTT support**: The firmware can publish status information to an MQTT server, allowing you to integrate your spa pool into your home automation system.
- **Web interface**: The firmware provides a web interface that allows you to configure the spa pool settings, such as the temperature setpoint, and many other settings.
- **Easy configuration**: The firmware starts in access point mode, allowing you to connect to the ESP32 and configure it to connect to your home network.
- **OTA updates**: The firmware supports over-the-air updates, allowing you to update the firmware without needing to connect the ESP32 to your computer.
- **Debugging**: The firmware provides a lot of debug information, allowing you to see what the ESP32 is doing, and to diagnose any issues.
- **Customizable**: The firmware is open source, and is designed to be easy to modify and extend (and contribute back to the project!).
- **And more!**: The firmware is under active development, and new features are being added all the time.

## Building and flashing the firmware

Follow these steps to build the firmware:

1. [Download and install Platform.io](https://platformio.org/install).
2. [Clone the eSpa repository](https://github.com/wayne-love/ESPySpa) to your computer.
3. Open the project in Platform.io.
4. Determine your build environment:
   1. In platform.io, look at the `platformio.ini` file. There are different environments available for different hardware. There is `esp32dev` for the ESP32 development board, and `spa-control-pcb` for the custom eSpa control board. You can learn more about hardware options in the [hardware section](/hardware).
5. Connect your hardware to your computer.
6. Choose 'upload and monitor' in Platform.io to build and upload the firmware to your hardware. You should see the firmware being uploaded and the serial monitor starting. If this completes successfully, you should start to see debug output in the terminal window from the ESP32 chip.

## Configuring the firmware

In a new installation, the firmware will start in access point mode. This allows for you to configure the firmware to connect to your home network. To do this, connect to the ESP32 access point with your phone or computer. The access point will be named `eSpa-wifi-AP`. Once connected to this access point, your phone / computer should connect to the captive portal on the ESP32. This will allow you to configure the firmware to connect to your home network, and to specify the MQTT server to use to publish status information from your spa pool.

Once you save these details, the ESP32 will restart and connect to your home network. You can then access the ESP32 by browsing to the IP address that it has been assigned by your home network. This will allow you to configure the spa pool settings, such as the temperature setpoint, and many other settings.