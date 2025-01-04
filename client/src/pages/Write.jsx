import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  console.log("here is value", value);
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input type="file" style={{ display: "none" }} id="file" name="" />
          <label htmlFor="file"> Upload Image </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="science" />
            <label htmlFor="art">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="technology" />
            <label htmlFor="art">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="cinema" />
            <label htmlFor="art">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="design" />
            <label htmlFor="art">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="food" />
            <label htmlFor="art">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
