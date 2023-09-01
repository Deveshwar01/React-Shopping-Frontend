import React from 'react';
import "./About.scss";
import divyaimg from "../../../src/assets/divya.jpg"
import deveshimg from "../../../src/assets/Devesh.jpg"

export const About = () => {
   return (
      <>
         {/* <nav></nav> */}
         {/* <div class="header"></div> */}
         <div class="container">
            <div class="about">
               <div class="left">
                  <h1>Our Story</h1>
                  <hr />
                  <p>Founded by a group of passionate college students who understood the struggles and aspirations of their peers,E-commerce RBU was born out of the desire to offer a seamless and exciting shopping experience tailored to the unique needs of college life. We know that being a student means juggling academics, social activities, and personal growth – and we're here to support you every step of the way.</p>
                  <h1>Our Mission</h1>
                  <hr />
                  <p>Our mission is to provide college students with a carefully curated selection of products that enhance both their academic and lifestyle pursuits. We believe that by offering quality products at affordable prices, we can help students focus on what truly matters: their education, personal growth, and memorable experiences.

                  </p>

               </div>
               <div class="right">
                  <h1>What We Offer</h1>
                  <hr />
                  <p>
                     From textbooks and stationery essentials that fuel your academic success to trendy fashion pieces that help you express your individuality, our diverse range of categories is handpicked to cater to your every need. Our commitment to quality ensures that every product you find on our platform is sourced from trusted brands you can rely on.

                  </p>
                  <h1>Why Choose Us</h1>
                  <hr />
                  <p>
                     Student-Centric Approach: We're students too, which is why we understand the unique challenges you face. Our platform is designed to make your shopping experience hassle-free and enjoyable.

                     Affordability: We believe that quality products shouldn't break the bank. Our competitive prices and regular deals ensure you get the best value for your money.

                     Community: Join our community of like-minded students who trust us for their shopping needs. Be part of a network that celebrates individuality and supports your journey.
                  </p>
                  {/* <img src="https://res.cloudinary.com/arpr/image/upload/v1540359700/adult-affection-baby-755028.jpg" /> */}
               </div>
               <div class="clear"></div>
            </div>



            {/* <div class="mission">

               <div class="left">
                  <img src="https://res.cloudinary.com/arpr/image/upload/v1540359700/adult-affection-baby-755028.jpg" />
               </div>
               <div class="right">
                  <h1>Mission Statement</h1>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

               </div>
               <div class="clear"></div>

            </div> */}



            <div class="team">
               <h1> Our Team</h1>



               <div class="card">
                  <div class="circle-container">
                     <img src={divyaimg} alt="" />
                  </div>
                  <h2>DIVYAJOT</h2>
                  <h4>Product-Designer</h4>
                  <p>I'm a third-year student pursuing a B.Tech in Computer Science and Engineering at Rayat Bahra University.A dedicated product designer who's passionate about turning ideas into functional and appealing creations.</p>
               </div>



               <div class="card">
                  <div class="circle-container">
                     <img src={deveshimg} alt="" />
                  </div>
                  <h2>Deveshwar Zard</h2>
                  <h4>Technical Lead</h4>
                  <p>I'm a third-year student pursuing a B.Tech in Computer Science and Engineering at Rayat Bahra University. With a strong passion for technology, I'm committed to learning and contributing to innovative solutions in the field.</p>
               </div>
            </div>


         </div>
      </>

   )
}
