const form = document.getElementById('formId')
console.log(cpassword)
// if it were to be just one password feild u van use this approach abd call the function on the input feild(icon or anything) on html"using onclick"
// function show() {
//     var password = document.getElementById('password')
//     var cpassword = document.getElementById('cpassword')
//     var icon = document.querySelector('span')

//     if (password.type === "password") {
//         password.type = 'text';
//         icon.style.backgroundImage = "url(./image/visibility_off_FILL0_wght400_GRAD0_opsz24.png)";
//         icon.style.backgroundColor = "red";
//     }  else{
//         password.type = 'password';
//         icon.style.backgroundImage = "url(./image/visibility_FILL0_wght400_GRAD0_opsz24.png)";

//     }
//     if (cpassword.type === "password") {
//         cpassword.type = 'text';
//         icon.style.backgroundImage = "url(./image/visibility_off_FILL0_wght400_GRAD0_opsz24.png)";
//         icon.style.backgroundColor = "red";
//     } 
//      else{
//         cpassword.type = 'password';
//         icon.style.backgroundImage = "url(./image/visibility_FILL0_wght400_GRAD0_opsz24.png)";

//     }
// }
// using this becoz the are 2 icons and the have to work seperatly
    var icons = document.querySelectorAll('span')
console.log(icon)
icons.forEach((icon) => {
    icon.addEventListener('click',() =>{
        const pinput = icon.parentElement.querySelector('input')
        if (pinput.type === "password") {
            pinput.type = 'text';
                    icon.style.backgroundImage = "url(./image/visibility_off_FILL0_wght400_GRAD0_opsz24.png)";
                    // icon.style.backgroundColor = "red";
        }else{
            pinput.type = 'password';
            icon.style.backgroundImage = "url(./image/visibility_FILL0_wght400_GRAD0_opsz24.png)";

        }
        
    });
});
function validate(){
    var password = document.getElementById('password')
        var cpassword = document.getElementById('cpassword')
        const error = document.getElementById('error-message')
        if (password.value == "" || cpassword.value == "")  {
            error.innerHTML = "enter password"
            return false
        }
        if (password.value.length < 8 || cpassword.value.length  < 8)  {
            error.innerHTML = "password must be atleast 8 characters long"
            return false
        }
        if (password.value.length > 8 || cpassword.value.length  > 8)  {
            error.innerHTML = "password must be longer than 8 characters"
            return false
        }
        if(password.value !== cpassword.value){
            error.innerHTML = "password does not match"
            return false
        }


}
