import styles from "./MoreInfo.module.css";
import moreInfoData from "../../data/MoreInfoData";

export default function MoreInfo (){
    return <>
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.containerTop}>
                <h2 className={styles.containerTopTitle}>Te proporcionamos el saber que necesitás para <span className={styles.containerTopTitleBold}>elevar tu negocio al siguiente nivel.</span></h2>
            </div>
            <div className={styles.containerMiddle1}>
                <img src='/img/MoreInfo_Photo_1.png' alt='Emmanuel Mansilla' className={styles.containerPhoto} />
            </div>
            <div className={styles.containerMiddle2}>
                <p className={styles.containerMiddle2Text}>Soy <span className={styles.containerMiddle2Bold}>Emmanuel Mansilla</span>, un apasionado consultor de negocios con una amplia trayectoria y estoy aquí para brindarte mi experiencia y trabajar codo a codo con vos en el crecimiento de tu empresa.</p>
                <div className={styles.containerMiddle2Img}></div>
            </div>
            <div className={styles.containerMiddle3}>
                <p className={styles.containerMiddle3Text}>Nuestra misión es proporcionarte los conocimientos esenciales para unirte al selecto grupo de visionarios que se atreven a llevar su empresa al siguiente nivel, abriendo las puertas hacia el <span className={styles.containerMiddle3Bold}>éxito empresarial</span>.</p>
                <div className={styles.containerMiddle3Img}></div>
            </div>
            <div className={styles.containerBottom}>
                <div className={styles.containerBottomTitleContainer}>
                    <h3 className={styles.containerBottomTitle}>confían en nosotros</h3>
                </div>
                <div className={styles.containerBottomRow}>
                    {moreInfoData.map(p=> <div className={styles.containerBottomBox}>
                        <div className={styles.containerBottomIcon}>{p.icon}</div>
                        <div className={styles.containerBottomTextContainer}>
                            <span className={styles.containerBottomText}>{p.text}</span>
                        </div>
                    </div>)}
                </div>  
            </div>
        </div>
    </section>
    </>
}