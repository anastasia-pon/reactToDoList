import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

import './App.css';

const App = () => (
  <>
    <Header />
    <h2>Register New ToDo</h2>
    <main>
      <Form />
      <List />
    </main>
    <Footer />
  </>
);

export default App;
