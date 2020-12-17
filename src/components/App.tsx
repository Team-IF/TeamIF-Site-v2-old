import React from 'react'
import NavigationBar from '../components/NavigationBar'
import FooterBar from '../components/FooterBar'

const App: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <body>
        {children}
      </body>
      <footer>
        <FooterBar />
      </footer>
    </>
  )
}

export default App
