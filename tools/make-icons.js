// node tools/make-icons.js
//
// Draws the app icon — a plate with a fork and a knife, in the page's
// pixel-art style — and writes the PNG files the manifest and iPhones ask
// for into icons/. Needs nothing but Node. The plate stays inside the
// middle 80% of the square, so a phone may crop the icon to a circle.
const fs = require('fs'), path = require('path'), zlib = require('zlib');

const GRID = 16;
const INK = { B: [90, 62, 43], w: [255, 250, 242], c: [246, 231, 211], f: [139, 94, 60] };
const FORK = ['5,4', '5,5', '5,6', '7,4', '7,5', '7,6', '5,7', '6,7', '7,7', '6,8', '6,9', '6,10', '6,11'];
const KNIFE = ['10,4', '10,5', '10,6', '10,7', '10,8', '10,9', '10,10', '10,11', '9,4', '9,5', '9,6', '9,7'];

// The colour of one cell of the 16 × 16 drawing
function cell(x, y) {
  if (FORK.includes(x + ',' + y) || KNIFE.includes(x + ',' + y)) return INK.f;
  const d = Math.hypot(x - 7.5, y - 7.5);
  return d <= 4.7 ? INK.c : d <= 6.2 ? INK.w : INK.B;
}

/* ── A PNG file by hand: RGB rows, zlib, three chunks ── */
const CRC = Array.from({ length: 256 }, (_, n) => {
  for (let k = 0; k < 8; k++) n = n & 1 ? 0xEDB88320 ^ (n >>> 1) : n >>> 1;
  return n >>> 0;
});
function crc(buf) {
  let c = 0xFFFFFFFF;
  for (const byte of buf) c = CRC[(c ^ byte) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}
function chunk(type, data) {
  const head = Buffer.alloc(8), tail = Buffer.alloc(4);
  head.writeUInt32BE(data.length, 0);
  head.write(type, 4, 'ascii');
  tail.writeUInt32BE(crc(Buffer.concat([head.slice(4), data])), 0);
  return Buffer.concat([head, data, tail]);
}

// Whole cells only, so the pixels stay square; what is left over is border
function png(size) {
  const scale = Math.floor(size / GRID), pad = (size - GRID * scale) / 2;
  const rows = Buffer.alloc(size * (1 + size * 3));
  for (let y = 0; y < size; y++) {
    const at = y * (1 + size * 3);                  // each row starts with its filter byte (0)
    for (let x = 0; x < size; x++) {
      const cx = Math.floor((x - pad) / scale), cy = Math.floor((y - pad) / scale);
      const rgb = cx < 0 || cy < 0 || cx >= GRID || cy >= GRID ? INK.B : cell(cx, cy);
      rows.set(rgb, at + 1 + x * 3);
    }
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header.set([8, 2, 0, 0, 0], 8);                   // 8 bits a channel, RGB
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', header),
    chunk('IDAT', zlib.deflateSync(rows, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

const dir = path.join(__dirname, '..', 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);
[['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]].forEach(([name, size]) => {
  fs.writeFileSync(path.join(dir, name), png(size));
  console.log(name, size + ' × ' + size);
});
