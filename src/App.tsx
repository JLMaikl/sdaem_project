import React from 'react';
import './App.css';
import { Button, Htag, P } from './components/index';
import { Layout } from './Layout/Layout';

function App() {
  return (
    <Layout>
      <div className="App">
        <Htag tag='h2'>dagagdada</Htag>
        <Button appearance='header'>+  Разместить объявление</Button>
        <Button appearance='read'>Читать</Button>
        <P size='m'>jkhgljhgljhfgljhglhj</P>
      </div>

    </Layout>
  );
}

export default App;
