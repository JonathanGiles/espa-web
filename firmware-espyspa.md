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

ESPySpa is the original eSpa firmware, built on the Arduino framework using [PlatformIO](https://platformio.org/). It's the most established firmware option, with a large user base and proven track record across many spa installations.

## Why Choose ESPySpa?

- **Fully standalone** — control your spa entirely from the built-in web interface, with no external software required. Change temperature, control pumps, configure schedules — all from your browser.
- **Battle-tested** — ESPySpa has been in use for years across many installations. It's well-understood, stable, and has a large community of users in the [Discord](https://discord.gg/faK8Ag4wHn).
- **Web flash tool** — first-time setup is simple via [flash.espa.diy](https://flash.espa.diy) using just a USB cable and a Chrome browser. No development environment needed.
- **Remote debugging** — built-in telnet-based remote debugging (via the RemoteDebug library) lets you diagnose issues without a USB connection.

## Features

- **Web interface**: Full control and configuration — temperature, pumps, lights, modes, timers, filtration — all from your browser.
- **MQTT with HA auto-discovery**: Publishes all entities to MQTT with Home Assistant auto-discovery, so your spa appears automatically in HA.
- **Temperature control**: Automatic heater management to maintain your setpoint.
- **Pump control**: Up to 5 pumps with variable speed settings.
- **Light control**: On/off with colour modes and speed selection.
- **Blower control**: Variable speed blower support.
- **Energy monitoring**: Mains voltage, current, power, and total energy consumption (kWh).
- **Sleep timers**: Two configurable sleep timer schedules.
- **Filtration control**: Adjustable filtration block duration.
- **Lock mode**: Spa lock mode control.
- **Spa mode**: Operating mode selection (e.g. Normal, Economy, Away).
- **Heat pump support**: Ambient/condensor temperatures, heat pump mode, and auxiliary heat element status (where applicable).
- **OTA updates**: Over-the-air firmware updates from the web interface.
- **Remote debugging**: Telnet-based debug access for troubleshooting without USB.
- **mDNS**: Discover your eSpa on the local network by hostname.

## Source Code

The ESPySpa firmware is open source and available on [GitHub](https://github.com/wayne-love/ESPySpa).

## Next Steps

- **New to eSpa?** See the [Getting Started guide](/getting-started) for initial setup.
- **Want to build from source?** See the [Building from Source](/firmware-espyspa-building) guide.
- **Need to update?** See the [Updating](/firmware-espyspa-updating) guide.
