import Image from './images/naruto.png';
import Styled from 'styled-components';
import Quotes from './components/Quotes';
import { getQuote } from './services/QuoteService';
import { useState, useEffect, useRef } from 'react';
import JutsuSound from './audio/src_sounds_jutso.mp3';
import './App.css';

const audio = new Audio(JutsuSound);

const Content = Styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImage = Styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

function App() {

  const [ quoteState, setQuoteState ] = useState({
    quote: 'loading quote',
    speaker: 'loading',
  });
  
  const onUpdate = async () => {
    const quote = await getQuote();
    audio.play();
    setQuoteState(quote);
  }

  useEffect(() => {
    onUpdate();
  }, []);

  return (
    <Content>
      <Quotes
        {...quoteState}
        onUpdate={onUpdate}
      ></Quotes>
      <NarutoImage src={Image} alt="Naruto with a kunai" />
    </Content>
  );
}

export default App;
