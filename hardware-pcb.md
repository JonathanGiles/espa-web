---
title: Buy eSpa Pre-Built PCB - Ready-to-Install Spa Controller
description: Buy a pre-assembled eSpa PCB for easy spa pool home automation. Plug-and-play ESP32 controller with WiFi, MQTT, and Home Assistant support. Ships worldwide.
head:
  - - meta
    - property: og:title
      content: Buy eSpa Pre-Built PCB - Ready-to-Install Spa Controller
  - - meta
    - property: og:description
      content: Buy a pre-assembled eSpa PCB for easy spa pool home automation. Plug-and-play ESP32 controller with WiFi, MQTT, and Home Assistant support. Ships worldwide.
---

# Buying a Pre-Built PCB

If building your own hardware is not your thing, you can [purchase a pre-built eSpa PCB online](https://store.espa.diy). This PCB is designed to be a drop-in solution for people wanting to add their spa pool to their home automation systems, and comes with all the required components already soldered in place. It is professionally manufactured and has been tested by many people in the eSpa community.

::: warning
These pre-build eSpa PCBs are built by hobby PCB designers for fun. They are not affiliated with any spa pool manufacturers, and there is no warranty or guarantee that they will work on your spa pool. Please refer to the [compatibility](/compatibility) page to see if your spa pool is compatible with the eSpa project.

Also, note that these PCBs are not certified by any regulatory body, and you are using them at your own risk. If you are not comfortable with this, please consider building your own hardware from scratch instead.

Finally, note that these PCBs are not intended to be a money-making enterprise – they are sold at cost to cover the expenses of manufacturing and shipping. The goal is to get the eSpa into more hands, so that more people can integrate their spa pool into their home automation systems.
:::

[![eSpa Mini v2](/images/espa-mini-v2-top.jpg){width=50%}](https://store.espa.diy)
[![eSpa Mini v2 - bottom](/images/espa-mini-v2-bottom.jpg){width=50%}](https://store.espa.diy)

::: tip
You can buy the eSpa custom PCBs from an [online store](https://store.espa.diy).
:::

The [eSpa Mini v2](https://store.jonathangiles.net/product/espa-mini/) runs the eSpa [firmware](/firmware) and connects to [certain spa pools](/compatibility). The eSpa allows for you to control and monitor the operation of your spa pool, and integrate it into home automation software such as Home Assistant and OpenHAB by making use of the MQTT broker support in the firmware.

Note: There is no cloud service offered with eSpa or the firmware that it runs – everything is local to your home network, and you are required to set up integration with the device by integrating it with an MQTT broker running on your network.

## Features

* Powered by an ESP32-C6-Wroom with 8MB of flash.
* The ESP32 has built-in WiFi, Bluetooth, and Matter support (but the current firmware does not make any use of the Bluetooth or Matter functionality).
* No need for a separate power supply – power is supplied via the RJ-45 connection when connected to the spa pool controller.
* USB-C connector for easy flashing and debugging.
* Fourteen pin headers (GPIO 1, 2, 3, 6, 7, 11, 15, 22, and 23, as well as +3.3V, EN, GN, RX, and TX pins). This allows for connecting external devices and sensors.
* Safety fuse to reduce risk of damage to spa pool controller board.

## Important disclaimers

* This is a custom PCB built and designed by hobby PCB / firmware developers, for people who like to tinker with home automation. It is developed and supplied by people who are in no way affiliated with any of the suppliers of spa pools or spa pool control systems, and all names (such as Spanet) are owned by their respective owners. These suppliers have their own wifi solutions that you might want to consider, if you want to have a proper certified solution.
* All efforts have been made to keep the eSpa as cost-effective as possible. The eSpa is not intended to be a money-making enterprise – the goal is to get the eSpa into more hands, so that more people can integrate their spa pool into their home automation systems.
* The eSpa is supplied as-is. Whilst it has been [tested on various spa pools](/compatibility), there is no guarantee that it will work on your spa pool. Further, there is no warranty that the eSpa will not do damage to your spa pool. You are using this at your own risk!
* There is no guarantee that the companies producing the spa pool controllers will not change their design in the future, rendering these PCBs obsolete on new versions of the controller. We have no insight into when, or if, this will ever happen.
