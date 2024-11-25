# Troubleshooting

## Status Lights

On [DIY hardware](/hardware-custom-build), it is recommended that a single LED be included to indicate the status of the eSpa. With a single LED, there are different blink intervals used to indicate various error states. The following table shows the meaning of the different blink intervals:

| Blink Interval      | Description                                                          |
|---------------------|----------------------------------------------------------------------|
| Solid On (no blink) | eSpa Wifi access point started and waiting for you to connect to it. |
| 250ms               | Failed to connect to Wifi - check settings are correct.              |
| 1000ms              | Failed to connect to MQTT server - check settings are correct.       |

### DIY Hardware

On the [eSpa Mini and eSpa Max PCBs](/hardware-pcb), there are four LEDs that are used for status indication. The LEDs are labelled 1, 2, 3, and 4. When everything is working fine, the four LEDs will light up in an animation going backwards and forwards. When one or more of the lights is lit up, it indicates an error condition, and you can refer to the table below to identify the issue:

| LED 1 | LED 2 | LED 3 | LED 4 | Error Code | Description                                                          |
|:-----:|:-----:|:-----:|:-----:|:----------:|----------------------------------------------------------------------|
| OFF   | OFF   | OFF   | OFF   | 0          | *(Not used)*                                                         |
| OFF   | OFF   | OFF   | ON    | 1          | Failed to connect to Wifi - check settings are correct.              |
| OFF   | OFF   | ON    | OFF   | 2          | Failed to connect to MQTT server - check settings are correct.       |
| OFF   | OFF   | ON    | ON    | 3          | *(Not used)*                                                         |
| OFF   | ON    | OFF   | OFF   | 4          | *(Not used)*                                                         |
| OFF   | ON    | OFF   | ON    | 5          | *(Not used)*                                                         |
| OFF   | ON    | ON    | OFF   | 6          | *(Not used)*                                                         |
| OFF   | ON    | ON    | ON    | 7          | *(Not used)*                                                         |
| ON    | OFF   | OFF   | OFF   | 8          | *(Not used)*                                                         |
| ON    | OFF   | OFF   | ON    | 9          | *(Not used)*                                                         |
| ON    | OFF   | ON    | OFF   | 10         | *(Not used)*                                                         |
| ON    | OFF   | ON    | ON    | 11         | *(Not used)*                                                         |
| ON    | ON    | OFF   | OFF   | 12         | *(Not used)*                                                         |
| ON    | ON    | OFF   | ON    | 13         | *(Not used)*                                                         |
| ON    | ON    | ON    | OFF   | 14         | *(Not used)*                                                         |
| ON    | ON    | ON    | ON    | 15         | eSpa Wifi access point started and waiting for you to connect to it. |

## Web Interface

> Something about connecting to the web interface...

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
