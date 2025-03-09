# Troubleshooting

If you are having trouble with your eSpa, there are a few steps you can take to make troubleshooting easier. This guide will help you identify common issues and provide solutions to help you get your eSpa up and running. Once you've worked through the guidance on this page, if you're still having trouble, please visit the [#troubleshooting](https://discord.gg/ntCR9hpW9x) channel on Discord for further assistance.

## Run the Latest Version

The first thing you need to do whenever you run into a problem is ensure you are running the latest version of the software. The eSpa software is updated regularly to fix bugs and add new features, and will automatically update on its own, if configured to do so. To update your eSpa, follow the instructions in the [Updating the Software](/firmware-updating) guide.

## Status Lights

### DIY Hardware

On [DIY hardware](/hardware-custom-build), it is recommended that a single LED be included to indicate the status of the eSpa. With a single LED, there are different blink intervals used to indicate various error states. The following table shows the meaning of the different blink intervals:

| Blink Interval       | Description                                                          |
|----------------------|----------------------------------------------------------------------|
| 100ms                | Failed to connect to Wifi - check settings are correct.              |
| 500ms                | Failed to connect to MQTT server - check settings are correct.       |
| 1000ms               | Failed to connect to Spa pool - ensure cables are connected properly.|
| Solid On (no blink)  | eSpa Wifi access point started and waiting for you to connect to it. |

### eSpa Mini and eSpa Max PCBs

[![Knight Rider Animation](/images/knight-rider.gif)](/images/knight-rider.gif)

On the [eSpa Mini and eSpa Max PCBs](/hardware-pcb), there are four LEDs that are used for status indication. The LEDs are labelled 1, 2, 3, and 4. When everything is working fine, the four LEDs will light up in an animation going backwards and forwards. When one or more of the lights is lit up, it indicates an error condition, and you can refer to the table below to identify the issue:

| LED 1            | LED 2            | LED 3            | LED 4            | Description                                                          |
|:----------------:|:----------------:|:----------------:|:----------------:|----------------------------------------------------------------------|
| :white_circle:   | :white_circle:   | :white_circle:   | :white_circle:   | *(Not used)*                                                         |
| :white_circle:   | :white_circle:   | :white_circle:   | :red_circle:     | Failed to connect to Wifi - check settings are correct.              |
| :white_circle:   | :white_circle:   | :red_circle:     | :white_circle:   | Failed to connect to Spa pool - ensure cables are connected properly.|
| :white_circle:   | :white_circle:   | :red_circle:     | :red_circle:     | *(Not used)*                                                         |
| :white_circle:   | :red_circle:     | :white_circle:   | :white_circle:   | Failed to connect to MQTT server - check settings are correct.       |
| :white_circle:   | :red_circle:     | :white_circle:   | :red_circle:     | *(Not used)*                                                         |
| :white_circle:   | :red_circle:     | :red_circle:     | :white_circle:   | *(Not used)*                                                         |
| :white_circle:   | :red_circle:     | :red_circle:     | :red_circle:     | *(Not used)*                                                         |
| :red_circle:     | :white_circle:   | :white_circle:   | :white_circle:   | *(Not used)*                                                         |
| :red_circle:     | :white_circle:   | :white_circle:   | :red_circle:     | *(Not used)*                                                         |
| :red_circle:     | :white_circle:   | :red_circle:     | :white_circle:   | *(Not used)*                                                         |
| :red_circle:     | :white_circle:   | :red_circle:     | :red_circle:     | *(Not used)*                                                         |
| :red_circle:     | :red_circle:     | :white_circle:   | :white_circle:   | *(Not used)*                                                         |
| :red_circle:     | :red_circle:     | :white_circle:   | :red_circle:     | *(Not used)*                                                         |
| :red_circle:     | :red_circle:     | :red_circle:     | :white_circle:   | *(Not used)*                                                         |
| :red_circle:     | :red_circle:     | :red_circle:     | :red_circle:     | eSpa Wifi access point started and waiting for you to connect to it. |

## Web Interface

If you have managed to power up your eSpa and configure it to connect to your WiFi, but you're not getting any data in MQTT (or your home automation system), your spa pool controller might be outputting data in a format that we have not yet seen, which means the eSpa team will need to get the information from you to add support. This happens occasionally, as spa pool controllers have different hardware and firmware.

To check this, you can use the web interface of your eSpa, and click on the 'Spa Response' button to get a text dump from your spa pool. With this information, please visit the [#troubleshooting](https://discord.gg/ntCR9hpW9x) channel on Discord and provide the information to the eSpa team.

## Home Assistant and MQTT

If nothing appears in Home Assistant, first check the status LEDs and web interface.

> Install MQTT explorer... some stuff here

## Collecting Logs

If you have a problem, we are likely going to want to see the debug logs. There are two ways to get the logs:

### 1. Telnet

1. Choose your favourite telnet client (In Windows, Putty is fine).
2. Telnet to the eSpa IP address.
3. Type v and press Enter to enable verbose logging.
4. Generate the problem and copy the logs.

### 2. USB

1. Connect the eSpa to the computer.
2. Use your favourite tool to connect to the eSpas serial interface (port number/id will vary). If you have VSCode installed you can use this. Putty is a lightweight option if you don’t have anything installed already.
3. Type v and press enter to enable verbose logging.
4. Generate the problem and copy the logs.
