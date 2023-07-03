// import React, { useContext } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext'; // adjust the path according to your file structure

// const Navbar = () => {
//   const { toggleTheme } = useContext(ThemeContext);

//   return (
//     <div>

//       <button type="button" onClick={toggleTheme}>
//         Toggle Theme
//       </button>

//     </div>
//   );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
  const getWord = () => {
    // Implement the getWord function logic here
  };

  return (
    <div>

     

      <section className="results padding">
        <div className="word-wrap">
          <div id="tittle">
            <h1 className="word" id="word">Default Heading Text</h1>
            <span className="pron" id="pron" />
          </div>
          {/* <audio id="my-audio" captions="false" /> */}
          <button
            type="button"
            className="btn-play remove"
            id="btn-play"
          >
            <img src="icons/play-light.svg" alt="Play button" />
          </button>
        </div>
        <div className="meaning" id="meaning" />
        <div className="not-found remove" id="not-found">
          <span className="emoji">&#128533;&apos;</span>
          <p className="no-def">No Definitions Found</p>
          <p className="sorry">
            Sorry, we could not find definitions for the word you were looking
            for. You can try the search again at a later time or head to the web
            instead.
          </p>
        </div>
      </section>

      <section className="source padding" id="source">
        <div className="line-meaning" />
      </section>
    </div>
  );
};

export default Navbar;
