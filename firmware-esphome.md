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

The ESPHome-based firmware is an alternative option for eSpa hardware, built as a custom [ESPHome](https://esphome.io/) component. If you're already in the ESPHome ecosystem, this firmware lets your spa integrate seamlessly alongside your other ESPHome devices.

::: warning Under Development
This firmware is under active development. Some features may still be in progress. Check the [GitHub repository](https://github.com/jbergler/esphome-spanet) for the latest status.
:::

## Why Choose ESPHome?

- **Native Home Assistant integration** — your spa appears in HA automatically via the ESPHome API. No MQTT broker to set up or maintain.
- **Familiar ESPHome workflow** — if you already manage ESPHome devices, your spa fits right into the same dashboard, updates, and logs.
- **YAML-based configuration** — declarative configuration that's easy to version control, share, and extend. Add any ESPHome component (e.g. Bluetooth proxy, additional sensors) without writing C++.
- **ESPHome Dashboard management** — update firmware, view logs, and manage your spa from the same UI as your other devices.
- **Improv Serial** — USB-based WiFi provisioning for a smooth first-time setup experience.

## Features

- **Climate control**: Full temperature control exposed as a Home Assistant climate entity.
- **Pump control**: Individual control of up to 5 pumps with speed settings.
- **Light control**: Spa light on/off with effect and speed selection.
- **Energy monitoring**: Mains voltage, current, instant power, and total energy consumption.
- **Sensor data**: Water temperature, heater temperature, case temperature, and controller information.
- **OTA updates**: Over-the-air updates via both ESPHome and HTTP-based mechanisms.
- **Web interface**: Built-in web server for local status monitoring.
- **Sleep timers**: Configurable sleep timer schedules.
- **Filtration control**: Adjustable filtration hours and block duration.
- **Operating mode**: Normal, Economy, Away, and Weekday mode selection.

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

## Getting Started

### Prerequisites

- [ESPHome](https://esphome.io/guides/installing_esphome) installed (standalone or as a Home Assistant add-on)
- An eSpa board (Mini v1, Mini v2, or custom-built)
- USB-C cable for initial flashing

### Installation

The first flash must be done over USB. After that, subsequent updates can be applied over-the-air.

#### Option 1: ESPHome Dashboard (Recommended for Home Assistant users)

If you run ESPHome as a Home Assistant add-on or standalone dashboard:

1. Open the ESPHome Dashboard
2. Click **"+ New Device"** and adopt the eSpa configuration from the repository
3. Connect your eSpa to your computer via USB-C
4. Click **"Install"** and select the USB/serial port when prompted
5. Once flashed, the device will appear in Home Assistant automatically

#### Option 2: Command Line

1. Clone the repository:

   ```bash
   git clone https://github.com/jbergler/esphome-spanet.git
   cd esphome-spanet
   ```

2. Connect your eSpa to your computer via USB-C, then flash:

   ```bash
   esphome run espa-mini-v1.yaml  # for eSpa Mini v1
   esphome run espa-mini-v2.yaml  # for eSpa Mini v2
   ```

   This compiles the firmware and uploads it over USB. You'll be prompted to select the serial port.

3. Once flashed, the device will be automatically discovered by Home Assistant via the ESPHome integration.

### Configuration

The firmware uses ESPHome's package system. The base configuration (`espa-mini-base.yaml`) defines all entities, and board-specific files set the hardware pin mappings. You can customise by modifying the YAML files — rename entities, adjust update intervals, or add additional ESPHome components.

## Source Code

The ESPHome firmware is open source and available on [GitHub](https://github.com/jbergler/esphome-spanet).
