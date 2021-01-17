
function showMenu(){

        document.getElementById('overlay-menu').classList.add('show-overlay-menu');
        document.getElementById('burger-menu').classList.add('d-none');
        document.getElementById('close-menu').classList.remove('d-none');
        document.body.classList.add('overflow-hidden')
      }

 function closeMenu(){

        document.getElementById('overlay-menu').classList.remove('show-overlay-menu');
         document.getElementById('burger-menu').classList.remove('d-none');
        document.getElementById('close-menu').classList.add('d-none');
        document.body.classList.remove('overflow-hidden'); }


   function automatic_closeMenu() {

    let x = window.matchMedia('(max-width: 1000px)');

    
    setInterval(function(){
     if (!x.matches) {
       closeMenu();
     } 
    },50)
   }     


   function hideArrow(){

    let x = window.matchMedia('(max-width: 600px)');


    setInterval(function () {
      if (x.matches) {
        document.getElementById('arrow-image1').classList.add('d-none');
        document.getElementById('arrow-image2').classList.add('d-none');
        document.getElementById('arrow-image3').classList.add('d-none');
        document.getElementById('arrow-image4').classList.add('d-none');
      }
      else if (! x.matches){

        document.getElementById('arrow-image1').classList.remove('d-none');
        document.getElementById('arrow-image2').classList.remove('d-none');
        document.getElementById('arrow-image3').classList.remove('d-none');
        document.getElementById('arrow-image4').classList.remove('d-none');


      }
    }, 50);

   }



    function openEmail() {
      document.getElementById("close-email-headline").classList.remove("d-none");

      document.getElementById("close-email-link").classList.remove("d-none");
    }




   function closeEmail(){

    document.getElementById('close-email-headline').classList.add('d-none');

    document.getElementById("close-email-link").classList.add("d-none");

   }

        