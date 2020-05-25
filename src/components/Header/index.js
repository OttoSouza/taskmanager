import React, {useContext} from "react";
import './styles.css'
import {ListContext} from '../../context/List'

function Header() {
  const {list} = useContext(ListContext)
  return (
    <div className="header">
      <h1>List Manager</h1>
      <span>I have {list.length} items</span>
    </div>
  );
}

export default Header;
