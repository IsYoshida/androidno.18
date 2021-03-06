#!bin/bash

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"[$RED!$YELLOW] Eu vou instalar as dependências essenciais pro bot funcinar, você apenas concorda com os programas que irei instalar tá? [y/n]"
read inp
if [ "$inp" = "y" ]; then
    pkg update
    pkg upgrade
    pkg install ruby
    gem install lolcat
    pkg install nodejs 
    pkg install libwebp 
    pkg install ffmpeg 
    pkg install wget 
    pkg install tesseract 
    pkg install graphicsmagick 
    pkg install imagemagick 
    npm install
    npm install pm2 -g
    echo $GREEN"Tudo pronto, pode dar npm start, escanear o código QR e divirta-se com o bot :)"
fi
if [ "$inp" = "n" ]; then
    echo $RED"Então ta, se divirta tentando descobrir as dependências sozinho e manualmente :)"
    exit
fi

