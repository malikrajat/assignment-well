import React from "react";

function Footer() {
	return (
		<footer className="bg-light text-center text-lg-start">
			<div className="container p-4">
				<div className="row">
					<div className="col-lg-6 col-md-12 mb-4 mb-md-0">
						<h5 className="text-uppercase">Get to Know Us</h5>

						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Iste atque ea quis molestias. Fugiat pariatur
						</p>
					</div>

					<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
						<h5 className="text-uppercase">Links</h5>

						<ul className="list-unstyled mb-0">
							<li>
								<a href="#!" className="text-dark">
									About Us
								</a>
							</li>
							<li>
								<a href="#!" className="text-dark">
									Press Releases
								</a>
							</li>
							<li>
								<a href="#!" className="text-dark">
									Gift a Smile
								</a>
							</li>
						</ul>
					</div>

					<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
						<h5 className="text-uppercase mb-0">Connect with Us</h5>

						<ul className="list-unstyled">
							<li>
								<a href="#!" className="text-dark">
									Facebook
								</a>
							</li>
							<li>
								<a href="#!" className="text-dark">
									Twitter
								</a>
							</li>
							<li>
								<a href="#!" className="text-dark">
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="text-center p-3">
				© 2021 Copyright:
				<a className="text-dark" href="#">
					Online.com
				</a>
			</div>
		</footer>
	);
}

export default Footer;
