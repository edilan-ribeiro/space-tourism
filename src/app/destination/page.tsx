import styles from "@/styles/pageStyles/destination.module.scss"
import { PageTitle } from "@/components/PageTitle/PageTitle"
import {DestinationSlider} from "@/components/DestinationSlider/DestinationSlider"

export default function Destination() {
	return (
		<main className={styles.destinationPageContainer}>
			<div className={styles.content}>
				<PageTitle titleId="01" titleText="Pick your destination"/>
				<DestinationSlider />
			</div>
		</main>
	)
}
