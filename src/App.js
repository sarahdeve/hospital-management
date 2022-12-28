import { Link } from 'react-router-dom';
import './App.css';
import './doc.js';

function App() { 
  let menu = document.querySelector('#menu-btn')
  let navbar = document.querySelector('.navbar')
  console.log(menu)
  console.log(navbar)

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // menu.onclick = () => {
  //   menu.classList.toggle('fa-times');
  //   navbar.classList.toggle('active');
  // }
  //   window.onscroll = () => {
  //   menu.classList.toggle('fa-times');
  //   navbar.classList.toggle('active');
  // }
  return (
    <div className="App">
      <header className="header">
        <a href='#' className='logo'> <i className='fas fa-heartbeat'></i>GOD'S PLAN<small className='small'>Hospital</small></a>
        <nav className='navbar' id='dropdown-content'>
          <a href='#home'>Home</a>
          <a href='#services'>Service</a>
          <a href='#about'>About</a>
          <a href='#doctors'>Doctors</a>
          <a href='#book'>Book</a>
          <a href='#review'>Review</a>
          <a href='#blogs'>Blogs</a>
        </nav>
        <div id='menu-btn' onClick={()=> openNav} className="fas fa-bars dropdown" type="button">
        {/* <button>HubSpot Resources</button> */}
          <div className="dropdown-content" id="mySidenav">
          <a href='#home'>Home</a>
          <a href='#services'>Service</a>
          <a href='#about'>About</a>
          <a href='#doctors'>Doctors</a>
          <a href='#book'>Book</a>
          <a href='#review'>Review</a>
          <a href='#blogs'>Blogs</a>
          </div>
        </div>
      </header>

      
      <section className='home' id='home'>
        <div className='image'>
          <img src='images/home-img.svg' alt=''/>
        </div>

        <div className='content'>
          <h3>Stay safe, stay healthy</h3>
          <p> lorem ipsum dolor sit met amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
          <a href='#' className='btn'> Contact Us <span className='fas fa-chevron-right'></span></a>
        </div>
      </section>

      {/* icon section */}
      <section className='icons-container'>
        <div className='icons'>
          <i className='fas fa-user-md'></i>
          <h3>140+</h3>
          <p>Doctors at work!</p>
        </div>

        <div className='icons'>
          <i className='fas fa-users'></i>
          <h3>1040+</h3>
          <p>Satisfied patients</p>
        </div>

        <div className='icons'>
          <i className='fas fa-procedures'></i>
          <h3>500+</h3>
          <p>Bed facility</p>
        </div>

        <div className='icons'>
          <i className='fas fa-hospital'></i>
          <h3>80+</h3>
          <p>Available hospitals</p>
        </div>
      </section>

      <section className='services' id='services'>
        <h1 className='heading'>Our <span>Services</span></h1>
        <div className='box-container'>
          <div className='box'>
            <i className='fas fa-notes-medical'></i>
            <h3>free checkups</h3>
            <p>lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omins</p>
            <a href='#' className="btn"> learn more <span className='fas fa-chevron-right'></span></a>
          </div>

          <div className='box'>
            <i className='fas fa-ambulance'></i>
            <h3>24/7 ambulance</h3>
            <p>lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omins</p>
            <a href='#' className="btn"> learn more <span className='fas fa-chevron-right'></span></a>
          </div>

          <div className='box'>
            <i className='fas fa-user-md'></i>
            <h3>Expert doctors</h3>
            <p>lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omins</p>
            <a href='#' className="btn"> learn more <span className='fas fa-chevron-right'></span></a>
          </div>

          <div className='box'>
            <i className='fas fa-pills'></i>
            <h3>Mediciens</h3>
            <p>lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omins</p>
            <a href='#' className="btn"> learn more <span className='fas fa-chevron-right'></span></a>
          </div>

          <div className='box'>
            <i className='fas fa-procedures'></i>
            <h3>Bed facility</h3>
            <p>lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omins</p>
            <a href='#' className="btn"> learn more <span className='fas fa-chevron-right'></span></a>
          </div>
          
          <div className='box'>
            <i className='fas fa-heartbeat'></i>
            <h3>Total care</h3>
            <p>lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omins</p>
            <a href='#' className="btn"> learn more <span className='fas fa-chevron-right'></span></a>
          </div>
        </div>
      </section>
      {/* <Link ></Link> */}

      <section className='about' id='about'>
        <h1 className='heading'><span>about</span>us</h1>
        <div className='row'>
          <div className='image'>
            <img src='images/about-img.svg' alt=''/>
          </div>
          <div className='content'>
            <h3>We take care of your healthy life</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
            <p>No 10. Alademomi street, off oke ijebu. Akure, Ondo State.</p>
            <a href='#' className='btn'>Learn more<span className='fas fa-chevron-right'></span></a>
          </div>
        </div>
      </section>

      

      <section className='book' id='book'>
        <h1 className='heading'><span>book</span> now </h1>
        <div className='row'>
          <div className='image'>
            <img src='images/book-img.png' alt=''/>
          </div>
          <form action=''>
            <h3>Book appointment </h3>
            <input type="text" placeholder="Your name..." className='box'/>
            <input type="number" placeholder='Your number...' className='box'/>
            <input type='email' placeholder='Your email...' className='box'/>
            <input type="date" className='box'/>
            <input type="submit" value="Book now" className='btn'/>
          </form>
        </div>
      </section>

      <section className='review' id='review'>
        <h1 className='heading'> Client's <span>review</span> </h1>
        <div className='box-container'>
          <div className='box'>
              <img src='images/pic-1.jpg' alt=''/>
              <h3>Deola D</h3>
              <div className='stars'> 
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star-half-alt'></i>
                <p className='text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                </p>
              </div>
          </div>

          <div className='box'>
              <img src='images/pic-2.jpg' alt=''/>
              <h3>Shade A</h3>
              <div className='stars'> 
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star-half-alt'></i>
                <p className='text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                </p>
              </div>
          </div>

          <div className='box'>
              <img src='images/pic-3.jpg' alt=''/>
              <h3>Sola J</h3>
              <div className='stars'> 
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star-half-alt'></i>
                <p className='text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                </p>
              </div>
          </div>
        </div>
      </section>

      <section className='blogs' id='blogs'>
        <h1 className='heading'> our <span>blogs</span> </h1>
        <div className='box-container'>
          <div className='box'>
            <div className='image'>
              <img src='images/blog-1.jpg' alt=''/>
            </div>
            <div className='content'>
              <div className="icon">
                <a href=''><i className='fas fa-calender'></i>1st may, 2021</a>
                <a href=''><i className='fas fa-user'></i> by admin </a>
              </div>
              <h3>blog title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
              <a href='#' className='btn'>learn more <span className='fas fa-chevron-right'></span></a>
            </div>
          </div>

          <div className='box'>
            <div className='image'>
              <img src='images/blog-2.jpg' alt=''/>
            </div>
            <div className='content'>
              <div className="icon">
                <a href=''><i className='fas fa-calender'></i>1st may, 2021</a>
                <a href=''><i className='fas fa-user'></i> by admin </a>
              </div>
              <h3>blog title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
              <a href='#' className='btn'>learn more <span className='fas fa-chevron-right'></span></a>
            </div>
          </div>

          <div className='box'>
            <div className='image'>
              <img src='images/blog-3.jpg' alt=''/>
            </div>
            <div className='content'>
              <div className="icon">
                <a href=''><i className='fas fa-calender'></i>1st may, 2021</a>
                <a href=''><i className='fas fa-user'></i> by admin </a>
              </div>
              <h3>blog title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing alit. Lure ducinus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
              <a href='#' className='btn'>learn more <span className='fas fa-chevron-right'></span></a>
            </div>
          </div>
        </div>
      </section>

      <section className='footer'>
        <div className='box-container'>
          <div className='box'>
            <h3>Quick Links</h3>
            <a href=''><i className='fas fa-chevron-right'></i>home </a>
            <a href=''><i className='fas fa-chevron-right'></i>services </a>
            <a href=''><i className='fas fa-chevron-right'></i>about </a>
            <a href=''><i className='fas fa-chevron-right'></i>doctors </a>
            <a href=''><i className='fas fa-chevron-right'></i>book </a>
            <a href=''><i className='fas fa-chevron-right'></i>review </a>
            <a href=''><i className='fas fa-chevron-right'></i>blogs </a>
          </div>

          <div className='box'>
            <h3>our Services</h3>
            <a href=''><i className='fas fa-chevron-right'></i>dental care</a>
            <a href=''><i className='fas fa-chevron-right'></i>massage therapy</a>
            <a href=''><i className='fas fa-chevron-right'></i>cardioloty</a>
            <a href=''><i className='fas fa-chevron-right'></i>diagnosis</a>
            <a href=''><i className='fas fa-chevron-right'></i>ambulance service</a>
          </div>

          <div className='box'>
            <h3>contact info</h3>
            <a href=''><i className='fas fa-phone'></i>+234-810-772-9038</a>
            <a href=''><i className='fas fa-phone'></i>+234-814-505-6692</a>
            <a href=''><i className='fas fa-envelope'></i>oluwasefemi@gmail.com</a>
            <a href=''><i className='fas fa-phone'></i>oluwasefemi@gmail.com</a>
            {/* <a href=''><i className='fas fa-map-market-alt'></i>mumbai, india -400104</a> */}
          </div>

          <div className='box'>
            <h3>follow us</h3>
              <a href='#'><i className='fab fa-facebook-f'></i>facebook</a>
              <a href='#'><i className='fab fa-linkedin'></i>linkedin</a>
              <a href='#'><i className='fab fa-whatsapp'></i>whatsapp</a>
              <a href='#'><i className='fab fa-instagram'></i>instagram</a>
              <a href='#'><i className='fab fa-linkedin'></i>linkedin</a>
              <a href='#'><i className='fab fa-pinterest'></i>pinterest</a>
          </div>
        </div>
        <div className='credit'>create by <span>Miss S </span> | all rights reserved</div>
      </section>
    </div>
  );
}

export default App;
