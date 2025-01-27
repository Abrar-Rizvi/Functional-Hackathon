import React from 'react'


const Policy = () => {
  interface PolicyT {
    h2: string;
    description: string;
    id: number
  }
  const policyCards: PolicyT[] = [

    {
      h2: "Free Delivery",
      description: "Free Delivery For all oders over $50, consectetur adipim scing elit.",
     id: 1
    },
    {
      h2: "90 Days Return",
      description: "If goods have problems, consectetur adipim scing elit.",
      id: 2
    },
    {
      h2: "Secure Payment",
      description: "100% secure payment, consectetur adipim scing elit",
      id: 3
    },
  ]
  return (
    <div className='bg-[#FAF4F4] md:h-[200px]  flex flex-col md:flex-row md:justify-between md:items-center lg:flex-row lg:justify-between lg:items-center 
    
    lg:px-[50px] px-[50px] lg:space-x-10'>
      {policyCards.map( (card) => {
        return <div key={card.id} className='text-left w-full md:w-[150px] lg:w-[300px]  mt-[20px] '>
         <div>
         <h4 className='text-[24px] md:text-[28px] font-bold'>{card.h2}</h4>
          <p className='text-[14px] md:text-[16px] font-medium text-[#9F9F9F] '>
            {card.description}
          </p>
         </div>
        </div>
      } )}
    </div>
  )
}

export default Policy