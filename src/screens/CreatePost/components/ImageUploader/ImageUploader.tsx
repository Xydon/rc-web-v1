import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import CloseIcon from '@mui/icons-material/Close';

interface ImageUploaderProps {
  onImagesUpload: (images: File[]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagesUpload }) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Filter the accepted files to only include images (png/jpeg)
    const imageFiles = acceptedFiles.filter(file => file.type === 'image/png' || file.type === 'image/jpeg');

    // Filter images based on size and quantity
    const filteredImages = imageFiles.filter(file => file.size <= 3 * 1024 * 1024 && selectedImages.length < 5);

    // Update the state with the selected images
    setSelectedImages([...selectedImages, ...filteredImages]);
    // Pass the selected images to the parent component
    onImagesUpload([...selectedImages, ...filteredImages]);
  }, [selectedImages, onImagesUpload]);

  const removeImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    onImagesUpload(updatedImages);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 3 * 1024 * 1024, // Limit to 3MB
    multiple: true,
  });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the images here ...</p>
        ) : (
          <p>Drag 'n' drop some images here, or click to select images (PNG or JPEG only)</p>
        )}
      </div>

      {selectedImages.length > 0 && (
        <div>
          <h4>Selected Images:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {selectedImages.map((image, index) => (
              <div key={index} style={imagePreviewContainer}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  style={imagePreviewStyle}
                />
                <div style={imageInfoStyle}>
                  <p>{image.name}</p>
                  <p>{(image.size / (1024 * 1024)).toFixed(2)} MB</p>
                  <CloseIcon onClick={() => removeImage(index)} style={closeIconStyle} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const dropzoneStyles: React.CSSProperties = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

const imagePreviewContainer: React.CSSProperties = {
  margin: '8px',
  position: 'relative',
};

const imagePreviewStyle: React.CSSProperties = {
  maxWidth: 400,
  objectFit: 'cover',
  borderRadius: '4px',
};

const imageInfoStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  background: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '4px',
  borderRadius: '0 0 4px 4px',
};

const closeIconStyle: React.CSSProperties = {
  cursor: 'pointer',
};

export default ImageUploader;
