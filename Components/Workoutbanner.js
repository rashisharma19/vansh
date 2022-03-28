import Image from "next/image";
import React, { useState } from "react";
// import "tw-elements";
import ban from "../assets/banner.jpeg";

const WorkoutBanner = () => {
  return (
    <div
      id="carouselDarkVariant"
      class="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>

      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="block w-full"
          alt="Motorbike Smoke"
          />
          <div class="carousel-caption hidden md:block absolute text-center">
            <h5 class="text-6xl font-serif">TIME TO CHANGE</h5>
            <p className="text-3xl">Join the FitPlus Commune</p>
          </div>
        </div>

        <div class="carousel-item relative float-left w-full">
          <img
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            class="block w-full"
            alt="Mountaintop"
          />
          <div class="carousel-caption hidden md:block absolute text-center">
            <h5 class="text-6xl font-serif">TIME TO CHANGE</h5>
            <p className="text-3xl">Join the FitPlus Commune</p>
          </div>
        </div>

        <div class="carousel-item relative float-left w-full">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
            class="block w-full"
            alt="Woman Reading a Book"
          />
          <div class="carousel-caption hidden md:block absolute text-center">
            <h5 class="text-6xl font-serif">TIME TO CHANGE</h5>
            <p className="text-3xl">Join the FitPlus Commune</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default WorkoutBanner;