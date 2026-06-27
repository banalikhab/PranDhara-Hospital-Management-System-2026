import React from "react";
import Slider from "../Components/Slider/Slider.jsx";
import Facility from "../Components/Static/Facility/Facility.jsx";
import ShortIntro from "../Components/Static/ShortIntro/ShortIntro.jsx";
import WhyChoose from "../Components/Static/WhyChoose/WhyChoose.jsx";
import ContactMessage from "../Components/Static/ContactMessage/ContactMessage.jsx";
import PatientReviews from "../Components/Static/PatientReviews/PatientReviews.jsx";

const Home = () => {
  return (
    <>
      {/* //Slider */}
      <Slider/>
      {/* Facility */}
      <Facility/>
      {/* Short hospital intro */}
      <ShortIntro/>
      {/* why choose us */}
      <WhyChoose/>
      {/* Testimonial */}
      <PatientReviews/>
      {/* contact */}
      <ContactMessage/>
    </>
  )
}

export default Home;