import { useEffect, useState } from 'react'
import styles from './Infos.module.css'

function Infos(){

    const [infos, setInfos] = useState([])

    useEffect(()=> {
        const buscarInfos = async () => {
            const response = await fetch('https://ghibli.rest/films?')
            const data = await response.json()
            setInfos(data)
        }
        buscarInfos()
    }, [])

    return(
        
        
        infos.map( info => (
             <section className={styles.infos}>  
                <div className={styles.title_banner}>
                    <h2> {info.title} </h2>
                    <img className={styles.banner} src={info.movie_banner} />
                </div>
                <div className={styles.all_details}>
                    <h3 className={styles.description}> {info.description} </h3>
                    <p className={styles.details}> Director: {info.director} </p>
                    <p className={styles.details}> Producer: {info.producer} </p>
                    <p className={styles.details}> {info.release_date} </p>
                    <p className={styles.details}> {info.running_time} minutes </p>
                    <p className={styles.details}> <img className={styles.rotten} src='./assets/Rotten_Tomatoes.png' /> {info.rt_score} </p>
                </div>
            </section>

                    ))
    )

}

export default Infos