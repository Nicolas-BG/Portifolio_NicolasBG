import styles from './Individual_Qualification.module.css'

interface IndividualQualificationProps {
	title: string;
	institution: string;
	description?: string;
    BackgroundColor_Number: number;
}

export default function Individual_Qualification({ title, institution, description, BackgroundColor_Number }: IndividualQualificationProps) {
	return (
		<div className={styles.qualification_item+ ' ' + (BackgroundColor_Number === 1 ? styles.backgroundColor1 : styles.backgroundColor2)}>
			<p className={styles.qualification_title}>{title}</p>
			<p className={styles.qualification_institution}>{institution}</p>
			{description && <p className={styles.qualification_description}>{description}</p>}
		</div>
	);
}
