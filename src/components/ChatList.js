import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NestedChatList from './NestedChatList';
import image1 from '../assests/image1.jpg'
import image2 from '../assests/image2.jpg'
import image3 from '../assests/image3.jpg'
import image4 from '../assests/image4.jpg'
import image5 from '../assests/image5.jpg'
import image6 from '../assests/image6.jpg'
import image7 from '../assests/image7.jpg'
import image8 from '../assests/image8.jpg'
import ChatDetail from './ChatDetail';
import Person1 from './Person1';
import Person2 from './Person2';
import Person3 from './Person3';
import Person4 from './Person4';
import Person5 from './Person5';
import Person6 from './Person6';
import Person7 from './Person7';
import Person8 from './Person8';

const ChatList = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className=''>
        <Link to='/' className='nestedchatlist'> <NestedChatList image={image1} name='John Mayers' date='3 min ago' /></Link>
        <hr />
        <Link to='/person2' className='nestedchatlist'> <NestedChatList image={image2} name='Tony Stark' date='10 min ago' /></Link>
        <hr />
        <Link to='/person3' className='nestedchatlist'> <NestedChatList image={image3} name='Bessie Berry' date='3 hours ago' /></Link>
        <hr />
        <Link to='/person4' className='nestedchatlist'> <NestedChatList image={image4} name='Gleb Kuznetsov' date='4 hours ago' /></Link>
        <hr />
        <Link to='/person5' className='nestedchatlist'> <NestedChatList image={image5} name='Andrey Prokopenko' date='8 hours ago' /></Link>
        <hr />
        <Link to='/person6' className='nestedchatlist'> <NestedChatList image={image6} name='Nick Herasimenka' date='2 hours ago' /></Link>
        <hr />
        <Link to='/person7' className='nestedchatlist'> <NestedChatList image={image7} name='Vlentin Salmon' date='Dec 10' /></Link>
        <hr />
        <Link to='/person8' className='nestedchatlist'> <NestedChatList image={image8} name='Miro Kirov' date='Dec 2' /></Link>
      </div>
      <div className="line2"></div>
      <Routes>
        {/* <Route path="/" element={<ChatDetail />} /> */}
        <Route path="/" element={<Person1 />} />
        <Route path="/person2" element={<Person2/>} />
        <Route path="/person3" element={<Person3/>} />
        <Route path="/person4" element={<Person4/>} />
        <Route path="/person5" element={<Person5/>} />
        <Route path="/person6" element={<Person6/>} />
        <Route path="/person7" element={<Person7/>} />
        <Route path="/person8" element={<Person8/>} />
      </Routes>
      <div></div>
    </div>

  )
}

export default ChatList