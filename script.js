
// steps 01:   Personal informfations form validations
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");

// personal informations form steps 01
const nameInput = document.querySelector("#fullName")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const nextBtns = document.querySelectorAll(".next-btn")
const cancelBtn = document.querySelector(".cancel-btn")

// step 02:    Address form validations
const countryError = document.querySelector("#countryError")
const cityError = document.querySelector("#cityError")
const addressError = document.querySelector("#adressError")

// personal address form steps 02
const countryInput = document.querySelector("#country")
const cityInput = document.querySelector("#city")
const addressInput = document.querySelector("#address")

// step 03: previous button and progress bar 
const previous = document.querySelectorAll(".prev-btn")
const progresBar = document.querySelector(".progress-bar")
const stepIndicators = document.querySelectorAll(".step");


// step 04: account details validations
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

const usernameError = document.querySelector("#usernameError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#conformPasswordError");

// step 05: user summery details
const summaryName = document.querySelector("#summaryName")
const summaryEmail = document.querySelector("#summaryEmail")
const summaryPhone = document.querySelector("#summaryPhone")


const summaryCountry = document.querySelector("#summaryCountry")
const summaryCity = document.querySelector("#summaryCity")
const summaryAddress = document.querySelector("#summaryAddress")


const summaryUsername = document.querySelector("#summaryUsername")
const summaryPassword = document.querySelector("#summaryPassword")

const submit = document.querySelector(".submit-btn")
const successOverlay = document.querySelector(".success-overlay");
const successMessage = document.querySelector("#successMessage")
const closePopup = document.querySelector("#closePopup")








const formSteps = document.querySelectorAll(".form-step");
let currentStep = 0;


nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() !== "") {
        nameError.textContent = "";
        nameInput.classList.remove("input-error");
    }
});

emailInput.addEventListener("input",()=>{
    if(emailInput.value.trim() !== ""){
        emailError.textContent = ""
        emailInput.classList.remove("input-error");
    }
})
phoneInput.addEventListener("input",()=>{
    if(phoneInput.value.trim() !== ""){
        phoneError.textContent = ""
        phoneInput.classList.remove("input-error");
    }
})

// javascript regular expression for validations
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^03[0-9]{9}$/;


let userInformation = {}
const getUserValues = () =>{

    let fullName =  nameInput.value;
    let userEmail = emailInput.value;
    let userPhone = phoneInput.value;


    let isValid = true
    if(fullName.trim() === ""){
        nameError.textContent = "Name is required"
        nameInput.classList.add("input-error");
        isValid = false;   
    }else{
        nameError.textContent = ""
        nameInput.classList.remove("input-error");
    }
     if(userEmail.trim() === ""){
        emailError.textContent = "Email is required"
        emailInput.classList.add("input-error");
        isValid = false;
    }else if(!emailPattern.test(userEmail)){
        emailError.textContent = "Please enter a valid email";
        emailInput.classList.add("input-error");
        isValid = false;
    }
    else{
        emailError.textContent = ""
        emailInput.classList.remove("input-error");
    }
    if(userPhone.trim() === ""){
        phoneError.textContent = "Phone is required"
        phoneInput.classList.add("input-error");
        isValid = false;
    }else if(!phonePattern.test(userPhone)){
        phoneError.textContent = "Please enter a valid phone number";
        phoneInput.classList.add("input-error")
        isValid = false;
        
    }
    else{
        phoneError.textContent = ""
        phoneInput.classList.remove("input-error");
    }
    if(isValid === false){
        return false

    }


    userInformation.personal ={
        name: fullName,
        email: userEmail,
        phone: userPhone

    }



   
    return true;
}

const showStep = (stepIndex) =>{
    formSteps.forEach((step,index)=>{
        if(index === stepIndex){
            step.classList.add("active")
        }else{
            step.classList.remove("active")
        }
    })
    stepIndicators.forEach((step,index)=>{
        if(index <= stepIndex){
            step.classList.add("active")
        }else{
            step.classList.remove("active")
        }
    })
    // progress bar width
    let progress = ((stepIndex + 1) / 4) * 100;
    progresBar.style.width = `${progress}%`


}
nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {

        let isStepValid = false;

        if(currentStep === 0){
            isStepValid = getUserValues();
        }else if(currentStep === 1){
            isStepValid = addressDetails();
        }else if(currentStep === 2){
        isStepValid = accountDetails();
        showSummery()
    }
    
    if(isStepValid){
        currentStep++;
        showStep(currentStep);
        }

    });
});



// address form valitions

countryInput.addEventListener("input",()=>{
    if(countryInput.value.trim() !== ""){
       countryError.textContent = ""
        countryInput.classList.remove("input-error")
    }
})
cityInput.addEventListener("input",()=>{
    if(cityInput.value.trim() !== ""){
       cityError.textContent = ""
        cityInput.classList.remove("input-error")
    }
})
addressInput.addEventListener("input",()=>{
    if(addressInput.value.trim() !== ""){
       addressError.textContent = ""
        addressInput.classList.remove("input-error")
    }
})

    const addressDetails = () =>{
        let userCountry = countryInput.value;
        let userCity = cityInput.value;
        let userAdress = addressInput.value;

        let isValid = true;

        if(userCountry.trim()=== ""){
            countryError.textContent = "Country is required"
            countryInput.classList.add("input-error")
            isValid = false;
        }else {
            countryError.textContent = "";
            countryInput.classList.remove("input-error");
        }
        if(userCity.trim() === ""){
            cityError.textContent = "City is required"
            cityInput.classList.add("input-error")
            isValid = false;
        }else {
            cityError.textContent = "";
            cityInput.classList.remove("input-error");
        }
        if(userAdress.trim() === ""){
            addressError.textContent = "Address is required"
            addressInput.classList.add("input-error")
            isValid = false;
        }else {
            addressError.textContent = "";
            addressInput.classList.remove("input-error");
        }
      

        if(isValid){
            userInformation.address = {
                country: userCountry,
                city: userCity,
                address: userAdress
            }
             
        }
          return isValid;
}


// previous button logic
previous.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(currentStep > 0){
            currentStep--
            showStep(currentStep)
        }
    })
})

// address form validations

usernameInput.addEventListener("input",()=>{
    if(usernameInput.value.trim() !== ""){
        usernameError.textContent = ""
        usernameInput.classList.remove("input-error")
    }
})
passwordInput.addEventListener("input",()=>{
    if(passwordInput.value.trim() !== ""){
        passwordError.textContent = ""
        passwordInput.classList.remove("input-error")
    }
})
confirmPasswordInput.addEventListener("input",()=>{
    if(confirmPasswordInput.value.trim() !== ""){
        confirmPasswordError.textContent = ""
        confirmPasswordInput.classList.remove("input-error")
    }
})

const accountDetails = () =>{
    let userName = usernameInput.value;
    let userPassword = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value


    let isValid = true;

    if(userName.trim() === ""){
        usernameError.textContent = "User Name is required"
        usernameInput.classList.add("input-error")
        isValid = false;
    }else{
        usernameError.textContent = ""
        usernameInput.classList.remove("input-error")
    }
    if(userPassword.trim() === "" ){
        passwordError.textContent = "Password is required"
        passwordInput.classList.add("input-error")
        isValid = false;
    }else if(userPassword.length < 8){
        passwordError.textContent = "Password must be at least 8 characters"
        passwordInput.classList.add("input-error")
        isValid = false;
    }else{
        passwordError.textContent = ""
        passwordInput.classList.remove("input-error")  
    }
    if(confirmPassword.trim() === ""){
        confirmPasswordError.textContent = "Confirm Password is required"
        confirmPasswordInput.classList.add("input-error") 
        isValid = false;
    }else if(userPassword !== confirmPassword){
         confirmPasswordError.textContent = "Passwords do not match"
         confirmPasswordInput.classList.add("input-error") 
         isValid = false;
    }
    else{
        confirmPasswordError.textContent = ""
        confirmPasswordInput.classList.remove("input-error")
    }

    if(isValid){
        userInformation.account = {
            userName: userName,
            password: userPassword,
        }
      
       
    }
    return isValid;
}

// summery-detailse 

const showSummery = () =>{
    // personal
    summaryName.textContent = userInformation.personal.name;
    summaryEmail.textContent = userInformation.personal.email;
    summaryPhone.textContent = userInformation.personal.phone;

    // address
    summaryCountry.textContent = userInformation.address.country;
    summaryCity.textContent = userInformation.address.city;
    summaryAddress.textContent = userInformation.address.address;
    // accounts
    summaryUsername.textContent = userInformation.account.userName;
    summaryPassword.textContent = "Password set";
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()

    successMessage.textContent = "Your form has been submitted successfully!"
    successOverlay.classList.add("show")
})

closePopup.addEventListener("click",()=>{
successOverlay.classList.remove("show")
})