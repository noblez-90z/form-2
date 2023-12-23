var email = document.getElementById('email')
var password = document.getElementById('password')
var error = document.getElementById('error-message')
// var form = document.getElementById('formId')
function login(){
    if (password.value == "" && email.value == "") {
        error.innerHTML = "enter details"
        return false;
    }
    
    if (password.value == "") {
            error.innerHTML = "enter password"
            return false;
        }
        if (password.value.length < 8) {
            error.innerHTML = " password must be above 8 charaters "
            return false;
        }
    
            const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.value.match(pattern)) {
                error.innerHTML = "invalid email"
                return false;
            }


}
const icon = document.getElementById('icon')
icon.addEventListener('click',function(){
    if (password.type === "password") {
        password.type = 'text'
        icon.style.backgroundImage = "url(./image/visibility_off_FILL0_wght400_GRAD0_opsz24.png)";
    } else{
        password.type = 'password'
        icon.style.backgroundImage ="url(./image/visibility_FILL0_wght400_GRAD0_opsz24.png)";
    }
    
})
// form.addEventListener('submit',function(e){
//     e.preventDefault();

//     if (password.value == "" && email.value == "") {
//         error.innerHTML = "enter details"
//         return false;
//     }
    
//     if (password.value == "") {
//             error.innerHTML = "enter password"
//             return false;
//         }
//         if (password.value.length < 8) {
//             error.innerHTML = " password must be above 8 charaters "
//             return false;
//         }
    
//             const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//             if (!email.value.match(pattern)) {
//                 error.innerHTML = "invalid email"
//                 return false;
//             }

    // emailcheck();
    // passwordcheck();
    
    // return true;

// })
// function validate(){
//     if (email.value == "" && password.value == "") {
//         error.innerHTML = "fill details to login"
//         return false;
//     }
// }
// function emailcheck() {
//     const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!email.value.match(pattern)) {
//         error.innerHTML = "invalid email"
//         return false;
//     }
//     return true;
// }
// function passwordcheck(){
//     if (password.value == "") {
//         error.innerHTML = "enter password"
//         return false;
//     }
//     if (password.value.length < 8) {
//         error.innerHTML = " password must be above 8 charaters "
//         return false;
//     }
//     return true;
// }