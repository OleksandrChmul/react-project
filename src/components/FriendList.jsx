import './FriendList.css'
import { FriendListItem } from './FriendListItem'

export const FriendList = ({ friends }) => {
	return (
		<ul className='friend-list'>
			{friends.map(friend => {
				return (
					<li className='friend-list-item' key={friend.id}>
						<FriendListItem friend={friend} />
					</li>
				)
			})}
		</ul>
	)
}
