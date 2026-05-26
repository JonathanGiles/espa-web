---
title: eSpa Firmware Comparison - ESPySpa vs ESPHome
description: Compare the two firmware options for eSpa spa pool controllers. Side-by-side feature comparison to help you choose the right firmware for your setup.
head:
  - - meta
    - property: og:title
      content: eSpa Firmware Comparison - ESPySpa vs ESPHome
  - - meta
    - property: og:description
      content: Compare the two firmware options for eSpa spa pool controllers. Side-by-side feature comparison to help you choose the right firmware for your setup.
---

# Firmware Comparison

Both firmware options work with the same eSpa hardware. Choose the one that best fits your needs and home automation setup.

## Side-by-Side

| Feature | ESPySpa | ESPHome |
|---------|---------|---------|
| **Framework** | Arduino / PlatformIO | ESPHome |
| **Configuration** | Web interface | YAML files |
| **Home Assistant** | Via MQTT | Native API (auto-discovery) |
| **MQTT support** | ✅ Built-in | Optional (via ESPHome config) |
| **Standalone web UI** | ✅ Full control | ✅ Status monitoring |
| **OTA updates** | ✅ | ✅ |
| **Temperature control** | ✅ | ✅ |
| **Pump control** | ✅ | ✅ (up to 5 pumps) |
| **Light control** | ✅ | ✅ (with effects) |
| **Energy monitoring** | ❌ | ✅ (voltage, current, power, energy) |
| **Sleep timers** | ✅ | ✅ |
| **Filtration control** | ✅ | ✅ |
| **USB provisioning** | ❌ | ✅ (Improv Serial) |
| **Initial setup** | Captive portal | Captive portal + Improv |
| **Custom builds** | PlatformIO | ESPHome CLI/Dashboard |
| **eSpa Mini v1** | ✅ | ✅ |
| **eSpa Mini v2** | ✅ | ✅ |
| **DIY/generic ESP32** | ✅ | Possible with custom YAML |
| **Maturity** | Established, widely used | Under active development |

## Which Should I Choose?

### Choose ESPySpa if:

- You want a **standalone experience** with a full web interface for control and configuration
- You prefer **MQTT-based** home automation integration
- You want the most **battle-tested** option with a larger user base
- You're using a **DIY/generic ESP32** board
- You don't use Home Assistant

### Choose ESPHome if:

- You use **Home Assistant** and want seamless native integration with auto-discovery
- You prefer **YAML-based configuration** and the ESPHome ecosystem
- You want **energy monitoring** features (voltage, current, power tracking)
- You're already familiar with ESPHome from other projects
- You want USB-based provisioning (Improv Serial)

## Switching Between Firmwares

Both firmwares can be flashed to the same eSpa hardware. You can switch between them at any time by flashing the other firmware via USB. Note that settings and configurations do not transfer between firmware options — you'll need to reconfigure after switching.
