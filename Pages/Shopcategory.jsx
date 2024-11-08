import React, { useContext } from 'react';
import { ShopContext } from "../Context/ShopContext";
import dorpdown_icon from '../assets/dropdown_icon.png';
import Item from '../Item/Item';
import './CSS/Shopcategory.css'
const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext)


  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
      
      <div className="shopcategory-sort">
        Sort by <img src={dorpdown_icon} alt="" />
      </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name= {item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shoopcategory-lordmore">
        Expoler More
      </div>
    </div>
  )
}

export default Shopcategory
