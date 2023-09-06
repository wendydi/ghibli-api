import styles from './Header.module.css'

function Header() {

    return(
        <section>
            <header> 
                <img className={styles.totoro} src='/totoro.png' /> 
                <ul className={styles.navbar}>
                    <li> Movies </li>
                    <li> Infos </li>
                    <li> Curiosities </li>
                </ul>
                </header>
        </section>
    )
}

export default Header