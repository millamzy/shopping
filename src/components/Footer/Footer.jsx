import React from 'react'
import style from '../Footer/footer.module.css'
import logo from '../../../public/Images/logo.png'
const Footer = () => {
  return (
    <div className={style.footer}>
        <img src={logo} />

        <div className={style.right}>
         <div className={style.h1}>Account</div>
         <div className={style.h1}>Useful links</div>
         <div className={style.h1}>Help Center</div>
         <div>Wishlist</div>
         <div>About Us</div>
         <div>Payments</div>
         <div>Cart</div>
         <div>Contact</div>
         <div>Refund</div>
         <div>Track Order</div>
         <div>Hotdeals</div>
         <div>Hotdeals</div>
         <div>Shopping Details</div>
         <div>Promotion</div>
         <div>Shopping</div>
         <div>Shopping</div>
         <div>New products</div>
         <div>Q&A</div>
         <div></div>
         <div></div>  
         <div>Privacy Policy</div>
         
        </div>

    </div>
  )
}

export default Footer