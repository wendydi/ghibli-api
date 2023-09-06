import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <h1> Studio Ghibli - スタジオジブリ作品 </h1>
        <section >
            <h3> See all the Studio Ghibli Movies <Link to = "/Movies"> here </Link> !</h3>
        </section>
        </>
    )
}

export default Home