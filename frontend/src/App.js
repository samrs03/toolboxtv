import React, { useState } from "react";
import axios from "axios";
import Display from "./Display";
const App = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const addMoreItem = (item) => {
    setItems((prevItems) => [
      {
        value: item,
      },
      ...prevItems,
    ]);
  };
  const makingRequest = () => {
    axios
      .get(`http://localhost:5500/iecho?text=${query}`)
      .then((result) => {
        addMoreItem(result.data.text);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
        <div className="flex-grow-1 d-flex">
          <form
            className=" w-75 form-inline bg-danger mx-0 mx-lg-auto rounded p-1 d-flex justify-content-center"
            onSubmit={(e) => {
              e.preventDefault();
              makingRequest();
            }}
          >
            <input
              className="form-control mr-sm-2 w-50"
              type="search"
              placeholder="Insert Text"
              aria-label="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </nav>
      <Display items={items}></Display>
    </div>
  );
};
export default App;
