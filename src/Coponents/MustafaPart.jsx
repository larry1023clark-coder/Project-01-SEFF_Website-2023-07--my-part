import React from "react";
import { Link } from "react-router-dom";

function MustafaPart() {
	return (
		<div className="container login-container d-flex flex-column justify-content-center align-items-center mx-auto min-vh-100">
			<div className="Login__card d-flex flex-column gap-3 p-4 shadow-lg position-relative bg-black bg-opacity-75 rounded-3">
				<h4>Frontend training</h4>
				<p>Mustafa Abutabl Part</p>
        
				<Link to="/createcv" className="btn btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					create cv
				</Link>

				<Link to="/auth/login" className="btn btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					SignIn page
				</Link>
				<Link to="/auth/forget-password" className="btn btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					forget password
				</Link>
				<Link to="/auth/reset-password" className="btn btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					reset password
				</Link>
				<Link to="/admin/jobs" className="btn btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					/admin/ jobs
				</Link>
				<Link to="/admin/jobs/applications" className="btn btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					admin/ jobs/ applications
				</Link>
			</div>
		</div>
	);
}

export default MustafaPart;
