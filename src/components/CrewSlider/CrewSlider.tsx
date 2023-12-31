'use client'

import styles from './CrewSlider.module.scss'
import data from '@/data/data.json'
import Image from 'next/image'
import { useState } from 'react'

export const CrewSlider = () => {
	interface dataText {
		name: string
		images: {
			png: string
			webp: string
		}
		role: string
		bio: string
	}

	const crewData: dataText[] = data.crew
	const [slide, setSlide] = useState(0)

	return (
		<>
			{crewData.map(
				(crew, index) =>
					index === slide && (
						<div key={index} className={styles.innerContentBox}>
							<div className={styles.crewInfo}>
								<div className={styles.crewTextContainer}>
									<div className={styles.crewTitles}>
										<h2>{crew.role}</h2>
										<h3>{crew.name}</h3>
									</div>
									<p className={styles.mainText}>{crew.bio}</p>
								</div>
								<ul className={styles.crewNav}>
									{crewData.map((nav, index) => (
										<li
											key={index}
											onClick={() => setSlide(index)}
											className={index === slide ? styles.activeNav : ''}
										/>
									))}
								</ul>
							</div>
							<div className={styles.imageContainer}>
								<Image
									src={crew.images.webp}
									alt={`${crew.name} image`}
									width={514}
									height={729}
								/>
							</div>
						</div>
					)
			)}
		</>
	)
}
