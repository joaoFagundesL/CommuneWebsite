import React from 'react';
import Nav from './feed/Nav';
import Main from './feed/Main';
import Footer from './feed/Footer';


function App() {
  return(
    <div className='min-h-screen overflow-x-hidden bg-body m-5 px-4 rounded-lg
     md:px-24 xl:px-24  2xl:px-48'>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App;