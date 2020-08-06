import React, { useState } from "react";

export default function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState("");
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    console.log("submitting");
    e.preventDefault();
    if (!previewSource) return;
    const reader = new FileReader();
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Upload</h3>
      <form onSubmit={handleSubmitFile}>
        <input
          className="upload"
          id="chooseFile"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <button className="upload" type="submit">
          {" "}
          Submit{" "}
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "200px" }} />
      )}
    </div>
  );
}
