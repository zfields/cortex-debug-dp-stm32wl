# cortex-debug-dp-stm32wl README

This extension provides device support (SVD Definitions) for the STM32 WL family for the [Cortex-Debug](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug) extension for Visual Studio Code.

## Requirements

This extension requires that the Cortex-Debug V0.3.0 or higher

## Device Compatibility

This extension should be compatible with all ST devices in
[this list](https://www.segger.com/supported-devices/jlink/st/stm32wl), except
those matching the `STM32WLE4xx` pattern.

If using a multicore device (e.g. `STM32WL55CC`), then you must provide the name qualified by the chipset (e.g. `STM32WL55CC_M4`).

If known, you may specify the name of the appropriate `.svd` file from the following list:

- `STM32WL5x_CM0P.svd`
- `STM32WL5x_CM4.svd`
- `STM32WLE5_CM4.svd`
