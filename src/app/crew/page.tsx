import styles from "@/styles/pageStyles/crew.module.scss"
import { PageTitle } from "@/components/PageTitle/PageTitle"
import { CrewSlider } from "@/components/CrewSlider/CrewSlider"


export default function Destination() {
	return (
		<main className={styles.crewPageContainer}>
			<div className={styles.outerContentBox}>
				<PageTitle titleId="02" titleText="Meet your crew"/>
				<CrewSlider />
			</div>
		</main>
	)
}