import React, { useState, useEffect } from 'react';

function App() {
  // This state variable will dictate which screen is visible.
  // We can initialize it with the string 'prompt'
  const [screen, setScreen] = useState('prompt');

  // This state variable will track the X and Y coordinates of our ball
  const [ballPos, setBallPos] = useState({ top: 0, left: 75 });
   useEffect(() => {if( screen == "game") 
    {setTimeout(() => {setBallPos({top: 30, left: 60})}, 400); 
      setTimeout(() => {setBallPos({top: 60, left: 45})}, 800);
        setTimeout(() => {setBallPos({top: 90, left: 25});
        alert("DELETED HOW COULD YOU");},1200);}}, [screen]);

  return (
    <div style={styles.card}>
       { screen=== "prompt"?(
         <div>
          <h2>Are you POSITIVELY positive?</h2>
          <button onClick={() => alert("DELETED HOW COULD YOU")}>YES</button>
          <button onClick={() => setScreen("game")}>NOPE</button>
        </div>
) : (
  <div style={styles.board}>
    {/* 1. We will place our Pins here */}
    
    <div style={{
  position: 'absolute',
  width: '20px',
  height: '20px',
  background: '#fff',
  borderRadius: '50%',
  top: `${ballPos.top}%`,
  left: `${ballPos.left}%`,
  transform: 'translate(-50%, -50%)',
  transition: 'all 0.3s ease-in-out' // This makes updates animate smoothly!
}} />
    
   <div style={styles.slotsContainer}>
  <div style={styles.yesSlot}>YES</div>
  <div style={styles.noSlot}>NO</div>
</div>
  </div>
)} 
</div>
   );

} 
// A clean object to store our CSS-in-JS styles
const styles = {
  card: {
    background: '#1a1a1e',
    color: '#fff',
    padding: '40px',
    borderRadius: '16px',
    textAlign: 'center',
    width: '350px',
    margin: '100px auto',
    fontFamily: 'sans-serif'
  },
  board: {
    height: '300px',
    position: 'relative',
    borderStyle: 'dashed'
  },
  slotsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    height: '50px'
  },
  yesSlot: {
    background: '#00ff88',
    color: '#000',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noSlot: {
    background: '#ff3366',
    color: '#000',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
};
export default App;