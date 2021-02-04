
let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
let regName = /^[A-Za-z]+$/;
export const isEmailValid = (email) => regEmail.test(email)
export const isPhoneNumberValid = (phoneNumber='') => (!isEmpty(phoneNumber) && isMinLength(phoneNumber,12) && phoneNumber.startsWith('+1'))
export const isPasswordValid = (password) => (regPassword.test(password))
export const isNameValid = (name) => (regName.test(name))
export const isEmpty = (param="") => (param.trim().length===0)
export const isMinLength = (param="",minLength) => (param.trim().length >= minLength)

export const validateSignup = (formValues) => { 
    for (const key in formValues) {
        if (typeof(formValues[key]) === 'string' && isEmpty(formValues[key])) {
            alert(errorMsgs[key]); return false;
        } else if((key === 'first_name' || key === 'last_name') && (!isNameValid(formValues[key]))){
            alert('Please enter a valid name (alphabets only)'); return false;
        }
        else if(key === 'phone' && !isPhoneNumberValid(formValues[key])){
            alert('Please enter a valid phone number'); return false;
        } 
        else if((key === 'city' || key === 'states' || key === 'country') && formValues[key] === 0){
            alert(errorMsgs[key]); return false;
        } 
        else if(key === 'email' && !isEmailValid(formValues[key])){
            alert('Please enter a valid email address'); return false;
        } 
        else if(key === 'password' && !isPasswordValid(formValues[key])){
            alert('Password must contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special character.'); return false;
        } 
        else if(formValues['password'] !== formValues['confirm_password']){
            alert(errorMsgs['confirm_password']); return false;
        }
        else if(formValues['profile_picture'].uri.length===0){
            alert(errorMsgs['profile_picture']); return false;
        }
        else return true;
    }
}

const errorMsgs = {
    first_name: 'Please enter your first name',
    last_name: 'Please enter your last name',
    phone: 'Please enter your phone number',
    city: 'Please select your city',
    states: 'Please select your state',
    country: 'Please select your country',
    email: 'Please enter a valid email',
    password: 'Password must contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special character.',
    confirm_password: "Password do not match",
    profile_picture: "Please upload your profile picture",
}; 