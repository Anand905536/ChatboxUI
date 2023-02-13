import React from 'react'

const NestedChatList = ({ date, name ,image}) => {
    return (
        <div>
            <div style={{ display: 'flex', backgroundColor: '#FFFFFF' }}>
               <img className='image'  src={image} alt="not shown"></img>
                <div className='mid_section' >
                    <p className='mid_section1' >{name}</p>
                    <p className='mid_section2'>Lorem, ipsum dolor sit amet consectetur ...</p>
                </div>
                <p className='time'>{date}</p>
            </div>
        </div>
    )
}

export default NestedChatList