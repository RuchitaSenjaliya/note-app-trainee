/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import CreateNoteForm from "./components/CreateNoteForm";
import Navbar from "./components/Navbar";
import Note from "./components/Note";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Shopping",
    desc: "Go for shopping",
  },
  {
    id: "2",
    title: "Market",
    desc: "Go to market",
  },
  {
    id: "3",
    title: "Read books",
    desc: "Read book",
  },
  {
    id: "4",
    title: "Drawing",
    desc: "Draw a beutiful painting",
  },
];
function sum(a, b) {}
sum(5, 10);
//parent to child data pass --> props
//child to parent data pass --> function
function App() {
  const [formData, setFormData] = useState([]);
  const formDataHandler = (title, description, color) => {
    setFormData((prev) => {
      return [...prev, { title: title, desc: description, color: color }];
    });
  };
  return (
    <>
      <Navbar />
      <CreateNoteForm formDataHandler={formDataHandler} />
      <div className="container my-5">
        <h2 className="mb-2 ">Notes</h2>
        <div className="row">
          {formData.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <Note title={item.title} desc={item.desc} color={item.color} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
