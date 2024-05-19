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
                                	As a part-time 3D Artist for nearly a year, I specialized in creating detailed and immersive 3D models for a VR game. 
                                    Balancing my role with my undergraduate studies, I developed and refined assets that enhanced the game's interactive environments, 
                                    demonstrating strong technical skills and creativity.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2023 - 2024</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">3D Artist - Internship</span>
                                	<span className="d_company">Festivo - PT. Semesta Realitas Indonesia</span>
                                	During my internship, I gained hands-on experience in 3D modeling and animation, 
                                    contributing to various projects that required meticulous attention to detail and creative problem-solving. 
                                    This foundational experience allowed me to hone my skills in industry-standard software and collaborate effectively with a team, 
                                    preparing me for my subsequent part-time role as a 3D Artist
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2022 - 2023</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title"> Deputi Coordinator Plaza Desain Emotia - Binus University</span>
                                	<span className="d_company">Student Activity Unit</span>As Deputy Coordinator of Plaza Desain Emotia at Binus University during my second year, 
                                    I led and organized events and activities within the Student Activity Unit. 
                                    This role involved coordinating a team, managing project timelines, and fostering a creative environment for students to showcase their design talents. 
                                    My leadership and organizational skills were instrumental in successfully executing numerous campus events and initiatives.
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
                                	<span className="d_company"> Bachelor's Degree in Visual Communication Design, New Media</span>
                                    I am pursuing a Bachelor's Degree in Visual Communication Design, specializing in New Media at Binus University. 
                                    This program combines traditional design principles with modern digital technologies, focusing on areas such as interactive media, animation, virtual reality, and multimedia storytelling. 
                                    Through this course, I have developed strong skills in visual design, digital content creation, and user experience design, preparing me to create innovative and engaging multimedia projects.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2017 - 2020</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Student</span>
                                	<span className="d_company">Lab School Cibubur</span>As a senior high school student at Lab School Cibubur, 
                                    I was actively involved in school organizations, where I demonstrated leadership, teamwork, and a positive attitude. 
                                    I consistently strived to be creative in my projects and initiatives, contributing to a vibrant and dynamic school community. 
                                    My active participation in extracurricular activities helped me develop strong interpersonal skills and a proactive approach to problem-solving.


                                </p>
                            </li>
                            {/* <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2006 - 2004</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Artist of College</span>
                                	<span className="d_company">University of Sydney</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
			</div>
		</div>
	);
}

export default hero;