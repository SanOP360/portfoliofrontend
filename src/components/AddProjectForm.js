import React, { useState } from "react";
import axios from "axios";
import "./AddForm.css"; 

const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    videoUrl: "",
    description: "",
    password: "",
    codeLink: "",
  });
  const [errorMessage,setErrorMessage]=useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {

    
    e.preventDefault();

     const emptyFields = Object.values(formData).some((value) => value === "");
     if (emptyFields) {
       setErrorMessage("Please fill out all fields correctly.");
       return; 
     }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/projects",
        formData
      );
      console.log("Project added successfully:", response.data);

      setFormData({
        title: "",
        imageUrl: "",
        videoUrl: "",
        description: "",
        password: "",
        codeLink: "",
      });
      setErrorMessage("");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Wrong password. Please try again.");
      } 
       else {
        setErrorMessage("Error adding project. Please try again later.");
      }
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="add-project-form">
      <h3>Add a new Project here</h3>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="videoUrl"
          placeholder="Video URL"
          value={formData.videoUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="codeLink"
          placeholder="Code Link here"
          value={formData.codeLink}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Owner's Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
