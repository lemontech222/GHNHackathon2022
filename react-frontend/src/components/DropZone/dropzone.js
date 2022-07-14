import React from 'react';
import { useDropzone } from 'react-dropzone';

function Dropzone({ onDrop, accept, open }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ accept, onDrop });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files</p>
          ) : (
            <>
              <p className="dropzone-content">Drag' n' drop to Add Photos</p>
              <p className="dropzone-content">Or</p>
            </>
          )}
          <button type="button" onClick={open} className="btn">
            Click to select files
          </button>
        </div>
      </div>

      {/* <aside>
        <ul>{files}</ul>
      </aside> */}
    </>
  );
}

export default Dropzone;
