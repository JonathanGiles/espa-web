---
title: DIY eSpa Build Guide - Build Your Own Spa Controller
description: Build your own ESP32 spa pool controller with this DIY guide. Parts list, wiring diagrams, and step-by-step instructions for connecting to your spa's EXP1 port.
head:
  - - meta
    - property: og:title
      content: DIY eSpa Build Guide - Build Your Own Spa Controller
  - - meta
    - property: og:description
      content: Build your own ESP32 spa pool controller with this DIY guide. Parts list, wiring diagrams, and step-by-step instructions for connecting to your spa's EXP1 port.
---

# Building Your Own Hardware

::: warning
This project will not work on all spa pools. Refer to the [compatibility](/compatibility) page to understand if your spa pool is compatible with this project.
:::

::: danger 
It is really important to note that shorting pins 7 and 8 on the `EXP1` port will cause the spa controller to short, and cause irreparable damage to the controller. This is why it is important to build your own hardware with care, and to test it thoroughly before connecting it to your spa pool. We've already heard of at least two people who have had to replace their spa controllers due to this mistake. If you want to reduce the risk of damage, consider [purchasing a pre-built PCB](/hardware-pcb) instead.
:::

## Spa Pool Connection Overview

On spa pools containing SpaNet SV and SV Mini controllers, there exists a port labeled `EXP1` or `EXPAND1` port. This is a standard RJ-45 plug, with the following output coming from the controller on each of the pins:

| Pin | Controller | WiFly Adapter       |
|-----|------------|---------------------|
| 1   | Health Led | Pass through        |
| 2   | GND        | Pass through        |
| 3   | Not used   |                     |
| 4   | Not used   |                     |
| 5   | TX         | RX                  |
| 6   | RX         | TX                  |
| 7   | GND        | GND                 |
| 8   | 12V        | 12V                 |

Because the spa is outputting 12V over this connection, we can build our controller with no need for an external power connection - all we need to do is convert the 12V down to a 3.3V voltage suitable for our ESP32 chip. We then use pins 5/6 to communicate with the controller, using our [custom firmware](/firmware).

## Micronocontroller Selection
Our pre-built PCBs use either the ESP32-S3 (v1) or the ESP32-C6 (v2). A minimum of 8 MB of flash memory is required to ensure compatibility with our firmware.

Flash size is often indicated in the part number as -N8 (8 MB) or -N16 (16 MB). For example, our v2 board uses an ESP32-C6-N8 microcontroller.

If you would like to use the pre-compiled firmware, you must use either an ESP32-S3 or ESP32-C6 with at least 8 MB of flash memory.
If you would like to use a different ESP32 variant, you will need to compile the firmware yourself using PlatformIO. See [Building Firmware from Source](https://espa.diy/firmware-espyspa-building) for instructions.

## Components

The table below lists a few options for purchasing the required components. [AliExpress](https://aliexpress.com) is typically cheaper but has a much slower delivery, compared with the more expensive [Core Electronics](https://core-electronics.com.au/) (based in Australia), with their faster delivery times.

| Component        | Store links | Comments |
|------------------|-------------|----------|
| ESP32-C6-N8      | [AliExpress](https://www.aliexpress.com/item/1005006708097629.html) / [Core](https://core-electronics.com.au/esp32-c6-devkitc-1-n8-development-board-8-mb-spi-flash.html) |  |
| RJ45 connector   | [AliExpress](https://www.aliexpress.com/item/1005003717285471.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) / [Core](https://core-electronics.com.au/sparkfun-rj45-magjack-breakout.html) | Get a 'H Type+DIP Pins'. |
| Buck converter   | [AliExpress](https://www.aliexpress.com/item/1005002603013499.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) / [Core](https://core-electronics.com.au/sparkfun-babybuck-regulator-breakout-3-3v-ap63203.html) | Get a '5-40V to 3.3V' converter. |
| 330 ohm Resistor | [AliExpress](https://www.aliexpress.com/item/32952657927.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) / [Core](https://core-electronics.com.au/resistor-330-ohm-1-6th-watt-pth.html) | You need two 330 ohm resistors. |

Beyond these key components, you may want to buy some protoboards, breadboards, pin headers, cables, etc to build your device. Some useful links include:

| Component | Store links | Comments |
|-----------|-------------|----------|
| Pin Headers | [AliExpress](https://www.aliexpress.com/item/32724478308.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) | |
| Perfboard | [AliExpress](https://www.aliexpress.com/item/1005003422520490.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) | If you want to solder your hardware together. |

## Assembly Images

To keep things as simple as possible, off the shelf modules have been used. You can click the images below to see a larger version of the image.

::: tip
The resistors on the RX/TX pins are recommended but optional.
:::

[![Circuit diagram](/images/circuit.png){width=50%}](/images/circuit.png)
[![Individual components](/images/disassembled.png){width=50%}](/images/disassembled.png)
[![Board wiring on back](/images/wiring.png){width=50%}](/images/wiring.png)
[![The final assembled board](/images/board.png){width=50%}](/images/board.png)
