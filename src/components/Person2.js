import React from 'react'
import ChatDetail from './ChatDetail'
import image2 from '../assests/image2.jpg' 


const Person2 = () => {
  return (
    <div>
        <ChatDetail image={image2} name='Tony Stark' occuppation={'Genius Billionaire,Playboy,Philanthropist'}
         chat1={'Hi, how can I help you?'} chat2={'Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?"'}
         chat3={'Sure! I will definitely help you with you query. Could you please confirm your email address?'} 
        />
    </div>
  )
}

export default Person2