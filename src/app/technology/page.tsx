import styles from '@/styles/pageStyles/technology.module.scss'
import { PageTitle } from '@/components/PageTitle/PageTitle'
import { TechonologySlider } from '@/components/TechnologySlider/TechonologySlider'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Space tourism - Technology',
}

export default function Technology() {
	return (
		<section className={styles.technologyPageContainer}>
			<div className={styles.outerContentBox}>
				<PageTitle titleId="03" titleText="SPACE LAUNCH 101" />
				<TechonologySlider />
			</div>
		</section>
	)
}
