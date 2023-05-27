const loader = document.querySelector(".loader");
fetch('https://freelancers-fuoc.onrender.com/freelancers')
.then(response => response.json())
.then(data => {
  // Calculate the number of freelancers per profession
  const pro_count = {};
  data.forEach(freelancer => {
    const profession = freelancer.profession;
    if (pro_count.hasOwnProperty(profession)) {
      pro_count[profession]++;
    } else {
      pro_count[profession] = 1;
    }
  });

  // Display the freelancer count per profession
  const free_count_div = document.getElementById('freelancer-count');
  for (const profession in pro_count) {
    const count = pro_count[profession];
    const pro_ele = document.createElement('p');
    pro_ele.textContent = `${profession}: ${count}`;
    free_count_div.appendChild(pro_ele);
  }
})
.catch(error => {
  console.log(error);
  // Handle error case
});
fetch('https://freelancers-fuoc.onrender.com/freelancers')
.then(response => response.json())
.then(data => {
  // Calculate the average hourly rate
  const hrRate = data.reduce((sum, freelancer) => sum + freelancer.hourly_rate, 0);
  const avg_hr_rate = hrRate / data.length;

  // Display the average hourly rate
  const avg_hr_rateDiv = document.getElementById('average-hourly-rate');
  const avg_ele = document.createElement('p');
  avg_ele.textContent = `Average Hourly Rate: $${avg_hr_rate.toFixed(2)}`;
  avg_hr_rateDiv.appendChild(avg_ele);
})
.catch(error => {
  console.log(error);
  // Handle error case
});
fetch('https://freelancers-fuoc.onrender.com/freelancers')
.then(response => response.json())
.then(data => {
  // Calculate the number of booked and available freelancers
  let bookedCount = 0;
  let availableCount = 0;

  data.forEach(freelancer => {
    if (freelancer.isBooked) {
      bookedCount++;
    } else {
      availableCount++;
    }
  });

  // Display the number of booked and available freelancers
  const book_div_status = document.getElementById('booking-status');
  const book_ele = document.createElement('p');
  book_ele.textContent = `Booked Freelancers: ${bookedCount}`;
  book_div_status.appendChild(book_ele);

  const ava_ele = document.createElement('p');
  ava_ele.textContent = `Available Freelancers: ${availableCount}`;
  book_div_status.appendChild(ava_ele);
})
.catch(error => {
  console.log(error);
  // Handle error case
});

function showLoader() {
loader.style.display = "block";
}
function hideLoader() {
loader.style.display = "none";
}
let allList;
getList()
async function getList(){
try {
showLoader()
let res=await fetch("https://freelancers-fuoc.onrender.com/freelancers");
let data=await res.json();
// console.log(data)
allList=data;
hideLoader()
if(allList!==undefined){
appendList(allList);
}
} catch (error) {
hideLoader();
console.log(error);
}
}
function appendList(allList){
    const count1=document.getElementById("count")
    let count=allList.length
    count1.innerHTML=count
    console.log(count)
let tbody=document.querySelector("tbody");
tbody.innerHTML=null;
allList.forEach((ele)=>{
let tr=document.createElement("tr");
let id=document.createElement("td");
id.innerText=ele.id;
let name=document.createElement("td");
name.innerText=ele.name;
let email=document.createElement("td");
email.innerText=ele.email;
let profession=document.createElement("td");
profession.innerText=ele.profession;
let skills=document.createElement("td");
skills.innerText=ele.skills;
let hourly_rate=document.createElement("td");
hourly_rate.innerText=ele.hourly_rate;
let isBooked=document.createElement("td");
isBooked.innerText=ele.isBooked;
tr.append(id,name,email,profession,skills,hourly_rate,isBooked);
tbody.append(tr);
});
let maleDogs=0;
let femalDogs=0;
let ageSum=0;
for(let i=0;i<allList.length;i++){
let dog=allList[i];
if(dog.gender==="Male"){
maleDogs++;
ageSum+=dog.age
}
if(dog.gender==="Female"){
femalDogs++;
ageSum+=dog.age
}
}
let misc=document.getElementById("misc");
misc.innerHTML=null;
let avgAge=Math.floor(ageSum/allList.length);
let all=document.createElement("p");
all.innerText=`Total number of Dogs Attended:- ${allList.length} `
let males=document.createElement("p");
males.innerText=`Total number of male Dogs:- ${maleDogs}`
let females=document.createElement("p");
females.innerText=`Total number of Female Dogs:- ${femalDogs}`;
let avgs=document.createElement("p");
avgs.innerText=`Average Number of Age Group Dogs are from :- ${avgAge} year
old`
misc.app
}