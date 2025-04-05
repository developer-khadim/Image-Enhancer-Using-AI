import React from "react";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
            <div className="relative w-20 h-20 mb-4">
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-200 opacity-25"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                <div className="absolute inset-3 rounded-full border-4 border-dashed border-purple-400 opacity-75 animate-spin-slow"></div>
            </div>
            <p className="mt-4 text-blue-600 font-medium bg-white px-4 py-1 rounded-full shadow-sm">Enhancing your image...</p>
            <div className="text-xs text-gray-500 mt-2 flex space-x-1">
                <span className="animate-pulse delay-0">•</span>
                <span className="animate-pulse delay-100">•</span>
                <span className="animate-pulse delay-200">•</span>
                <span className="animate-pulse delay-300">•</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">This may take a few seconds</p>
        </div>
    );
};

export default Loading;