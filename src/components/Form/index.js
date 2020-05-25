import React, { useContext, useState, useEffect } from "react";
import "./styles.css";
import { ListContext } from "../../context/List";
function Form() {
  const { add, clean, editList, editItem } = useContext(ListContext);
  const [name, setName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("Name does not exist, please try again");
    } else if (!editItem) {
      add(name);
      setName("");
    } else {
      editList(editItem.id, name);
    }
  };

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
    } else {
      setName("");
    }
  }, [editItem]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Add List"
        value={name}
        onChange={handleChange}
      />
      <button className="btn btn-form " type="submit">
        {editItem ? "Edit" : "Add"}
      </button>
      <button className="btn btn-form " onClick={clean} type="button">
        Clean
      </button>
    </form>
  );
}

export default Form;
