import React, { createContext, useState, useEffect } from "react";

import { v1 as uuid } from "uuid";

export const ListContext = createContext();

function ListContextProvider({ children }) {

  const initialState = JSON.parse(localStorage.getItem('list')) || [];

  const [list, setList] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('list' , JSON.stringify(list))
  }, [list])

  const add = (name) => {
    setList([...list, { id: uuid(), name }]);
  };

  const remove = (id) => {
    setList(list.filter((list) => list.id !== id));
  };

  const clean = () => {
    setList([]);
  };

  const findItem = id => {
    setEditItem(list.find(list => list.id === id))
  }

  const editList = (id, name) => {
    const newList = list.map( list => list.id === id ? {id, name} : list);
    setList(newList);
    setEditItem(null);
  }

  return (
    <ListContext.Provider value={{ list, add, remove, clean, findItem, editList, editItem}}>
      {children}
    </ListContext.Provider>
  );
}

export default ListContextProvider;
