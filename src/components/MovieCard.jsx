import React from 'react'
import { Link } from 'react-router-dom';

export const MovieCard = ({ show, id, data }) => {

  return (
    <>
      <div className="flex flex-col w-[200px] m-5 z-100 rounded-b-xl bg-white" key={id}>
        <div className="w-[100%]">
          <img src={show.image.medium} alt="logo" />
        </div>
        <div className="px-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className='font-semibold text-2xl'>{show.name}</h1>
            </div>
            <div className="text-base">
              <h1 className='text-black font-bold'><span className='font-bold text-[#0096FF]'>{`${show.rating.average === "null" ? 9.2 : show.rating.average}`}</span>/10</h1>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs font-semibold mt-1">
            <div>
              <h1 className='text-gray-400'>PREMIERED</h1>
            </div>
            <div>
              <h1 className='text-gray-400'>RUNNING TIME</h1>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs mt-2 pb-1 mb-3">
            <div>
              <h1 className='font-extrabold'>{show.premiered}</h1>
            </div>
            <div>
              <h1 className='font-extrabold'>{show.averageRuntime}</h1>
            </div>
          </div>
        <Link to={"/summary"} state={{id : id, data : data}}>  <div className="text-center">
            <button className='text-gray-800 text-lg bg-yellow-300 p-1 rounded-xl mb-2'>Summary</button>
          </div> </Link>

        </div>
      </div>
    </>
  );
}

