import React from "react";


const ImageUpload = (Props) => {

const ShowImageHandler = (e) =>{
    const file = e.target.files[0];
  if(file){
    Props.UploadImageHandler(file);
  }
}

    return (
    <>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl ">
        <label
          htmlFor="Input file"
          className="block w-full cursor-pointer border-2 border-dotted border-gray-300 rounded-lg p-6  text-center hover:border-blue-500 transition-all"
        >
            <input
                type="file"
                id="Input file"
                className="hidden"
                onChange={ShowImageHandler}
            />                
          <span className="text-lg font-medium text-gray-600" >   Click or drage to upload your image </span>
        </label>
      </div>
    </>
  );
};

export default ImageUpload;
