import React, { useState } from 'react'
import MovieCard from './movieCard'
import './list.css'
// import './modal.css'
import CustomModal from './modal';
import Search from './search'

export default function MovieList() {
    const [movies, setMovies] = useState([
        {
            id: Math.random(),
            img: "https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX8k1fuyGwHncTCnTM-mbZUe8RMjF7behOyHRK-7jy8vlL73O5QfTsgB-kjkVp_LV77Lf8sjUKlur4WTwQJ8EwxBiRP4.jpg?r=794",
            name: "Spenser Confidential",
            duration: "1h 58 m",
            date: 2019,
            rating: 5,

        },
        {
            id: Math.random(),
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQW8SnjJQ9s3Ucj1_hePX_sH6_uyfM58pbQreOVO-0nN0PnbHRL",
            name: "Pirates of Silicon Valley",
            duration: "1h 37m",
            date: 1999,
            rating: 3,

        },
        {
            id: Math.random(),
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF5NJQLpcDF6kTb7vs0DeCwHpsaitSYLQHgZLKoLsnbKlpiYTa",
            name: "Takedown",
            duration: "1h 32m",
            date: 2000,
            rating: 4,

        },
        {
            id: Math.random(),
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLMr26lgT7vKwXNoRl06aAvU-rh-wck2vNjFqSK5M6eDrlQ7NL",
            name: "Ex Machina",
            duration: "1h 48m",
            date: 2014,
            rating: 5,

        }]
    );

    const [filtredMovies, setFiltredMovies] = useState(movies)
    const [modalIsopen, setModalIsopen] = useState(false)
    const handleNewMovie = (movie) => {
        setMovies([...movies,
            movie])

        setFiltredMovies([
            ...filtredMovies, movie])
        setModalIsopen(false)
    }
    const handleSearch = (e) => {
        setFiltredMovies(movies.filter((el) =>
            el.name.toLowerCase().includes(e.toLowerCase()))
        )
    }
    const handleSearchRating = (e) => {
        setFiltredMovies(movies.filter((el) => el.rating >= e))
    }

    return (
        <div className="list">

            <Search
                handleSearch={handleSearch}
                handleSearchRating={handleSearchRating}
            />
            <button onClick={() => setModalIsopen(true)} className="button"> Add movie   </button>
            <CustomModal
                modalIsopen={modalIsopen}
                modalIsClose={() => setModalIsopen(false)}
                addNewMovie={handleNewMovie}
            />
            <div classname='container'>
                {(filtredMovies.map(el =>
                    <MovieCard
                        name={el.name}
                        img={el.img}
                        date={el.date}
                        duration={el.duration}
                        rating={el.rating}
                    />))}

            </div>
        </div>
    )
}

