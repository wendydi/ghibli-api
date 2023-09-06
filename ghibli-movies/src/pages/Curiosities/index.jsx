import { useEffect, useState } from 'react'
import styles from './Curiosities.module.css'

function Curiosities() {
    const [chars, setChars] = useState([])
    const [currentIndex, setCurrentIndex] = useState(null)
    const [filmTitle, setFilmTitle] = useState('')

    useEffect(() => {
        const buscarChars = async () => {
            try {
                const response = await fetch('https://ghibli.rest/people?')
                const data = await response.json()
                setChars(data)
                setCurrentIndex(Math.floor(Math.random() * data.length))
            } catch (error) {
                console.error('Erro ao buscar dados dos personagens:', error)
            }
        }
        buscarChars()
    }, [])

    const nextChar = async () => {
        let newIndex = currentIndex
        while (newIndex === currentIndex) {
            newIndex = Math.floor(Math.random() * chars.length)
        }
        setCurrentIndex(newIndex)

        // Verifique se o personagem tem filmes associados
     
            const filmURL = chars.films[0] // Pega a primeira URL de filme
            try {
                const response = await fetch(filmURL)
                const filmData = await response.json()
                setFilmTitle(filmData.title)
            } catch (error) {
                console.error('Erro ao buscar detalhes do filme:', error)
                setFilmTitle('Título não encontrado')
            }
    }

    return (
        <section key={chars[currentIndex]?.id}>
            <h2 className={styles.chars}>{chars[currentIndex]?.name}</h2>
            <h3 className={styles.chars}> Gender: {chars[currentIndex]?.gender}</h3>
            <h3 className={styles.chars}>Age: {chars[currentIndex]?.age}</h3>
            <h3 className={styles.chars}>Eye Color: {chars[currentIndex]?.eye_color}</h3>
            <h3 className={styles.chars}>Hair Color: {chars[currentIndex]?.hair_color}</h3>
            <h3 className={styles.chars}>Films: {filmTitle}</h3>
            <button className={styles.button} onClick={nextChar}>Next</button>
        </section>
    )
}

export default Curiosities
