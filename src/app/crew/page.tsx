import styles from '@/styles/pageStyles/crew.module.scss'
import { PageTitle } from '@/components/PageTitle/PageTitle'
import { CrewSlider } from '@/components/CrewSlider/CrewSlider'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Space tourism - Crew',
}

export default function Destination() {
	return (
		<section className={styles.crewPageContainer}>
			<div className={styles.outerContentBox}>
				<PageTitle titleId="02" titleText="Meet your crew" />
				<CrewSlider />
			</div>
		</section>
	)
}
