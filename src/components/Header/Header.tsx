import styles from './Header.module.css'
import logo from '../../img/logo.png'

function Header() {
    return (
        <header className={styles.appHeader}>
            <span>Lorem ipsum dolor</span>
            <img className={styles.appHeaderLogo} src={logo} alt="logo" />
            <span>Lorem ipsum dolor</span>
        </header>
    )
}

export default Header