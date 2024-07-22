/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author:Hayat Soma
  Date:7/21/2024
  Filename:
*/

"use strict";

const movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        releaseYear: 1999,
        synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        releaseYear: 2014,
        synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    }
];

function fetchMovie(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
            if (movie) {
                resolve(movie);
            } else {
                reject("Movie not found");
            }
        }, 1000);
    });
}

async function displayMovie(event) {
    event.preventDefault();
    const titleInput = document.getElementById("title-input").value.trim();
    const movieInfo = document.getElementById("movie-info");
    const errorMessage = document.getElementById("error-message");

    try {
        const movie = await fetchMovie(titleInput);
        document.getElementById("movie-title").textContent = movie.title;
        document.getElementById("movie-director").textContent = `Director: ${movie.director}`;
        document.getElementById("movie-year").textContent = `Release Year: ${movie.releaseYear}`;
        document.getElementById("movie-synopsis").textContent = movie.synopsis;
        movieInfo.style.display = "block";
        errorMessage.style.display = "none";
    } catch (error) {
        movieInfo.style.display = "none";
        errorMessage.textContent = error;
        errorMessage.style.display = "block";
    }
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);
