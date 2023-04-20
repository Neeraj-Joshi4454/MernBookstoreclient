import React , {useState} from 'react'

import { AppBar, Typography, Tabs, Tab, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const Header = () => {

    const [value, setValue] = useState(0);
    return (
        <>

            <AppBar sx={{backgroundColor : '#6B5B95'}} position={"sticky"}>

                <Toolbar>

                    <Typography>

                        <LibraryBooksOutlinedIcon />

                    </Typography>


                    <Tabs sx={{m : 'auto'}} 
                    textColor={'inherit'}
                    indicatorColor='primary'
                    value={value}
                    onChange={(e,val) => setValue(val)}
                    >


                        <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                        <Tab LinkComponent={NavLink} to="/books" label="Books" />
                        <Tab LinkComponent={NavLink} to="about" label="About Us" />


                    </Tabs>




                </Toolbar>


            </AppBar>


        </>
    )
}

export default Header