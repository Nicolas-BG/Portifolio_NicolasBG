import styles from './MainPage.module.css';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Qualifications from '../Qualifications/Qualifications';

function MainPage() {
    return (
        <div className={styles.mainPage}>
            <Header />
            <div className={styles.separade}></div>
            <section id="sobre">
                <About />
            </section>
            <section id="projetos">
                <Projects />
            </section>
            <section id="qualificacoes">
                <Qualifications />
            </section>
            <section id="contato">
            </section>
        </div>
    )
}

export default MainPage