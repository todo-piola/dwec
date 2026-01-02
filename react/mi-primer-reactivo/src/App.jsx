import './App.css'
import HeaderComponent from './components/HeaderComponent.jsx'
import ButtonComponent from './components/ButtonComponent.jsx'
import Login from './components/Login.jsx'
import MovieList from './components/MovieList.jsx'
import { useEffect, useState } from 'react'

function App() {

  useEffect(() => {
    console.log("Ejecución cada vez que se renderiza el componente")
  })

  const [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number + 1)
  }

  let myPlaceholder = "Introduce tu nombre";

  const sayHello = () => {
    console.log('Hello')
  }

  const handleChange = (ev) => {
    console.log(ev.target.value)
  }

  const [greetings] = useState("Bienvenid@s a mi primer reactivo");

  const links = {
      home: "Home",
      blog: "Blog",
      news: "News",
      contact: "Contact Us"
  }

  const [user, setUser] = useState({})

  const login = (userInfo) => {
    console.log(userInfo)
    setUser(userInfo)
  }

  const condition = false

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}/>
      <main>
        {user.username && <h2 onClick={sayHello}> Hola {user.username} </h2> }
        <Login handleLogin={login}/>
        <input type="text" placeholder={myPlaceholder} onChange={handleChange} />
        <br/>
        <br/>
        <br/>
        <br/>
        <MovieList />

        <h2>Conteo: {number}</h2>

        {condition && <h2> La condición se cumple </h2>}
        {!condition && <h2> La condición NO se cumple </h2>}
        { condition ? (
          <h2> La condición se cumple </h2>
        ) : (
          <h2> La condición NO se cumple </h2>
        )
        }
      </main>

      <ButtonComponent addOne={addOne}/>
    </>
  )
}

export default App
