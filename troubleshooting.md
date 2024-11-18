# Troubleshooting

## Status

> Something about the lights indicating the mode...

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
