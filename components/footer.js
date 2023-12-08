import Logo from './logo'
import style from 'styles/footer.module.css'
import { Footer } from 'components/footer';

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.flexContainer}>
                <Logo />
                [ソーシャル]
            </div>
        </footer>
    )
}