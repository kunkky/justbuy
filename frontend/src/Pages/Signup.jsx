import React from "react";
import NavBar from "../Components/NavBar";
import cart from "../Asset/cart.svg";
import Footer from "../Components/Footer";

const Signup = () => {
  return (
    <div className="">
      <NavBar />
      <section className=" h-[80svh] mx-5 my-5 grid grid-cols-2">
        <div className=" border overflow-hidden">
          <img src={cart} alt="" srcset="" />
        </div>
        <div className="border">
          <div className=" flex flex-col items-center">
            <h1>Create an account</h1>
            <p>Enter your details below</p>
          </div>
          
            <form action="" className="flex flex-col items-center ">
              
              <input type="text" name="" id="" className=" border-b-2 w-36" placeholder=" name" />
              <input type="email" name="" id="" placeholder="email"className=" border-b-2" />
              <input type="password" name="" id="" className=" border-b-2"/>
            </form>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
