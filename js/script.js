function openDetail(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function visibility(seen, notSeen) {
  seen.classList.add("visibility");
  notSeen.classList.remove("visibility");
}

let state = false;
function showNav(notSeen, width) {
  if (screen.width <= width && state === false) {
    notSeen.style = "visibility:visible; display:block";
    state = true;
  } else if (screen.width <= width && state === true) {
    notSeen.style = "visibility:hidden; display:none";
    state = false;
  }
  // document.addEventListener("click", function () {
  //   notSeen.style = "visibility:hidden; display:none";
  // });
}
