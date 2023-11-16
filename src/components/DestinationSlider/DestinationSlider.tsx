'use client'
import styles from './DestinationSlider.module.scss'
import data from '@/data/data.json'
import Image from 'next/image'
import { useState } from 'react'

export const DestinationSlider = () => {
	interface dataText {
		name: string
		images: {
			png: string
			webp: string
		}
		description: string
		distance: string
		travel: string
	}

	const destinationsData: dataText[] = data.destinations
	const [slide, setSlide] = useState(0)

	const handleNav = (index: number) => {
		setSlide(index)
	}

	return (
		<>
			{destinationsData.map(
				(destinations, index) =>
					index === slide && (
						<div key={index} className={styles.innerContentBox}>
							<div className={styles.imageSide}>
								<Image
									src={destinations.images.webp}
									alt={`${destinations.name} image`}
									width={445}
									height={445}
								/>
							</div>
							<div>
								<ul className={styles.nav} data-slide={slide}>
									{destinationsData.map((nav, index) => (
										<li
											key={index}
											onClick={() => handleNav(index)}
											className={index === slide ? styles.activeNav : ''}
										>
											{nav.name}
										</li>
									))}
								</ul>
								<div  className={styles.infoSide}>
								<h2 className={styles.destinationTitle}>{destinations.name}</h2>
								<p className={styles.mainText}>{destinations.description}</p>
								<span></span>
								<div className={styles.travelInfo}>
									<div>
										<h3>AVG. DISTANCE</h3>
										<h4>{destinations.distance}</h4>
									</div>
									<div>
										<h3>Est. travel time</h3>
										<h4>{destinations.travel}</h4>
									</div>
									</div>
								</div>
							</div>
						</div>
					)
			)}
		</>
	)
}
