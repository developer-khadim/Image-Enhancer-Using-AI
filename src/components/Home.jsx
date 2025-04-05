import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePrevire";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhancedImageAPI";
const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = (file) => {
    setUploadImage(URL.createObjectURL(file));
  };

  const handleEnhance = async (file) => {
    setLoading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
    } catch (error) {
      console.log(error);
      alert("Error enhancing image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-1 w-full">
      <ImageUpload UploadImageHandler={UploadImageHandler} onEnhance={handleEnhance} />
      <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage?.image} />
    </main>
  );
};

export default Home;