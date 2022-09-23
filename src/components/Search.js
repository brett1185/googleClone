import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material'
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";


const Search =({hideButtons = false}) =>{
    const [{}, dispatch] = useStateValue()
    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    const search =(e)=>{
        e.preventDefault()
        console.log('search!')
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: term
        })
        navigate('/search')
        }
    return(
        <div>
            <form className = 'searchInput'>
                <div className = 'searchInput'>
                    <input value = {term} onChange = {(e) => setTerm(e.target.value)}/>
                </div>
                {!hideButtons?(
                <div className = 'searchButton' >
                    <Button variant ='outlined' type = 'submit'
                    onClick={search}>Search</Button>
                </div>):( <div className = 'searchButton' >
                    <Button variant ='outlined' type = 'submit'
                    onClick={search}
                    className = 'searchButtonsHidden'>Search</Button>
                </div>)}

            </form>
        </div>
    )
}

export default Search