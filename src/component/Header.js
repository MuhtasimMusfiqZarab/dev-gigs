import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src="img/logo.png" alt="" />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#connect" className="nav-link">
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Image Slider */}
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active" />
          <li data-target="#slides" data-slide-to="1" />
          <li data-target="#slides" data-slide-to="2" />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/background3.png" alt="" />
            <div className="carousel-caption">
              <h1 className="display-2">Bootstrap</h1>
              <h3>Complete Website Layout</h3>

              <a href="https://muhtasimmusfiqzarab.github.io/Contact-Manager/">
                <button type="button" className="btn btn-outline-light btn-lg">
                  View Demo
                </button>
              </a>

              <a href="#connect">
                <button className="btn btn-primary btn-lg">Get Started</button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/reactjs.png" alt="" />
          </div>
          <div className="carousel-item">
            <img src="img/nodejs.png" alt="" />
          </div>
        </div>
      </div>
      {/* jumbotron */}
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead">
              Our web design and development service allows individuals and
              organizations to build their website using different frameworks,
              libraries and technologies.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="#connect">
              <button className="btn btn-outline-secondary btn-lg">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Welcome Section */}
      <div id="services" className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Build With Ease</h1>
          </div>
          <hr />
          <div className="col-12">
            <p className="lead">
              Our responsive design & development of websites is based on tools
              and technologies like Bootstrap, React , Nodejs etc.
            </p>
          </div>
        </div>
      </div>
      {/* Three Column Section */}
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fab fa-react" />
            <h3>React</h3>
            <p>Building with front-end library React</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fas fa-bold" />
            <h3>Bootstrap</h3>
            <p>Built with latest version of bootstrap</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <i className="fab fa-node-js" />
            <h3>Node-js</h3>
            <p>Building with back-end technology</p>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      {/* Two Column Section */}
      <div id="about" className="container-fluid padding">
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h2>Adopting Latest Web Technologies</h2>
            <p>
              We implement front end CSS framework Bootstrap for our design.
              Thus our design will be responsive. You can resize the browser
              window to see the effect. The web pages will be displayed
              differently depending on the screen size or viewing device.
            </p>
            <p>
              We use front end library React which is a JavaScript library for
              building User Interfaces.
            </p>
            <p>
              We also use Node js for server side programming according to ours'
              client need.
            </p>
            <br />
          </div>
          <div className="col-md-12 col-lg-6">
            <img className="img-fluid" src="img/dev.jpg" alt="" />
          </div>
        </div>
      </div>
      <hr className="my-4" />
      {/* fixed Background */}
      <figure>
        <div className="fixed-wrap">
          <div id="fixed" />
        </div>
      </figure>
      {/* Emoji Section */}
      <button className="fun" data-toggle="collapse" data-target="#emoji">
        Click for fun
      </button>
      <div id="emoji" className="collapse">
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-sm-6 col-md-3">
              <img className="gif" src="img/gif/panda.gif" alt="" />
            </div>
            <div className="col-sm-6 col-md-3">
              <img className="gif" src="img/gif/poo.gif" alt="" />
            </div>
            <div className="col-sm-6 col-md-3">
              <img className="gif" src="img/gif/unicorn.gif" alt="" />
            </div>
            <div className="col-sm-6 col-md-3">
              <img className="gif" src="img/gif/chicken.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Meet The Team */}
      <div id="team" className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Meet the Team</h1>
          </div>
          <hr />
        </div>
      </div>
      {/* Cards */}
      <div className="caontainer-fluid padding  ">
        <div className="row padding">
          <div className="col-xs-12 col-md-10 col-lg-6">
            <div className="card ">
              <img src="img/Team.png" alt="" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">Muhtasim Musfiq Zarab</h4>
                <p className="card-text">
                  I am currently working with different front and back-end web
                  technologies with 1 year of experience for designing front-end
                  web applications.
                </p>
                <a
                  href="https://www.linkedin.com/in/muhtasimmusfiqzarab/"
                  className="btn btn-outline-secondary"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Two Column Section */}
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h2>My Philosophy</h2>

            <p>
              I know that greatness in a disruptive era requires bold ambition,
              curious talent and a culture that believes we are smarter
              together.
            </p>
            <p>
              The startup company approaches every challenge holistically, with
              expertise in data creativity, media, technology, search and more.
              It has the power to build our clients' brands like magic, we've
              got it down to a science.
            </p>
            <br />
          </div>
          <div className="col-md-12 col-lg-6">
            <img className="img-fluid" src="img/last.jpg" alt="" />
          </div>
        </div>
      </div>
      <hr className="my-4" />

      {/* connect */}
      <div id="connect" className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-12">
            <h2>Connect</h2>
          </div>
          <div className="col-12 social padding">
            <a href="https://www.facebook.com/muhtasimmusfiqzarab">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://www.linkedin.com/in/muhtasimmusfiqzarab/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.instagram.com/muhtasim_musfiq_zarab/">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCE6MQlAfVF4l7jh-o2o95Sg?view_as=subscriber">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer>
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-md-6">
              <img src="img/logo.png" alt="" />
              <hr className="light" />
              <p>+8801685055749</p>
              <p>musfiqzarab@iut-dhaka.edu</p>
              <p>Sector-6,Uttara</p>
              <p>Dhaka-1230</p>
            </div>
            <div className="col-md-6">
              <hr className="light" />
              <h5>Our Hours</h5>
              <hr className="light" />
              <p>Sat-Thursday: 9am-5pm</p>
              <p>Friday: Closed</p>
            </div>
            <div className="col-12">
              <hr className="light" />
              <h5>&copy;exito.com.bd</h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Header;
