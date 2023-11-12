import styles from './PageTitle.module.scss'

interface PageTitleProps {
    titleId: string
    titleText: string

}

export const PageTitle = ({titleId, titleText}: PageTitleProps) => {
    return <h1 className={styles.pageTitle}><span>{titleId}</span>{titleText}</h1>
}