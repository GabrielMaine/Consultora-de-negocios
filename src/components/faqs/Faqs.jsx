import styles from "./Faqs.module.css";
import faqsData from "../../data/FaqsData";

export default function Faqs (){
    return <>
        <section className={styles.section}>
            <div>
                <h3 className={styles.subTitle}>Resolvemos tus dudas.</h3>
                <h2 className={styles.mainTitle}>Preguntas frequentes</h2>
            </div>
            <div className={styles.container}>
                {faqsData.map(p=> <div className={styles.containerFaqs}>
                    <div className={styles.containerLeft}>
                        <span className={styles.faqsNumber}>{p.number}</span>   
                    </div>
                    <div className={styles.containerRight}>
                        <details>
                            <summary className={styles.containerQuestion}>
                                <span className={styles.question}>{p.question}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14" fill="none" className={styles.questionIcon}>
                                    <path d="M25.5 12.1431L13.5 1.85735L1.5 12.1431" stroke="black" stroke-width="2.57143" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </summary>
                            <div className={styles.containerAnswer}>
                                <span className={styles.answer}>{p.answer}</span>
                            </div>
                        </details>  
                        <hr className={styles.divider}/>  
                    </div>
                </div>)}
            </div>
        </section>
    </>
}