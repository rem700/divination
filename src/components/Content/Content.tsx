import CardsLayout from '../CardsLayout/CardsLayout'
import DivinationText from '../DivinationText/DivinationText'
import TitlePicture from '../TitlePicture/TitlePicture'
import UserForm from '../UserForm/UserForm'
import styles from './Content.module.css'

function Content() {
  return (
    <div>
        <TitlePicture />
        <section className={styles.contentTable}>
            <UserForm />
            <CardsLayout />
            <DivinationText />
        </section>
    </div>
  )
}

export default Content