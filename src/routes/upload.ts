import { Handler } from 'express';
import fsPromises from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { app } from '../app';
import { basedir } from '../constants';
import { asyncMiddleware } from '../middlewares/async-middleware';
import { upload } from '../middlewares/upload-middleware';

const imagesDir = path.resolve(basedir, 'tmp');

const getImage: Handler = (req, res, next) => {
  try {
    const { id } = req.params;
    const ext = '.jpg';
    res.sendFile(path.resolve(imagesDir, id + ext));
  } catch (e) {
    next(e);
  }
};

const uploadImage: Handler = asyncMiddleware(async (req, res): Promise<void> => {
  console.log(req.file);
  if (req.file) {
    const outputPath = `${req.file.path}.webp`;

    await sharp(req.file.path)
      .clone()
      .resize(150, 150, {
        fit: 'cover',
      })
      .webp({ quality: 60 })
      .toFile(outputPath);

    await fsPromises.unlink(req.file.path);

    res.sendFile(outputPath);
  }
});

const renderTemplate: Handler = (req, res, next) => {
  try {
    res.sendFile(path.resolve(basedir, 'views/upload.html'));
  } catch (e) {
    next(e);
  }
};

app.get('/upload', renderTemplate);

app.get('/api/upload/:id', getImage);

app.post('/api/upload', upload.single('image'), uploadImage);