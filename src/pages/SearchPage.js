import React from 'react'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../googleSearch'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

const SearchPage =()=>{
    const [{term}, dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)
    console.log(data)

    return(
        <div>
            <div className = 'SearchPageHeader'>
                <Link to = '/'>
                    <img 
                    className= 'searchPageLogo' src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt = 'logo'/>
                </Link>
                <Search hideButtons/>
            </div>
                    
        
        
            {term && (
            <div className="searchPageResults">
             <p className="searchPageResultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for{" "}
            <strong>{term}</strong>
        </p>

          {data?.items.map((item) => (
            <div className="searchPageResult">
              <a className="searchPageResultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPageResultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} ▾
              </a>
              <a className="searchPageResultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPageResultSnippet">{item.snippet}</p>
            </div>
            
          ))}
        </div>
            )}      
         </div> 
            )
    
}


export default SearchPage