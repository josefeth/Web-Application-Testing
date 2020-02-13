import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Display from './components/Display'
import styled from 'styled-components'

function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  const [innings, setInnings] = useState(0);
  const [outs, setOuts] = useState(0);

  const Container = styled.div`
    border: 3px solid blue;
    width:50%;
    margin:0 auto;
    margin-top:20%;
    border-radius:20px;
  `
const inning = () => {
    if (innings === 8){
      setInnings(0);
      setOuts(0)
      setStrikes(0)
      setBalls(0);
    } else {
      setInnings(innings + 1);
    }
  }
  const out = () => {
    if (outs === 2){
      setOuts(0);
      setInnings(innings + 1);
      inning()
    } else {
      setOuts(outs + 1);

    }
  }
  const strike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const ball = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }
  const foul = () => {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }
  return (
    <Container className='container'>
      <Display strikes={strikes} balls={balls} outs={outs}innings={innings}/>
      <Dashboard  ball={ball} strike={strike} foul={foul} hit={hit} inning={inning} out={out}/>
    </Container>
  );
}
export default App;