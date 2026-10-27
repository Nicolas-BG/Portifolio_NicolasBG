import styles from './About.module.css'
import { useTranslation } from "react-i18next";

function About() {

    const { t } = useTranslation();
    
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>{t('sobre.titulo')}</h1>
            <p className={styles.description}>{t('sobre.descricao')}</p>
        </div>
    )
}

export default About