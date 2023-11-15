import styles from "@/styles/pageStyles/home.module.scss"
import Link from "next/link"

export default function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.homeContentBox}>
				<div className={styles.leftContainer}>
					<h1 className={styles.homeHeadingSmallWord}>
						So, you want to travel to
					<strong className={styles.homeHeadingBigWord}>Space</strong>
					</h1>
					<p className={styles.mainText}>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<div className={styles.rightContainer}>
					<Link href={"/destination"} className={styles.link}>
						<p>explore</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
