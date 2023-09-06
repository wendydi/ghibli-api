import styles from './Home.module.css'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
    return (
        <>
        <Header />
        <h1> Studio Ghibli - スタジオジブリ作品 </h1>
        <section className='cards'>
            <Card />
        </section>
        <Footer /></>
    )
}

export default Home