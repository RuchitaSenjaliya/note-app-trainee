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

//parent to child data pass --> props
//child to parent data pass --> function

// TODOs:
// 1. Empty input fields after submitting form
// 2. create unique id for every note
// 3. write delete function
// 4. Conditional rendering if no notes created yet.
// 5. Add date
// 6: Don't allow to add empty note

// TODOs:
// 1. edit functionality
// 2. store data in local storage

const getLocalData = () => {
  let notes = localStorage.getItem("noteData");
  if (notes) {
    return JSON.parse(notes);
  } else {
    return [];
  }
};

function App() {
  const [formData, setFormData] = useState(getLocalData);

  const formDataHandler = (title, description, color) => {
    setFormData((prev) => {
      return [
        ...prev,
        {
          title: title,
          desc: description,
          color: color,
          date: new Date().toString(),
          id: formData.length + 1,
        },
      ];
    });
    localStorage.setItem("notesData", JSON.stringify(formData));
  };

  const deleteHandler = (id) => {
    console.log(id);
    const filteredData = formData.filter((item) => item.id !== id);
    setFormData(filteredData);
    console.log(filteredData);
  };
  return (
    <>
      <Navbar />
      <CreateNoteForm
        formDataHandler={formDataHandler}
        formData={formData}
        setFormData={setFormData}
      />
      <div className="container my-5">
        <h2 className="mb-2 ">Notes</h2>
        {formData.length === 0 ? (
          <h4 className="text-center">No notes created yet.</h4>
        ) : (
          <div className="row">
            {formData.map((item) => (
              <div className="col-lg-4" key={item.id}>
                <Note
                  title={item.title}
                  desc={item.desc}
                  color={item.color}
                  date={item.date}
                  deleteHandler={() => deleteHandler(item.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
// box-shadow: 0 16px 32px 0 rgba(7, 28, 31, 0.1)
export default App;

// steps:
// 1: create dummy data ina form of array of objects
// 2: apply map method on dummy data to display notes with dynamic data
// 3: child to parent data pass
// 4: create function in parent component and pass this function to child component via props
// 5: handle this prop in child component and call it in submit handler function, pass title,desc,color data into function parameter
