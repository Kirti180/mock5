let form =document.querySelector("form");
// form.addEventListener("submit",login);
const loader = document.querySelector(".loader");
function showLoader() {
loader.style.display = "block";
}
function hideLoader() {
loader.style.display = "none";
}
async function login(event){
event.preventDefault();
let email=form.email.value;
let password=form.password.value;
try {
showLoader();
let res=await fetch (`https://reqres.in/api/login`,{
method:"POST",
body:JSON.stringify({
email,
password
}),
headers:{
'Content-Type':"application/json"
}
});
hideLoader();
let data=await res.json();
console.log(data.token)
if(data.token!==undefined){
localStorage.setItem("token",data.token);
alert("Admin Login Success");
window.location.href="data.html";
}
else{
alert("Login Failed..");
}
// console.log(data)
} catch (error) {
hideLoader();
alert("Login Failed ..");
}
form.email.value="";
form.password.value="";
}
