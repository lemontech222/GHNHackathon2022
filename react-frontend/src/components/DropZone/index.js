import cuid from 'cuid';
import { useCallback, useState } from 'react';
import Dropzone from './dropzone';
import ImageGrid from './imageGrid';

function UploadPhotos() {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <>
      <ImageGrid images={images} />
      <Dropzone onDrop={onDrop} accept={'image/*'} />
    </>
  );
}

export default UploadPhotos;
