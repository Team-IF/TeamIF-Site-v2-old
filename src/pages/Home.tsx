import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import About from '../components/Sections/About'
import Project from '../components/Sections/Project'
import Member from '../components/Sections/Member'

const Home: React.FC = () => {
  return (
    <ReactFullpage
      licensekey='aN5yBGO^s8'
      scrollingSpeed={800}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className='section'>
            <About />
          </div>
          <div className='section'>
            <Project />
          </div>
          <div className='section'>
            <Member />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  )
}

export default Home
