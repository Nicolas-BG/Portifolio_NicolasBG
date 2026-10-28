import styles from './Contact.module.css'
import { useTranslation } from "react-i18next";

function Contact() {

    const { t } = useTranslation();

    return (
        <div className={styles.contact}>
            <h1 className={styles.title}>{t('contato.titulo')}</h1>
            <div className={styles.contactBox}>
                <p className={styles.description}>{t('contato.email')}</p>
                <p className={styles.description}>{t('contato.whatsapp')}</p>
                <p className={styles.description}>{t('contato.linkedin')}</p>
                <p className={styles.description}>{t('contato.github')}</p>
            </div>
        </div>
    )
}

export default Contact