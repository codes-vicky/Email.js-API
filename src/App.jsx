import React from 'react'
import './App.css'
import ContactForm from './Components/ContactForm'
import { useState } from 'react';

const App = () => {
  const [notification, setNotification] = useState("");
  return (
    <div className=' bg-blue-400 min-h-screen flex justify-center items-center relative'>

      {/* notification */}
      {
        notification && (
          <div className="absolute top-5 bg-green-600 text-white rounded-full px-5 py-2">
            {notification}
          </div>
        )
      }
      
      <ContactForm setNotification ={ setNotification}/>
    </div>
  )
}

export default App
