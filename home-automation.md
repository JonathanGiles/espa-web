# Home Automation

The eSpa firmware exposes a MQTT interface to allow for easy integration with home automation systems. This allows you to control your spa from your home automation system, and also receive notifications when the spa is in use or when the temperature changes. Because of this support, home automation systems like Home Assistant and OpenHab can easily integrate with the eSpa firmware.

## MQTT

If you are running an MQTT broker already, or if you are running Home Assistant already, you can use the [MQTT interface](/mqtt-reference) to control your spa. The eSpa firmware will publish messages to the MQTT broker when the spa is in use. To configure eSpa to communicate with MQTT, you simply specify the MQTT broker details as part of the initial WiFi configuration. You can follow the [getting started](/getting-started) guide to understand how to configure these settings.

## Home Assistant Integration

eSpa publishes MQTT messages that already follow the [Home Assistant MQTT discovery format](/mqtt-reference). This makes integration with Home Assistant very straightforward.

There are multiple ways to connect eSpa. The following example uses the built-in MQTT integration together with the native Mosquitto broker app, tested with Home Assistant OS 2026.2.

### Step-by-step setup

1. **Add the MQTT integration**  
   If you don’t already have it, add the MQTT integration and Mosquitto broker app to Home Assistant:

   [![Open your Home Assistant instance and start the MQTT config flow](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=mqtt)

   Alternatively, follow the manual setup instructions in the official documentation:  
   https://www.home-assistant.io/integrations/mqtt/

2. **Configure the Mosquitto broker app**  
   Open the Mosquitto broker app page to create credentials for eSpa:

   [![Open Mosquitto broker app configuration](https://my.home-assistant.io/badges/supervisor_addon.svg?addon=core_mosquitto)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_mosquitto)
   
   In the Mosquitto app **Configuration** tab:  
   - Click **Add** to create a new login  
   - Enter a username and password that eSpa will use
   - Click **Add** 
   
   Click **Save**.

3. **Configure eSpa**  
   Open a browser and go to your eSpa device's IP address (e.g. `http://192.168.1.100`).

   Navigate to the **Config** section and enter the following:

   - **MQTT Server**: IP address of your Home Assistant instance  
   - **MQTT Port**: Usually `1883` (check the "Normal MQTT" port in the Mosquitto app info)  
   - **MQTT Username** and **MQTT Password**: The credentials you created in step 2  
   - **Spa Poll Frequency**: Leave at default (60 seconds)  

   Click **Save**.

4. **Verify in Home Assistant**  
   Go to the MQTT integration page:

   [![Open MQTT integration overview](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=mqtt)

   You should now see your eSpa device listed, along with several discovered entities (sensors, switches, etc.) for use in Home Assistant.
