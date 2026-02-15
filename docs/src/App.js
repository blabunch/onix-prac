import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* HEADER & HERO SECTION */}
      <header className="header-section">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#works">WORKS</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        
        <div className="hero-content">
          <h1>WHERE GREAT IDEAS COME TO LIFE</h1>
          <p>Passionate creative studio helping startups grow their business!</p>
        </div>

        <div className="hero-footer">
          <span className="active-slide">01</span>
          <span className="other-slides">02 03</span>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">
        <div className="container about-container">

          <div className="about-text-left">
            <h2>
              WE ARE <br/>
              <span className="subtitle-text">THE SQWD</span>
            </h2>
            <div className="separator-line-left"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="about-visuals-layered">
            <div className="layer bg-img-main"></div>
            <div className="layer green-overlay-box"></div>
            <div className="layer bg-img-front"></div>
          </div>
          <div className="about-text-right">
            <div className="separator-line-right"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="services-header">
            <h2>Our Services</h2>
            <div className="separator-header"></div>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="card-top">
                <h3>BRANDING</h3>
                <div className="service-icon">
                   <span className="icon-placeholder">📊</span> 
                </div>
              </div>
              <div className="separator-card"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt.
              </p>
              <a href="#" className="service-read-more">READ MORE</a>
            </div>
            <div className="service-card active-card">
              <div className="card-top">
                <h3>DESIGN</h3>
                <div className="service-icon">
                   <span className="icon-placeholder">✏️</span>
                </div>
              </div>
              <div className="separator-card"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt.
              </p>
              <a href="#" className="service-read-more">READ MORE</a>
            </div>
            <div className="service-card">
              <div className="card-top">
                <h3>DEVELOPMENT</h3>
                <div className="service-icon">
                   <span className="icon-placeholder">💻</span>
                </div>
              </div>
              <div className="separator-card"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt.
              </p>
              <a href="#" className="service-read-more">READ MORE</a>
            </div>
          </div>

        </div>
      </section>

{/* LATEST WORKS */}
      <section id="works" className="section works-section">
        <div className="container">
          
          <div className="section-header works-header">
            <h2>Latest Works</h2>
            <div className="separator"></div>
            <div className="work-filters">
              <span className="active-filter">ALL</span> 
              <span>WEB DESIGN</span> 
              <span>BRANDING</span> 
              <span>PHOTOGRAPHY</span> 
              <span>ILLUSTRATION</span>
            </div>
          </div>

          <div className="works-list">
            <div className="work-item align-right">
              <div className="work-img-wrapper">
                 <div className="work-img" style={{backgroundImage: "url('./img/cam.png')"}}></div>
              </div>
              
              <div className="work-title-overlay">
                <h3>
                  <span className="strike-text">100 YEARS</span> <br/>
                  <span className="strike-text">PHOTOGRAPHY</span>
                </h3>
              </div>

              <div className="work-details-bottom-right">
                <p className="category">Photography</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <a href="#" className="work-read-more strike-text">READ MORE</a>
              </div>
            </div>

            <div className="work-item align-left">
              <div className="work-img-wrapper">
                 <div className="work-img" style={{backgroundImage: "url('./img/cat.png')"}}></div>
              </div>

              <div className="work-title-overlay">
                <h3>
                  <span className="strike-text">A KITTEN’S</span> <br/> 
                  <span className="strike-text">LIFE</span>
                </h3>
              </div>

              <div className="work-details-bottom-left">
                <p className="category">Photography</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <a href="#" className="workread-more strike-text">READ MORE</a>
              </div>
            </div>

            <div className="work-item align-right">
               <div className="work-img-wrapper">
                 <div className="work-img" style={{backgroundImage: "url('./img/imac.png')"}}></div>
              </div>

              <div className="work-title-overlay">
                <h3>
                  <span className="strike-text">GROOVEMADE</span> <br/>
                  <span className="strike-text">PRODUCTS FOR MAC</span>
                </h3>
              </div>

              <div className="work-details-bottom-right">
                <p className="category">Photography</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <a href="#" className="work-read-more strike-text">READ MORE</a>
              </div>
            </div>

             <div className="work-item align-left">
               <div className="work-img-wrapper">
                 <div className="work-img" style={{backgroundImage: "url('./img/macbook.png')"}}></div>
              </div>

              <div className="work-title-overlay">
                <h3>
                  <span className="strike-text">APPLE’S</span> <br/> 
                  <span className="strike-text">LOST MAGIC</span>
                </h3>
              </div>

              <div className="work-details-bottom-left">
                <p className="category">Photography</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <a href="#" className="work-read-more strike-text">view more</a>
              </div>
            </div>

          </div>
        </div>
      </section>

 {/* TEAM SECTION */}
      <section className="section team-section">
        <div className="container">
          <div className="team-header">
            <h2>The Team</h2>
            <div className="separator"></div>
          </div>
          <div className="team-grid">
            {[
              { 
                id: 1, 
                name: "TOM JONES", 
                role: "Creative Director", 
                quote: "Create with simplicity in mind!",
                image: "/img/tom.png"
              },
              { 
                id: 2, 
                name: "MICHAEL FRAUP", 
                role: "Creative Director", 
                quote: "Create with simplicity in mind!",
                image: "/img/michael.png"
              },
              { 
                id: 3, 
                name: "TIM CAHILL", 
                role: "Creative Director", 
                quote: "Create with simplicity in mind!",
                image: "/img/tim.png"
              }
            ].map((member) => (
              <div className="team-card" key={member.id}>
                <div className="team-img" style={{ backgroundImage: `url(${member.image})` }}>
                  <div className="team-overlay">
                    <h4>{member.name}</h4>
                    <div className="hidden-content">
                      <div className="separator-small separator-team"></div>
                      <p className="member-role">{member.role}</p>
                      <small className="member-quote">{member.quote}</small>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section testimonials-section">
        <div className="container testimonials-wrapper">
          
          <div className="testimonials-content-block">
            <img 
              src="./img/arrow-left.png" 
              alt="Prev" 
              className="arrow-img left-arrow" 
            />

            <div className="testimonial-data">
              <p className="quote-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <div className="quote-symbol">”</div>
              
              <h4 className="client-name">
                DAVID JAMES <span className="client-role">/ Web Design</span>
              </h4>

              <div className="stars-img-container">
                <img src="./img/star-full.png" alt="star" />
                <img src="./img/star-full.png" alt="star" />
                <img src="./img/star-full.png" alt="star" />
                <img src="./img/star-full.png" alt="star" />
                <img src="./img/star-empty.png" alt="star" />
              </div>
            </div>

            <img 
              src="./img/arrow-right.png" 
              alt="Next" 
              className="arrow-img right-arrow" 
            />

            <div className="testimonial-bottom-line"></div>
          </div>

        </div>
      </section>

      {/* CONTACT PRE-FOOTER */}
      <section id="contact" className="contact-split">
        <div className="contact-left">
          <h3>Want to work together?</h3>
          <p>Amazing. Tell us about your project!</p>
        </div>
        <div className="contact-right">
          <h3>Contact us</h3>
          <p>Get in touch</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="student-info">
            <p className="author-name">Виконав: <strong>Лабунець Богдан КН22б</strong></p>
            <div className="footer-links">
              <a href="https://github.com/blabunch" target="_blank" rel="noopener noreferrer">Мій Github</a>
              <span className="divider">|</span>
              <a href="https://www.figma.com/design/FsZM01aYjUdpqyeCyRXftD/Freebie-Agency--Copy-?node-id=0-2&t=MyG8YsNgcozaKEVj-0" target="_blank" rel="noopener noreferrer">Оригінал дизайну</a>
            </div>
          </div>
          <p className="copyright">3rd Floor, Santa Monica Beach, CA, San Francisco</p>
          <p className="copyright">Copyright 2016 - All Rights Reserved - Designed by JD</p>
        </div>
      </footer>
    </div>
  );
}

export default App;