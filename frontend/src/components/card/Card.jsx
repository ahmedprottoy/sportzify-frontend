import React from 'react'
import CardImg from '../../assets/card.jpg'
import CardImg2 from '../../assets/card2.jpg'
import Author from '../../assets/poet.png'

function Card() {
  return (
    <div className="group relative block bg-black lg:w-80 rounded-lg lg:h-96 border-2 border-gray-700">
      <img
        alt="Developer"
        src={CardImg2}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
      />

      <div className="relative">
        <div className="flex flex-col absolute top-0 right-0 p-2 rounded-lg text-slate-100 bg-indigo-400 text-sm lg:text-base">
          <span>12</span>
          <span>Sep</span>
          <span>2023</span>
        </div>

        <p class="text-base text-white sm:text-2xl">Tony Wayne</p>

        <div className="sm:mt-48 lg:mt-64 bg-white ">
          <div className="transform transition-all group-hover:-translate-y-12 bg-white">
            <p className="text-xl font-thin font-kalam text-black sm:text-2xl px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="bg-white">
          <div className=" transform opacity-0 transition-all group-hover:-translate-y-10 group-hover:opacity-100 bg-white">
            <p className="text-sm text-black px-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              perferendis hic asperiores....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card