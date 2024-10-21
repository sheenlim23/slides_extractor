"use client";
import { useState } from "react";
import FileUpload from "./components/file-upload";
import { CopyBlock } from "./components/copy-block";
import { GenerateCss } from "./components/generate";

export default function Home() {
  const [revealContent, setRevealContent] = useState('');
  const [cssContent, setCssContent] = useState('');

  const handleFileRead = (content) => {
    if (content.startsWith('<!DOCTYPE html') || content.startsWith('<html')) {
      extractRevealContent(content);
    } else {
      console.error("Unsupported file type.");
    }
  };

  const extractRevealContent = (htmlString) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    const userCssOutputTag = tempDiv.querySelector('style#user-css-output');
    const userStyles = userCssOutputTag ? userCssOutputTag.innerHTML : '';

    const combinedCss = `
      <style>
      ${GenerateCss()}
      ${userStyles}
      </style>
    `;
    setCssContent(combinedCss);

    const revealDiv = tempDiv.querySelector('.reveal');
    if (revealDiv) {
      setRevealContent(revealDiv.outerHTML);
    } else {
      setRevealContent('');
    }
  };

  return (
    <div className="py-8">
      <FileUpload onFileRead={handleFileRead} />
      <div className="mt-16 grid grid-cols-2 gap-8">
        <CopyBlock title="Generated HTML">
          {revealContent}
        </CopyBlock>
        <CopyBlock title="Generated CSS">
          {cssContent}
        </CopyBlock>
      </div>
    </div>
  );
}
