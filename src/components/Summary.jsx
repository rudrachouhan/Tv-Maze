import React from 'react'
import { Header } from './Header';
import { useLocation,Link } from 'react-router-dom';

export const Summary = () => {

  const location = useLocation();
  const text = location.state.data;
  const num = location.state.id;

  let data = getFinalText(text[num].show.summary);



  function getFinalText(text) {
    // Replace all <br /> tags with a CRLF
    var regX1 = /<br\s\/>/ig;
    var text2 = text.replace(regX1, String.fromCharCode(13));
    // Replace all remainging HTML tags with ""
    var regX2 = /(<([^>]+)>)/ig;
    var finalText = text2.replace(regX2, "");
    return finalText;
  }


  return (
    <>
      <div className="flex flex-col w-[50%] ml-10">
        <h1 className='text-[red] text-3xl mb-4'>Summary:</h1>
        <p className='font-medium text-xl'>{data}</p>
      </div>
      <Link to={"/form"} state={{num : num, text : text}}> <button className='bg-red-500 text-black p-2 mt-4 rounded-lg ml-10'>Book Ticket</button ></Link>
    
    
    </>
  )
}
