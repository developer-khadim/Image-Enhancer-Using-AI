import React from "react";
import { FiUploadCloud, FiZap } from "react-icons/fi";

const ImageUpload = ({ UploadImageHandler, onEnhance }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [dragActive, setDragActive] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      UploadImageHandler(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      UploadImageHandler(file);
    }
  };

  // Format file size
  const formatFileSize = (size) => {
    if (size < 1024) return size + ' bytes';
    else if (size < 1024 * 1024) return (size / 1024).toFixed(1) + ' KB';
    else return (size / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl mx-auto transition-all hover:shadow-2xl border border-gray-100">
      <label
        htmlFor="Input file"
        className={`block w-full cursor-pointer border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 
          ${dragActive 
            ? "border-blue-500 bg-blue-50 scale-102" 
            : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="Input file"
          className="hidden"
          onChange={ShowImageHandler}
          accept="image/*"
        />
        <div className="space-y-4">
          <div className={`text-blue-500 mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full transition-all duration-300 ${dragActive ? 'scale-110 animate-pulse' : ''}`}>
            <FiUploadCloud className="w-8 h-8" />
          </div>
          <span className="text-xl font-semibold text-gray-700 block">
            {selectedFile ? selectedFile.name : "Drop your image here or click to upload"}
          </span>
          {selectedFile && (
            <div className="text-sm text-blue-600 mt-2">
              Size: {formatFileSize(selectedFile.size)}
            </div>
          )}
          <span className="text-sm text-gray-500 block">
            Supported formats: JPG, PNG, WEBP (Max 10MB)
          </span>
        </div>
      </label>
      {selectedFile && (
        <button
          onClick={() => onEnhance(selectedFile)}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-102 hover:shadow-lg flex items-center justify-center gap-2"
        >
          <FiZap className="w-5 h-5" />
          <span>Enhance Image</span>
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
