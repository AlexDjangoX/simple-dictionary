import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import moonIcon from '../icons/moon-g.svg';
import bookIcon from '../icons/book.svg';
import arrowIcon from '../icons/arrow.svg';
import searchIcon from '../icons/search.svg';
import playIcon from '../icons/play-light.svg';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [fontType, setFontType] = useState('sans-serif');
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState(null);

  const audioUrl = wordData?.phonetics && Array.isArray(wordData.phonetics) ? wordData.phonetics[0]?.audio : null;
  const audio = audioUrl ? new Audio(audioUrl) : null;

  const handlePlayAudio = () => {
    if (audio) {
      audio.play();
    }
  };

  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const handleFontChange = (event) => {
    setFontType(event.target.value);
  };

  const handleClick = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWordData(data[[0]]);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });

    setWord('');
  };

  return (
    <>
      <section className="pl-[1.5rem] pt-[1.5rem] pr-[1.5rem] pb-0 m-auto max-w-[46rem] dark:bg-backGroundDark">
        <nav className="flex justify-between items-center ">

          <div>
            <img src={bookIcon} alt="Book Icon" />
          </div>

          <div className="flex ">
            <div className="relative inline-block">
              <select
                className={`font-${fontType} appearance-none block w-auto py-2 pl-3 pr-8 text-[1rem] font-bold text-gray-700 bg-white focus:outline-none  focus:ring-gray-200 focus:border-none dark:text-white dark:bg-backGroundDark`}
                value={fontType}
                onChange={handleFontChange}
              >
                <option value="sans" className="font-sans">Sans Serif</option>
                <option value="serif" className="font-serif">Serif</option>
                <option value="mono" className="font-mono">Monospace </option>
              </select>

              <img src={arrowIcon} alt="Arrow Icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />

            </div>

            <span className="ml-[1.5rem] pr-12 border-l border-darkGray dark:border-white h-[40px] w-[1px]" />

            <label htmlFor="toggle-button" className="switch flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="toggle-button" className="sr-only" onChange={toggleTheme} />
                <div className="block bg-customGray w-11 h-6 rounded-full dark:bg-customViolet" />
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition" />
              </div>
              <div className="ml-3 text-gray-700 font-medium" />
            </label>

            <img className="ml-[1.5rem]" src={moonIcon} alt="Moon icon dark theme" />
          </div>
        </nav>
      </section>

      <section className="pl-[1.5rem] pt-[1.5rem] pr-[1.5rem] pb-0 m-auto max-w-[46rem] dark:bg-backGroundDark">
        <div className="">
          <div className="flex justify-between align-center p-5 bg-wordSearchInput w-100% rounded-3xl ">
            <input
              className="appearance-none border-none focus:outline-none bg-wordSearchInput font-bold  "
              type="search"
              id="getword"
              placeholder="Search for any word..."
              value={word}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="btn-search"
              onClick={handleClick}
            >
              <img src={searchIcon} alt="Search Icon" />
            </button>
            {false && (
            <p className="txt-empty remove" id="txt-empty">
              Whoops, can not be empty…
            </p>
            )}

          </div>

        </div>
      </section>

      {wordData && (
      <section className={`font-${fontType}  pl-[1.5rem] pt-[1.5rem] pr-[1.5rem] pb-0 m-auto max-w-[46rem] dark:bg-backGroundDark}`}>
        <div className="flex justify-between">
          <div><h1 className="font-bold text-4xl dark:text-white">{wordData?.word}</h1>
            <p className="text-customViolet text-xl py-3">{wordData?.phonetic}</p>
          </div>
          <div>
            <button type="button" onClick={handlePlayAudio}>
              <img src={playIcon} alt="Play Icon" />
            </button>
          </div>
        </div>
        <div className="flex items-center pt-6">
          <p className="font-bold font-italic text-xl dark:text-white ">{wordData?.meanings[0]?.partOfSpeech}</p>
          <div className="flex-grow border-t border-black dark:border-white mx-4" />
        </div>
        <p className="text-customGray text-lg pt-6 pb-6">Meaning</p>
        <div className="dark:text-white">
          <ul className="">
            {wordData?.meanings[0]?.definitions.map((definition, index) => (
              <li className="py-2" key={index}>
                <span className="text-customViolet pr-4">&#8226;</span> {definition.definition}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center pt-6">
          <p className="font-bold font-italic text-xl dark:text-white ">{wordData?.meanings[1]?.partOfSpeech}</p>
          <div className="flex-grow border-t border-black dark:border-white mx-4" />
        </div>
        <p className="text-customGray text-lg pt-6 pb-6">Meaning</p>
        <div className="dark:text-white pb-12">
          <ul className="">
            {wordData?.meanings[1]?.definitions.map((definition, index) => (
              <li className="py-2" key={index}>
                <span className="text-customViolet pr-4">&#8226;</span> {definition.definition}
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-black dark:border-white" />
        <h1 className="my-6 text-red-800 text-4xl dark:text-green-900 dark:text-5xl">Dark mode test</h1>

      </section>
      )}

    </>
  );
};
export default Navbar;

