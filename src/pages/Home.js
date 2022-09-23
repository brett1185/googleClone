import React from "react";
import './Home.css'
import {Avatar} from '@mui/material'
import {Link} from 'react-router-dom'
import Search from '../components/Search'

const Home = () =>{

    return(
    <div>
        <div className = 'homeHeader'>
            <div className = 'homeHeaderLeft'>
                <Link to = '/about'>About</Link>
                <Link to = '/store'>Store</Link>
                </div>
            <div className = 'homeHeaderRight'>
                <Link to = 'gmail'>Gmail</Link>
                <Link to = '/images'>Images</Link>
                <Avatar/>
            </div>
        </div>
        <div className = 'homeBody'>
            <img src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt = 'logo'/>
        </div>
        <div className = 'homeInputContainer'>
            <Search/>
        </div>
    </div>
    )
}

export default Home