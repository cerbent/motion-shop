import './App.scss'
import Header from "./components/Header/Header";
import './styles/style.scss'
import Hero from "./components/Hero/Hero";
// import Hero from "./Hero/Hero";
// import {Routes, Route} from "react-router-dom";
// import About from "./pages/about/about";
// import Home from "./pages/home/home";


function App() {
    return (
        <>
            <Header/>
            <Hero/>
            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<Home/>}/>*/}
            {/*    <Route path={'/about'} element={<About/>}/>*/}
            {/*</Routes>*/}
        </>
    );
}

export default App;
