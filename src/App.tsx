import React from 'react'
import NavigationBar from './components/NavigationBar'
import FooterBar from './components/FooterBar'

const App: React.FC = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <FooterBar />
    </>
  )
}

export default App
