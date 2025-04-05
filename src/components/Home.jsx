import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePrevire from "./ImagePrevire";



const Home = () => {
  const [Uploadimage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

   

    const UploadImageHandler = async ( file ) =>{
        setUploadImage(URL.createObjectURL(file))
        setLoading(true);

        //call the API to enhance the image
        try{
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setLoading(false);

        }catch(error){
            console.log(error);
            alert(
                "Error while enhancing the image, please try again later"
            )
        }
    };

  return (
    <div>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePrevire
        loading={loading}
        uploaded={Uploadimage}
        enhanced={enhancedImage}
      />
    </div>
  );
};

export default Home;
