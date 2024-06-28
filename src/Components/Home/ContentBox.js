import React, { useState } from 'react'
import "./ContentBox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faCheckCircle, faFileAlt, faFileImage, faFilePdf, faSpinner, faTimesCircle, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFileImport } from '@fortawesome/free-solid-svg-icons/faFileImport'
import Question from '../Questions/Question'
import { Link } from 'react-router-dom';

const ContentBox = () => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (files.length + droppedFiles.length <= 5) {
      setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    } else {
      alert('You can only upload up to 5 files.');
    }
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length <= 5) {
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    } else {
      alert('You can only upload up to 5 files.');
    }
  };
  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const getFileIcon = (file) => {
    const fileType = file.type;
    if (fileType.includes('image')) {
      return faFileImage;
    } else if (fileType.includes('pdf')) {
      return faFilePdf;
    } else {
      return faFileAlt;
    }
  };
 



  return (
    <div className="container">
      <div className="box small">
        <h5 style={{ fontWeight: "500", fontSize: "15px" }}>Recent Studies</h5>
        <div className="dotted-boxes">
          <div className="dotted-box">
            <p>"Dummy Text Data"</p>
            <div className="below-content">
              <div className="flex-container">
                <p className='days'>2 days ago </p>
                <p className="completed"><FontAwesomeIcon icon={faCheckCircle} /> Completed</p>
              </div>
            </div>
          </div>
          <div className="dotted-box">
            <p >"Dummy Text Data"</p>
            <div className="below-content">
              <div className="flex-container">
                <p className='days'>2 days ago </p>
                <p className="completed"><FontAwesomeIcon icon={faCheckCircle} /> Completed</p>
              </div>
            </div>
          </div>
          <div className="dotted-box">
            <p >"Dummy Text Data"</p>
            <div className="below-content">
              <div className="flex-container">
                <p className='days'>2 days ago </p>
                <p className="completed"><FontAwesomeIcon icon={faCheckCircle} /> Completed</p>
              </div>
            </div>
          </div>
          <div className="dotted-box">
            <p>"Dummy Text Data"</p>
            <div className="below-content">
              <div className="flex-container">
                <p className='days'>2 days ago </p>
                <p className="in-progress"><FontAwesomeIcon icon={faSpinner} /> In Progress</p>
              </div>
            </div>
          </div>
          <div className="dotted-box">
            <p>"Dummy Text Data"</p>
            <div className="below-content">
              <div className="flex-container">
                <p className='days'>2 days ago </p>
                <p className="failed"><FontAwesomeIcon icon={faTimesCircle} /> Failed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box large">
        <h2 style={{ fontWeight: "500", fontSize: "18px" }}><FontAwesomeIcon icon={faFileImport} className='icon' />Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <div className="input-container">
          <textarea
            type="text"
            style={{
              border: '1px dashed #aaa',
              padding: '8px',
              marginBottom: '10px',
              width: '100%',
              boxSizing: 'border-box',
              height: "100px",
              borderRadius: "10px"
            }}
            className='textarea-field'
            placeholder="Enter the text"
          />
          <p className="max-characters">0/80</p>
        </div>
        <div
          className={`drag-drop-box ${dragging ? 'dragging' : ''}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="upload-area">
            <FontAwesomeIcon icon={faArrowUpFromBracket} className="upload-icon" />
            <p>Drag and drop here or click here to <span className="upload-text" onClick={() => document.getElementById('file-upload').click()}>Upload a file</span></p>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileInputChange}
              multiple
              style={{ display: 'none' }}
            />
          </div>
          <p style={{fontSize:"15px"}}>Maximum upload : 1</p>
          <p className='text-upload'>File Format JPEG, PNG, PDF, docx, etc..</p>
        </div>
        <div>
         {files.length > 0 && (
        <div className="file-list">
           <h5>
            Uploaded files <span className="file-count">{files.length}/5</span>
          </h5>
          <div className="file-blocks">
            {files.map((file, index) => (
              <div key={index} className="file-block">
                <FontAwesomeIcon icon={getFileIcon(file)} className="file-icon" />
                <p>{file.name}</p>
                <FontAwesomeIcon icon={faXmark} className="remove-icon" onClick={() => removeFile(index)} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='continue-block'>
       <Link to="/questions">
            <button className='continue'>Continue</button>
          </Link>
          </div>
       {/* <Question files={files} removeFile={removeFile} /> */}
        </div>
      </div>
    </div>
  )
}

export default ContentBox