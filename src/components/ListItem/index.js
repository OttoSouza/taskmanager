import React, { useContext } from "react";
import "./styles.css";
import { ListContext } from "../../context/List";
// import { Container } from './styles';

function ListItem({ list }) {
  const { remove, findItem } = useContext(ListContext);
  return (
    <li className="list-item">
      <span>{list.name}</span>
      <div className="buttons">
        <button className="btn btn-item" onClick={() => remove(list.id)}>
          Remove
        </button>
        <button className="btn btn-item" onClick={() => findItem(list.id)}>Edit</button>
      </div>
    </li>
  );
}

export default ListItem;
