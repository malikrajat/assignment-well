import React from "react";

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					E-Commerce
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#"
							>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Mobile
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								TV
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Fashion
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Book
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Toy
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Medicine
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Food
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
