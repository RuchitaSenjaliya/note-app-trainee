/* eslint-disable react/prop-types */

import { useState } from "react";

export default function CreateNoteForm(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  const colorChangeHandler = (event) => {
    setColor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.formDataHandler(title, desc, color);
  };

  return (
    <>
      <div className="container my-4">
        <h2>Create Note</h2>
        <form action="" className="mt-4 ps-3" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Note Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter Title..."
              onChange={titleChangeHandler}
              value={title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Note Description
            </label>
            <textarea
              className="form-control"
              id="desc"
              rows="4"
              name="desc"
              placeholder="Enter Description..."
              value={desc}
              onChange={descChangeHandler}></textarea>
          </div>
          <label htmlFor="color" className="form-label">
            Note Color
          </label>
          <input
            type="color"
            className="form-control form-control-color"
            id="color"
            value={color}
            onChange={colorChangeHandler}
            title="Choose your color"></input>

          <button className="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    </>
  );
}
