import React, { Fragment, useRef } from "react";

export default function AddMovie({ addNewMovie }) {
  const inputMovie = useRef();
  const addMovie = () => {
    const newMovie = inputMovie.current.value;
    addNewMovie(newMovie);
    inputMovie.current.value = null;
  };
  const keypress = (event) => {
    if (event.key === "Enter") {
      addMovie();
    }
  };
  return (
    <Fragment>
      <div className="input-group mt-3">
        <input type="text" ref={inputMovie} className="form-control" placeholder="Pelicula" onKeyPress={keypress}/>
        <button className="btn btn-outline-secondary" type="button" onClick={addMovie} >
          Añadir película
        </button>
      </div>
    </Fragment>
  );
}
