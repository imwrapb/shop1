import React from 'react'
import styles from "./card-item.module.css"

const CardItem = (props) => {
  const{
    title,
    images,
    description,
    price,
    onClick,
    children
  }=props
 
  return (
    <div className={styles.card}>
      <img
        src={images[0]}
        alt="iPhone"
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <div className={styles.text}>
          <p className={styles.card__description}>
            {description}
          </p>
        </div>
        <div className={styles.card__actions}>
          <span className={styles.card__price}>{price} $</span>
          <button onClick={onClick}
           className={styles.card__button}>
            {children}
            </button>
        </div>
      </div>
    </div>

  )
}

export default CardItem