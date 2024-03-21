import bpLogo from './assets/logo_1400.svg'
import './App.css'
import Landing from './components/Landing'
import YoutubeEmbed from './components/YoutubeEmbed'

function App() {

  return (
    <div>
      <div>
        <img src={bpLogo} className="logo" alt="BP logo" />
      </div>

      <div>
        <Landing />
        <div className='content'>
          <h1>hi</h1>  
          <YoutubeEmbed embedId="qvoiYbpkDfo" />  
          <h1>hi</h1>  
          <h1>hi</h1>  
          <h1>hi</h1>  
          <h1>hi</h1>  
        </div>

      </div>
      
      <p className="read-the-docs">
        BusPlanner.com website mockup by Gloria Lim
      </p>
    </div>
  )
}

export default App;
