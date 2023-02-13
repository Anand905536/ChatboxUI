
import ChatDetail from './ChatDetail'
import image1 from '../assests/image1.jpg';

const Person1 = () => {
  return (
    <>
    <div>
        <ChatDetail
         image={image1} name='John Mayers' occuppation={'Bank Manager'}
         chat1={'Hi, how can I help you?'} chat2={'Hi guys Ive got the O2 package and have really slow internet. A speed check online said i can get 3mbps but it seems more like 0.5 these days, just freezing and taking ages to open pages and open audio files for example. I have decided to switch to the UPC package which offers 10mbps but do you think i will get it?'}
         chat3={'Sure! I will definitely help you with you query. Could you please confirm your email address?'} gmail={'TonyStark@gmail.com'}
         />
    </div>
    </>
  )
}

export default Person1