---
title: ESPySpa Firmware - Features & Overview
description: ESPySpa is the original eSpa firmware built on Arduino/PlatformIO. It offers a web interface, MQTT support, OTA updates, and full spa pool control.
head:
  - - meta
    - property: og:title
      content: ESPySpa Firmware - Features & Overview
  - - meta
    - property: og:description
      content: ESPySpa is the original eSpa firmware built on Arduino/PlatformIO. It offers a web interface, MQTT support, OTA updates, and full spa pool control.
---

# ESPySpa Firmware

ESPySpa is the original eSpa firmware, built on the Arduino framework using [PlatformIO](https://platformio.org/). It provides a full-featured standalone experience with a built-in web interface for configuration and control.

## Features

- **Temperature control**: Control your spa pool temperature, with automatic heater management to maintain your setpoint.
- **MQTT support**: Publish status and receive commands via MQTT, allowing integration with home automation systems like Home Assistant.
- **Web interface**: A built-in web interface for configuring spa pool settings, temperature setpoints, and more — no additional software required.
- **Easy configuration**: Starts in access point mode for initial setup, allowing you to connect to the ESP32 and configure your home network.
- **OTA updates**: Over-the-air firmware updates without needing to connect via USB.
- **Debugging**: Extensive debug output via serial monitor to diagnose issues.
- **Customizable**: Open source and designed to be easy to modify and extend.
- **Active development**: New features are being added regularly by the community.

## Getting Started

- **New to eSpa?** See the [Getting Started guide](/getting-started) for initial setup.
- **Want to build from source?** See the [Building ESPySpa](/firmware-espyspa-building) guide.
- **Need to update?** See the [Updating ESPySpa](/firmware-espyspa-updating) guide.

## Source Code

The ESPySpa firmware is open source and available on [GitHub](https://github.com/wayne-love/ESPySpa).

## How It Compares

See the [firmware comparison page](/firmware-comparison) for a side-by-side comparison with the ESPHome-based firmware.
