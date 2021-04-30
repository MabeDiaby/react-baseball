import {useState} from 'react'
import InningBar from   './components/InningBar'
import ScoreBar from    './components/ScoreBar'
import CountersBar from './components/CountersBar'
import EventsMenu from  './components/EventsMenu'

function App() {
  
  const [balls,   setBalls]     = useState(0)
  const [strikes, setStrikes]   = useState(0)
  const [outs,    setOuts]      = useState(0)
  const [inning,  setInning]    = useState(1)
  const [atBat,   setAtBat]     = useState(0)
  const [score, setScore]       = useState([Array(6).fill(0), Array(6).fill(0)])

  const clickHomerun = () => {
    let newScore = [...score]
    newScore[atBat][inning - 1] ++
    setScore(newScore)
  }

  const clickOut = () => {
    if (outs == 2) {
      setOuts(0)
      if (atBat == 1) {
        setAtBat(0)
        setInning(inning+1)
      } else {
        setAtBat(1)
      }
    } else {
      setOuts(outs + 1)
    }
  }

  return (
    <div className="App">
      
        <InningBar currentInning={inning}/>
        <ScoreBar score={score}/>
        <CountersBar outs={outs}/>

        <EventsMenu 
          clickHomerun={clickHomerun}
          clickOut={clickOut}
          />
      
    </div>
  );
}

export default App;
