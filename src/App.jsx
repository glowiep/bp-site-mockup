import './App.scss'
import Landing from './components/Landing'
import YoutubeEmbed from './components/YoutubeEmbed'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import GithubIcon from './components/GithubIcon'

function App() {
  const youtubeEmbedId = "qvoiYbpkDfo"
  return (
    <>
      <div className='app'>
        <Landing embedId={youtubeEmbedId} />
        <div className='content'>
          <YoutubeEmbed embedId={youtubeEmbedId} />  
          <Features />
          <Testimonials />
        </div>
      </div>
      
      <div className="read-me-note">
        <GithubIcon />
        Created with ReactJS.<br />
        <a href="https://www.busplanner.com/index.aspx" target="_blank" rel="noopener noreferrer">BusPlanner.com</a> website mockup by <br />
        <a href="https://github.com/glowiep/bp-site-mockup" target="_blank" rel="noopener noreferrer">Gloria Lim</a>. 
      </div>
    </>
  )
}

export default App;
