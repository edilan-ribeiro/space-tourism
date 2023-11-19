'use client'

import styles from './TechonologySlider.module.scss'
import data from '@/data/data.json'
import Image from 'next/image'
import { useState } from 'react'

export const TechonologySlider = () => {
	interface dataText {
		name: string
		images: {
			portrait: string
			landscape: string
		}
		description: string
		id: number
	}

	const techData: dataText[] = data.technology
	const [slide, setSlide] = useState(0)

	return (
		<div>
			{techData.map(
				(tech, index) =>
					index === slide && (
						<div key={index} className={styles.techContentBox}>
							<div className={styles.infoSide}>
								<ul className={styles.techNav}>
									{techData.map((techNav, index) => (
										<li
											key={index}
											onClick={() => setSlide(index)}
											className={index === slide ? styles.activeTechNav : ''}
										>
											{techNav.id}
										</li>
									))}
								</ul>
								<div className={styles.techText}>
									<div className={styles.techTitles}>
										<h2>The therminology...</h2>
										<h3>{tech.name}</h3>
									</div>
									<p className={styles.mainText}>{tech.description}</p>
								</div>
							</div>
							<div className={styles.imageContainer}>
								<picture>
									<source
										srcSet={tech.images.landscape}
										media="(max-width: 1000px)"
									/>
									<Image
										src={tech.images.portrait}
										alt={`${tech.name}Description`}
										width={500}
										height={300}
										priority={true}
									/>
								</picture>
							</div>
						</div>
					)
			)}
		</div>
	)
}
