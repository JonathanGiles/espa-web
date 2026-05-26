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

There are two open source firmware options available for eSpa hardware. Both provide full spa pool control, temperature management, and home automation integration — they differ in their approach and ecosystem.

## ESPySpa

The original eSpa firmware, built on Arduino/PlatformIO. It provides a standalone web interface for control and configuration, and integrates with home automation systems via MQTT.

**Best for:** Users who want a full standalone web UI, MQTT-based integration, or are using generic/DIY ESP32 boards.

→ [Learn more about ESPySpa](/firmware-espyspa)

## ESPHome

An alternative firmware built as a custom [ESPHome](https://esphome.io/) component. It provides native Home Assistant integration with automatic device discovery and YAML-based configuration.

**Best for:** Home Assistant users who want seamless native integration, energy monitoring, and a declarative YAML configuration.

→ [Learn more about ESPHome firmware](/firmware-esphome)

## Not Sure Which to Choose?

Check out the [side-by-side comparison](/firmware-comparison) to see how the two options stack up across features, integration, and setup experience.
