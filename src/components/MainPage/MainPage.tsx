import styles from './MainPage.module.css';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';

function MainPage() {
    return (
        <div className={styles.mainPage}>
            <Header />
            <div className={styles.separade}></div>
            <About />
            <Projects />
        </div>
    )
}

export default MainPage