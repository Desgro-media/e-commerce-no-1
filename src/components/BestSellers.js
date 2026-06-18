import React from 'react'
import { store } from '../productsStore/Store'
import "../styles/BestSellers.css";
import { Link } from 'react-router-dom';
import { SafeHoverImage } from './SafeImage';

const BestSellers = () => {
  return (
    <div className='bestSellerMainParent flex flex-row'>
      {store.map((item) => {
        if (item.type == "bestSeller")
          return (
            <Link to={`/${item.id}`} key={item.id}>  
            <div key={item.id} className="bestSellerIndivitualItem">
              <SafeHoverImage src={item.primaryImage} hoverSrc={item.hoverImg} alt={item.name} className="bestSellerImage rounded-xl mb-6" />
              <p className='bestSellerName text-center mb-2'> {item.name} </p>
              <p className=' font-normal text-center'> ₹{item.price} </p>
            </div>
            </Link>
          )
      })}

    </div>
  )
}

export default BestSellers;
