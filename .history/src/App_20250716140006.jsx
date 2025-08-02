import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl font-bold">
  Tailwind is working perfectly! 🚀
</div>

    </>
  )
}

export default App
