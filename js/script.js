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

function showFilter() {
  let filter = document.querySelector("aside");
  filter.classList.remove("visibility");
}

function closeFilter() {
  let filter = document.querySelector("aside");
  filter.classList.add("visibility");
}

function backItModal() {
  let backIt = document.getElementById("backit-modal");
  let page = document.getElementsByClassName("project-details")[0];
  console.log(backIt);
  backIt.style = "visibility:visible; display:block;";
  page.style = "visibility:hidden; display:none;";
}

function cancel() {
  let backIt = document.getElementById("backit-modal");
  let page = document.getElementsByClassName("project-details")[0];
  console.log(backIt);
  backIt.style = "visibility:hidden; display:none;";
  page.style = "visibility:visible; display:'';";
}

// Filters with searches
document.getElementById("search").addEventListener("keyup", filterList);

function filterList() {
  let filter = document.getElementById("search");
  // let wordlist = document.getElementById("wordlist");
  let category = document.querySelectorAll(".category-filter");
  console.log(category);
  let i = 0;
  while (i < category.length) {
    let value = category[i].innerText.toUpperCase();
    if (value.indexOf(filter.value.toUpperCase()) === -1) {
      category[i].parentElement.style =
        "visibility: hidden; display:none; transition:all 500ms ease-in";
    } else {
      category[i].parentElement.style =
        "visibility: visible; display:''; transition:all 500ms ease-in";
    }

    i++;
  }
}

document
  .getElementById("location-search")
  .addEventListener("keyup", filterListCity);

function filterListCity() {
  let filter = document.getElementById("location-search");
  // let wordlist = document.getElementById("wordlist");
  let category = document.querySelectorAll(".city-filter");
  // console.log(category);
  let i = 0;
  while (i < category.length) {
    let value = category[i].innerHTML.toUpperCase();
    if (value.indexOf(filter.value.toUpperCase()) === -1) {
      category[i].parentElement.style =
        "visibility: hidden; display:none; transition:all 500ms ease-in";
    } else {
      category[i].parentElement.style =
        "visibility: visible; display:''; transition:all 500ms ease-in";
    }

    i++;
  }
}

// Filters with checkboxes
document
  .getElementsByClassName("item-content")[0]
  .addEventListener("click", filterCheck);
function filterCheck() {
  let data = document.querySelectorAll(".div-item h4.category-filter");
  let checkboxItems = document.querySelectorAll(".item");
  let i = 0;
  let status = false;
  while (i < data.length) {
    let value = data[i].innerHTML;
    console.log(value);
    let present = false;
    let j = 0;
    let val;
    while (j < checkboxItems.length) {
      if (checkboxItems[j].checked === true) {
        status = true;
        val = checkboxItems[j].value;

        //   console.log("value vs val" + value, val, val == value);
        if (value == val) {
          present = true;
          break;
        }
      }
      j++;
    }
    if (present == true) {
      // console.log(data[i]);
      data[i].parentElement.style = "visibility:visible; display:''";
    } else {
      data[i].parentElement.style = "visibility:hidden; display:none";
    }
    i++;
  }

  if (status == false) {
    let j = 0;
    while (j < data.length) {
      let val = data[j].value;
      // console.log("value vs val" + value, val);

      data[j].parentElement.style = "visibility:visible; display:''";

      j++;
    }
  }
  console.log(status);
  i++;
}

// document
//   .getElementsByClassName("item-content")[2]
//   .addEventListener("click", filterCheckTiming);
// function filterCheckTiming() {
//   let data = document.querySelectorAll(".div-item h4.time-filter");
//   let checkboxItems = document.querySelectorAll(".item");
//   let i = 0;
//   let status = false;
//   while (i < data.length) {
//     let value = data[i].innerHTML;
//     console.log(value);
//     let present = false;
//     let j = 0;
//     let val;
//     while (j < checkboxItems.length) {
//       if (checkboxItems[j].checked === true) {
//         status = true;
//         val = checkboxItems[j].value;

//         //   console.log("value vs val" + value, val, val == value);
//         if (value == val) {
//           present = true;
//           break;
//         }
//       }
//       j++;
//     }
//     if (present == true) {
//       // console.log(data[i]);
//       data[i].parentElement.style = "visibility:visible; display:''";
//     } else {
//       data[i].parentElement.style = "visibility:hidden; display:none";
//     }
//     i++;
//   }

//   if (status == false) {
//     let j = 0;
//     while (j < data.length) {
//       let val = data[j].value;
//       // console.log("value vs val" + value, val);

//       data[j].parentElement.style = "visibility:visible; display:''";

//       j++;
//     }
//   }
//   console.log(status);
//   i++;
// }
