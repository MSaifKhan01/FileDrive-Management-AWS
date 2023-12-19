import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import "../FileCSS/File.css";

const FileUpload = () => {
  const [userID, setUserID] = useState(localStorage.getItem("userID"));
  const [fileList, setFileList] = useState([]);
  const [fileInput, setFileInput] = useState(null);

  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("user", userID);
   
  
    // let BaseUrl=`http://localhost:3001`

    // this is latest Deploye Link which is below
    let BaseUrl = `https://filedrive-management.onrender.com`;


    try {
      console.log("fgc",formData)
      const response = await fetch(`${BaseUrl}/file/upload`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: formData,
      });

      // Checking if the response status is OK (200)
      if (response.ok) {
        const responseText = await response.text();

        if (responseText === "File uploaded successfully!") {
          // Updating the file list after a successful upload
          console.log("file Uploaded");
          // Swal.fire(responseText)
          console.log(response);

          Swal.fire({
            title: responseText,

            icon: "success",
          });
          updateFileList();
        }
      } else {
        
        Swal.fire({
          title: "Something went wrong",
          icon: "error",
        });
        console.error("Error uploading file. Status:", response.status);
      }
    } catch (error) {
      // Handle fetch errors
      Swal.fire({
        title: "Something went wrong",
        icon: "error",
      });
      console.error("Error uploading file:", error);
    }
  };

  const handleDelete = async (filename) => {
    console.log("hgdhh1", filename);
    console.log(encodeURIComponent(filename));
    // filename=filename.toString()
    // console.log(filename)
    try {
      
      
     
      // let BaseUrl=`http://localhost:3001`

      // this is latest Deploye Link which is below
      let BaseUrl = `https://filedrive-management.onrender.com`;
      const response = await fetch(
        `${BaseUrl}/file/delete/${encodeURIComponent(filename)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response.ok) {
        // Updating the file list after a successful delete

        updateFileList();
      } else {
       
        console.error("Error deleting file. Status:", response.status);
      }
    } catch (error) {
      // Handle fetch errors
      console.error("Error deleting file:", error);
    }
  };


  const handleUpdate = async (filename) => {
    try {
     
      // let BaseUrl=`http://localhost:3001`
  
      // this is latest Deploye Link which is below
      let BaseUrl = `https://filedrive-management.onrender.com`;
  
      // Open a modal or a form for updating a file
      Swal.fire({
        title: 'Update File',
        html: `<input type="file" id="updateFileInput" name="file">`,
        showCancelButton: true,
        confirmButtonText: 'Update',
        preConfirm: async () => {
          const updatedFileInput = document.getElementById('updateFileInput');
          const updatedFile = updatedFileInput.files[0];
  
          if (updatedFile) {
            const formData = new FormData();
            formData.append('file', updatedFile);
            formData.append('user', userID);
  
            try {
              const response = await fetch(`${BaseUrl}/file/update/${encodeURIComponent(filename)}`, {
                method: 'PUT',
                headers: {
                  Authorization: localStorage.getItem('token'),
                },
                body: formData,
              });
  
              if (response.ok) {
                const responseText = await response.text();
                if (responseText === 'File updated successfully!') {
                  Swal.fire({
                    title: responseText,
                    icon: 'success',
                  });
                  updateFileList();
                }
              } else {
                Swal.fire({
                  title: 'Something went wrong',
                  icon: 'error',
                });
                console.error('Error updating file. Status:', response.status);
              }
            } catch (error) {
              Swal.fire({
                title: 'Something went wrong',
                icon: 'error',
              });
              console.error('Error updating file:', error);
            }
          } else {
            Swal.fire({
              title: 'Please select a file for updating',
              icon: 'warning',
            });
          }
        },
      });
    } catch (error) {
      // Handle errors
      console.error("Error updating file:", error);
    }
  };
  

  const updateFileList = async () => {
    try {
     
      // let BaseUrl=`http://localhost:3001`

      // this is latest Deploye Link which is below
      let BaseUrl = `https://filedrive-management.onrender.com`;
      // Using the appropriate API endpoint based on user role
      const apiEndpoint =
        userRole === "admin"
          ? `${BaseUrl}/file/files`
          : `${BaseUrl}/file/files/${userID}`;

      const response = await fetch(apiEndpoint, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const files = await response.json();

      if (Array.isArray(files)) {
        setFileList(files);
        console.log("hfhjj", files);
      } else {
        console.error("Invalid response format. Expected an array:", files);
      }
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    setUserID(localStorage.getItem("userID"));
    setUserRole(localStorage.getItem("userRole"));
    updateFileList();
  }, []);
  return (
    <div>
      <h2>File Upload</h2>
      <form id="uploadForm" onSubmit={handleSubmit}>
        <label htmlFor="fileInput">Choose a file:</label>
        <input
          type="file"
          id="fileInput"
          name="file"
          ref={(input) => setFileInput(input)}
        />
        <br />

        <br />
        <button type="submit">Upload File</button>
      </form>

      <hr />

      <h2>
        {userRole === "admin"
          ? "All Files Created by All Users"
          : "User Files Created By you"}
      </h2>
      <table>
        <thead>
          <tr>
            <th>File Image OR Name</th>
            {userRole === "admin" &&<th>User Information</th>}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fileList.map((file) => (
            <tr key={file._id}>
              <td>
                {file.filename.endsWith(".jpg") ||
                file.filename.endsWith(".png") ? (
                  <img
                    src={file.filename}
                    alt={file.filename}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                ) : (
                  file.filename
                )}
              </td>
              {userRole === "admin" &&<td>
                <div>
                  <p>Name: {file.user ? file.user.name : "Unknown User"}</p>
                  <p>Role: {file.user ? file.user.role : "Unknown Role"}</p>
                  <p>
                    Contact No:{" "}
                    {file.user ? file.user.mobile_No : "Unknown Contact No"}
                  </p>
                  <p>Email: {file.user ? file.user.email : "Unknown Email"}</p>
                  <p>Upload Date: {file.uploadDate}</p>
                </div>
              </td>}
              <td>
                <button className="downloadBtn">
                  <div>
                    <a href={file.filename} download={file.filename}>
                      Download 
                    </a>
                  </div>
                </button>
                <button className="deleteBtn" onClick={() => handleDelete(file.filename)}>
                  Delete
                </button>
                <button className="updateBtn" onClick={() => handleUpdate(file.filename)}>Change File</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileUpload;