import styles from 'styles/post-categories.module.css'
import Link from 'next/link'

export default function PostCategories({ categories }) {
    return (
        <ul className={styles.list}>
            {categories.map(({name, }))}
        </ul>
    )
}