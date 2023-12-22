import React, { createContext, useState } from 'react'
export const AppContextx = createContext()
const ParentContext = ({children}) => {
    const [correct,isCorrect]=useState(0)
    const[light,isLight]=useState(true)
    const[result,showresult]=useState(false)
    const[quiz,setquiz]=useState(false)
    return <AppContextx.Provider value={{correct,isCorrect,light,isLight,result,showresult,quiz,setquiz}}>
        {children}
    </AppContextx.Provider>
}
export default ParentContext