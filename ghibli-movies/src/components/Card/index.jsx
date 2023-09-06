import { useEffect, useState } from 'react'
import styles from './Card.module.css'

function Card() {

    const [filmes, setFilmes] = useState([])

    useEffect(()=> {
        const buscarFilmes = async () => {
            const response = await fetch('https://ghibli.rest/films?')
            const data = await response.json()
            setFilmes(data)
        }
        buscarFilmes()
    }, [])

    return(
        filmes.map( filme =>
            <section key={filme.title}>
            <table className={styles.card}>
                <tr>
                    <td><img src={filme.image} alt="" /></td>
                </tr>
                    <td><h3> {filme.title} - {filme.original_title} </h3> </td>
                <tr>
                    <td><p> {filme.director} - {filme.release_date} </p> </td>
                </tr>
            </table> 
        </section>
            )
    )
}

export default Card