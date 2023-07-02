
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cuisine from './components/Cuisine';
import AddCuisine from './components/AddCuisine';

import IndianCuisine from './components/IndianCuisine';
import AmericanCuisine from './components/AmericanCuisine';
import ItalianCuisine from './components/ItalianCuisine';
import ChineseCuisine from './components/ChineseCuisine';

function App() {
  return (
    <div className="App">
  <Header></Header>
  <Routes>
    <Route path='/' element={<Cuisine/>}></Route>
    <Route path='/addcuisine' element={<AddCuisine data={{image:'',title:'',duration:0,servings:0,cuisine:''}} method='post'/>}></Route>
    <Route path='/indiancuisine'  element={<IndianCuisine/>}></Route>
    <Route path='/americancuisine' element={<AmericanCuisine/>}></Route>
    <Route path='/italiancuisine' element={<ItalianCuisine/>}></Route>
    <Route path='/chinesecuisine' element={<ChineseCuisine/>}></Route>
  </Routes>
  <Footer></Footer>
    </div>
  );
}

export default App;
