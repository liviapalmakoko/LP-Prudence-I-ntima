#!/bin/zsh
# Exporta os banners 2 e 3 de banners.html para dist/assets/banners (PNG temporário -> WebP).
# Requer: servidor na raiz do repositório (python3 -m http.server 4174) e Python com Pillow.
# Uso: fontes-banners/exportar.sh [pasta-de-saida]
cd "$(dirname "$0")/.."
OUT=${1:-dist/assets/banners}; C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; TMP=$(mktemp -d)
for b in infinity lencos; do
  n=$([ $b = infinity ] && echo 02 || echo 03)
  "$C" --headless=new --disable-gpu --hide-scrollbars --window-size=1920,1080 --virtual-time-budget=4000 --screenshot=$TMP/$n-$b-desktop.png "http://localhost:4174/fontes-banners/banners.html?b=$b&f=desktop" >/dev/null 2>&1
  "$C" --headless=new --disable-gpu --hide-scrollbars --window-size=1080,1350 --virtual-time-budget=4000 --screenshot=$TMP/$n-$b-mobile.png "http://localhost:4174/fontes-banners/banners.html?b=$b&f=mobile" >/dev/null 2>&1
done
python3 - "$TMP" "$OUT" <<'PY'
import sys,glob,os
from PIL import Image
tmp,out=sys.argv[1:]
for f in sorted(glob.glob(tmp+'/*.png')):
    dst=os.path.join(out,os.path.basename(f)[:-4]+'.webp')
    Image.open(f).convert('RGB').save(dst,'WEBP',quality=86,method=6); print(dst,os.path.getsize(dst)//1024,'KB')
PY
rm -r $TMP
