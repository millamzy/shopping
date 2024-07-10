import React from 'react'
import style from '../Hero/Hero.module.css'
import logo from '../../../public/Images/logo.png'
import search from '../../../public/Images/search.png'
import x from '../../../public/Images/x.png'
import love from '../../../public/Images/love.png'
import cart from '../../../public/Images/cart.png'
import frame from '../../../public/Images/Frame.png'

const Hero = () => {
  return (
    <>
    <div className={style.up}>
      <img className={style.logo1} src={logo}/>
      <div className={style.inp}>
        <div className={style.searchside}>
            <img className={style.sch} src={search}/>
            <input type="search" id="search" name="search" placeholder="Smart Televisions"></input>
            <img className={style.sch2} src={x}/>
        </div>
        <button className={style.btnn} >search</button>
      </div>

       

        <div className={style.sideicon}>
            <div className={style.loveicon}>
                <img src={love}/>
                <div>Favorites</div>
            </div>
            <div className={style.cartside}>
                <img src={cart}/>
                <div>Cart</div>
            </div>

            <select  id="options" name="options">
                <option value="option1">Chike</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
            </select>

        </div>
        
    
      
    </div>
    <div className={style.section1}>
        <img src={frame}/>
      
        <select  id="options" name="options">
                <option value="option1">Category</option>
        </select>

        <select  id="options" name="options">
                <option value="option1">Brand</option>
        </select>

        <select  id="options" name="options">
                <option value="option1">Features</option>
        </select>

        <select  id="options" name="options">
                <option value="option1">Color</option>
        </select>

        <select  id="options" name="options">
                <option value="option1">Inches</option>
        </select>

        <select  id="options" name="options">
                <option value="option1">Price</option>
        </select>

        <select  id="options" name="options">
                <option value="option1">Release Date</option>
        </select>

        <select  id="options" name="options">
                <option value="option1">Discount and Deals</option>
        </select>




    </div>
    </>
  )
}

export default Hero
