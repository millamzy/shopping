import React from 'react'
import styles from './Navbar.module.css';

import vector from '../../../public/Images/vector.png'
import flag from '../../../public/Images/flag-nigeria.png'

function Navbar() {
  return (
   <nav>
        <div className={styles.sideA}>
          <img src={vector}/> 
          <p>+234810000234</p> 
        </div>
          <div className={styles.sideB}>
          <div>Get 50% Off Selected Items</div>   
          <div>Shop Now</div>  
        </div>
        <div className={styles.sideC}> 
           <select id="options" name="options">
                <option value="option1">EV</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
            </select>
            <div className={styles.nigera}>
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

export default Navbar;
