import React from 'react';
import AOS from 'aos';
AOS.init();



const hero = () => {
	return(
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2>My Resume</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row gh-5">

				<div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Experiences</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2024 - Now</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">3D Artist - Part Time</span>
                                	<span className="d_company"> Festivo - PT. Semesta Realitas Indonesia</span>
                                	Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2023 - 2024</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">3D Artist - Internship</span>
                                	<span className="d_company">Google Inc</span>
                                	Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2022 - 2023</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title"> Deputi Coordinator Plaza Desain Emotia - Binus University</span>
                                	<span className="d_company">Student Activity Unit</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6" 
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2020 - present</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Binus University</span>
                                	<span className="d_company"> Visual Communication Design, New Media</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2017 - 2020</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Student</span>
                                	<span className="d_company">Lab School Cibubur</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2006 - 2004</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Artist of College</span>
                                	<span className="d_company">University of Sydney</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
			</div>
		</div>
	);
}

export default hero;