
import React from 'react';

export default function KateBush() {
  function handleLike(e) {
    let element = document.getElementById(`song${e.target.id.slice(3)}`);

    element.classList.toggle('liked');
  }

  return (
    <>
      <div>
        <h1> Profile </h1>
        <h2> Name: Kate Bush</h2>
        <p>
          {' '}
          Catherine Bush CBE (born 30 July 1958) is an English singer,
          songwriter, pianist, dancer, and record producer. In 1978, aged 19,
          she topped the UK Singles Chart for four weeks with her debut single
          "Wuthering Heights", becoming the first female artist to achieve a UK
          number one with a self-written song.[1] Bush has since released 25 UK
          Top 40 singles, including the Top 10 hits "The Man with the Child in
          His Eyes", "Babooshka", "Running Up That Hill", "Don't Give Up" (a
          duet with Peter Gabriel) and "King of the Mountain"
        </p>
      </div>
      <div>
        <h1> music </h1>
        <ul>
          <li id="song1"> Running up that Hill </li>

          <button id="btn1" className="complete-btn" onClick={handleLike}>
            Like!
          </button>

          <li id="song2"> Babooshka </li>
          <button id="btn2" className="complete-btn" onClick={handleLike}>
            Like!
          </button>
        </ul>
      </div>
    </>
  );

}
