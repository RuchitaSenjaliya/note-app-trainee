/* eslint-disable react/prop-types */
// import ReactDOM from "react-dom";

// const portalElement = document.getElementById("overlays");

// eslint-disable-next-line no-unused-vars
export default function Model({ closeModel, deleteHandler }) {
  return (
    <>
      <div className="backdrop" onClick={closeModel}></div>

      <div className="model">
        <div className="msg">Are you sure you want to delete this note?</div>
        <div className="action-btn">
          <button className="btn btn-danger" onClick={deleteHandler}>
            Delete
          </button>
          <button className="btn btn-secondary" onClick={closeModel}>
            Cancle
          </button>
        </div>
      </div>
    </>
  );
}
