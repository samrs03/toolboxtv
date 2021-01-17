import React from "react";

const Display = (props) => {
  const documents = props.items.map((element, index) => (
    <li className="list-group-item list-group-item-action list-group-item-light rounded" key={index}>
      <p>{element.value}</p>
    </li>
  ));
  return (
    <section className="d-flex justify-content-center mt-5 flex-direction-column">
      <div className="w-75 bg-white">
        <div>
          <h3 className="mt-5">Results:</h3>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="card w-50">
            <ul className="list-group ">{documents}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;
