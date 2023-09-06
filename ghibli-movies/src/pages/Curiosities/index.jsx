import { useEffect, useState } from 'react'
import styles from './Curiosities.module.css'

function Curiosities() {

    const [facts, setFacts] = useState([])

    useEffect(()=> {
        const buscarFacts = async () => {
            const response = await fetch('https://ghibli.rest/people?')
            const data = await response.json()
            

            
        

        }
        buscarFacts()
    }, [])


    return(
        facts.map( fact =>
            <section key={fact.id}>
            <ul className={styles.card}>
                <li><h2> {fact.name} </h2></li>
                <li><h2> {fact.gender} </h2></li>
                <li><h2> {fact.age} </h2></li>
                <li><h2> {fact.eye_color} </h2></li>
                <li><h2> {fact.hair_color} </h2></li>
                <button id="botao"> click here </button>
            </ul> 
        </section>
            )
    )
}

export default Curiosities