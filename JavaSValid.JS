document.getElementById('registerForm').addEventListener('submit', function(e) {e.preventDefault();

const firstName = document.getElementById('firstName').value.trim();
const lastName = document.getElementById('lastName').value.trim();
const username = document.getElementById('username').value.trim();
const phone = document.getElementById('phone').value.trim();
const homeAddress = document.getElementById('homeAddress').value.trim();
const password = document.getElementById('password').value;
const confirm = document.getElementById('confirmPassword').value;
const termsChecked = document.getElementById('terms').checked;

if(firstName.length < 2) {
alert('First name must be at least 2 characters.');
return;
}
if(lastName.length < 2) {
alert('Last name must be at least 2 characters.');
return;
}
if(username.length < 2) {
alert('Username must be at least 2 characters.');
return;
}
const phoneDigits = phone.replace(/\D/g, '');
if(phoneDigits.length !== 11) {
alert('Phone number must be exactly 11 digits.');
return;
}
if(homeAddress.length < 5) {
alert('Home address must be at least 5 characters.');
return;
}
if(password.length < 8) {
alert('Password must be at least 8 characters long.');
return;
}
const specialCharPattern = /[!@#$%^&*(),.?":{}|<>-_]/;
if(!specialCharPattern.test(password)) {
alert('Password must contain at least one special character.');
return;
}
if(password !== confirm) {
alert('Passwords do not match.');
return;
}
if(!termsChecked) {
alert('Please agree to the terms & conditions.');
return;
}
alert('Registration successful, Enjoy Shopping.');
});