import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.resolve('src/assets/solutions');
const targetWidth = 1600;
const formats: Array<{ ext: string; options: sharp.WebpOptions | sharp.AvifOptions; type: 'webp' | 'avif' }> = [
  { ext: '.webp', options: { quality: 82 }, type: 'webp' },
  { ext: '.avif', options: { quality: 45 }, type: 'avif' },
];

async function optimizeImage(filePath: string) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const buffer = fs.readFileSync(filePath);
  const image = sharp(buffer).resize({ width: targetWidth, withoutEnlargement: true });

  await Promise.all(
    formats.map(async ({ ext, options, type }) => {
      const outputPath = path.join(inputDir, `${fileName}${ext}`);
      if (fs.existsSync(outputPath)) {
        return;
      }
      const pipeline = type === 'webp' ? image.webp(options) : image.avif(options as sharp.AvifOptions);
      await pipeline.toFile(outputPath);
      // eslint-disable-next-line no-console
      console.log(`Created ${outputPath}`);
    })
  );
}

async function run() {
  if (!fs.existsSync(inputDir)) {
    console.error(`Input directory not found: ${inputDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(inputDir).filter((file) => file.toLowerCase().endsWith('.png'));
  if (!files.length) {
    console.warn('No PNG files found to optimize.');
    return;
  }

  await Promise.all(files.map((file) => optimizeImage(path.join(inputDir, file))));
  console.log('Optimization complete.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
