# eSpa MQTT Reference

This document summarizes the MQTT topics and payloads used by eSpa for both status reporting and setting spa state.

::: tip
The eSpa firmware must be configured with the correct MQTT broker settings to use these features. Refer to the [getting started guide](/getting-started) for details on how to set up MQTT.
:::

::: tip
Replace `<spaSerialNumber>` with your actual spa serial number (e.g., `2449XXXX-2449XXXX`). To get your spa serial number, refer to the [getting started guide](/getting-started) and log in to your eSpa web interface to find it.
:::

## Status Topic

- **Topic:** `sn_esp32/<spaSerialNumber>/status`
- **Description:** Publishes a JSON object with the current spa status, including temperatures, power, pumps, lights, timers, etc.
- **Example Payload:**
  
```json
{
  "temperatures": { "setPoint": 38.6, "water": 38.8, ... },
  "power": { "voltage": 298, ... },
  "status": { "heatingActive": "ON", ... },
  "pumps": { "pump1": { ... }, ... },
  "lights": { "state": "OFF", ... },
  ...
}
```

## Command Topics

There are a number of properties that can be set by publishing to specific MQTT topics. The general format is `sn_esp32/<spaSerialNumber>/set/<property>`. The `<property>` part determines what is being set (e.g., temperature, pump state, light brightness, etc.). The following sections detail the available commands.

### Set Water Temperature

- **Topic:** `sn_esp32/<spaSerialNumber>/set/temperatures_setPoint`
- **Payload:** `38.0`

### Set Pump State

- **Topic:** `sn_esp32/<spaSerialNumber>/set/pumpN_state` (where `N` is the pump number, e.g., `pump1_state`, `pump2_state`, etc.)
- **Payload:** `ON` or `OFF`
- **Notes:** Most spas have between 0 and 5 pumps. You can control each pump individually by publishing to its corresponding topic. If a pump is not present, commands to its topic will be ignored.

### Set Pump Speed

- **Topic:** `sn_esp32/<spaSerialNumber>/set/pumpN_speed` (where `N` is the pump number)
- **Payload:** `1`, `2`, etc.
- **Notes:** Only pumps that support variable speed will respond to speed commands. For single-speed pumps, this topic may be ignored.

### Set Light State

- **Topic:** `sn_esp32/<spaSerialNumber>/set/lights_state`
- **Payload:** `ON` or `OFF`

### Set Light Brightness

- **Topic:** `sn_esp32/<spaSerialNumber>/set/lights_brightness`
- **Payload:** `1` to `10`

### Set Light Color

- **Topic:** `sn_esp32/<spaSerialNumber>/set/lights_color`
- **Payload:** `{ "h": 1485, "s": 100 }` (JSON)

### Set Spa Mode

- **Topic:** `sn_esp32/<spaSerialNumber>/set/status_spaMode`
- **Payload:** `NORM`, `AWAY`, etc.

### Set Sleep Timer

- **Topic:** `sn_esp32/<spaSerialNumber>/set/sleepTimers_1_state`
- **Payload:** `Everyday`, `Off`, etc.

### Set Sleep Timer Begin/End

- **Topic:** `sn_esp32/<spaSerialNumber>/set/sleepTimers_1_begin`
- **Payload:** `22:00`
- **Topic:** `sn_esp32/<spaSerialNumber>/set/sleepTimers_1_end`
- **Payload:** `07:00`

### Set Heatpump Mode

- **Topic:** `sn_esp32/<spaSerialNumber>/set/heatpump_mode`
- **Payload:** `Heat`, `Cool`, `Auto`, `Off`

### Set Aux Heat

- **Topic:** `sn_esp32/<spaSerialNumber>/set/heatpump_auxheat`
- **Payload:** `ON` or `OFF`

### Set Date/Time

- **Topic:** `sn_esp32/<spaSerialNumber>/set/status_datetime`
- **Payload:** `2025-08-15 20:50:10`

### Set Day of Week

- **Topic:** `sn_esp32/<spaSerialNumber>/set/status_dayOfWeek`
- **Payload:** `Friday`

## Notes

- Replace `<spaSerialNumber>` with your actual spa serial number (e.g., `2449XXXX-2449XXXX`).
- All commands are sent as plain text unless otherwise specified (e.g., color as JSON).
- The status topic is read-only; all control is via the set topics.