import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY, START_DATE, END_DATE} from './constants/constants'

function App() {

useEffect(()=>{
  axios.get(`${BASE_URL}?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
},[])









  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
