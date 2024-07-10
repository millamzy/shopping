import React from 'react'
import style from '../Navbar/Navbar.module.css'
import vector from '../../../public/Images/vector.png'
import flag from '../../../public/Images/flag-nigeria.png'

function Navbar() {
  return (
   <nav>
        <div className={style.sideA}>
          <img src={vector}/> 
          <p>+234810000234</p> 
        </div>
          <div className={style.sideB}>
          <div>Get 50% Off Selected Items</div>   
          <div>Shop Now</div>  
        </div>
        <div className={style.sideC}> 
           <select id="options" name="options">
                <option value="option1">EV</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
            </select>
            <div className={style.nigera}>
              <img src={flag}/>
              <select id="options" name="options">
                  <option value="option1">Nigeria</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
              </select>
            </div>
        </div>
   </nav>
  )
}

export default Navbar
