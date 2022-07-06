import React from "react";

export default function Rammstein() {

    function handleLike(e) {
        let element = document.getElementById(`song${e.target.id.slice(3)}`);
    
        element.classList.toggle('liked');
      }
    

     return (

        <>

        <div>
            <h1> Profile </h1>        
            <h2> Name: Rammstein</h2>
            <p> Rammstein is a German Neue Deutsche Härte band formed in Berlin in 1994. The band's lineup—consisting of lead vocalist Till Lindemann, lead guitarist Richard Kruspe, rhythm guitarist Paul Landers, bassist Oliver Riedel, drummer Christoph Schneider, and keyboardist Christian "Flake" Lorenz—has remained unchanged throughout their history, along with their approach to songwriting, which consists of Lindemann writing and singing the lyrics over instrumental pieces the rest of the band have completed beforehand.</p>
        </div>
        <div>
            <h1> music </h1>
            <ul>

              

                <li id="song5"> du riechst so gut </li>

          <button id="btn5" className="complete-btn" onClick={handleLike}>
            Like!
          </button>

          <li id="song6"> wiener blut </li>
          <button id="btn6" className="complete-btn" onClick={handleLike}>
            Like!
          </button>

            </ul>
        </div>
        
        </>
     )

}
