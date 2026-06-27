import React from 'react'

const LocationMap = () => {
  return (
    <>
      <div className="location-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d816.7785191933431!2d88.09780373969879!3d22.47691297029836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a028683cf5b2d2f%3A0x9065fc6a6f3a6195!2sUluberia!5e1!3m2!1sen!2sin!4v1781972791035!5m2!1sen!2sin" width={'100%'} height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </>
  )
}

export default LocationMap