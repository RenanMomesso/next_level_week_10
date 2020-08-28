import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./styles.css";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";

interface Props {
  onFileUploaded: (file: File) => void;
  //quando nao tem retorno
}

const MyDropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFiles, setSelectedFiles] = useState("");
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileURL = URL.createObjectURL(file);

      setSelectedFiles(fileURL);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFiles ? (
        <img src={selectedFiles} alt="File Uplaod" />
      ) : (
        <p>
          <FiUpload />
          Imagem do estabelecimento
        </p>
      )}
    </div>
  );
};

export default MyDropzone;
