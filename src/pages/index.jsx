import React, { useState } from "react";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/responsive.css";
import "../css/index.css";

import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsSearch,
} from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiUser } from 'react-icons/bi';
import { ExpenseTracker } from './expense-tracker/index';
import { Link } from "react-router-dom";
function Home() {
  const [toggle, settoggle] = useState(false);
  const togglebtn = () => {
    settoggle(!toggle)
  console.log(toggle)}
  
  
  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="./hero-bg.png" alt="" />
          </div>
        </div>

        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="#">
                <span>MY-Money</span>
              </a>

              {toggle == false ? (
                <AiOutlineMenu
                  style={{ fontSize: 30, color: "whitesmoke" }}
                  onClick={togglebtn}
                />
              ) : (
                <AiOutlineClose
                  style={{ fontSize: 30, color: "whitesmoke" }}
                  onClick={togglebtn}
                />
              )}
              <div
                className={
                  toggle == false
                    ? "max-sm:hidden navbar-collapse"
                    : " navbar-collapse"
                }
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#whyus">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link flex justify-center items-center"
                      href="/auth"
                    >
                      <BiUser /> Login
                    </a>
                  </li>
                  <form className="form-inline">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <BsSearch />
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <section className="slider_section ">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner pt-5">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box">
                        <h1>
                          Expense <br />
                          Income Tracker
                        </h1>
                        <p>
                          It is a site that helps you track your financial
                          transactions, save time in calculating gains and
                          losses, review all transactions that have occurred,
                          and provide them at any time and any place for review,
                          saving you a lot of time.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="./slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="./slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="detail-box">
                        <h1>
                          Crypto <br />
                          Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="./slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <ol className="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol> */}
          </div>
        </section>
      </div>

      <section className="service_section layout_padding" id="services">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                Our goal is to save time, effort and complete confidentiality
                for all clients
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="./s1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Track all transactions</h5>
                    <p>
                      Knowing all the transactions that occurred from the
                      beginning of using the service until the last transaction
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="./s2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Security Storage</h5>
                    <p>
                      Maintaining the confidentiality of user information and
                      all transactions that occur on the account and always
                      updating security policies
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="./s3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Expert Support</h5>
                    <p>
                      You will not need to ask experts because of the ease of
                      use, clear results, and knowing everything about your
                      finances at the same time
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="">View All</a>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding" id="about">
        <div className="container  ">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="./about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are MY-Money</h3>
                <p>
                  Startup company We provide many electronic and software
                  services in various fields
                </p>
                <p>
                  We noticed a major problem with paper transactions, the amount
                  of effort and time spent, errors, and the employer’s lack of
                  knowledge of the transactions that occur. We provided a
                  solution to this problem, a site that provides you with all
                  the advantages of speed, confidentiality, and reducing time
                  and effort. The site calculates income and expenses and knows
                  the rest and the amount of gain or loss, and the employer can
                  know all Financial transactions can be done easily from
                  anywhere and at any time without the need to visit the place.
                  Gains and losses are known without the need for an account.
                  The site is characterized by ease of use and a simple
                  interface that is understandable to anyone.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="why_section layout_padding"
        id="whyus"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src="./w1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Expert Management</h5>
                <p>
                  Experts in our field, you will not encounter many problems.
                  Follow-up is always done to avoid any problems that may occur,
                  and there is a strong incident management system
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="./w2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Data confidentiality</h5>
                <p>
                  We care very much about the confidentiality of our customers
                  data, so there is no need to worry about your data. It is safe
                  with us. We also have a very strong system and many levels of
                  confidentiality. It is difficult for anyone to know your data.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="img-box">
                <img src="./w4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Happy Customers</h5>
                <p>
                  The customer is the most important thing to us. We always try
                  to help by providing customer service at the highest level of
                  professionalism to solve all customer problems and inquiries{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>

      <section className="team_section layout_padding" id="team">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2 className="">
              Our <span> Team</span>
            </h2>
          </div>

          <div className="team_container">
            <div className="row ">
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="./team-2.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Ebrahim Seyam</h5>
                    <p>Web Developer</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="./team-1.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Karim Mohammed</h5>
                    <p>Flutter Developer</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="./team-3.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Earl Martinez</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src="./team-4.jpg" className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Josephine Allard</h5>
                    <p>Marketing Head</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              What says our <span>Customers</span>
            </h2>
          </div>
          <div className="carousel-wrap ">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="./client1.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Ibrahim Alaa</h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      A very nice website that helped me manage my store and
                      saved me a lot of time
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="./client2.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Ahmed Elemary</h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      A wonderful tool that I needed for a while to manage my
                      pharmacy and know income, expenses
                      <br />
                      Thank you very much for saving my time and effort
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="./client3.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Mohamed Nassar</h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>Very nice, great work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-1 info_col">
              <div className="info_social">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  Startup company We provide many electronic and software
                  services in various fields The strongest team in the Arab
                  world Our motto is speed, accuracy, honesty and hard work
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>

                <div
                  className="social"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <BsFacebook />
                  <BsTwitter />
                  <BsGithub />
                  <BsInstagram />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="#">MY-Money</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
