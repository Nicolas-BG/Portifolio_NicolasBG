import styles from './Projects.module.css'
import { useTranslation } from "react-i18next";
import Individual_Project from './Individual_Project/Individual_Project';

function Projects() {

    const { t } = useTranslation();
    
    return (
        <div className={styles.projects}>
            <div className={styles.titleContainer}>
            <h1 className={styles.title}>{t('projeto.titulo')}</h1>
            <p className={styles.description}>{t('projeto.descricao')}</p>
            </div>
            <div className={styles.projectList}>
                {t('projeto.projetos', { returnObjects: true }).map((project: any, index: number) => (
                    <Individual_Project
                        key={index}
                        ProjectName={project.nome}
                        ProjectDescription={project.descricao}
                        ProjectImage={project.imagelink}
                        BackgroundColor_Number={(index % 2) + 1}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects