import React from 'react'
import List from '../../components/list'
import CardItem from '../../components/card-item'

const Cart = (props) => {
  const {card,deleteCard}=props
  return (
    <div className="container">
       <List
            items={card}
            renderItem={(item) => (
              <CardItem
                {...item}
                key={item.id}
                children="delete to card"
                onClick={() => deleteCard(item.id)}
              />
            )}
          />
      
    </div>
  )
}

export default Cart