import './css/bootstrap-icons.css'
import './css/bootstrap.min.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/templatemo-medic-care.css'
function App() {
  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content />
    <meta name="author" content />
    <title>Medic Care Bootstrap 5 CSS Template</title>
    {/* CSS FILES */}        
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/bootstrap-icons.css" rel="stylesheet" />
    <link href="css/owl.carousel.min.css" rel="stylesheet" />
    <link href="css/owl.theme.default.min.css" rel="stylesheet" />
    <link href="css/templatemo-medic-care.css" rel="stylesheet" />
    {/*

TemplateMo 566 Medic Care

https://templatemo.com/tm-566-medic-care

*/}
    <main>
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
        <div className="container">
          <a className="navbar-brand mx-auto d-lg-none" href="index.html">
            Medic Care
            <strong className="d-block">Health Specialist</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#hero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#timeline">Timeline</a>
              </li>
              <a className="navbar-brand d-none d-lg-block" href="index.html">
                Medic Care
                <strong className="d-block">Health Specialist</strong>
              </a>
              <li className="nav-item">
                <a className="nav-link" href="/#reviews">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#booking">Booking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="hero" id="hero">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="images\slider\portrait-successful-mid-adult-doctor-with-crossed-arms.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/slider/young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="images\slider\doctor-s-hand-holding-stethoscope-closeup.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="heroText d-flex flex-column justify-content-center">
                <h1 className="mt-auto mb-2">
                  Better
                  <div className="animated-info">
                    <span className="animated-item">health</span>
                    <span className="animated-item">days</span>
                    <span className="animated-item">lives</span>
                  </div>
                </h1>
                <p className="mb-4">Medic Care is a Bootstrap 5 Template provided by TemplateMo website. Credits go to FreePik and RawPixel for images used in this template.</p>
                <div className="heroLinks d-flex flex-wrap align-items-center">
                  <a className="custom-link me-4" href="#about" data-hover="Learn More">Learn More</a>
                  <p className="contact-phone mb-0"><i className="bi-phone" /> 010-020-0340</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="mb-lg-3 mb-3">Meet Dr. Carson</h2>
              <p>Protect yourself and others by wearing masks and washing hands frequently. Outdoor is safer than indoor for gatherings or holding events. People who get sick with Coronavirus disease (COVID-19) will experience mild to moderate symptoms and recover without special treatments.</p>
              <p>You can feel free to use this CSS template for your medical profession or health care related websites. You can <a rel="nofollow" href="http://paypal.me/templatemo" target="_blank">support us a little</a> via PayPal if this template is good and useful for your work.</p>
            </div>
            <div className="col-lg-4 col-md-5 col-12 mx-auto">
              <div className="featured-circle bg-white shadow-lg d-flex justify-content-center align-items-center">
                <p className="featured-text"><span className="featured-number">12</span> Years<br /> of Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-6 ps-0">
              <img src="mediplus\src\images\gallery\medium-shot-man-getting-vaccine.jpg" className="img-fluid galleryImage" alt="get a vaccine" title="get a vaccine for yourself" />
            </div>
            <div className="col-lg-6 col-6 pe-0">
              <img src="images/gallery/female-doctor-with-presenting-hand-gesture.jpg" className="img-fluid galleryImage" alt="wear a mask" title="wear a mask to protect yourself" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding pb-0" id="timeline">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-lg-5 mb-4">Our Timeline</h2>
            <div className="timeline">
              <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                  <h3 className=" text-light">Get the vaccine</h3>
                  <p>Donec facilisis urna dui, a dignissim mauris pretium a. Quisque quis libero fermentum, tempus felis eu, consequat nibh.</p>
                </div>
                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                  <i className="bi-patch-check-fill timeline-icon" />
                </div>
                <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                  <time>2021-07-31 Saturday</time>
                </div>
              </div>
              <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
                <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                  <h3 className=" text-light">Consulting your health</h3>
                  <p>You are fully permitted to use this template for your commercial or personal website. You are not permitted to redistribute the template ZIP file for a download purpose on any other <a href="https://www.google.com/search?q=free+css" target="_blank">Free CSS collection</a> website.</p>
                </div>
                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                  <i className="bi-book timeline-icon" />
                </div>
                <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                  <time>2021-07-15 Thursday</time>
                </div>
              </div>
              <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                  <h3 className=" text-light">Certified Nurses</h3>
                  <p>Phasellus eleifend, urna interdum congue viverra, arcu neque ultrices ligula, id pulvinar nisi nibh et lacus. Vivamus gravida, ipsum non euismod tincidunt, sapien elit fermentum mi, quis iaculis enim ligula at arcu.</p>
                </div>
                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                  <i className="bi-file-medical timeline-icon" />
                </div>
                <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                  <time>2021-06-28 Monday</time>
                </div>
              </div>
              <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
                <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                  <h3 className=" text-light">Covid-19 Hospitals</h3>
                  <p className="mb-0 pb-0">Fusce vestibulum euismod nulla sed ultrices. Praesent rutrum nulla vel sapien euismod, quis tempus dui placerat.</p>
                  <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla</p>
                </div>
                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                  <i className="bi-globe timeline-icon" />
                </div>
                <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                  <time>2021-05-30 Sunday</time>
                </div>
              </div>
              <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                  <h3 className=" text-light">Freelance Nursing</h3>
                  <p>If you need a working contact form that submits email to your inbox, please <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">visit our contact page</a> for more information.</p>
                </div>
                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                  <i className="bi-person timeline-icon" />
                </div>
                <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                  <time>2021-05-18 Tuesday</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding pb-0" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-lg-5 mb-4">Our Patients</h2>
              <div className="owl-carousel reviews-carousel">
                <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                  <div className="reviews-stars">
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star" />
                  </div>
                  <p className="text-primary d-block mt-2 mb-0 w-100"><strong>Best Health Care</strong></p>
                  <p className="reviews-text w-100">Phasellus ligula ante, tempus ac imperdiet ut, mattis ac nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <img src="images/reviews/beautiful-woman-face-portrait-brown-background.jpeg" className="img-fluid reviews-image" alt="" />
                  <figcaption className="ms-4">
                    <strong>Marie</strong>
                    <span className="text-muted">Patient</span>
                  </figcaption>
                </figure>
                <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                  <div className="reviews-stars">
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star" />
                  </div>
                  <p className="text-primary d-block mt-2 mb-0 w-100"><strong>Doctor cares everyone!</strong></p>
                  <p className="reviews-text w-100">Donec in elementum orci, nec posuere ligula. Quisque vulputate diam et ullamcorper ullamcorper. Pellentesque vestibulum neque at leo fermentum mattis.</p>
                  <img src="images/reviews/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg" className="img-fluid reviews-image" alt="" />
                  <figcaption className="ms-4">
                    <strong>Ben Walker</strong>
                    <span className="text-muted">Recovered</span>
                  </figcaption>
                </figure>
                <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                  <div className="reviews-stars">
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                  </div>
                  <p className="text-primary d-block mt-2 mb-0 w-100"><strong>Great services!</strong></p>
                  <p className="reviews-text w-100">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet velit vitae purus aliquam efficitur.</p>
                  <img src="images/reviews/portrait-british-woman.jpeg" className="img-fluid reviews-image" alt="" />
                  <figcaption className="ms-4">
                    <strong>Laura Zono</strong>
                    <span className="text-muted">New Patient</span>
                  </figcaption>
                </figure>
                <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                  <div className="reviews-stars">
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star-fill" />
                    <i className="bi-star" />
                    <i className="bi-star" />
                  </div>
                  <p className="text-primary d-block mt-2 mb-0 w-100"><strong>Best Advices</strong></p>
                  <p className="reviews-text w-100">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <img src="images/reviews/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg" className="img-fluid reviews-image" alt="" />
                  <figcaption className="ms-4">
                    <strong>Rosey</strong>
                    <span className="text-muted">Almost Recovered</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding" id="booking">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <div className="booking-form">
                <h2 className="text-center mb-lg-3 mb-2">Book an appointment</h2>
                <form role="form" action="#booking" method="post">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="telephone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="Phone: 123-456-7890" />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="date" name="date" id="date" defaultValue className="form-control" />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows={5} id="message" name="message" placeholder="Additional Message" defaultValue={""} />
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mx-auto">
                      <button type="submit" className="form-control" id="submit-button">Book Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 me-auto col-12">
            <h5 className="mb-lg-4 mb-3">Opening Hours</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex">
                Sunday : Closed
              </li>
              <li className="list-group-item d-flex">
                Monday, Tuesday - Firday
                <span>8:00 AM - 3:30 PM</span>
              </li>
              <li className="list-group-item d-flex">
                Saturday
                <span>10:30 AM - 5:30 PM</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-12 my-4 my-lg-0">
            <h5 className="mb-lg-4 mb-3">Our Clinic</h5>
            <p><a href="mailto:hello@company.co">hello@company.co</a></p><p>
            </p><p>123 Digital Art Street, San Diego, CA 92123</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ms-auto">
            <h5 className="mb-lg-4 mb-3">Socials</h5>
            <ul className="social-icon">
              <li><a href="#" className="social-icon-link bi-facebook" /></li>
              <li><a href="#" className="social-icon-link bi-twitter" /></li>
              <li><a href="#" className="social-icon-link bi-instagram" /></li>
              <li><a href="#" className="social-icon-link bi-youtube" /></li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 ms-auto mt-4 mt-lg-0">
            <p className="copyright-text">Copyright © Medic Care 2021 
              <br /><br />Design: <a href="https://templatemo.com" target="_parent">TemplateMo</a></p>
          </div>
        </div>
      </div></footer>
    
  </div>
  )
};

export default App;
