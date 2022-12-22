import Link from "next/link";
import React from "react";

const Cta = () => {
	return (
		<div>
			<section
				className="pt-[40px] pb-[40px] text-white cta-bg"
				style={{ backgroundSize: "cover" }}
			>
				<div className="container" style={{ backgroundSize: "cover" }}>
					<div
						className="flex flex-col items-center lg:gap-x-9 lg:flex-row justify-center"
						style={{ backgroundSize: "cover" }}
					>
						<div
							className="col-sm-4 de_count"
							style={{ backgroundSize: "cover" }}
						>
							<img
								// style="width:260px;height:180px;"
								style={{ width: "260px", height: "180px" }}
								src="https://apisetu.gov.in/assets/img/meet2_new.png"
							/>
						</div>
						<div className="de_count px-5 flex flex-col gap-y-2 mt-6 lg:px-0 lg:mt-0 lg:gap-y-0">
							<h3 className="text-4xl font-semibold">
								We are now available on Video Conference
							</h3>
							<h4 className="text-[19px] font-semibold">
								Monday to Friday | 02:30 PM to 04:30 PM
							</h4>
							<div
								className="spacer-30"
								style={{ backgroundSize: "cover" }}
							></div>
							<div className="action" style={{ backgroundSize: "cover" }}>
								<Link
									href="https://apisetu.gov.in/support"
									className="btn-custom "
									style={{ background: "#fff", color: "#ff7001" }}
								>
									Join Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Cta;
