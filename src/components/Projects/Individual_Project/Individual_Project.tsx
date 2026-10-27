import styles from './Individual_Project.module.css'
import { useTranslation } from "react-i18next";

interface ProjectProps {
    ProjectName: string;
    ProjectDescription: string;
    ProjectImage: string;
    BackgroundColor_Number?: number;
}

function Individual_Project({ ProjectName, ProjectDescription, ProjectImage, BackgroundColor_Number }: ProjectProps) {



    return (
        <div className={styles.projects + ' ' + (BackgroundColor_Number === 1 ? styles.backgroundColor1 : styles.backgroundColor2)}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{ProjectName}</h1>
                <p className={styles.description}>{ProjectDescription}</p>
            </div>
            <img src={ProjectImage} alt={ProjectName} />
        </div>
    )
}

export default Individual_Project