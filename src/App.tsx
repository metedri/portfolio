import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { AboutMe } from './layout/sections/aboutme/AboutMe';
import { Skills } from './layout/sections/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
        </div>
    );
}

export default App;

