# Building Firmware from Source

::: info For Developers
This page is for developers who want to build eSpa firmware from source, customize the code, or contribute to the project. **If you just want to update your eSpa device to the latest version, see the [Firmware Updating](/firmware-updating) guide instead.**
:::

The eSpa firmware is open source and available on [GitHub](https://github.com/wayne-love/ESPySpa). It's built using [Platform.io](https://platformio.org/), a powerful development environment for embedded systems that makes building and flashing firmware straightforward.

This guide covers how to set up your development environment and build the firmware using either the Platform.io GUI (in VSCode) or the command-line interface.

## Prerequisites

Before you begin, make sure you have:

- A computer running Windows, macOS, or Linux
- A USB cable to connect your eSpa device
- Git installed on your system
- Python 3.6 or newer

## Setting Up Platform.io GUI (VSCode)

The Platform.io IDE extension for Visual Studio Code provides a visual interface for building and flashing firmware.

### Installation
### Installation

1. **Install VSCode**: Download and install [Visual Studio Code](https://code.visualstudio.com/) if you don't already have it
2. **Install Platform.io Extension**:
   - Open VSCode
   - Click the Extensions icon in the left sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
   - Search for "PlatformIO IDE"
   - Click "Install"
   - Wait for the installation to complete (this may take a few minutes)
   - Restart VSCode when prompted

### Getting the Source Code

Clone the eSpa repository to your local machine:

```bash
git clone https://github.com/wayne-love/ESPySpa.git
cd ESPySpa
```

Alternatively, you can download the repository as a ZIP file from GitHub and extract it.

### Opening the Project

1. In VSCode, click **File > Open Folder** (or **File > Open** on macOS)
2. Navigate to the `ESPySpa` directory you cloned/extracted
3. Click "Select Folder" to open the project
4. Platform.io will automatically detect the project and initialize it (this may take a moment)

### Understanding Build Environments

The eSpa project supports multiple hardware configurations through Platform.io environments. Open the `platformio.ini` file at the root of the project to see all available environments:

- **`esp32dev`**: For generic ESP32 development boards and DIY builds
- **`espa-v1`**: For eSpa Mini and eSpa Max v1.x PCBs (ESP32-S3 based)
- **`espa-v2`**: For eSpa Mini and eSpa Max v2.x PCBs (newer hardware)

Each environment has specific settings for the target hardware, including pin configurations, board definitions, and build flags.

::: tip
Not sure which environment to use? Check the [hardware section](/hardware) for details about your device.
:::

### Building the Firmware

1. **Select your environment**:
   - Look at the bottom toolbar in VSCode
   - Click on "Default (ESPySpa)" or the current environment name
   - Select your target environment from the list (e.g., `espa-v1`, `espa-v2`, or `esp32dev`)

2. **Build the project**:
   - Click the checkmark (✓) icon in the bottom toolbar, or
   - Press `Ctrl+Alt+B` / `Cmd+Alt+B`, or
   - Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and run "PlatformIO: Build"

3. **Watch the build progress**:
   - The terminal will open and show build output
   - First build will take several minutes as dependencies are downloaded
   - Subsequent builds are much faster (typically 10-30 seconds)
   - Look for "SUCCESS" message when complete

::: tip
The first build downloads all necessary libraries and toolchains. This is a one-time process and can take 5-10 minutes depending on your internet connection.
:::

### Uploading to Your Device

1. **Connect your device**:
   - Connect your eSpa to your computer via USB-C cable
   - Make sure the cable supports data transfer (not just power)

2. **Upload firmware**:
   - Click the right arrow (→) icon in the bottom toolbar, or
   - Press `Ctrl+Alt+U` / `Cmd+Alt+U`, or
   - Open Command Palette and run "PlatformIO: Upload"

3. **Monitor the upload**:
   - Platform.io will automatically build (if needed) and then upload
   - You'll see progress in the terminal
   - Upload typically takes 1-2 minutes

### Monitoring Serial Output

To see debug output from your eSpa:

1. **Start serial monitor**:
   - Click the plug icon (🔌) in the bottom toolbar, or
   - Press `Ctrl+Alt+S` / `Cmd+Alt+S`, or
   - Open Command Palette and run "PlatformIO: Serial Monitor"

2. **Upload and monitor in one step**:
   - Click the right arrow with line (→|) icon in the bottom toolbar
   - This builds, uploads, and starts monitoring automatically

3. **Using the monitor**:
   - Type `v` and press Enter to enable verbose logging
   - Type `h` and press Enter to see available commands
   - Press `Ctrl+C` to stop monitoring

::: tip
Keep the serial monitor open while developing to see real-time debug output and catch errors immediately.
:::

## Setting Up Platform.io CLI

If you prefer working from the command line, Platform.io offers a powerful CLI that provides the same functionality as the GUI.

### Installation

```bash
# Install Platform.io Core (CLI) using pip
pip install -U platformio

# Verify installation
pio --version
```

::: tip
If you already have the Platform.io VSCode extension installed, you can use the CLI through VSCode's integrated terminal - the `pio` command will be available automatically.
:::

### Getting the Source Code

```bash
# Clone the repository
git clone https://github.com/wayne-love/ESPySpa.git
cd ESPySpa

# View available environments
pio project config
```

### Building with CLI

```bash
# Build for specific environment
pio run -e espa-v1

# Build for multiple environments
pio run -e espa-v1 -e espa-v2

# Build all environments (defined in platformio.ini)
pio run

# Clean build artifacts before building
pio run --target clean
pio run -e espa-v1
```

The build output will show compilation progress and any errors. Compiled firmware will be in `.pio/build/<environment>/` directory.

### Uploading with CLI

```bash
# Upload to connected device
pio run -e espa-v1 --target upload

# Build and upload in one command
pio run -e espa-v1 --target upload

# Upload to specific port
pio run -e espa-v1 --target upload --upload-port /dev/ttyUSB0
```

### Monitoring Serial Output

```bash
# Start serial monitor
pio device monitor

# Specify baud rate
pio device monitor --baud 115200

# Monitor specific port
pio device monitor --port /dev/ttyUSB0

# Upload and immediately start monitoring
pio run -e espa-v1 --target upload --target monitor
```

::: tip
In the serial monitor, type `v` + Enter for verbose logging, or `h` + Enter to see available commands. Press `Ctrl+C` to exit the monitor.
:::

### Useful CLI Commands

```bash
# List all connected devices and their ports
pio device list

# Update Platform.io and all packages
pio upgrade
pio pkg update

# Check code for issues (static analysis)
pio check

# Clean all build artifacts
pio run --target clean

# Show project configuration
pio project config

# Install specific library
pio pkg install -e espa-v1 "ArduinoJson@^6.21.0"
```

## Development Workflow Tips

### Making Code Changes

1. **Edit source files**: Modify files in the `src/` directory
2. **Build to check for errors**: Run a build to catch compilation errors early
3. **Upload and test**: Flash to your device and monitor serial output
4. **Iterate**: Make changes, rebuild, and test until complete

### Working with Multiple Devices

If you have multiple ESP32 devices connected:

```bash
# List all devices to find port names
pio device list

# Upload to specific device
pio run -e espa-v1 --target upload --upload-port COM3
```

Or specify the port in `platformio.ini`:

```ini
[env:espa-v1]
upload_port = /dev/ttyUSB0  ; Linux/Mac
; upload_port = COM3         ; Windows
```

### Creating Custom Environments

You can create custom build environments in `platformio.ini`:

```ini
[env:my-custom-build]
extends = env:espa-v1
build_flags = 
    ${env:espa-v1.build_flags}
    -DMY_CUSTOM_FLAG=1
    -DDEBUG_MODE
```

### Testing Development Branches

To test unreleased features:

```bash
# Switch to development branch
git checkout develop

# Pull latest changes
git pull origin develop

# Rebuild with new code
pio run --target clean
pio run -e espa-v1 --target upload
```

::: warning
Development branches may contain unstable code. Always be prepared to flash stable firmware if issues occur.
:::

## Troubleshooting Platform.io Issues

### Device Not Recognized

If Platform.io can't find your device:

1. **Check USB drivers**: Install drivers for your ESP32 board
   - [CH340 drivers](http://www.wch.cn/downloads/CH341SER_ZIP.html) - Common on cheaper boards
   - [CP2102 drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers) - Common on official boards
2. **Verify cable**: Use a data-capable USB cable (not power-only)
3. **List devices**: Run `pio device list` to see all connected serial devices
4. **Check permissions** (Linux/Mac): Add your user to the dialout group:
   ```bash
   sudo usermod -a -G dialout $USER
   # Log out and back in for changes to take effect
   ```

### Upload Failed - "Timed Out Waiting for Packet Header"

This common error means the ESP32 isn't entering flash mode:

1. **Hold BOOT button**: Press and hold the BOOT button on your board, start the upload, release when upload begins
2. **Auto-reset issues**: Some boards need manual reset - press BOOT + RST, release RST, release BOOT
3. **Lower upload speed**: Add to your environment in `platformio.ini`:
   ```ini
   upload_speed = 115200
   ```
4. **Try different port**: Some USB ports provide better power/signal than others

### Build Errors

If compilation fails:

1. **Clean and rebuild**:
   ```bash
   pio run --target clean
   pio run -e espa-v1
   ```
2. **Update dependencies**:
   ```bash
   pio pkg update
   pio pkg install
   ```
3. **Delete cache**:
   ```bash
   rm -rf .pio
   pio run -e espa-v1
   ```
4. **Check Python version**: Ensure Python 3.6+ is installed:
   ```bash
   python --version
   ```

### Wrong Environment Selected

If firmware builds but device doesn't work:

1. **Verify environment**: Make sure you're building for the correct hardware
   - eSpa v1 PCBs → `espa-v1`
   - eSpa v2 PCBs → `espa-v2`
   - DIY/generic boards → `esp32dev`
2. **Check board in platformio.ini**: Ensure the board setting matches your hardware
3. **Erase flash and re-upload**:
   ```bash
   pio run --target erase
   pio run -e espa-v1 --target upload
   ```

### Serial Monitor Not Working

If you can't see serial output:

1. **Check baud rate**: eSpa uses 115200 baud (default for Platform.io)
2. **Close other programs**: Only one program can access the serial port at a time
3. **Specify port explicitly**:
   ```bash
   pio device monitor --port /dev/ttyUSB0
   ```
4. **Try after upload**:
   ```bash
   pio run -e espa-v1 --target upload --target monitor
   ```

### Permission Denied (Linux/Mac)

If you get "Permission denied" errors:

**Linux:**
```bash
# Add user to dialout group
sudo usermod -a -G dialout $USER

# Or temporarily fix permissions
sudo chmod 666 /dev/ttyUSB0
```

**Mac:**
```bash
# Check permissions
ls -l /dev/cu.usb*

# If needed, may require running with elevated permissions
sudo pio run -e espa-v1 --target upload
```

### Out of Memory During Build

If compilation runs out of memory:

1. **Close other applications**: Free up system RAM
2. **Build one environment at a time**:
   ```bash
   pio run -e espa-v1
   ```
3. **Increase system swap** (Linux)

### Platform.io Stuck or Frozen

If Platform.io becomes unresponsive:

1. **Kill Platform.io processes**:
   ```bash
   # Linux/Mac
   pkill -f platformio
   
   # Windows (Task Manager)
   # End "Python" processes related to Platform.io
   ```
2. **Restart VSCode** if using the GUI
3. **Clear Platform.io cache**:
   ```bash
   rm -rf ~/.platformio/.cache
   ```

### Dependencies Won't Update

If libraries aren't updating properly:

```bash
# Force clean and reinstall
rm -rf .pio
pio pkg install --force

# Update Platform.io itself
pio upgrade

# Update all libraries
pio pkg update
```

## Getting Help

If you're still experiencing issues:

1. **Check Discord**: Search the [#development channel](https://discord.gg/faK8Ag4wHn) for similar issues
2. **Platform.io docs**: Visit [Platform.io documentation](https://docs.platformio.org/)
3. **Ask for help**: Post in Discord #development with:
   - Your operating system
   - Platform.io version (`pio --version`)
   - Environment you're building (`espa-v1`, etc.)
   - Full error message from the terminal
   - Output of `pio device list`

## Contributing to eSpa

Interested in contributing to the project? Here's how:

1. **Fork the repository** on GitHub
2. **Create a feature branch**: `git checkout -b my-feature`
3. **Make your changes** and test thoroughly
4. **Commit with clear messages**: `git commit -m "Add feature X"`
5. **Push to your fork**: `git push origin my-feature`
6. **Open a Pull Request** on GitHub

See the [contribution guidelines](https://github.com/wayne-love/ESPySpa/blob/main/CONTRIBUTING.md) for more details.

::: tip
Join the [eSpa Discord](https://discord.gg/faK8Ag4wHn) #development channel to discuss ideas and get feedback before starting major changes.
:::
