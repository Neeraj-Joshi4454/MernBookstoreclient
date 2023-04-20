import { Button } from '@mui/material';
import React from 'react'
import "./book.css"
const Book = (props) => {

  const { bName, author, description, price, image } = props.book;


  return (
    <>
      

      <div className='card'>

        <img src={image} height={300} width={200} alt={bName} />
        <article>By {author}</article>
        <h3>{bName}</h3>
        <p>{description}</p>
        <h2>Rs {price}</h2>
        <Button>Update</Button>
        <Button>Delete</Button>

      </div>


      


    </>
  )
}

export default Book