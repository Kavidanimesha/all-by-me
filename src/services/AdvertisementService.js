class AdvertisementServices {
  async upload(image) {
    const uploadData = new FormData();
    uploadData.append("file",image);
    uploadData.append("upload_preset", "advertisements");
    uploadData.append("cloud_name", "dns0zwu0b");

    return fetch("https://api.cloudinary.com/v1_1/dns0zwu0b/image/upload", {
      method: "POST",
      body: uploadData,
    });
  }
}

export default new AdvertisementServices();
