"use client";

import { useState } from 'react';

const FileUpload = ({ onFileRead }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        onFileRead(fileContent);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className='max-w-lg'>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        accept=".html,.css"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
