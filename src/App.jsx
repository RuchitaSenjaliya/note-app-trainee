/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import CreateNoteForm from "./components/CreateNoteForm";
import Navbar from "./components/Navbar";
import Note from "./components/Note";
import Model from "./components/Model";
import { v4 as uuid } from "uuid";

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
// 1. capitalize fist letter of title and desc
// 2. revise usestate, CRUD
// 3. Trucate desc if length is more than 50 characters
// 4. add dark mode

// TODOs:
// 1. store data in local storage
// 2. edit functionality

// what is useEffect hook ?

// The useEffect hook in React is used to handle the side effects in React such as fetching data, and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering

const getLocalItems = () => {
  let notes = localStorage.getItem("notesData");
  if (notes) {
    return JSON.parse(notes);
  } else {
    return [];
  }
};

function App() {
  const [formData, setFormData] = useState(getLocalItems);
  const [mode, setMode] = useState("dark");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const toggleModeHandler = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const formDataHandler = (enteredData) => {
    setFormData((prev) => {
      return [
        ...prev,
        {
          title: enteredData.title,
          desc: enteredData.desc,
          color: enteredData.color,
          date: new Date().toString(),
          id: uuid(),
        },
      ];
    });
    localStorage.setItem("notesData", JSON.stringify(formData));
  };

  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(formData));
  }, [formData]);

  const deleteHandler = (id) => {
    console.log(id);
    const filteredData = formData.filter((item) => item.id !== id);
    setFormData(filteredData);
    setIsModelOpen(false);
  };

  const openModel = (id) => {
    setDeleteId(id);
    setIsModelOpen(true);
  };
  const closeModel = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      {isModelOpen && (
        <Model
          closeModel={closeModel}
          deleteHandler={() => deleteHandler(deleteId)}
        />
      )}
      <Navbar mode={mode} toggleMode={toggleModeHandler} />
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
                  openModel={() => openModel(item.id)}
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
