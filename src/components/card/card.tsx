// components/Card.js

import React from 'react';
import styles from './Card.module.css';

interface card1 {
    image:string,
    title:string,
    oldPrice:string,
    newPrice:string,
    discount:string
}

const Card1 = ({ image, title, oldPrice, newPrice, discount }:card1) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.discount}>{discount}%</span>
        <span className={styles.badge}>Chính hãng</span>
      </div>
      
      <div className={styles.backgroundImage}>{/* <Image alt='khung sinh nhật' src={"/img/FRAME-MEGA-SALE-SN18-3x3-030824.png"} width={200} height={200}/> */}
        <img src={image} alt={title} className={styles.image}/>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.price}>
        <span className={styles.oldPrice}>{oldPrice}đ</span>
        <span className={styles.newPrice}>{newPrice}đ</span>
      </div>
      <button className={styles.button}>MUA NGAY</button>
    </div>
  );
};

export default Card1;
