import React from 'react';
import Masonry from "react-masonry-component";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery= function() {
        /* lightbox1 */
        const [lighbx, setlighbx] = React.useState(false);
        const handleBtnClick = () => {
            setlighbx(!lighbx);
            var x = document.getElementsByTagName("BODY")[0];
            x.style.overflow = "hidden";
        };
        const handleBtnClickclose = () => {
            setlighbx(!lighbx);
            var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    /* lightbox2 */
    const [lighbx1, setlighbx1] = React.useState(false);
    const handleBtnClick1 = () => {
        setlighbx1(!lighbx1);
        var x = document.getElementsByTagName("BODY")[0];
        x.style.overflow = "hidden";
    };
    const handleBtnClickclose1 = () => {
        setlighbx1(!lighbx1);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    /* lightbox2 */
    const [lighbx2, setlighbx2] = React.useState(false);
    const handleBtnClick2 = () => {
      setlighbx2(!lighbx2);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose2 = () => {
      setlighbx2(!lighbx2);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };


    return(
            <div className="container">
            <GlobalStyles/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Portfolio</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                 <Masonry
                    className={"row my-gallery-class"} elementType={"div"}>
                    <div className="col-lg-4 image-element-class de_modal de_modal" onClick={handleBtnClick}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>WEALTH DON'T MATTER HERE, 2022</h3>
                                <h5 className="d-tag">3D model</h5>
                            </div>
                            <img  src="./img/gallery/wealth-pf.jpg" alt="portfolio-1" style={{ height: '500px' }}/>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick1}
                        data-aos="fade-up"
                        data-aos-once="true"
                        > 
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>My beautiful flower, 2022</h3>
                                <h5 className="d-tag">website</h5>
                            </div>
                            <img src="./img/gallery/my-pf.jpg"  alt="My beautiful flower, 20"/>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick2}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Jakarta Town Festival</h3>
                                <h5 className="d-tag">website</h5>
                            </div>
                            <img src="./img/gallery/jakarta-pf.gif" alt="portfolio-1" style={{ height: '700px' }}/>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>TO SEEK LIFE, JULY 2022</h3>
                                <h5 className="d-tag">3D model</h5>
                            </div>
                            <img src="./img/gallery/to-seek-pf.jpg" alt="gallery"/>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick1}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>007 NO TIME TO DIE OPENING TITLE REDESIGN, 2022</h3>
                                <h5 className="d-tag">3D Animation</h5>
                            </div>
                            <img src="./img/gallery/007-pf.gif" alt="portfolio-2" style={{ height: '200px' }}/>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick2}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Ineke Hans recycleable chair video explainer, 2022</h3>
                                <h5 className="d-tag">3D Animation</h5>
                            </div>
                            <img src="./img/gallery/ineke-hans-pf.gif" alt="gallery"/>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick2}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>PLAZA DESAIN EMOTIA TEASER TRAILER, 2022</h3>
                                <h5 className="d-tag">video effect</h5>
                            </div>
                            <img src="./img/gallery/plaza-pf.gif" alt="gallery"/>
                        </div>
                    </div>
                  </Masonry>

                  {/* lightbox1 */}
                  {lighbx && ( 
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <img src="./img/gallery/wealth-pf.jpg" alt="" className="img-fluid" style={{width:"750px"}}/>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>WEALTH DON'T MATTER HERE, 2022</h3>
                                <p>An Assignment with the theme of wealth where no matter what your status is, we all live and die in the same land and dirt.</p>
                               
                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Client: <span>Portfolio</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Type: <span>3D Modeling</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Year: <span>2020</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Preview: <span><a href="https://" target="_blank" rel="noreferrer">-</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                                <blockquote>
                                    "Very well done theme. Versatile, extremely well coded, and gorgeous. That's a great combo. Highly recommended."
                                    <span>John Archi</span>
                                </blockquote>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                  {/* lightbox2 */}
                  {lighbx1 && ( 
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose1}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <div className="row g-4">
                                    <div className="col-lg-12 item">
                                        <img src="./img/gallery/my-pf.jpg" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    {/* <div className="col-lg-6 item">
                                        <img src="./img/single-gallery/pf-2-2.jpg" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-6 item">
                                        <img src="./img/single-gallery/pf-2-3.jpg" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-12 item">
                                        <img src="./img/single-gallery/pf-2-4.jpg" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-6 item">
                                        <img src="./img/single-gallery/pf-2-5.jpg" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-6 item">
                                        <img src="./img/single-gallery/pf-2-6.jpg" alt="galleryimage" className="img-fluid"/>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>My beautiful flower, 2022</h3>
                                <p>A personal project representing the beautiful side of nature, a study on Armature rig</p>
                               
                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Client: <span>Portfolio</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Type: <span>3D Modeling</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Year: <span>2022</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Preview: <span><a href="https://" target="_blank" rel="noreferrer">-</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                                <blockquote>
                                    "An Awesome Sun Flower"
                                    <span>Herklots Harold</span>
                                </blockquote>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                {/* lightboxvideo */}
                {lighbx2 && ( 
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose2}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <video className="pop" controls autoPlay loop>
                                  <source src="./video/local-video-2.mp4" type="video/mp4"/>
                                  Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>Self Hosted Video</h3>
                                <p>Duis ad adipisicing id id in duis nisi qui veniam esse voluptate cillum pariatur cupidatat ut dolore amet aliquip cillum ad minim cillum nulla consectetur dolor culpa deserunt mollit dolor ea pariatur laboris sed tempor laboris quis commodo. Ut duis cupidatat consectetur cillum veniam eu quis minim irure fugiat ut consequat do veniam duis dolor quis cupidatat deserunt ut qui minim id dolor nisi sed non ut proident enim culpa dolor elit dolor aliquip dolore enim excepteur.</p>
                               
                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Client: <span>Envato</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Type: <span>Branding</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Year: <span>2020</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-external-link"></i>Preview: <span><a href="https://www.envato.com" target="_blank" rel="noreferrer">www.envato.com</a></span>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>
                                <blockquote>
                                    "Very well done theme. Versatile, extremely well coded, and gorgeous. That's a great combo. Highly recommended."
                                    <span>John Archi</span>
                                </blockquote>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

      </div>
    );
}

export default Gallery;