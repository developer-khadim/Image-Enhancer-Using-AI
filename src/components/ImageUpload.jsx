import React from "react";


const ImageUpload = ({ UploadImageHandler, onEnhance }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      UploadImageHandler(file);
    }
  };
return (
  <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl mx-auto transition-all hover:shadow-2xl">
    <label
      htmlFor="Input file"
      className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
    >
      <input
        type="file"
        id="Input file"
        className="hidden"
        onChange={ShowImageHandler}
        accept="image/*"
      />
      <div className="space-y-4">
        <span className="text-xl font-semibold text-gray-700 block">
          {selectedFile ? selectedFile.name : "Drop your image here or click to upload"}
        </span>
        <span className="text-sm text-gray-500 block">
          Supported formats: JPG, PNG, WEBP (Max 10MB)
        </span>
      </div>
    </label>
    {selectedFile && (
      <button
        onClick={() => onEnhance(selectedFile)}
        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
      >
        Enhance Image ✨
      </button>
    )}
  </div>
);
};

export default ImageUpload;
