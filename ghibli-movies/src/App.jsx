import './App.css'
import Card from './components/Card'
import Infos from './components/Infos'

function App() {

  return (
    <>
    <header> 
      <img className='totoro' src='/totoro.png' /> 
      <ul className='navbar'>
        <li> Movies </li>
        <li> Infos </li>
        <li> Curiosities </li>
      </ul>
    </header>
      <h1> Studio Ghibli - スタジオジブリ作品 </h1>
      <section className ='cards'>
        <Card />
      </section>

      <h2> Infos </h2>

      <section className='infos'>
        <Infos />
      </section>
    </>
  )
}

export default App
