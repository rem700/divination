import titleImg from '../../img/Promo.jpg'
import styles from './TitlePicture.module.css'

function TitlePicture() {
    return (
        <div className={styles.titleTmgWrapper}>
            <img src={titleImg} alt="title" />
        </div>
        //     <img src={titleImg} className={styles.titlePic} alt="title" />
    )
}

export default TitlePicture