import clsx from 'clsx'
import css from './Profile.module.css'

export const Profile = ({ name, tag, location, image, stats }) => {
	return (
		<div className={css.profile}>
			<div className={css.description}>
				<img src={image} alt={name} className={clsx(css.avatar, css.prof)} />
				<p className={css.name}>{name}</p>
				<p className={css.tag}>@{tag}</p>
				<p className={css.location}>{location}</p>
			</div>

			<ul className={css.stats}>
				<li>
					<span className={css.label}>Followers: </span>
					<span className={css.value}>{stats.followers}</span>
				</li>
				<li>
					<span className={css.label}>Views: </span>
					<span className={css.value}>{stats.views}</span>
				</li>
				<li>
					<span className={css.label}>Likes: </span>
					<span className={css.value}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	)
}
