import './App.scss'
import Landing from './components/Landing'
import YoutubeEmbed from './components/YoutubeEmbed'
import Features from './components/Features'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
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
    </>
  )
}

export default App;
