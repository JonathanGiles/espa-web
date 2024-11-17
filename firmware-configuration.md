# Firmware Configuration

In a new installation, once your device is plugged into the spa pool controller the firmware will start in access point mode, which allows for you to configure the firmware to connect to your home network. To do this, follow these steps:

1. Bring your mobile phone, tablet, or laptop computer nearby to your spa pool.
2. Scan for Wifi access points, and you should find a new access point named `eSpa-wifi-AP`.
3. Connect to this access point.
4. Your phone / computer should connect to the captive portal on the ESP32, and you will be able to specify your home Wifi details, as well as the connection details for your home MQTT service.
5. Save these details.
6. eSpa will restart and connect to your home network (and the Wifi access point will no longer be accessible (unless you follow the [troubleshooting](/troubleshooting) guide)). 
7. Access your eSpa by browsing to the IP address that it has been assigned by your home network. This will allow you to configure the spa pool settings, such as the temperature setpoint, and many other settings.
