import React from 'react'
import Service from '../Assets/Services.svg';
import ServicesCustomerCare from '../Assets/ServicesCustomerCare.svg';
import MoneyBack from '../Assets/MoneyBack.svg';


const Advantage = () => {
const serviceList=[
  {
    MainText: "FREE AND FAST DELIVERY",
    SubText: "Free delivery for all orders over $140",
    icon: Service
  }, {
    MainText: "24/7 CUSTOMER SERVICE",
    SubText: "Friendly 24/7 customer support",
    icon: ServicesCustomerCare
  }, {
    MainText: "MONEY BACK GUARANTEE",
    SubText: "We reurn money within 30 days",
    icon: MoneyBack
  },

]
  return (
      <div className='w-screen p-10 h-auto grid lg:grid-cols-3 grid-cols-1 gap-20 justify-center items-center lg:my-32'>
        {
          serviceList.map((eachService, index)=>(
            <div className="w-full flex flex-col gap-2 justify-center items-center" key={index}>
              <div className="">
                <img src={eachService.icon} alt="" />
              </div>
              <div className="capitalize font-bold ">{eachService.MainText}</div>
              <div className="text-sm">{eachService.SubText}</div>
            </div>
          ))
        
        }
        
        
      </div>
  )
}

export default Advantage