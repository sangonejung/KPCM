import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../routes/Home';
import Vision from '../routes/Vision';
import Serve from '../routes/Serve';
import Direction from '../routes/Direction';
import Time from '../routes/Time';
import News from '../routes/News';
import Sermon from '../routes/Sermon';
import Worship from '../routes/Worship';
import Choir from '../routes/Choir';
import Mahanaim from '../routes/Mahanaim';
import Fellow from  '../routes/Fellow';
import Maintenance from  '../routes/Maintenance';
import Mission from  '../routes/Mission';
import Kindergarten from '../routes/Kindergarten';
import Children from '../routes/Children';
import Teenagers from '../routes/Teenagers';
import Sarang from '../routes/Sarang';
import Youngadult from '../routes/Youngadult';
import Post from '../routes/Post';
import Gallery from '../routes/Gallery';
import Calendar from '../routes/Calendar';
import Donation from '../routes/Donation';
import Korean from '../routes/Korean';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vision" element={<Vision />}/>
          <Route path="serve" element={<Serve />}/>  
          <Route path="direction" element={<Direction />}/>   
          <Route path="time" element={<Time />}/>  
          <Route path="sermon" element={<Sermon />}/>  
          <Route path="news" element={<News />}/>   
          <Route path="worship" element={<Worship />}/>
          <Route path="choir" element={<Choir />}/>
          <Route path="mahanaim" element={<Mahanaim />}/>
          <Route path="fellow" element={<Fellow />}/>
          <Route path="maintenance" element={<Maintenance />}/> 
          <Route path="mission" element={<Mission />}/>   
          <Route path="kindergarten" element={<Kindergarten />}/> 
          <Route path="children" element={<Children />}/>  
          <Route path='teenagers' element={<Teenagers />}/>  
          <Route path="korean" element={<Korean />}/>   
          <Route path="sarang" element={<Sarang />}/>  
          <Route path="Youngadult" element={<Youngadult />}/>  
          <Route path="Post" element={<Post />}/>  
          <Route path="gallery" element={<Gallery />}/>  
          <Route path="calendar" element={<Calendar />}/>  
          <Route path="donation" element={<Donation />}/>  
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
