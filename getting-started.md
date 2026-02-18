# Getting Started

This page is for people who have their eSpa hardware (either DIY or a pre-built PCB) and are looking to get started with it. If you are looking to get some hardware, please refer to the [hardware page](/hardware) to get started on that.

## First Time Setup: Flashing Firmware

If you've just received your eSpa hardware or built it yourself, you may need to flash the firmware before first use. Pre-assembled eSpa devices from the store typically come pre-flashed, but it's worth checking that you have the latest version.

### Quick Flash with Web Tool

The easiest way to flash or update your eSpa firmware is using our web-based flash tool:

1. Connect your eSpa to your computer using a USB-C cable
2. Visit **[https://flash.espa.diy](https://flash.espa.diy)**
3. Follow the on-screen instructions to flash the firmware
4. Once complete, disconnect the USB cable and proceed with connecting to your spa

For detailed instructions, troubleshooting, or alternative flashing methods, see the [Firmware Building and Flashing](/firmware-building) guide.

## Connecting to your spa pool controller

Your eSpa connects directly to the controller in your spa pool. It will have a RJ-45 port labelled `EXP1`, which is where you will connect your eSpa. The eSpa will be powered by the spa pool controller, so you do not need to provide any additional power. The USB-C port on the eSpa is programming and debugging purposes only - it isn't used in normal operation.

## Accessing your eSpa

Once your device is plugged into the spa pool controller it will start in access point mode. You will know that you are in access point mode by referring to the [troubleshooting page status lights description](/troubleshooting) - it is typically shown by the LEDs being on. Access point mode allows for you to configure the eSpa to connect to your home network.

To do this, follow these steps:

1. Bring your mobile phone, tablet, or computer nearby to your spa pool.
2. Scan for Wifi access points, and you should find a new access point named `eSpa-wifi-AP`.
3. Connect to this access point from your mobile phone, tablet, or computer.
4. Your phone / computer should connect to the captive portal on the ESP32. If you do not see the captive portal, try browsing to [http://192.168.4.1](http://192.168.4.1) in your browser, as this is the default IP address of eSpa devices when in access point mode.
5. Configure and save the details of your home network in the captive portal (more details below).
6. eSpa will restart and connect to your home network (and the Wifi access point will no longer be accessible (unless you follow the [troubleshooting](/troubleshooting) guide)).
7. Access your eSpa by browsing to the IP address that it has been assigned by your home network. This will allow you to configure the spa pool settings, such as the temperature setpoint, and many other settings.

## Configuring WiFi and MQTT settings

When you connect to the captive portal, you will be presented with a form to configure the WiFi and MQTT settings. You should enter the name and password for your home network in the first section.

### MQTT Settings

eSpa works by [sending and receiving messages over MQTT](/mqtt-reference). MQTT is a lightweight messaging protocol that is designed for devices with limited resources. You will need to configure the MQTT settings to connect to your MQTT broker. Most commonly, people will install [Mosquitto](https://mosquitto.org/) on their home server.

#### MQTT for Home Assistant Users

For users of Home Assistant, refer to [Home Assistant Integration](/home-automation.html#home-assistant-integration) guide.
