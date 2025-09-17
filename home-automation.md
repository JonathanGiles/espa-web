# Home Automation

The eSpa firmware exposes a MQTT interface to allow for easy integration with home automation systems. This allows you to control your spa from your home automation system, and also receive notifications when the spa is in use or when the temperature changes. Because of this support, home automation systems like Home Assistant and OpenHab can easily integrate with the eSpa firmware.

## MQTT

If you are running an MQTT broker already, or if you are running Home Assistant already, you can use the [MQTT interface](/mqtt-reference) to control your spa. The eSpa firmware will publish messages to the MQTT broker when the spa is in use. To configure eSpa to communicate with MQTT, you simply specify the MQTT broker details as part of the initial WiFi configuration. You can follow the [getting started](/getting-started) guide to understand how to configure these settings.

## Home Assistant

Because eSpa publishes [MQTT messages](/mqtt-reference) that already meet the Home Assistant MQTT discovery format, you can easily integrate eSpa with Home Assistant. You can use the following configuration to set up the integration:

> TODO
