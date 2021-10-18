import React from 'react'
import MovieCard from './MovieCard';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Add from "./Add";

const Movieslist=(movies)=>{
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
             <div >
        <Button id="add" onClick={handleShow}>Add</Button>
        <Add addMovie={addMovie} show={show} handleClose={handleClose} />
      </div>
            {movies.map(el => <MovieCard movies={el}/>
            ))}
        </div>
   );
}
export default Movieslist;