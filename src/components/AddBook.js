import React, { useState } from 'react'
import { TextField, Box, Button, FormLabel, FormControlLabel, Checkbox } from '@mui/material'
import {useNavigate} from 'react-router-dom'

import axios from 'axios';





const AddBook = () => {
  

  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const [input, setInput] = useState({

    bName: "",
    author: "",
    description: "",
    price: "",
    image: ""

  });

  const handleChange = (e) => {

    
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    
    console.log(input)

  }


  const sendData = async () => {

    await axios.post("http://localhost:5000/books", {

      bName : String(input.bName),
      author : String(input.author),
      description : String(input.description),
      price : Number(input.price),
      image : String(input.image),
      available : Boolean(checked),

    }).then(res => res.data);


  }

  const handleSubmit = (e) => {

    e.preventDefault();
    sendData().then(() => navigate('/books'))
  }


  return (
    <>

      <form onSubmit={handleSubmit}>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={700}
          alignContent={'center'}
          alignSelf={'center'}
          marginLeft={'auto'}
          marginRight={'auto'}
          marginTop={10}
        >


          <FormLabel>Name</FormLabel>

          <TextField
            value={input.bName}
            onChange={handleChange}
            margin='normal' fullWidth variant='outlined' name='bName' />



          <FormLabel>author</FormLabel>
          <TextField
            onChange={handleChange}
            value={input.author}
            margin='normal'
            fullWidth
            varient='outlined'
            name='author'
          />
          <FormLabel>Description</FormLabel>
          <TextField
            onChange={handleChange}
            value={input.description}
            margin='normal'
            fullWidth
            varient='outlined'
            name='description'
          />
          <FormLabel>Price</FormLabel>
          <TextField
            onChange={handleChange}
            value={input.price}
            margin='normal'
            fullWidth
            varient='outlined'
            name='price'
          />

          <FormLabel>image</FormLabel>
          <TextField
            onChange={handleChange}
            value={input.image}
            margin='normal'
            fullWidth
            varient='outlined'
            name='image'
          />

          <FormControlLabel control={<Checkbox

            checked={checked}
            onChange={() => setChecked(!checked)}

          />} label="Available" />



          <Button variant={'contained'} type={'submit'} >Add Book</Button>


        </Box>


      </form>


    </>
  )
}

export default AddBook