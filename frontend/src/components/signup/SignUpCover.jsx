import React from 'react'
import signUpBG from '../../assets/signup-bg3.jpg'

const signUpCover = () => {
    return (
      <section className="relative flex h-32 items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt="Night"
          src={signUpBG}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="hidden lg:relative lg:block lg:p-12  ">
          <h2 className="text-2xl font-bold text-white font-kalam sm:text-3xl md:text-6xl">
            Welcome to Sportzify
          </h2>
        </div>
      </section>
    );};

export default signUpCover;