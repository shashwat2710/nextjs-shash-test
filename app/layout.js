import React from 'react'
import "@styles/globals.css"

export const metdata = {
    title:"Sample Page",
    description:"This is a sample next js learning page"
}

const  RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <div className='app'>
                {children}
            </div>
        </body>
    </html>
  )
}

export default RootLayout;