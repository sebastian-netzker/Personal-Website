/**
 * This function show the menu
 */

function showMenu() {
  document.getElementById("overlay-menu").classList.add("show-overlay-menu");
  document.getElementById("overlay-menu").classList.remove("d-none");
  document.getElementById("burger-menu").classList.add("hidden");
  document.getElementById("close-menu").classList.remove("d-none");
}

/**
 * This function close the menu
 */

function closeMenu() {
  document.getElementById("overlay-menu").classList.remove("show-overlay-menu");
  document.getElementById("overlay-menu").classList.add("d-none");
  document.getElementById("burger-menu").classList.remove("hidden");
  document.getElementById("close-menu").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}

/**
 * This function close the menu automatically
 */

function automatic_closeMenu() {
  let x = window.matchMedia("(max-width: 600px)");

  setInterval(function () {
    if (!x.matches) {
      closeMenu();
    }
  }, 50);
}

/**
 * This function move the arrow to bottom
 */

function bottomArrow() {
  document.getElementById("arrow_img").classList.add("transform");
}

/**
 * This function move the arrow to the right side
 */

function rightArrow() {
  document.getElementById("arrow_img").classList.remove("transform");
}

/**
 * This function return a value when checking the viewport
 * @param {string} element - respective element to be checked
 */

function inViewport(element) {
  // Get the elements position relative to the viewport
  let bb = element.getBoundingClientRect();
  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite
  return !(bb.top > innerHeight || bb.bottom < 0);
}

/**
 * This function checks if a element is in viewport on scrolling
 */
document.addEventListener("scroll", (event) => {
  let elements = [
    headline_about,
    about_information,
    about_skills,
    story_step1,
    story_step2,
    story_step3,
    story_step4,
    headline_portfolio,
    all_project,
    quiz,
    groupproject,
    game,
    quizapp,
    join_taskmanager,
    kochwelt,
    tic_tac_toe,
    el_pollo_loco,
    headline_contact,
    content_contact,
    form_name,
    form_email,
    form_message,
    btn_send,
  ];

  for (let i = 0; i < elements.length; i++) {
    if (inViewport(elements[i])) {
      elements[i].classList.add("add_animation_left");
      //console.log("MY div is in view port");
    } else {
      //console.log("MY div is not in view port");
    }
  }
});

/**
 * This function activate all projects
 */

function showAll() {
  all_project.classList.add("portfolio_section_clicked");
  quiz.classList.remove("portfolio_section_clicked");
  groupproject.classList.remove("portfolio_section_clicked");
  game.classList.remove("portfolio_section_clicked");
  pictureAll();
}

/**
 * This function activate the quiz section
 */

function showQuiz() {
  quiz.classList.add("portfolio_section_clicked");
  all_project.classList.remove("portfolio_section_clicked");
  groupproject.classList.remove("portfolio_section_clicked");
  game.classList.remove("portfolio_section_clicked");
  pictureQuiz();
}

/**
 * This function activate the groupprojects section
 */

function showGroupprojects() {
  groupproject.classList.add("portfolio_section_clicked");
  all_project.classList.remove("portfolio_section_clicked");
  quiz.classList.remove("portfolio_section_clicked");
  game.classList.remove("portfolio_section_clicked");
  pictureGroupprojects();
}

/**
 * This function activate the game section
 */

function showGames() {
  game.classList.add("portfolio_section_clicked");
  all_project.classList.remove("portfolio_section_clicked");
  quiz.classList.remove("portfolio_section_clicked");
  groupproject.classList.remove("portfolio_section_clicked");
  pictureGames();
}

/**
 * This function show all pictures
 */

function pictureAll() {
  quizapp.classList.remove("d-none");
  join_taskmanager.classList.remove("d-none");
  kochwelt.classList.remove("d-none");
  tic_tac_toe.classList.remove("d-none");
  el_pollo_loco.classList.remove("d-none");
}

/**
 * This function show the quiz picture
 */

function pictureQuiz() {
  quizapp.classList.remove("d-none");
  join_taskmanager.classList.add("d-none");
  kochwelt.classList.add("d-none");
  tic_tac_toe.classList.add("d-none");
  el_pollo_loco.classList.add("d-none");
}

/**
 * This function show the groupproject picture
 */

function pictureGroupprojects() {
  quizapp.classList.add("d-none");
  join_taskmanager.classList.remove("d-none");
  kochwelt.classList.remove("d-none");
  tic_tac_toe.classList.add("d-none");
  el_pollo_loco.classList.add("d-none");
}

/**
 * This function show the game picture
 */

function pictureGames() {
  quizapp.classList.add("d-none");
  join_taskmanager.classList.add("d-none");
  kochwelt.classList.add("d-none");
  tic_tac_toe.classList.remove("d-none");
  el_pollo_loco.classList.remove("d-none");
}

/**
 * This function activate the color from home-button when clicked
 */

function changeColorHome() {
  home_navbar.classList.add("changecolor_navbar");
  about_navbar.classList.remove("changecolor_navbar");
  portfolio_navbar.classList.remove("changecolor_navbar");
  contact_navbar.classList.remove("changecolor_navbar");
}

/**
 * This function activate the color from about-button when clicked
 */

function changeColorAbout() {
  home_navbar.classList.remove("changecolor_navbar");
  about_navbar.classList.add("changecolor_navbar");
  portfolio_navbar.classList.remove("changecolor_navbar");
  contact_navbar.classList.remove("changecolor_navbar");
}

/**
 * This function activate the color from portfolio-button when clicked
 */

function changeColorPortfolio() {
  home_navbar.classList.remove("changecolor_navbar");
  about_navbar.classList.remove("changecolor_navbar");
  portfolio_navbar.classList.add("changecolor_navbar");
  contact_navbar.classList.remove("changecolor_navbar");
}

/**
 * This function activate the color from contact-button when clicked
 */

function changeColorContact() {
  home_navbar.classList.remove("changecolor_navbar");
  about_navbar.classList.remove("changecolor_navbar");
  portfolio_navbar.classList.remove("changecolor_navbar");
  contact_navbar.classList.add("changecolor_navbar");
}



/**
 * This function check on scroll which element change the color
 */

window.addEventListener("scroll", function () {
  let home_boundingclient = document
    .getElementById("home")
    .getBoundingClientRect();
  let about_boundingclient = document
    .getElementById("about")
    .getBoundingClientRect();
  let portfolio_boundingclient = document
    .getElementById("portfolio")
    .getBoundingClientRect();
  let contact_boundingclient = document
    .getElementById("contact")
    .getBoundingClientRect();

  if (about_boundingclient.top + 250 < window.innerHeight / 2) {
    aboutTop();
  }

  if (about_boundingclient.bottom + 250 < window.innerHeight / 2) {
    aboutBottom();
  }

  if (home_boundingclient.top + 250 < window.innerHeight / 2) {
    homeTop();
  }

  if (home_boundingclient.bottom + 250 < window.innerHeight / 2) {
    homeBottom();
  }

  if (portfolio_boundingclient.top + 250 < window.innerHeight / 2) {
    portfolioTop();
  }

  if (portfolio_boundingclient.bottom + 250 < window.innerHeight / 2) {
    portfolioBottom();
  }

  if (contact_boundingclient.top + 250 < window.innerHeight / 2) {
    contactTop();
  }

  if (contact_boundingclient.bottom + 250 < window.innerHeight / 2) {
    contactBottom();
  }
});

/**
 * This function change color in the upper part from the about section
 */

function aboutTop() {
  about_navbar.classList.add("changecolor_orange");
  portfolio_navbar.classList.remove("changecolor_orange");

  about_overlay.classList.add("changecolor_orange");
  portfolio_overlay.classList.remove("changecolor_orange");
}

/**
 * This function change color in the lower part from the about section
 */

function aboutBottom() {
  about_navbar.classList.remove("changecolor_orange");

  about_overlay.classList.remove("changecolor_orange");
}

/**
 * This function change color in the upper part from the home section
 */

function homeTop() {
  home_navbar.classList.add("changecolor_orange");
  about_navbar.classList.remove("changecolor_orange");

  home_overlay.classList.add("changecolor_orange");
  about_overlay.classList.remove("changecolor_orange");
}

/**
 * This function change color in the lower part from the home section
 */

function homeBottom() {
  home_navbar.classList.remove("changecolor_orange");
  about_navbar.classList.add("changecolor_orange");

  home_overlay.classList.remove("changecolor_orange");
  about_overlay.classList.add("changecolor_orange");
}

/**
 * This function change color in the upper part from the portfolio section
 */

function portfolioTop() {
  portfolio_navbar.classList.add("changecolor_orange");
  contact_navbar.classList.remove("changecolor_orange");
  about_navbar.classList.remove("changecolor_orange");

  portfolio_overlay.classList.add("changecolor_orange");
  contact_overlay.classList.remove("changecolor_orange");
  about_overlay.classList.remove("changecolor_orange");
}

/**
 * This function change color in the lower part from the portfolio section
 */

function portfolioBottom() {
  portfolio_navbar.classList.remove("changecolor_orange");

  portfolio_overlay.classList.remove("changecolor_orange");
}

/**
 * This function change color in the upper part from the contact section
 */

function contactTop() {
  contact_navbar.classList.add("changecolor_orange");

  contact_overlay.classList.add("changecolor_orange");
}

/**
 * This function change color in the lower part from the contact section
 */

function contactBottom() {
  contact_navbar.classList.remove("changecolor_orange");

  contact_overlay.classList.remove("changecolor_orange");
}

/**
 * This function get the parameter to open the popup menu
 */

function getParameter() {
  let message;
  try {
    var url_string = window.location.href.toLowerCase();
    var url = new URL(url_string);

    message = url.searchParams.get("message");

    if (message == "email_send") {
      openPopup();
    }
  } catch (err) {
    console.log("Issues with Parsing URL Parameter's - " + err);
  }
}

/**
 * This function open the popup menu
 */

function openPopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

/**
 * This function close the popup menu
 */

function closePopup() {
  document.getElementById("popup-1").classList.remove("active");
}
