import React, { useContext } from 'react'
import {Context} from '../context/contextApi'
import { MovieCard } from './MovieCard';

export const Home = () => {
  const {searchResults} = useContext(Context);
  return (
    <>
    <div className="flex flex-col bg-[#E0E0E0] pb-8">
      <div className='ml-4 mt-4'>
      <h1 className='text-xl font-medium'><span className='text-[red]'>Movies</span> to Watch..</h1>
      </div>
      <div className="flex flex-wrap ml-5">
        {
          searchResults.map((item,index)=>{
            return(
              <MovieCard key={item.show.id} id={index} show={item.show} data={searchResults}/>
            )
          })
        }
      </div>
    </div>
    </>
  )
}
