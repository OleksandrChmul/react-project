import './FriendListItem.css'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
	return (
		<div className='item'>
			<img className='avatar' src={avatar} alt='Avatar' width='48' />
			<p className='name'>{name}</p>
			<p className={`status ${isOnline ? 'online' : 'offline'}`}>
				{isOnline ? 'Online' : 'Offline'}
			</p>
		</div>
	)
}
