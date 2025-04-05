import Loading from "./loading";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
      {/* Original Image */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all hover:scale-105">
        <h2 className="text-xl font-semibold text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3">
          Original Image
        </h2>
        {uploaded ? (
          <img
            src={uploaded}
            alt="Original"
            className="w-full h-96 object-contain bg-gray-100"
          />
        ) : (
          <div className="flex items-center justify-center h-96 bg-gray-100 text-gray-500">
            Upload an image to begin
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all hover:scale-105">
        <h2 className="text-xl font-semibold text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3">
          Enhanced Image
        </h2>
        {loading ? (
          <Loading />
        ) : enhanced ? (
          <img
            src={enhanced}
            alt="Enhanced"
            className="w-full h-96 object-contain bg-gray-100 animate-fade-in"
          />
        ) : (
          <div className="flex items-center justify-center h-96 bg-gray-100 text-gray-500">
            Enhanced image will appear here
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;