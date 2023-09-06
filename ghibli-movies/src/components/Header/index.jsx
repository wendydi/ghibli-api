import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {

    return(
        <section>
            <header> 
                <Link to ="/"><img className={styles.totoro} src='/totoro.png' /> </Link>
                <ul className={styles.navbar}>
                    <li> <Link to ="/"> Movies </Link></li>
                    <li> <Link to ="/infos"> Infos </Link></li>
                    <li> <Link to ="/curiosities"> Curiosities </Link></li>
                </ul>
                </header>
        </section>
    )
}

export default Header