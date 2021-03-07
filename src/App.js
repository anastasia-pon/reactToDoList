import React, { useState, useEffect, useContext } from 'react';

import { ThemeContext } from './context/theme';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('toDoList')) || []);

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <main className={`main ${theme}`}>
        <h2>Register New ToDo</h2>
        <Form tasks={tasks} setTasks={setTasks} />
        <List tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </>
  );
};

export default App;
