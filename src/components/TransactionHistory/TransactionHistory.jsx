import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
	return (
		<table className={css.transactionHistory}>
			<thead>
				<tr className={css.tr}>
					<th className={css.th}>Amount</th>
					<th className={css.th}>Type</th>
					<th className={css.th}>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map((item, i) => {
					return (
						<tr className={css.tr} key={i}>
							<td className={css.td}>{item.type}</td>
							<td className={css.td}>{item.amount}</td>
							<td className={css.td}>{item.currency}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}