# Building Your Own Hardware

::: warning
This project will not work on all spa pools. Refer to the [compatibility](/compatibility) page to understand if your spa pool is compatible with this project.
:::

::: danger 
It is really important to note that shorting pins 7 and 8 on the `EXP1` port will cause the spa controller to short, and cause irreparable damage to the controller. This is why it is important to build your own hardware with care, and to test it thoroughly before connecting it to your spa pool. We've already heard of at least two people who have had to replace their spa controllers due to this mistake.
:::

## Components

The table below lists a few options for purchasing the required components. [AliExpress](https://aliexpress.com) is typically cheaper but has a much slower delivery, compared with the more expensive [Core Electronics](https://core-electronics.com.au/) (based in Australia), with their faster delivery times.

| Component        | Store links | Comments |
|------------------|-------------|----------|
| ESP32            | [AliExpress](https://www.aliexpress.com/item/1005001929935550.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) / [Core](https://core-electronics.com.au/firebeetle-esp32-e-iot-microcontroller-with-header-supports-wi-fi-bluetooth.html) | Get 1 already-wielded ESP32. |
| RJ45 connector   | [AliExpress](https://www.aliexpress.com/item/1005003717285471.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) / [Core](https://core-electronics.com.au/sparkfun-rj45-magjack-breakout.html) | Get a 'H Type+DIP Pins'. |
| Buck converter   | [AliExpress](https://www.aliexpress.com/item/1005002603013499.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) / [Core](https://core-electronics.com.au/sparkfun-babybuck-regulator-breakout-3-3v-ap63203.html) | Get a '5-40V to 3.3V' converter. |
| 330 ohm Resistor | [AliExpress](https://www.aliexpress.com/item/32952657927.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) / [Core](https://core-electronics.com.au/resistor-330-ohm-1-6th-watt-pth.html) | You need two 330 ohm resistors. |

Beyond these key components, you may want to buy some protoboards, breadboards, pin headers, cables, etc to build your device. Some useful links include:

| Component | Store links | Comments |
|-----------|-------------|----------|
| Pin Headers | [AliExpress](https://www.aliexpress.com/item/32724478308.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) | |
| Perfboard | [AliExpress](https://www.aliexpress.com/item/1005003422520490.html?spm=a2g0o.order_list.0.0.74be1802hFqod2) | If you want to solder your hardware together. |

## Assembly Images

To keep things as simple as possible, off the shelf modules have been used. You can click the images below to see a larger version of the image.

::: tip
The resistors on the RX/TX pins are recommended but optional.
:::

[![Circuit diagram](/images/circuit.png){width=50%}](/images/circuit.png)
[![Individual components](/images/disassembled.png){width=50%}](/images/disassembled.png)
[![Board wiring on back](/images/wiring.png){width=50%}](/images/wiring.png)
[![The final assembled board](/images/board.png){width=50%}](/images/board.png)
