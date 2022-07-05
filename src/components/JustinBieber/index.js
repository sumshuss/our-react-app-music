
import React from 'react';

export default function JustinBieber() {
  function handleLike(e) {
    let element = document.getElementById(`song${e.target.id.slice(3)}`);

    element.classList.toggle('liked');
  }

  return (
    <>
      <div>
        <h1> Profile </h1>
        <h2> Name: Justin Bieber</h2>
        <p>
          {' '}
          Justin Drew Bieber is a Canadian singer. Bieber is widely recognised
          for his genre-melding musicianship and has played an influential role
          in modern-day popular music. He was discovered by American record
          executive Scooter Braun and signed with RBMG Records in 2008, gaining
          recognition with the release of his debut seven-track EP My World
          (2009) and soon establishing himself as a teen idol.
        </p>
      </div>
      <div>
        <h1> music </h1>
        <ul>
          <li id="song3"> Baby </li>

          <button id="btn3" className="complete-btn" onClick={handleLike}>
            Like!
          </button>

          <li id="song4"> Love yourself </li>
          <button id="btn4" className="complete-btn" onClick={handleLike}>
            Like!
          </button>
        </ul>
      </div>
    </>
  );
}
