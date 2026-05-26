---
title: ESPHome Firmware for eSpa - Features & Overview
description: An alternative ESPHome-based firmware for eSpa hardware. Native Home Assistant integration, YAML configuration, and automatic device discovery.
head:
  - - meta
    - property: og:title
      content: ESPHome Firmware for eSpa - Features & Overview
  - - meta
    - property: og:description
      content: An alternative ESPHome-based firmware for eSpa hardware. Native Home Assistant integration, YAML configuration, and automatic device discovery.
---

# ESPHome Firmware

The ESPHome-based firmware is an alternative firmware option for eSpa hardware, built as a custom [ESPHome](https://esphome.io/) component. It provides native Home Assistant integration with automatic device discovery and a YAML-based configuration approach.

::: warning Under Development
This firmware is under active development. Some features may still be in progress. Check the [GitHub repository](https://github.com/jbergler/esphome-spanet) for the latest status.
:::

## Features

- **Native Home Assistant integration**: Automatic device discovery via the ESPHome API — no MQTT broker required.
- **YAML configuration**: Declarative configuration using ESPHome's familiar YAML syntax.
- **Climate control**: Full temperature control exposed as a Home Assistant climate entity.
- **Pump control**: Individual control of up to 5 pumps with speed settings.
- **Light control**: Spa light on/off with effect and speed selection.
- **Energy monitoring**: Real-time mains voltage, current, instant power, and total energy consumption.
- **Sensor data**: Water temperature, heater temperature, case temperature, and controller information.
- **OTA updates**: Over-the-air updates via both ESPHome and HTTP-based mechanisms.
- **Web interface**: Built-in web server for local status monitoring.
- **Captive portal**: Fallback AP mode with captive portal for WiFi provisioning.
- **Improv Serial**: USB-based provisioning for first-time setup.
- **Sleep timers**: Configurable sleep timer schedules.
- **Filtration control**: Adjustable filtration hours and block duration.

## Supported Hardware

The ESPHome firmware supports:

- **eSpa Mini v1** (ESP32-S3 based)
- **eSpa Mini v2** (ESP32-C6 based)

## Getting Started

### Prerequisites

- [ESPHome](https://esphome.io/guides/installing_esphome) installed (standalone or as a Home Assistant add-on)
- An eSpa Mini v1 or v2 board
- USB-C cable for initial flashing

### Installation

1. **Adopt the device** in ESPHome Dashboard using the provided configuration, or clone the repository and customise:

   ```bash
   git clone https://github.com/jbergler/esphome-spanet.git
   cd esphome-spanet
   ```

2. **Flash the firmware** to your eSpa device:

   ```bash
   esphome run espa-mini-v1.yaml  # for eSpa Mini v1
   esphome run espa-mini-v2.yaml  # for eSpa Mini v2
   ```

3. **Connect to Home Assistant**: The device will be automatically discovered by Home Assistant via the ESPHome integration.

### Configuration

The firmware uses ESPHome's package system. The base configuration (`espa-mini-base.yaml`) defines all entities, and board-specific files set the hardware pin mappings.

You can customise your configuration by modifying the YAML files — for example, to rename entities, adjust update intervals, or add additional ESPHome components.

## Entities Exposed

| Category | Entities |
|----------|----------|
| Climate | Temperature (setpoint + current) |
| Sensors | Water temp, heater temp, case temp, mains voltage/current, power, energy |
| Fans (Pumps) | Pump 1–5 with speed control |
| Lights | Spa light with effects |
| Selects | Light effect, operating mode, sleep timer days |
| Numbers | Filtration hours, sleep timer schedules |
| Binary Sensors | Heating active, ozone active, clean cycle, water present |
| Text Sensors | Controller model, serial, firmware version, current time |

## Source Code

The ESPHome firmware is open source and available on [GitHub](https://github.com/jbergler/esphome-spanet).

## How It Compares

See the [firmware comparison page](/firmware-comparison) for a side-by-side comparison with the ESPySpa firmware.
