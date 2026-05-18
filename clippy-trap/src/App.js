import React, { useState, useEffect } from 'react';
import whyyImg from './WHYY.jpg';

function App() {
  const [screen, setScreen] = useState('prompt');
  const [ballPos, setBallPos] = useState({ top: 0, left: 75 });
  
  // 1. New state variable to control when the image pops up
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (screen === "game") {
      setTimeout(() => { setBallPos({ top: 30, left: 60 }) }, 400); 
      setTimeout(() => { setBallPos({ top: 60, left: 45 }) }, 800);
      setTimeout(() => { setBallPos({ top: 90, left: 25 }) }, 1200);
      
      // 2. Trigger after the ball rolls to the bottom YES slot
      setTimeout(() => {
        setShowImage(true);
      }, 2000);
    }
  }, [screen]);

  return (
    <div style={styles.card}>
      {/* 3. Conditional Layout: If showImage is true, show the image takeover. Otherwise, show the normal app */}
      {showImage ? (
        <div style={styles.imageContainer}>
          <img src={whyyImg} alt="Why" style={styles.fullscreenImg} />
        </div>
      ) : (
        <>
          <div>
            <h2>Are you POSITIVELY positive you wanna delete this?</h2>
            <div style={styles.topButtonsContainer}>
              {/* 4. Trigger instantly if they hit the top YES button */}
              <button style={styles.topYesBtn} onClick={() => setShowImage(true)}>YES</button>
              <button style={styles.topNopeBtn} onClick={() => setScreen("game")}>NOPE</button>
            </div>
          </div>

          {screen === "game" && (
            <div style={styles.board}>
              {/* Pins */}
              <div style={{ position: 'absolute', width: '8px', height: '8px', background: '#555', borderRadius: '50%', top: '25%', left: '75%' }} />
              <div style={{ position: 'absolute', width: '8px', height: '8px', background: '#555', borderRadius: '50%', top: '50%', left: '60%' }} />
              <div style={{ position: 'absolute', width: '8px', height: '8px', background: '#555', borderRadius: '50%', top: '75%', left: '45%' }} />
              
              {/* Ball */}
              <div style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                background: '#fff',
                borderRadius: '50%',
                top: `${ballPos.top}%`,
                left: `${ballPos.left}%`,
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.3s ease-in-out'
              }} />
              
              {/* Bottom Slots */}
              <div style={styles.slotsContainer}>
                <div style={styles.yesSlot}>YES</div>
                <div style={styles.noSlot}>NO</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
} 

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
    borderStyle: 'dashed',
    marginTop: '0px'
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
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  noSlot: {
    background: '#ff3366',
    color: '#000',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  topButtonsContainer: {
    display: 'flex',
    width: '100%',        
    height: '50px',       
    marginTop: '20px',    
    marginBottom: '-2px'  
  },
  topYesBtn: {
    flex: 1,
    background: '#2c2c35', 
    color: '#fff',
    border: 'none',
    borderRadius: '0px',   
    fontWeight: 'bold',
    fontSize: '16px',      
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif'
  },
  topNopeBtn: {
    flex: 1,
    background: '#3e3e46', 
    color: '#fff',
    border: 'none',
    borderRadius: '0px',   
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif'
  },
  // Clean styles to fit the image perfectly inside your card container
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  fullscreenImg: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px'
  }
};

export default App;