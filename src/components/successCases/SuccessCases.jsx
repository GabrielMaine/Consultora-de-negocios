import styles from "./SuccessCases.module.css";

export default function SucessCases (){
    return <>
        <section className={styles.section}>
            <div>
                <h3 className={styles.subTitle}>Triunfos inspiradores.</h3>
                <h2 className={styles.mainTitle}>Casos de éxito</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <p className={styles.text}>Descubrí las historias de triunfo de <span className={styles.textBold}>nuestros emprendedores</span>, los casos que inspiran y demuestran el potencial de nuestro asesoramiento.</p>
                </div>
                <div className={styles.videoContainer}>
                <iframe className={styles.video} src="https://www.youtube.com/embed/fw_0_1HQcpA?si=90w1kLpDz5MxQsEa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    </>;
}