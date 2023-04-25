import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';
const BookDetail = () => {

  const id = useParams().id;

  const [input, setInput] = useState({});
  const [checked, setChecked] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {

    const fetchHandler = async () => {

      await axios.get(`http://localhost:5000/books/${id}`)
      .then((res) => res.data)
      .then(data => setInput(data))

    }
    fetchHandler()

  },[id])

  // console.log(input)


  const sendRequest = async() => {

    await axios.put(`http://localhost:5000/books/${id}`,{

      bName : String(input.bName),
      author : String(input.author),
      description : String(input.description),
      price : Number(input.price),
      image : String(input.image),
      available : Boolean(checked),

    }).then((res) => res.data)

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    sendRequest().then(() => navigate('/books'))


  }
  const handleChange = (e) => {

    setInput({

      ...input,
      [e.target.name] : e.target.value,

    })


  }

  // console.log(id)
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



  <Button variant={'contained'} type={'submit'} >Update Book</Button>


</Box>


</form>



    </>
  )
}

export default BookDetail