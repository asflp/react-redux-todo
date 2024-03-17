import React, {Dispatch, useState} from 'react';
import './App.css';
import {List} from "./components/List/List";
import {Header} from "./components/Header/Header";
import {useSelector} from "react-redux";
import {Store} from "./Store";
import {Todo} from "./components/Todo/Todo";

function App() {

    const todo = useSelector((state) => Store.getState());

  return (
      <div className="container_app">
          <Header todoCount={todo.filter((todo: { checked: boolean; }) => !todo.checked).length}/>
          <Todo/>
          <List todos={todo}/>
      </div>
  );
}

export default App;
