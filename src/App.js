import './App.css';
//the state sits in app.js
import {useState} from 'react'; 
//import components

import GiphyDisplay from './components/GiphyDisplay';
import RandomGif from './components/RandomGif';



function App() {
//variable w apikey
const API_KEY = process.env.REACT_APP_ACCESS_KEY;
//state to hold giphy data note:?cuz we r using an api is y its null...
const [gif, setgiphy] = useState(null);

//function to getGiphy
const getGiphy = async()=> {
  //fetch request and store response
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)
// parse JSOn response into a javascript object
const data = await response.json();
//set the giphy state to the giphy data
setgiphy(data);
console.log(data);
}

//useeffect here?...thinking no for now cuz instructions say no gifs will be fetched on initial page load

  return (
    <div className='App'>
      <RandomGif getGiphy={getGiphy}/>
      <GiphyDisplay gif={gif} />
       
    </div>
  );
}

export default App;
