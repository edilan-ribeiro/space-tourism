import styles from "@/styles/pageStyles/destination.module.scss"
import { PageTitle } from "@/components/PageTitle/PageTitle"
import {DestinationSlider} from "@/components/DestinationSlider/DestinationSlider"

export default function Destination() {
	return (
		<section className={styles.destinationPageContainer}>
			<div className={styles.outerContentBox}>
				<PageTitle titleId="01" titleText="Pick your destination"/>
				<DestinationSlider />
			</div>
		</section>
	)
}
