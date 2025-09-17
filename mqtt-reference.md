---
outline: [2,3]
---

# eSpa MQTT Reference

::: tip
eSpa supports MQTT Home Assistant auto-discovery. Entities for temperature, pumps, lights, blower, heatpump, and timers are automatically published when the spa and MQTT broker are connected.
:::

This document summarizes the MQTT topics and payloads used by eSpa for both status reporting and setting spa state.

::: tip
The eSpa firmware must be configured with the correct MQTT broker settings to use these features. Refer to the [getting started guide](/getting-started) for details on how to set up MQTT.
:::

::: tip
Replace `<spaSerialNumber>` with your actual spa serial number (e.g., `2449XXXX-2449XXXX`). To get your spa serial number, refer to the [getting started guide](/getting-started) and log in to your eSpa web interface to find it.
:::

## Status Topic

- **Topic:** `sn_esp32/<spaSerialNumber>/status`
- **Description:** Publishes a JSON object with the current spa status. The structure includes all relevant properties, such as temperatures, power, pumps, blower, lights, timers, heat pump, controller info, firmware, and more. See below for a real-world example and field descriptions.

**Example Payload:**

```json
{
  "temperatures": {
    "setPoint": 36,
    "water": 36.2,
    "heater": 34.9,
    "case": 40,
    "heatpumpAmbient": 0,
    "heatpumpCondensor": 0
  },
  "power": {
    "voltage": 303,
    "current": 0,
    "power": 0,
    "totalenergy": 0
  },
  "status": {
    "heatingActive": "ON",
    "ozoneActive": "ON",
    "state": "Heating",
    "spaMode": "NORM",
    "controller": "SVM2",
    "firmware": "V6.24.03.20",
    "serial": "244XXXX-2XXXXX98",
    "siInitialised": "true",
    "mqtt": "connected",
    "datetime": "2025-09-18 11:06:58",
    "dayOfWeek": "Thursday"
  },
  "eSpa": {
    "model": "spa-control-pcb",
    "update": {
      "installed_version": "v1.0.11-alpha-10-ga642ece-nightly-2025-08-15"
    }
  },
  "heatpump": {
    "mode": "Auto",
    "auxheat": "OFF"
  },
  "pumps": {
    "pump1": {
      "installed": false,
      "speedType": "-",
      "possibleStates": [],
      "state": "OFF",
      "speed": 0
    },
    "pump2": {
      "installed": true,
      "speedType": "1",
      "possibleStates": ["AUTO"],
      "state": "ON",
      "speed": 2
    },
    "pump3": {
      "installed": true,
      "speedType": "1",
      "possibleStates": ["OFF","ON"],
      "state": "OFF",
      "speed": 0
    },
    "pump4": {
      "installed": true,
      "speedType": "1",
      "possibleStates": ["OFF","ON"],
      "state": "OFF",
      "speed": 0
    },
    "pump5": {
      "installed": false,
      "speedType": "-",
      "possibleStates": [],
      "state": "OFF",
      "speed": 0
    }
  },
  "blower": {
    "state": "OFF",
    "mode": "Variable",
    "speed": "0"
  },
  "sleepTimers": {
    "timer1": {
      "state": "Off",
      "begin": "07:00",
      "end": "22:30"
    },
    "timer2": {
      "state": "Off",
      "begin": "07:00",
      "end": "22:30"
    }
  },
  "lights": {
    "speed": 5,
    "state": "OFF",
    "effect": "Step",
    "brightness": 5,
    "color": { "h": 1485, "s": 100 },
    "color_mode": "hs"
  }
}
```

**Field Descriptions:**

- `temperatures`: Set point, water, heater, case, heat pump ambient/condensor.
- `power`: Voltage, current, power, total energy.
- `status`: Heating/ozone active, spa state/mode, controller, firmware, serial, initialisation, MQTT, date/time, day of week.
- `eSpa`: Model and update info.
- `heatpump`: Mode and aux heat.
- `pumps`: Each pump has installed status, speed type, possible states, current state, and speed.
- `blower`: State, mode, speed.
- `sleepTimers`: Each timer has state, begin, end.
- `lights`: Speed, state, effect, brightness, color (hue/saturation), color mode.

## Command Topics

There are a number of properties that can be set by publishing to specific MQTT topics. The general format is `sn_esp32/<spaSerialNumber>/set/<property>`. The `<property>` part determines what is being set (e.g., temperature, pump state, light brightness, etc.).

::: tip
The spa controller subscribes to `sn_esp32/<spaSerialNumber>/set/#` and will process any property set via this path.
:::

The following sections detail the available commands.

### Water Temperature

Set the target water temperature for your spa. The spa will automatically heat or cool to reach this temperature. This is the main way to control the desired temperature for bathing.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/temperatures_setPoint`
- **Payload:** `38.0`

### Pump State

Control the ON/OFF state of each pump. Useful for activating or deactivating water jets. Most spas have multiple pumps, each addressed individually. If a pump is not present, commands to its topic will be ignored.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/pumpN_state` (where `N` is the pump number, e.g., `pump1_state`, `pump2_state`, etc.)
- **Payload:** `ON` or `OFF`
- **Notes:** Most spas have between 0 and 5 pumps. You can control each pump individually by publishing to its corresponding topic. If a pump is not present, commands to its topic will be ignored.

### Pump Speed

Set the speed of a specific pump, if your spa supports variable-speed pumps. Higher speeds increase water flow and jet intensity. Single-speed pumps will ignore this command.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/pumpN_speed` (where `N` is the pump number)
- **Payload:** `1`, `2`, etc.
- **Notes:** Only pumps that support variable speed will respond to speed commands. For single-speed pumps, this topic may be ignored.

### Blower State

Turn the air blower ON or OFF. The blower injects air into the water for a bubbling effect, enhancing the spa experience.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/blower_state`
- **Payload:** `ON` or `OFF`

### Blower Speed

Set the speed of the air blower, if your spa supports variable-speed blowers. Higher speeds produce more bubbles. This command is ignored if your spa only supports a fixed-speed blower.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/blower_speed`
- **Payload:** `1` to `5`
- **Notes:** Only available if your spa has a variable-speed blower.

### Blower Mode

Switch the blower between Variable and Fixed speed modes. Variable mode allows speed adjustment, while Fixed mode uses a preset speed. This lets you choose between manual and automatic bubble intensity.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/blower_mode`
- **Payload:** `Variable` or `Fixed`

### Light Effect

Change the lighting effect in your spa, such as color cycling, fading, or other supported effects. Effects depend on your spa's lighting capabilities and can enhance ambiance.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/lights_effect`
- **Payload:** (effect name, e.g., `Rainbow`, `Fade`, etc.)

### Fan/Blower Entity

Set the speed of a fan or blower accessory, if present. This is separate from the main air blower and may control additional air or water movement for comfort or filtration.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/blower`
- **Payload:** `1` to `5`
- **Notes:** Used for spas with a fan/blower accessory.

### Availability Topic

Indicates whether the spa controller is online (connected to MQTT) or offline. Useful for monitoring device health, automation triggers, and ensuring your spa is reachable for remote control.

- **Topic:** `sn_esp32/<spaSerialNumber>/available`
- **Payload:** `online` or `offline`
- **Notes:** Indicates whether the spa controller is connected to the MQTT broker.

### Light State

Turn the spa lights ON or OFF. Useful for ambiance, safety, or visibility during night use. This is a simple way to control lighting without changing color or brightness.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/lights_state`
- **Payload:** `ON` or `OFF`

### Light Brightness

Set the brightness level of the spa lights. Values typically range from 1 (dim) to 10 (bright). Adjusting brightness can help set the mood or save energy.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/lights_brightness`
- **Payload:** `1` to `10`

### Light Color

Set the color of the spa lights using hue and saturation values. Send a JSON object with `h` (hue) and `s` (saturation). This allows for custom color selection to match your preference or theme.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/lights_color`
- **Payload:** `{ "h": 1485, "s": 100 }` (JSON)

### Spa Mode

Change the operating mode of the spa, such as Normal, Away, or other supported modes. Modes may affect heating, filtration, and energy usage, and are useful for vacation or energy-saving schedules.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/status_spaMode`
- **Payload:** `NORM`, `AWAY`, etc.

### Sleep Timer State

Set the state of a sleep timer (e.g., Everyday, Off) for automatic scheduling of spa operation. Each timer can be configured independently to automate when the spa is active or in sleep mode.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/sleepTimers_N_state` (where `N` is the timer number, e.g., `sleepTimers_1_state`, `sleepTimers_2_state`)
- **Payload:** `Everyday`, `Off`, etc.
- **Notes:** Most spas have two sleep timers. You can control each timer individually by publishing to its corresponding topic. If a timer is not present, commands to its topic will be ignored.

### Sleep Timer Begin/End

Set the start and end times for a sleep timer. This allows you to automate when the spa is active or in sleep mode, helping save energy and ensure the spa is ready when you need it.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/sleepTimers_N_begin` (where `N` is the timer number)
- **Payload:** `22:00`
- **Topic:** `sn_esp32/<spaSerialNumber>/set/sleepTimers_N_end` (where `N` is the timer number)
- **Payload:** `07:00`

### Heatpump Mode

Set the operating mode of the heat pump, such as heating, cooling, automatic, or off. This controls how the spa manages water temperature and can optimize energy use.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/heatpump_mode`
- **Payload:** `Heat`, `Cool`, `Auto`, `Off`

### Aux Heat

Enable or disable the auxiliary heat function, if your spa supports it. Aux heat provides additional heating power when needed, such as during rapid heat-up or cold weather.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/heatpump_auxheat`
- **Payload:** `ON` or `OFF`

### Date/Time

Set the spa controller's internal date and time. Keeping accurate time is important for scheduling, automation, and logging events.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/status_datetime`
- **Payload:** `2025-08-15 20:50:10`

### Day of Week

Set the current day of the week on the spa controller. Useful for weekly scheduling, automation, and ensuring timers run on the correct days.

- **Topic:** `sn_esp32/<spaSerialNumber>/set/status_dayOfWeek`
- **Payload:** `Friday`
