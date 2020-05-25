import React, {useContext} from "react";
import ListItem from '../ListItem'
import {ListContext} from '../../context/List'
import './styles.css'
function List() {
  const {list} = useContext(ListContext);

  return <ul className="list">
    {list.map(list => (
      <ListItem list={list} key={list.id}/>
    ))}
  </ul>;
}

export default List;
