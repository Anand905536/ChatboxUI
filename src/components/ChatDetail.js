import React,{useState, useContext } from 'react'
import './chatdetail.css'
import Footer from './Footer'




    
const ChatDetail = ({ image, name, occuppation ,chat1,chat2,chat3,gmail}) => {
 const [data,setData]=useState(0);


 const adder=(data)=>{
  setData(data);
 }

  return (

    <>
      <div className='chatdetail2'>
        <img className='img' src={image} />
        <span class="dot"></span>
        <div className='detailofperson'>
          <p className="nested-p1">{name}</p>
          <p className="nested-p2">{occuppation}</p>
        </div>
      </div>
      <hr className='hrtag'/>
      <div className="jsonchat">
       <p className='pchat1'>{chat1}</p>
       <p className='pchat2'>{chat2}</p>
       <p className='pchat3'>{chat3}</p>
       {
     data === 1 ?  <p className='pchat4'>{gmail}</p> : null
       }
      </div>
      <hr className='hrtag2' />
      <Footer adder={adder}/>
    </>
  )
}

export default ChatDetail;