import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'

function App() {

   const [isClick, setIsClick] = useState(true)
   const [theme, setTheme] = useState('light')

   useEffect(() => {
      if(theme === "dark") {
         document.documentElement.classList.add("dark")
      }
      else {
         document.documentElement.classList.remove("dark")
      }

   }, [theme])

   const handleClick = () => {
      setIsClick(!isClick)
      setTheme(theme === "dark" ? "light" : "dark")
   }

  return (
   <main className="flex justify-center min-h-screen w-full font-sans text-slate-100 bg-white dark:bg-main_dark">
      <Navbar onClick={handleClick} isClick={isClick}/>
      <TodoList />
    </main>
  )
}

export default App
