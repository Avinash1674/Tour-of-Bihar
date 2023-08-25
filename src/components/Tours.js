import React from 'react'
import Cards from './Cards';

const Tours = ({ tours, removeTour }) => {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Tour of Bihar</h2>
      </div>
      <div className='cards'>
        {
          tours.map((tour) => {
            return <Cards {...tour} removeTour={removeTour} />
          })
        }

      </div>
    </div>


  )
}

export default Tours;
