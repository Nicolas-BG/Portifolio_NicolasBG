import styles from './Qualifications.module.css'
import { useTranslation } from "react-i18next";
import Individual_Qualification from './Individual_Qualification/Individual_Qualification';

function Qualifications() {
    const { t } = useTranslation();

    return (
        <div className={styles.qualifications}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{t('qualificacoes.titulo')}</h1>
                <p className={styles.description}>{t('qualificacoes.descricao')}</p>
            </div>
            <div className={styles.qualificationsList}>
                {t('qualificacoes.qualificacao', { returnObjects: true }).map((qualification: any, index: number) => (
                    <Individual_Qualification
                    key={index}
                    title={qualification.nome}
                    institution={qualification.instituicao}
                    description={qualification.descricao}
                    BackgroundColor_Number={(index % 2) + 1}
                    />                    
                ))}
            </div>
            <div className={styles.resume}>
                <a href={t('qualificacoes.curriculoLink')} download>
                    {t('qualificacoes.curriculo')}
                </a>
            </div>
        </div>
    )
}

export default Qualifications