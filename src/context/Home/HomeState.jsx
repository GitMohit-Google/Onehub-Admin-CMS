import React, { useState } from 'react'
import HomeContext from './HomeContext'

const HomeState = ({children}) => {
    const [selectedSection,setSelectedSection] = useState("OneHub");
  return (
    <HomeContext.Provider value={{selectedSection,setSelectedSection}}>
        {children}
    </HomeContext.Provider>
  )
}

export default HomeState
