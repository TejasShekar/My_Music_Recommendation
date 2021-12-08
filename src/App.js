import "./styles.css";
import React, { useState } from "react";

const popSongs = [
  {
    name: "Katy Perry - Rise",
    rating: "4.7",
    src: "https://www.youtube.com/watch?v=hdw1uKiTI5c"
  },
  {
    name: "Imagine Dragons - Believer",
    rating: "4.6",
    src: "https://www.youtube.com/watch?v=7wtfhZwyrcc"
  },
  {
    name: "Kehlani & G-Eazy - Good Life",
    rating: "4.5",
    src: "https://www.youtube.com/watch?v=FG9M0aEpJGE"
  },
  {
    name: "Sam Smith - How Do You Sleep?",
    rating: "4.0",
    src: "https://www.youtube.com/watch?v=PmYypVozQb4"
  },
  {
    name: "Sam Smith - Writing's On The Wall",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=8jzDnsjYv9A"
  },
  {
    name: "The Vamps - Just My Type",
    rating: "4.3",
    src: "https://www.youtube.com/watch?v=Els_GCWuJVk"
  },
  {
    name: "Ke$ha - TiK ToK",
    rating: "4.2",
    src: "https://www.youtube.com/watch?v=iP6XpLQM2Cs"
  },
  {
    name: "Ashe - Moral of the Story",
    rating: "4.7",
    src: "https://www.youtube.com/watch?v=WQq98YPV8yk"
  },
  {
    name: "Charlie Puth – I Warned Myself",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=wjIes1eGAw4"
  },
  {
    name:
      "Charlotte Lawrence, Nina Nesbitt & Sasha Sloan - Girls Just Wanna Have Fun",
    rating: "4.1",
    src: "https://www.youtube.com/watch?v=YJYHzxONKGI"
  }
];

const hiphopSongs = [
  {
    name: "Post Malone - Goodbyes",
    rating: "4.6",
    src: "https://www.youtube.com/watch?v=ba7mB8oueCY"
  },
  {
    name: "The Kid LAROI, Justin Bieber - STAY",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=kTJczUoc26U"
  },
  {
    name: "Timbaland - Apologize ft. OneRepublic",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=ZSM3w1v-A_Y"
  },
  {
    name: "Eminem - Lose Yourself",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=_Yhyp-_hX2s"
  },
  {
    name: "Eminem - Not Afraid",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=j5-yKhDd64s"
  }
];

const edmSongs = [
  {
    name: "Flux Pavilion - I Can't Stop",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=3Q9rewnLFYw"
  },
  {
    name: "Deorro - Five Hours",
    rating: "4.5",
    src: "https://www.youtube.com/watch?v=MF6JvbfYI-8"
  },
  {
    name: "AronChupa - I'm an Albatraoz",
    rating: "4.8",
    src: "https://www.youtube.com/watch?v=Bznxx12Ptl0"
  },
  {
    name: "The Chainsmokers - Closer ft. Halsey",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=PT2_F-1esPk"
  },
  {
    name: "Martin Garrix feat. Bonn - High On Life",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=Lpjcm1F8tY8"
  }
];

const indieSongs = [
  {
    name: "Dua Lipa - Homesick",
    rating: "4.9",
    src: "https://www.youtube.com/watch?v=-8YV5xhENt8"
  },
  {
    name: "Halsey - Now Or Never",
    rating: "4.7",
    src: "https://www.youtube.com/watch?v=kzQTc0-iBX8"
  },
  {
    name: "Imagine Dragons - Whatever It Takes",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=gOsM-DYAEhY"
  },
  {
    name: "Legends Never Die ft. Against The Current",
    rating: "4.5",
    src: "https://www.youtube.com/watch?v=r6zIGXun57U"
  },
  {
    name: "Green Day - Boulevard Of Broken Dreams",
    rating: "4.8",
    src: "https://www.youtube.com/watch?v=Soa3gO7tL-c"
  },
  {
    name: "Linkin Park - Castle of Glass",
    rating: "5.0",
    src: "https://www.youtube.com/watch?v=ScNNfyq3d_w"
  }
];

export default function App() {
  const [genre, setGenre] = useState(popSongs);

  function popHandler() {
    setGenre(popSongs);
  }
  function hiphopHandler() {
    setGenre(hiphopSongs);
  }
  function edmHandler() {
    setGenre(edmSongs);
  }
  function indieHandler() {
    setGenre(indieSongs);
  }
  return (
    <div className="App">
      <h1>My recommendations</h1>
      <h3> Click one of the tabs below</h3>
      <ul>
        <li className="list" onClick={popHandler}>
          Pop
        </li>
        <li className="list" onClick={hiphopHandler}>
          Hip Hop
        </li>
        <li className="list" onClick={edmHandler}>
          EDM
        </li>
        <li className="list" onClick={indieHandler}>
          Indie
        </li>
      </ul>
      <div className="container"></div>
    </div>
  );
}
