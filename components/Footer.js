import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div>
			<footer className="z-10 bg-[#071C26] pt-20 w-full mx-auto lg:pt-[80px] lg:pb-4">
				<div className="container mx-auto w-[75%]">
					<div className="flex flex-wrap justify-around">
						<div className="w-full px-4 sm:w-2/3 lg:w-1/3">
							<div className="mb-10 w-full">
								<Link href="#" className="mb-6 inline-block max-w-[160px]">
									<div className="flex flex-row">
										<img
											src="https://directory.api-setu.in/nationalemblemindia.png"
											alt="logo"
											className="max-w-full mr-2"
										/>
										<span className="text-white text-4xl -mt-1"> | </span>
										<img
											src="https://directory.api-setu.in/digilogow.png"
											alt="logo"
											className="ml-2 max-w-full"
										/>
									</div>
								</Link>
								<p className="text-white mb-2 text-base">
									National e-Governance Division (NeGD) Ministry of Electronics
									& IT (MeitY)
								</p>
								<p className="text-white text-base">Government of India</p>
							</div>
						</div>
						<div className="w-full px-4 sm:w-1/2 lg:w-1/3">
							<div className="mb-10 w-full flex lg:justify-center justify-start">
								<ul>
									<li>
										<Link
											href="#"
											className="text-white hover:text-primary inline-block text-base"
										>
											About Us
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-white hover:text-primary inline-block text-base"
										>
											Terms of Use
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-white hover:text-primary inline-block text-base"
										>
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-white hover:text-primary inline-block text-base"
										>
											User Strategy
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-white hover:text-primary inline-block text-base"
										>
											Join Us
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-white hover:text-primary inline-block text-base"
										>
											Contact Us
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-white hover:text-primary inline-block text-base"
										>
											Support
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="w-full px-4 sm:w-1/2 lg:w-1/3">
							<div className="mb-10 w-full">
								<h4 className="text-white mb-9 text-lg font-semibold">
									Powered By:
								</h4>
								<div className="mb-6 flex items-center">
									<img
										src="https://directory.api-setu.in/di_logo.png"
										alt="logo"
										className=""
									/>
								</div>
								<p className="text-white text-base">
									Digital India Corporation (DIC)
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
