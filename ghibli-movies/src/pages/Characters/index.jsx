import { useEffect, useState } from 'react'
import styles from './Characters.module.css'

function Characters() {
    const [chars, setChars] = useState([])
    const [currentIndex, setCurrentIndex] = useState(null)

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

    

    const nextChar = () => {
        let newIndex = currentIndex
        while (newIndex === currentIndex) {
            newIndex = Math.floor(Math.random() * chars.length)
        }
        setCurrentIndex(newIndex)
    }
    
        const filmId = chars[currentIndex]?.films

    return (
        <section key={chars[currentIndex]?.id}>
            <h2 className={styles.chars}>{chars[currentIndex]?.name}</h2>
            <h3 className={styles.chars}> Gender: {chars[currentIndex]?.gender}</h3>
            <h3 className={styles.chars}>Age: {chars[currentIndex]?.age}</h3>
            <h3 className={styles.chars}>Eye Color: {chars[currentIndex]?.eye_color}</h3>
            <h3 className={styles.chars}>Hair Color: {chars[currentIndex]?.hair_color}</h3>
            <h3 className={styles.chars}><a href= {chars[currentIndex]?.films}> Movie </a></h3>
            <button className={styles.button} onClick={nextChar}>Next</button>
        </section>
    )
    
}

export default Characters
