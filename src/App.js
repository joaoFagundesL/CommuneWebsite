import React from 'react';
import Nav from './feed/Nav';
import Main from './feed/Main';
import Form from './feed/Form';
import Footer from './feed/Footer';


function App() {
  return(
    <div className='min-h-screen bg-body m-5 px-4 rounded-lg'>
      <Nav />
      <Main />
      <Form />
      <Footer />
    </div>
  )
}

export default App;