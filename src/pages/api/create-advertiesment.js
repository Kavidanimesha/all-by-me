import DatauriParser from 'datauri/parser';
import cloudinary from 'utils/cloudinary';

export default function handler(req, res) {
    // get parsed image and video from multer
    const image = req.files.filter((file) => file.fieldname === 'image')[0];
     // create a neew Data URI parser
     const parser = new DatauriParser();
     try {
       // create image
       const createImage = async (img) => {
         const base64Image = parser.format(path.extname(img.originalname).toString(), img.buffer);
         const uploadedImageResponse = await cloudinary.uploader.upload(base64Image.content, 'advertisement', { resource_type: 'image' });
         return uploadedImageResponse;
       }}
    res.status(200).json({ name: 'John Doe' })
  }