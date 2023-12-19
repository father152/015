import React from "react";
import "./home.css";
import house from '../images/дом.jpg'
import { Leftpart } from "./Leftpart/Leftpart";
import house2 from '../images/Дом 2.jpg'
import house3 from '../images/Дом 3.jpg'
import {Rigthpart} from "../Home/Rigthpart"

function Home() {
  return (
    <div className="home">
      <div className="leftpart">
      <Leftpart />
      </div>
      <div className="centralpart">
        <h1>Welcome To Our Holiday!</h1>
        <h2>First House</h2>
        <p className='first'>
          When you have some text, how can you choose a typeface? Many
          people—professional designers included—go through an app’s font menu
          until we find one we like. But the aim of this Google Fonts Knowledge
          module is to show that there are many considerations that can improve
          our type choices. By setting some useful constraints to aid our type
          selection, we can also develop a critical eye for analyzing type along
          the way.
          <img src={house} alt='' classNAme='house'></img>
        </p>
        <h2>Second House</h2>
        <p className='second'>
        <img src={house2} alt='' classNAme='house'></img>
          When you have some text, how can you choose a typeface? Many
          people—professional designers included—go through an app’s font menu
          until we find one we like. But the aim of this Google Fonts Knowledge
          module is to show that there are many considerations that can improve
          our type choices. By setting some useful constraints to aid our type
          selection, we can also develop a critical eye for analyzing type along
          the way.
        </p>
        <h2>Third House</h2>
         <p className='third'>
          When you have some text, how can you choose a typeface? Many
          people—professional designers included—go through an app’s font menu
          until we find one we like. But the aim of this Google Fonts Knowledge
          module is to show that there are many considerations that can improve
          our type choices. By setting some useful constraints to aid our type
          selection, we can also develop a critical eye for analyzing type along
          the way.
          <img src={house3} alt='' classNAme='house'></img>
        </p>
      </div>
      <div className="rigthpart">
      <Rigthpart />
      </div>
    </div>
  );
}
export { Home };
