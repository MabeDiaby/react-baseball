import {useState} from 'react'
import InningBar from   './components/InningBar'
import ScoreBar from    './components/ScoreBar'
import CountersBar from './components/CountersBar'
import EventsMenu from  './components/EventsMenu'

function App() {
  
  const [score, setScore] = useState([Array(6).fill(0), Array(6).fill(0)])

  const clickHomerun = () => {
    let newScore = [...score]
    newScore[0][0] ++
    setScore(newScore)
  }

  return (
    <div className="App">
      
        <InningBar/>
        <ScoreBar score={score}/>
        <CountersBar/>

        <EventsMenu clickHomerun={clickHomerun}/>
      
    </div>
  );
}

export default App;
