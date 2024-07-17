import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { AboutMe } from './layout/sections/aboutme/AboutMe';
import { Skills } from './layout/sections/skills/Skills';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Contacts } from './layout/sections/contacts/Contacts';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
        </div>
    );
}

export default App;

