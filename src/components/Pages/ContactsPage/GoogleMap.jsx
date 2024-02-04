import React from 'react';

// map used from google maps iframe generator

const GoogleMap = () => {

  return (
    <>
      <iframe 
        title='googleMap'
        width={(window.innerWidth < 1110) ? "343" : "827"}
        height={(window.innerWidth < 1110) ? "343" : "491"}
        frameBorder="0" 
        scrolling="no" 
        marginHeight="0" 
        marginWidth="0" 
        src="https://maps.google.com/maps?width=827&amp;height=491&amp;hl=en&amp;q=plac%20Mariacki%205,%2031-042%20Krak%C3%B3w+(Calyprus%20shop)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Find Population on Map</a>
        </iframe>
    </>
  )
}

export default GoogleMap