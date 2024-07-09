$(document).ready(function()  {
$('.menu-toggle').on('click',function() {
 $('.nav').toggleClass('showing');
 $('.nav ul').toggleClass('showing');
});

$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });
  ClassicEditor
  .create( document.querySelector( '#body' ), {
      ai: {
          // AI Assistant feature configuration.
          aiAssistant: {
              // Extend the default commands configuration.
              extraCommandGroups: [
                  // Add a command to an existing group:
                  {
                      groupId: 'translate',
                      commands: [
                          {
                              id: 'translatePolish',
                              label: 'Translate to Polish',
                              prompt: 'Translate to Polish language.'
                          }
                      ]
                  },
                  // Create a new AI commands group:
                  {
                      groupId: 'transformations',
                      groupLabel: 'Transformations',
                      commands: [
                          {
                              id: 'addEmojis',
                              label: 'Add emojis',
                              prompt: 'Analyze each sentence of this text. After each sentence add an emoji that summarizes the sentence.'
                          },
                          // ...
                      ]
                  },
              ]
          }
      }
  } )
  .then( /* ... */ )
  .catch( /* ... */ );