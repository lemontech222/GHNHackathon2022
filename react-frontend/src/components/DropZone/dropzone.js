import React from 'react';
import { useDropzone } from 'react-dropzone';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dropzone({ onDrop, accept, open }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ accept, onDrop });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          <button type="button" onClick={open} className="btn">
            {isDragActive ? (
              <p className="dropzone-content">Release to drop the files</p>
            ) : (
              <>
                {/* <FontAwesomeIcon icon={fa} /> */}
                <p className="dropzone-content">Add Photos</p>
                <p className="dropzone-content">Or</p>
              </>
            )}
            Drag and Drop to Add
          </button>
        </div>
      </div>

      {/* <aside>
        <ul>{files}</ul>
      </aside> */}
    </div>
  );
}

export default Dropzone;
