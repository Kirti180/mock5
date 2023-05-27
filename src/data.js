let allData;
let container = document.querySelector("#container");
let filterBy = "";
let order = "";
let q = "";
let imskills =
  "data:imskills/jpeg;base64,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";

const loader = document.querySelector(".loader");
function showLoader() {
  loader.style.display = "block";
}
function hideLoader() {
  loader.style.display = "none";
}
getAllBreeds(q, filterBy, order);
async function getAllBreeds(q, filterBy, order) {
  let url = "https://freelancers-fuoc.onrender.com/freelancers?_sort=hourly_rate";
  if ((q, filterBy && order)) {
    url = `${url}&q=${q}&_order=${order}&email=${filterBy}`;
  } else if (q && order) {
    url = `${url}&q=${q}&_order=${order}`;
  } else if (q && filterBy) {
    url = `${url}&q=${q}&email=${filterBy}`;
  } else if (order) {
    url = `${url}&_order=${order}`;
  } else if (filterBy) {
    url = `${url}&email=${filterBy}`;
  } else if (q) {
    url = `${url}&q=${q}`;
  }
  console.log(sort, order);
  try {
    showLoader();
    console.log(url);
    let res = await fetch(url);
    allData = await res.json();
    if (allData !== undefined) {
      // console.log(btnCont)
      console.log(allData);
      hideLoader();
      append(allData);
    }
  } catch (error) {
    console.log(error.messskills);
    hideLoader();
  }
}
function book(){
    if(isBooked){
        button.disabled=true
    }
    else{
        button.disabled=false
    }
}

function append(allData) {
  container.innerHTML = null;
  allData.forEach((el, ind) => {
    let div = document.createElement("div");
    div.setAttribute("id","card")
    let img = document.createElement("img");
    img.setAttribute("src", imskills);
    let name = document.createElement("h2");
    name.innerText = `Name: ${el.name}`;
    let email = document.createElement("p");
    email.innerText = `email: ${el.email}`;
    let skills = document.createElement("p");
    skills.innerText = `skills: ${el.skills}`;
    let hourly_rate = document.createElement("p");
    hourly_rate.innerText = `hourly_rate: $${el.hourly_rate}`;
    let profession = document.createElement("p");
    profession.innerText = `profession: ${el.profession}`;
    let isBooked = document.createElement("p");
    isBooked.innerText = `Booking status: ${el.isBooked}`;
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.setAttribute("id", "editBtn")
    editBtn.style.backgroundColor = "green";
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    let hire = document.createElement("button");
    hire.setAttribute("id","hire")
    hire.innerText = "Hire Me";
    hire.addEventListener("click",()=>{
        book()
    })
    
    delBtn.style.backgroundColor = "red";
    delBtn.addEventListener("click", () => {
      delBreed(el);
    });
    div.append(img, name, email, skills, profession,hourly_rate,isBooked, editBtn, delBtn,hire);
    container.append(div);
  });
}
// filter
document.querySelector("#filter").addEventListener("change", filterFunc);
function filterFunc() {
  let selected = document.querySelector("#filter").value;
  filterBy = selected;
  getAllBreeds(q, filterBy, order);
}
// sorting \
document.querySelector("#sort").addEventListener("change", sortFunc);
function sortFunc() {
  let selected = document.querySelector("#sort").value;
  order = selected;
  getAllBreeds(q, filterBy, order);
  console.log(order);
}
// searching
document.querySelector("#srchBtn").addEventListener("click", searchFunc);
function searchFunc() {
  let query = document.querySelector("#search").value;
  q = query;
  getAllBreeds(q, filterBy, order);
  document.querySelector("#search").value = "";
}
// deleting
async function delBreed(el) {
  try {
    showLoader();
    let res = await fetch(
      `https://freelancers-fuoc.onrender.com/freelancers/${el.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    hideLoader();
    getAllBreeds(q, filterBy, order);
  } catch (error) {
    console.log(error);
    hideLoader();
  }
}
