import React, { ReactElement, useEffect, useState } from 'react';
import closed from './closed.png';
import opened from './open.png';
import fim from './fim.jpg';
import ily from './ily.webp';
import './App.css';

let started = false;

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const resize = () => {
      if (started) setMainContent('open');
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const [showTip, setShowTip] = useState(false);
  const start = () => {
    setTimeout(() => {
      started = true;
    }, 500);
    document.documentElement.requestFullscreen();
    setMainContent('start');
  };

  let [mainContent, setMainContent] = useState('inicial');

  return (
    <div className='App'>
      <header className='App-header'>
        {mainContent == 'inicial' && (
          <a onClick={start}>
            <h2>Iniciar</h2>
          </a>
        )}

        {mainContent == 'start' && (
          <div className='twoPanes'>
            <div className='pane1' onClick={() => setShowTip(true)}>
              <img src={closed} className='image' />
            </div>
            <div className='pane2'>
              <h1>Abre a caixinha &#128064;</h1>
              {showTip && <h2>(abre o celular)</h2>}
            </div>
          </div>
        )}

        {mainContent == 'open' && (
          <div className='twoPanes'>
            <div className='pane1'>
              <img src={opened} className='image' />
            </div>
            <div className='pane2'>
              <h1>Quer casar comigo?</h1>

              <button className='yes' onClick={() => setMainContent('firstYes')}>Sim</button>
              <button className='no' onClick={() => setMainContent('firstNo')}>Não</button>
            </div>
          </div>
        )}

        {mainContent == 'firstYes' && (
          <div className='twoPanes'>
            <div className='pane1'>
              <img src={opened} className='image' />
            </div>
            <div className='pane2'>
              <h1>Ih, muito rápido, pensa melhor e responde de novo. Quer casar comigo?</h1>

              <button className='yes' onClick={() => setMainContent('secondYes')}>Sim</button>
              <button className='no' onClick={() => setMainContent('firstNo')}>Não</button>
            </div>
          </div>
        )}

        {mainContent == 'secondYes' && (
          <div className='twoPanes'>
            <div className='pane1'>
              <img src={opened} className='image' />
            </div>
            <div className='pane2'>
              <h1>Certeza certeza?</h1>

              <button className='yes' onClick={() => setMainContent('firstNo')}>Não</button>
              <button className='no' onClick={() => setMainContent('firstNo')}>Não</button>
            </div>
          </div>
        )}

        {mainContent == 'firstNo' && (
          <div className='twoPanes'>
            <div className='pane1'>
              <img src={opened} className='image' />
            </div>
            <div className='pane2'>
              <h2>Sabia, era tudo mentira! Bicha má :( tá falando sério? Não quer mesmo?</h2>

              <button className='yes' onClick={() => setMainContent('yesNo')}>Sim</button>
              <button className='no' onClick={() => setMainContent('yesNo')}>Não</button>
            </div>
          </div>
        )}

        {mainContent == 'yesNo' && (
          <div className='twoPanes'>
            <div className='pane1'>
              <img src={opened} className='image' />
            </div>
            <div className='pane2'>
              <h1>Não pra sim ou sim pra não?</h1>

              <button className='yes' onClick={() => setMainContent('serious')}>Não</button>
              <button className='no' onClick={() => setMainContent('serious')}>Sim</button>
            </div>
          </div>
        )}

        {mainContent == 'serious' && (
          <div className='twoPanes'>
            <div className='pane1'>
              <img src={opened} className='image' />
            </div>
            <div className='pane2'>
              <h1>Tá, mas falando sério agora...</h1>

              <button className='yes' onClick={() => setMainContent('beautiful')}>hm</button>
            </div>
          </div>
        )}

        {mainContent == 'beautiful' && (
          <div className='twoPanes'>
            <div className='pane1'>
              <img src={opened} className='image' />
            </div>
            <div className='pane2'>
              <h3 className='beautiful'>Cá estamos, no ponto mais alto, do estado e da nossa história, onde tenho Sampa inteira de testemunha do imenso amor que sinto, tão grande quanto a vista pode alcançar daqui de cima e testemunha da promessa que te faço agora, de te amar, te respeitar, te proteger e te dar a melhor vida que eu puder, até o fim das nossas vidas. Aceita ser a mulher, a inspiração, a rainha, a soberana, a divindade, a amante, a amiga, a esposa desse humilde homem apaixonado?</h3>

              <button className='yes' onClick={() => setMainContent('final')}>SIM! &#128525;</button>
            </div>
          </div>
        )}

        
        {mainContent == 'final' && (
          <div className='twoPanes'>
            <div className='pane1'>
              <img src={fim} className='image' />
            </div>
            <div className='pane2'>
              <img src={ily} className='image' />
            </div>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;
