
  
function generateCarousel(className, options) {
  let splideClassName = document.querySelector(className)
  if(splideClassName){
    new Splide(className, options).mount();
  }
}


document.addEventListener("DOMContentLoaded", function () {
  
    generateCarousel(".sonda-hero-splide", {
        type    : 'loop',
        autoplay: 'true',
        gap: '10px',
        perPage: 1,
        pagination: true,
        classes: {
            pagination: 'splide__pagination container shs', // container
        },
    });

    generateCarousel(".sonda-solutions-splide", {
      type    : 'slide',
      gap: '10px',
      perPage: 1,
      pagination: true,
      classes: {
          pagination: 'splide__pagination container sss', // container
        },
    });

    generateCarousel(".contenidos-relacionados-splide", {
      type    : 'loop',
      autoplay: 'true',
      gap: '10px',
      perPage: 2,
      pagination: true,
      breakpoints: {
        991: {
          perPage: 1,
        },
      },
      classes: {
          pagination: 'splide__pagination container crs', // container
        },
    });

    generateCarousel(".testimonios-splide", {
      type    : 'loop',
      autoplay: 'true',
      perPage: 1,
      pagination: true,
      classes: {
          pagination: 'splide__pagination container testimonios', // container
        },
    });

    generateCarousel(".cols-splide", {
      type    : 'loop',
      autoplay: 'true',
      gap: '10px',
      perPage: 1,
      pagination: true,
      classes: {
          pagination: 'splide__pagination container cols-s', // container
        },
    });

    generateCarousel(".cols-splide-02", {
      type    : 'loop',
      autoplay: 'true',
      gap: '10px',
      perPage: 1,
      pagination: true,
      classes: {
          pagination: 'splide__pagination container cols-s-02', // container
        },
    });

    generateCarousel(".galeria-splide", {
      type    : 'loop',
      autoplay: 'true',
      gap: '10px',
      perPage: 1,
      pagination: true,
      classes: {
          pagination: 'splide__pagination container gs', // container
        },
    });

    generateCarousel(".galeria-splide-02", {
      type    : 'loop',
      autoplay: 'true',
      gap: '10px',
      perPage: 1,
      pagination: true,
      classes: {
          pagination: 'splide__pagination container gs-02', // container
        },
    });


    generateCarousel(".atributos-splide", {
      type    : 'loop',
      autoplay: 'true',
      gap: '10px',
      perPage: 4,
      pagination: true,
      classes: {
          pagination: 'splide__pagination container atributos', // container
        },
        breakpoints: {
          991: {
            perPage: 1,
          },
        },
    });

    generateCarousel(".carreras02-principal-splide", {
         type    : 'loop',
         autoplay: 'true',
         gap: '10px',
         perPage: 1,
         pagination: true,
         classes: {
             pagination: 'splide__pagination container c02-ps', // container
           },
       });

       generateCarousel(".nuevotestimoniosUno-splide", {
         type    : 'loop',
         autoplay: 'true',
         gap: '10px',
         perPage: 1,
         pagination: true,
         classes: {
             pagination: 'splide__pagination container nt-01', // container
           },
       });

       generateCarousel(".nuevotestimoniosDos-splide", {
         type    : 'loop',
         autoplay: 'true',
         gap: '10px',
         perPage: 1,
         pagination: true,
         classes: {
             pagination: 'splide__pagination container nt-02', // container
           },
       });

       generateCarousel(".nuevotestimoniosTres-splide", {
         type    : 'loop',
         autoplay: 'true',
         gap: '10px',
         perPage: 1,
         pagination: true,
         classes: {
             pagination: 'splide__pagination container nt-03', // container
           },
       });



    
      
});