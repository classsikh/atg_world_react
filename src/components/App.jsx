import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './header';
import Hero from './hero';
import Posts from './posts';
import Category from "./category";
import HeaderAndroid from './headerAndroid';
import Filter from './postFilter';
import Editbutton from './editBtn';


function App() {

  return (<>
    <Header/>
    <HeaderAndroid/>
    <Hero/>
    <Category/>
    <Filter/>
    <Posts />
    <Editbutton/>
   </>
  )
}

export default App
