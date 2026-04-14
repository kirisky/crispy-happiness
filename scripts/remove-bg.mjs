import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const inputPath = path.join(__dirname, '../public/images/logo-source.png')
const outputPath = path.join(__dirname, '../public/images/logo-transparent.png')

const image = sharp(inputPath)
const { data, info } = await image
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
const pixelData = new Uint8Array(data)

// Remove near-white background: set alpha=0 for pixels where R,G,B > 220
for (let i = 0; i < width * height; i++) {
  const offset = i * channels
  const r = pixelData[offset]
  const g = pixelData[offset + 1]
  const b = pixelData[offset + 2]
  // White/near-white background threshold
  if (r > 220 && g > 220 && b > 220) {
    pixelData[offset + 3] = 0 // fully transparent
  } else if (r > 200 && g > 200 && b > 200) {
    // Semi-transparent for edge anti-aliasing
    const maxChannel = Math.max(r, g, b)
    const alpha = Math.round(((255 - maxChannel) / 55) * 255)
    pixelData[offset + 3] = Math.min(alpha, pixelData[offset + 3])
  }
}

await sharp(Buffer.from(pixelData), {
  raw: { width, height, channels },
})
  .png()
  .toFile(outputPath)

console.log(`[v0] Transparent logo saved to: ${outputPath}`)
console.log(`[v0] Dimensions: ${width}x${height}`)
