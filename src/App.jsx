import bpLogo from './assets/logo_1400.svg'
import './App.scss'
import Landing from './components/Landing'
import YoutubeEmbed from './components/YoutubeEmbed'
import Features from './components/Features'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div>
      <div>
        {/* <img src={bpLogo} className="logo" alt="BP logo" /> */}
      </div>

      <div>
        <Landing />
        <div className='content'>
          <YoutubeEmbed embedId="qvoiYbpkDfo" />  
          <Features />
          <Testimonials />
        </div>

      </div>
      
      <p className="read-me-note">
        Created with ReactJS.<br />
        BusPlanner.com website mockup by Gloria Lim. 
      </p>
    </div>
  )
}

export default App;
