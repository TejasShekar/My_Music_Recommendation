import "./styles.css";
import React, { useState } from "react";

const popSongs = [
  {
    name: "Katy Perry - Rise",
    rating: "4.7",
    src: "https://www.youtube.com/watch?v=hdw1uKiTI5c",
  },
  {
    name: "Imagine Dragons - Believer",
    rating: "4.6",
    src: "https://www.youtube.com/watch?v=7wtfhZwyrcc",
  },
  {
    name: "Kehlani & G-Eazy - Good Life",
    rating: "4.5",
    src: "https://www.youtube.com/watch?v=FG9M0aEpJGE",
  },
  {
    name: "Sam Smith - Writing's On The Wall",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=8jzDnsjYv9A",
  },
  {
    name: "Ke$ha - TiK ToK",
    rating: "4.2",
    src: "https://www.youtube.com/watch?v=iP6XpLQM2Cs",
  },
  {
    name: "Ashe - Moral of the Story",
    rating: "4.7",
    src: "https://www.youtube.com/watch?v=WQq98YPV8yk",
  },
];

const hiphopSongs = [
  {
    name: "Post Malone - Goodbyes",
    rating: "4.6",
    src: "https://www.youtube.com/watch?v=ba7mB8oueCY",
  },
  {
    name: "The Kid LAROI, Justin Bieber - STAY",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=kTJczUoc26U",
  },
  {
    name: "Timbaland - Apologize ft. OneRepublic",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=ZSM3w1v-A_Y",
  },
  {
    name: "Eminem - Lose Yourself",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=_Yhyp-_hX2s",
  },
  {
    name: "Eminem - Not Afraid",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=j5-yKhDd64s",
  },
];

const edmSongs = [
  {
    name: "Flux Pavilion - I Can't Stop",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=3Q9rewnLFYw",
  },
  {
    name: "Deorro - Five Hours",
    rating: "4.5",
    src: "https://www.youtube.com/watch?v=MF6JvbfYI-8",
  },
  {
    name: "AronChupa - I'm an Albatraoz",
    rating: "4.8",
    src: "https://www.youtube.com/watch?v=Bznxx12Ptl0",
  },
  {
    name: "The Chainsmokers - Closer ft. Halsey",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=PT2_F-1esPk",
  },
  {
    name: "Martin Garrix feat. Bonn - High On Life",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=Lpjcm1F8tY8",
  },
];

const indieSongs = [
  {
    name: "Dua Lipa - Homesick",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=-8YV5xhENt8",
  },
  {
    name: "Halsey - Now Or Never",
    rating: "4.7",
    src: "https://www.youtube.com/watch?v=kzQTc0-iBX8",
  },
  {
    name: "Imagine Dragons - Whatever It Takes",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=gOsM-DYAEhY",
  },
  {
    name: "Legends Never Die ft. Against The Current",
    rating: "4.5",
    src: "https://www.youtube.com/watch?v=r6zIGXun57U",
  },
  {
    name: "Green Day - Boulevard Of Broken Dreams",
    rating: "4.8",
    src: "https://www.youtube.com/watch?v=Soa3gO7tL-c",
  },
  {
    name: "Linkin Park - Castle of Glass",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=ScNNfyq3d_w",
  },
];

export default function App() {
  const [currentGenre, setGenre] = useState({ genreName: "", songsList: [] });

  function popHandler() {
    setGenre((prev) => ({ ...prev, genreName: "Pop", songsList: popSongs }));
  }
  function hiphopHandler() {
    setGenre((prev) => ({ ...prev, genreName: "Hip Hop", songsList: hiphopSongs }));
  }
  function edmHandler() {
    setGenre((prev) => ({ ...prev, genreName: "EDM", songsList: edmSongs }));
  }
  function indieHandler() {
    setGenre((prev) => ({ ...prev, genreName: "Indie", songsList: indieSongs }));
  }

  return (
    <div className="App">
      <h1>My Music recommendations</h1>
      <ul className="genres">
        <li
          className={currentGenre.genreName === "Pop" ? "list active" : "list"}
          onClick={popHandler}
        >
          Pop
        </li>
        <li
          className={currentGenre.genreName === "Hip Hop" ? "list active" : "list"}
          onClick={hiphopHandler}
        >
          Hip Hop
        </li>
        <li
          className={currentGenre.genreName === "EDM" ? "list active" : "list"}
          onClick={edmHandler}
        >
          EDM
        </li>
        <li
          className={currentGenre.genreName === "Indie" ? "list active" : "list"}
          onClick={indieHandler}
        >
          Indie
        </li>
      </ul>
      <hr />
      {currentGenre.songsList.length === 0 && <h3>Select one of the genres above !</h3>}
      <div className="songs-list">
        {currentGenre.songsList.map((song) => {
          return (
            <div className="song" key={song.name}>
              <p>
                <strong className="song-name">{song.name}</strong>
              </p>
              <p>
                <strong>Rating - </strong>
                <em>{song.rating}/5 </em>
              </p>
              <p className="song-link">
                <a href={song.src} target="_blank" rel="noreferrer">
                  Listen on Youtube
                  <span role="img" aria-label="heart-and-music-emoji">
                    ❤🎵
                  </span>
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
