import React from 'react'
import './footer.css';
import { useState } from 'react';


export default function Footer({ adder }) {
  const [insert, setInsert] = useState('')

  const handleChange = () => {
    setInsert("TonyStark@gmail.com")
  }



  return (

    <div className='footer'>
      <input className='inputfield' onClick={handleChange} value={insert} />
      <button className='btn' type='submit' onClick={() => adder(1)} >Send</button>
    </div>

  );
}
