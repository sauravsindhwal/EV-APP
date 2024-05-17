import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'


function App() {
let herodata = [
  {text1:'Dive into', text2: 'What you love'},
  {text1:'Indulge', text2: 'Your Passions'},
  {text1:'Give in to', text2: 'Your Passions'}
]

const [herocount, setHeroCount] = useState(0);
const [playstatus, setPlayStatus] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setHeroCount((prevcount) => (prevcount === 2 ? 0 : prevcount + 1));
  }, 3000);

  return () => clearInterval(interval); // Cleanup function to clear the interval
}, []);

  return (

<div>

  <Background playstatus={playstatus} herocount={herocount}/>
  <Navbar />
  <Hero setPlayStatus={setPlayStatus} setHeroCount={setHeroCount} 
  playstatus={playstatus} herocount={herocount} herodata={herodata[herocount]}/>
  </div>
  );
}

export default App;

