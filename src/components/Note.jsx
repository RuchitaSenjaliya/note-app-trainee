/* eslint-disable react/prop-types */
export default function Note(props) {
  return (
    <div className="card mt-3" style={{ backgroundColor: props.color }}>
      <div className="card-body">
        <h5 className="card-title mb-2">{props.title}</h5>
        <p className="card-text text-body-secondary">{props.date}</p>
        <h6 className="card-subtitle mb-4">{props.desc}</h6>
        <button className="btn btn-danger" onClick={props.deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
