import React from 'react'
import List from '../../components/list'
import CardItem from '../../components/card-item';

const Home = (props) => {
  const { data, category,categoryClick,addToCard } = props
  return (
    <div className='home'>
      <ul className='category'>
        <List
          items={category}
          renderItem={(item,i) => (
            <li key={i}
             onClick={()=>categoryClick(item)}
             >{item}</li>
          )}
        />
      </ul>
      <div className='container'>
        <div className='home-card'>
          <List
            items={data}
            renderItem={(item) => (
              <CardItem
                {...item}
                key={item.id}
                onClick={()=>addToCard(item.id)}
                children="add to card"

              />
            )}
          />
        </div>
      </div>
    </div>
  )
}
export default Home