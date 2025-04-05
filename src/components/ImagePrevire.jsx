import Loading from "./loading";
import { FiImage, FiZap, FiDownload } from "react-icons/fi";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  const handleDownload = (imageUrl, filename) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename || 'enhanced-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-5xl mx-auto">
      {/* Original Image */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 group">
        <h2 className="text-xl font-semibold text-center bg-gradient-to-r from-gray-700 to-gray-900 text-white py-4 px-4 flex items-center justify-center gap-2">
          <FiImage className="w-5 h-5" />
          <span>Original Image</span>
        </h2>
        {uploaded ? (
          <div className="relative">
            <img
              src={uploaded}
              alt="Original"
              className="w-full h-96 object-contain bg-gray-100 p-2 transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              Original
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96 bg-gray-100 text-gray-500">
            <FiImage className="w-12 h-12 mb-3 text-gray-400" />
            <span>Upload an image to begin</span>
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-blue-100 group">
        <h2 className="text-xl font-semibold text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-4 flex items-center justify-center gap-2">
          <FiZap className="w-5 h-5" />
          <span>Enhanced Image</span>
        </h2>
        {loading ? (
          <Loading />
        ) : enhanced ? (
          <div className="relative">
            <img
              src={enhanced}
              alt="Enhanced"
              className="w-full h-96 object-contain bg-gray-100 p-2 animate-fade-in transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-2 right-2 bg-indigo-600/90 text-white text-xs px-2 py-1 rounded">
              Enhanced
            </div>
            <button 
              onClick={() => handleDownload(enhanced, 'enhanced-image.jpg')}
              className="absolute top-2 right-2 bg-indigo-600/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-indigo-800"
              title="Download enhanced image"
            >
              <FiDownload className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96 bg-gray-100 text-gray-500">
            <FiZap className="w-12 h-12 mb-3 text-gray-400" />
            <span>Enhanced image will appear here</span>
          </div>
        )}
      </div>

      {uploaded && enhanced && (
        <div className="lg:col-span-2 mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg text-center shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <p className="text-sm text-blue-800 mb-3 md:mb-0">
              🎉 Enhancement complete! Your image has been successfully processed.
            </p>
            <button
              onClick={() => handleDownload(enhanced, 'enhanced-image.jpg')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download Enhanced Image</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;