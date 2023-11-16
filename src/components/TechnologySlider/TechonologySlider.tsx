'use client'

import styles from './TechonologySlider.module.scss'
import data from '@/data/data.json'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
	const [windowSize, setWindowSize] = useState(screen.width)

	useEffect(() => {
		function handleResize() {
			setWindowSize(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handleNav = (index: number) => {
		setSlide(index)
	}

	return (
		<div className={styles.techSlider}>
			<ul className={styles.techNav}>
				{techData.map((techNav, index) => (
					<li
						key={index}
						onClick={() => handleNav(index)}
						className={index === slide ? styles.activeTechNav : ''}
					>
						{techNav.id}
					</li>
				))}
			</ul>

			{techData.map(
				(tech, index) =>
					index === slide && (
						<div key={index} className={styles.techContentBox}>
							<div>
								<div className={styles.techTitles}>
									<h2>The therminology...</h2>
									<h3>{tech.name}</h3>
								</div>
								<p className={styles.mainText}>{tech.description}</p>
							</div>
							<div className={styles.imageContainer}>
								{windowSize > 768 ? (
									<Image
										src={tech.images.portrait}
										alt="Description"
										width={500}
										height={300}
									/>
								) : (
									<Image
										src={tech.images.landscape}
										alt="Description"
										width={515}
										height={527}
									/>
								)}
							</div>
						</div>
					)
			)}
		</div>
	)
}
