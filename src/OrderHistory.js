import React, { useEffect, useState } from "react";
function OrderHistory() {
	const [orderHistory, setorderHistory] = useState([]);

	const renderTableData = (record, date) => {
		setorderHistory(JSON.parse(localStorage.getItem("orderHistory")));
		return (
			<>
				{record.items.map((items, index) => (
					<tr key={items.id}>
						<td>{index + 1}</td>
						<td className="row-width-50">
							<a href="#!">
								<img
									className="avatar img-wid"
									src={items.image}
									alt={items.title}
								/>
								{items.title}
							</a>
						</td>
						<td>{items.qty}</td>
						<td>{items?.price?.toFixed(2)}</td>
						<td>{(items.qty * items.price).toFixed(2)}</td>
						<td>{new Date(date).toLocaleDateString()}</td>

						<td className="row-width-10">
							<a href="#!" title="View Details">
								View Detail
							</a>
						</td>
					</tr>
				))}
			</>
		);
	};
	return (
		<div className="container-xl">
			<div className="table-responsive">
				<div className="table-wrapper">
					<div className="table-title">
						<div className="row">
							<div className="col-sm-4">
								<h2>
									Order <b>Details</b>
								</h2>
							</div>
						</div>
					</div>

					<table className="table table-striped table-hover">
						<thead>
							<tr>
								<th>#</th>
								<th>Title</th>
								<th>QTY</th>
								<th>Price</th>
								<th>Net Amount</th>
								<th>Order Date</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{orderHistory?.length > 0 &&
								orderHistory.map((item) =>
									renderTableData(item, item?.Date)
								)}
							{orderHistory?.length < 1 && (
								<tr className="text-center">
									<td colSpan="7">No Record Found</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default OrderHistory;
