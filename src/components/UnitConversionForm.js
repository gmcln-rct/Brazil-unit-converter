import React, { useContext, useState } from "react";

import { UnitContext } from "../contexts/UnitContext";
import { ThemeContext } from "../contexts/ThemeContext";

const NewUnitForm = () => {
    const { addUnit } = useContext(UnitContext);
    const { filterTheme } = useContext(ThemeContext);

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addUnit(title, director, year);
        setTitle("");
        setDirector("");
        setYear("");
    };

    return (
        <div className='form-container'>

            <form className='unit-form' onSubmit={handleSubmit} style={{ filter: filterTheme }}>
                <input
                    type="text"
                    placeholder="Movie Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Director Name"
                    value={director}
                    onChange={e => setDirector(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Year"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                />
                <input type="submit" value="Add movie" />

            </form>

            <div className='filter-theme'>Current Filter: {filterTheme}</div>
        </div>
    );
};

export default NewMovieForm;