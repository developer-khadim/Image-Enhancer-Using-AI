const API_KEY = "wx8inujuavlbr7ns6";
const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image uploaded successfully with task ID:", taskId);

    const enhancedImageData = await fatchEnhancedImage(taskId);
    console.log("Enhanced image fetched successfully:", enhancedImageData);

    console.log("Enhanced image URL:", enhancedImageData);
    // return enhancedImageData;
  } catch (error) {
    console.log(error);
    alert(
      "Error while enhancing the image, please try again later",
      error.massage
    );
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

    if(!data?.data?.task_id){
        throw new Error("Failed to uploading the image");
    }

    return data.data.task_id;
//   return taskId;
};
const fatchEnhancedImage = async (task_id) => {
  // fatch APi
  // /api/tasks/visual/scale/{task_id} ---GET
};
