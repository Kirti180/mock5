let token=localStorage.getItem("token") || "";
function determine(){
if(token){
if(event.target.innerText.includes("Freelancers Page")){
window.location.href="data.html"
}
if(event.target.innerText.includes("Reports Page")) {
window.location.href="reports.html"
}
}else{
alert("Admin is not authorised..")
window.location.href="login.html"
}
}