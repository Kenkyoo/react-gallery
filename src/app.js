import React from 'react';
import Gallery from './components/gallery';
import Header from './components/header';
import Title from './components/title';
import Footer from './components/footer';
import ToggleTheme from './components/theme';

function App() {
    return (
        <>
            <ToggleTheme />
            <Header/>
            <main>
              <Title />
              <Gallery /> 
            </main>
            <Footer />
        </>
    );
}

export default App;
