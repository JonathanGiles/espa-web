# Firmware

The eSpa firmware is available for download from the [eSpa GitHub repository](https://github.com/wayne-love/ESPySpa). It is a [Platform.io project](https://platformio.org/), which makes it really easy to build and upload to your [hardware](/hardware).

## Building and flashing the firmware

Follow these steps to build the firmware:

1. [Download and install Platform.io](https://platformio.org/install).
2. [Clone the eSpa repository](https://github.com/wayne-love/ESPySpa) to your computer.
3. Open the project in Platform.io.
4. Determine your build environment:
   1. In platform.io, look at the `platformio.ini` file. There are different environments available for different hardware. There is `esp32dev` for the ESP32 development board, and `spa-control-pcb` for the custom eSpa control board. You can learn more about hardware options in the [hardware section](/hardware).
5. Connect your hardware to your computer.
6. Choose 'upload and monitor' in Platform.io to build and upload the firmware to your hardware. You should see the firmware being uploaded and the serial monitor starting. If this completes successfully, you should start to see debug output in the terminal window from the ESP32 chip.
