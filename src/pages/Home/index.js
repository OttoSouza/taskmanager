import React from "react";
import List from "../../components/List";
import Header from "../../components/Header";
import Form from "../../components/Form";
import ListContextProvider from '../../context/List'
import "./styles.css";

function Home() {
  return (
    <ListContextProvider>
    <div className="container">
      <div className="app-container">
        <Header />
        <div className="main">
          <Form />
          <List />
        </div>
      </div>
    </div>
    </ListContextProvider>
  );
}

export default Home;
