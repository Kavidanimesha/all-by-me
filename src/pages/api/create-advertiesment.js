import DatauriParser from 'datauri/parser';
import cloudinary from 'utils/cloudinary';

export default async function handler(req, res) {
  const response = await fetch("http://localhost:5050/advertisement", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Credentials": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods":
        "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    },
    body: req.body,
  });
  const advertisements = await response.json()
















































  
     
    res.status(200).json({ name: 'John Doe' })
  }