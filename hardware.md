# Hardware Overview

The eSpa project to date focuses on adding home automation support to SpaNet-branded pool controllers. The [firmware](/firmware) is designed to run on the ESP32 microcontroller, which is a popular choice for IoT projects due to its built-in WiFi and Bluetooth capabilities.

::: warning
This project will not work on all spa pools. Refer to the [compatibility](/compatibility) page to understand if your spa pool is compatible with this project.
:::

Because of the support for the ubiquitous ESP32 microcontroller, there are a few different ways to build your own hardware to connect to your spa pool. You can either [build your own hardware from scratch](/hardware-custom-build), or you can [buy a pre-built eSpa PCB](/hardware-pcb) to save you the trouble.

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