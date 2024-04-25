
import TitlePicture from '../TitlePicture/TitlePicture'
import UserForm from '../UserForm/UserForm'
import styles from './Content.module.css'

function Content() {
  return (
    <div>
        <TitlePicture />
        <section className={styles.contentTable}>
            <UserForm />
            
        </section>
    </div>
  )
}

export default Content