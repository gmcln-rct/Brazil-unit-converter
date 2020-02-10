
import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const UnitContext = createContext();

const MovieContextProvider = (props) => {
    const [Units, setUnits] = useState([
        { title: "Citizen Kane", director: "Orson Welles", year: "1941", id: 1 },
        { title: "The Waterboy", director: "Frank Coraci", year: "1998", id: 2 },
        { title: "Remains of the Day", director: "Frank Coraci", year: "1989", id: 3 },
        { title: "Moonlight", director: "Barry Jenkins", year: "2017", id: 4 },
        { title: "Harakiri", director: "Masaki Kobayashi", year: "1962", id: 5 }
    ]);

    const addMovie = (title, director, year) => {
        setMovies([...Movies, { title, director, year, id: uuid() }]);
    };
    const removeMovie = (id) => {
        setMovies(Movies.filter(Movie => Movie.id !== id));
    }

    return (
        <Unit.Provider value={{ Movies, addMovie, removeMovie }}>
            {props.children}
        </Unit.Provider>
    );
}

export default UnitProvider;

