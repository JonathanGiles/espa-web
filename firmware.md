---
title: eSpa Firmware - Choose Your Firmware
description: Two open source firmware options are available for eSpa spa pool controllers. Compare ESPySpa and ESPHome-based firmware to find the best fit for your setup.
head:
  - - meta
    - property: og:title
      content: eSpa Firmware - Choose Your Firmware
  - - meta
    - property: og:description
      content: Two open source firmware options are available for eSpa spa pool controllers. Compare ESPySpa and ESPHome-based firmware to find the best fit for your setup.
---

# Firmware

There are two open source firmware options available for eSpa hardware. Both work with all eSpa hardware (Mini v1, Mini v2, and custom-built boards), provide full spa pool control, and support over-the-air updates. They differ in their approach and ecosystem.

## Which Should I Choose?

### Choose [ESPySpa](/firmware-espyspa) if:

- You want a **standalone experience** with a full web interface for control and configuration — no other software needed
- You prefer **MQTT-based** home automation integration
- You want the most **battle-tested** option with a larger user base

### Choose [ESPHome](/firmware-esphome) if:

- You use **Home Assistant** and want native ESPHome integration
- You prefer **YAML-based configuration** and the ESPHome ecosystem
- You're already familiar with ESPHome from other projects

## Feature Comparison

| Feature | [ESPySpa](/firmware-espyspa) | [ESPHome](/firmware-esphome) |
|---------|---------|---------|
| **Framework** | Arduino / PlatformIO | ESPHome |
| **Configuration** | Web interface | YAML files |
| **Home Assistant** | Via MQTT (auto-discovery) | Native API (auto-discovery) |
| **MQTT support** | ✅ Built-in | Optional (via ESPHome config) |
| **Standalone web UI** | ✅ Full control | ✅ Status monitoring |
| **OTA updates** | ✅ | ✅ |
| **Temperature control** | ✅ | ✅ |
| **Pump control** | ✅ | ✅ (up to 5 pumps) |
| **Light control** | ✅ | ✅ (with effects) |
| **Energy monitoring** | ✅ (voltage, current, power, energy) | ✅ (voltage, current, power, energy) |
| **Sleep timers** | ✅ | ✅ |
| **Filtration control** | ✅ | ✅ |
| **USB provisioning** | ✅ (Web flash tool) | ✅ (Improv Serial) |
| **Maturity** | Established, widely used | Under active development |

## Switching Between Firmwares

Both firmwares can be flashed to the same hardware. You can switch at any time by flashing the other firmware via USB. Settings don't transfer between firmware options — you'll need to reconfigure after switching.
