import React, { FC, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'

const App: React.FC = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}

export default App
