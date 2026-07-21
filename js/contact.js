const form = document.getElementById("contactForm");


form.addEventListener("submit", function(event){


event.preventDefault();



let name = document.getElementById("name").value;

let email = document.getElementById("email").value;

let message = document.getElementById("message").value;



let result = document.getElementById("formMessage");



if(name === "" || email === "" || message === ""){


result.innerHTML = 
"Please fill in all fields.";


result.style.color="red";


}

else{


result.innerHTML =
"Thank you! Your message has been received.";


form.reset();


}



});