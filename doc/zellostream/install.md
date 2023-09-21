# Dependencies
## Git
```bash
sudo apt install git
```

## Python 3
```bash
sudo apt install python3 python3-pip
```

## Add local bin into path
Add this line on the end of `.bashrc` in your home directory
```bash
PATH="/home/pi/.local/bin:$PATH"
```

## PyAudio dependencies
```bash
sudo apt-get install -y libasound-dev portaudio19-dev libportaudio2 libportaudiocpp0
```

## librosa on RPI
```bash
sudo apt-get install llvm-11  
LLVM_CONFIG=llvm-config-11 pip3 install llvmlite  
LLVM_CONFIG=llvm-config-11 pip3 install librosa  
sudo apt-get install libblas-dev  
sudo apt-get install libatlas-base-dev
```

## Python dependencies
```bash
pip3 install pycryptodome  
pip3 install pyaudio  
pip3 install pulsectl  
pip3 install websocket-client  
#pip3 install numpy --upgrade
pip3 install numpy
pip3 install opuslib  
pip3 install librosa
```

## rtl_fm
```bash
sudo apt update
sudo apt install git cmake pkg-config libusb-1.0-0-dev sox

git clone git://git.osmocom.org/rtl-sdr.git
cd rtl-sdr

mkdir build
cd build

cmake ../ -DINSTALL_UDEV_RULES=ON
make
sudo make install

sudo cp ../rtl-sdr.rules /etc/udev/rules.d/
sudo ldconfig
```

```bash
sudo nano /etc/modprobe.d/blacklist-rtl.conf
```

Add lines
```
blacklist dvb_usb_rtl28xxu
blacklist rtl2832
blacklist rtl2830
```

```bash
# make sure RTL device is plugged in you raspberry
sudo reboot
```


## rtlfmzello.sh
```bash
#!/bin/bash

rtl_fm -M fm -f 764000000 -g 49 -s 48k -l 50 | python3 stdinpythonclient.py
```
```bash
chmod +x rtlfmzello.sh
```

## z-con
### nodejs
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

source .bashrc

nvm install 18

node --version #v18.18.0
```

### server
```bash
git clone https://github.com/eduardtomasek/z-con.git

cd z-con

npm ci
```

```bash
nano config.toml
```
Setup correct paths:
```toml
[auth]
userName = "zdr"
userPassword = "zdr"

[files]
configFilePath = "/home/pi/SDR-Zello-stream/zellostream/config.json"
privateKeyPath = "/home/pi/SDR-Zello-stream/zellostream/privatekey.pem"
runScriptPath = "/home/pi/SDR-Zello-stream/zellostream/rtlfmzello.sh"

[server]
port = 3000
```

### pm2
```bash
npm i -g pm2

pm2 start index.js
```