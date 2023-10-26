import styles from "./Benefits.module.css";
import BenefitsData from "../../data/BenefitsData";

export default function Benefits (){
    return <>
    <section className={styles.section}>
        <div>
            <h3 className={styles.subTitle}>Hacemos la diferencia.</h3>
            <h2 className={styles.mainTitle}>Beneficios de elegirnos</h2>
        </div>
        <div className={styles.rows}>
            {BenefitsData.map(p=> 
                <div className={styles.card}>
                    <div className={styles.cardImageContainer}>
                        {p.icon}
                    </div>
                    <div className={styles.cardTextContainer}>
                        <h4 className={styles.cardTitle}>{p.title}</h4>
                        <p className={styles.cardText}>{p.content}</p>
                    </div>
                </div>)}
        </div>
    </section>
    </>;
}