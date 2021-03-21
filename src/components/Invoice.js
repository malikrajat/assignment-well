import React, { useEffect, useState } from "react";

function Invoice(props) {
	const [orderDetails, setorderDetails] = useState([]);
	useEffect(() => {
		const oderDetail = JSON.parse(localStorage.getItem("orderHistory"));
		setorderDetails(oderDetail[oderDetail.length - 1]);
	}, []);
	const listItems = (item) => {
		return (
			<tr className="content" key={item.id}>
				<td>{item.title}</td>
				<td>{item.qty}</td>
				<td>{item.price.toFixed(2)}</td>
				<td className="text-center">{item.qty * item.price}</td>
			</tr>
		);
	};
	return (
		<div className=" mt-5 mb-3">
			<div className="row d-flex justify-content-center">
				<div className="col-md-8">
					{orderDetails && (
						<div className="card">
							<div className="d-flex flex-row p-2">
								<img
									src="https://i.imgur.com/vzlPPh3.png"
									width="48"
									alt=""
								/>
								<div className="d-flex flex-column">
									<span className="font-weight-bold">
										Tax Invoice
									</span>
									<small>{orderDetails.CartId}</small>
								</div>
							</div>
							<hr />
							<div className="table-responsive p-2">
								<table className="table table-borderless">
									<tbody>
										<tr className="add">
											<td>To</td>
											<td>From</td>
										</tr>
										<tr className="content">
											<td className="font-weight-bold">
												Sunil <br />
												Attn: John Smith Pymont <br />
												Australia
											</td>
											<td className="font-weight-bold">
												Rajat <br /> Attn: John Right
												Polymont <br /> USA
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<hr />
							<div className="products p-2">
								<table className="table table-borderless">
									<tbody>
										<tr className="add">
											<td>Title</td>
											<td>QTY</td>
											<td>Price (INR)</td>
											<td className="text-center">
												Total (INR)
											</td>
										</tr>
										{orderDetails &&
											orderDetails?.items?.map((item) =>
												listItems(item)
											)}
									</tbody>
								</table>
							</div>
							<hr />
							<div className="products p-2">
								<table className="table table-borderless">
									<tbody>
										<tr className="add">
											<td>Sale Tax (INR)</td>
											<td>Subtotal (INE)</td>
											<td>GST(10%)</td>
											<td className="text-center">
												Total (INE)
											</td>
										</tr>
										<tr className="content">
											<td>
												{orderDetails?.saleTax?.toFixed(
													2
												)}
											</td>
											<td>
												{orderDetails?.itemPrice?.toFixed(
													2
												)}
											</td>
											<td>
												{orderDetails.totalGst?.toFixed(
													2
												)}
											</td>
											<td className="text-center">
												{orderDetails?.finalPrice?.toFixed(
													2
												)}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Invoice;
