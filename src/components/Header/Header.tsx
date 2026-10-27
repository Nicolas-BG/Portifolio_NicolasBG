import styles from './Header.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();

    return (   
    <>
    <header className={styles.header}>
        <h1 className={styles.title + ' ' + styles.block}>{t("header.nome")}</h1>
        <a href="#sobre" className={styles.block + ' ' + styles.option + ' ' + styles.left}>{t("header.sobre")}</a>        
        <a href="#projetos" className={styles.block + ' ' + styles.option}>{t("header.projetos")}</a>
        <a href="#qualificacoes" className={styles.block + ' ' + styles.option}>{t("header.qualificacoes")}</a>
        <a href="#contato" className={styles.block + ' ' + styles.option}>{t("header.contato")}</a>
        <h1 className={styles.block + ' ' + styles.right}>
            <FaGithub className={styles.icon} /> 
            <FaLinkedin className={styles.icon} /></h1>
    </header>    
    <div className={styles.languageButtons}>
        <button className={styles.languageButton} onClick={() => i18n.changeLanguage("pt")}>
        PT
      </button>

      <button className={styles.languageButton} onClick={() => i18n.changeLanguage("en")}>
        EN
      </button>

      <button className={styles.languageButton} onClick={() => i18n.changeLanguage("es")}>
        ES
      </button>
    </div>
    </> 
    )
}

export default Header