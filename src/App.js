//import logo from './logo.svg';
import { useState } from 'react';
import MoviesList from './MoviesList';

function App() {
  const [keyword, setkeyword] = useState("")
const [newRate, setNewRate] = useState(1)
const [movies,setmovies =useState([
  {
  id:uuidv4(),
img:"https://ledrenche.ouest-france.fr/wp-content/uploads/interstellar-the-movie-475.jpg",
title:"Interstellar",
duration:"2h49min",
date:"2016,George Mironidis",
rate : 5,
genre:"Adventure, Drama, Sci-Fi",
description:" A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way ",
},
{id :uuidv4(),
  img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLooper_(film)&psig=AOvVaw0Q4ug_venj1cgTHO9zlJWy&ust=1634290143061000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCo87XLyfMCFQAAAAAdAAAAABAD",
  title:"Looper,Alex Fernandez",
  duration:"119 min",
  date:"2012",
  rate : 4,
  genre:"Action, crime",
  description:" In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits&nbsp;-&nbsp;someone like Joe.",
  },
  {id :uuidv4(),
    img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
    title:"The Hobbit",
    duration:"134 min",
    date:"2015, Andre Madarang",
    rate : 3,
    genre:"Action, Fantasy, Adventure",
    description:"Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the Grey, Bilbo finds himself joining a company of thirteen dwarves led by the legendary warrior, Thorin Oakenshield. Their journey will take them into the Wild; through ",
    },
)]
    const search=(text)=>{
      setkeyword(text)
      }
      const setRate=(rate)=>{
        setNewRate(rate)
      }
      const addMovie=(movie)=>{
        setMovies(movies.concat(movie))
      }

 return (
   <div className="App">
   <MovieSearch search={search}
    setRate={setRate}
     newRate={newRate}  />
  <MovieListe addMovie={addMovie} movies= {movies.filter( el => el.rate >= newRate && el.title.toLowerCase().includes(keyword.toLowerCase().trim()))} />

   </div>
 
 );
}

export default App;
