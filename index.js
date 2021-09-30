function fillBilling(f) {
    if(f.copyForm.checked == true) {
    f.cFname.value = f.bFname.value;
    f.cLname.value = f.bLname.value;
    f.cAddress.value = f.bAddress.value;
    f.cCity.value = f.bCity.value;
    f.cZip.value = f.bZip.value;
    f.cPhone.value = f.bPhone.value;
    f.cProvince.value = f.bProvince.value;
}}

function fillForm(f) {
    if(f.copyForm.checked == true) {
    f.fname1.value = f.lname.value;
    f.lname1.value = f.lname.value;
    f.address1.value = f.address.value;
    f.sex1.value = f.sex.value;
    f.phone1.value = f.phone.value;
    f.year1.value = f.year.value;
}}

document.getElementById("cProvince").selectedIndex = "-1";
document.getElementById("bProvince").selectedIndex = "-1";


document.getElementById("bFname").setCustomValidity("Please enter your first name");
document.getElementById("bFname").addEventListener("input", checkValidate)
document.getElementById("bLname").setCustomValidity("Please enter your last name");
document.getElementById("bLname").addEventListener("input", checkValidate)
document.getElementById("bAddress").setCustomValidity("Please enter your address");
document.getElementById("bAddress").addEventListener("input", checkValidate)
document.getElementById("bCity").setCustomValidity("Please enter your city");
document.getElementById("bCity").addEventListener("input", checkValidate)
document.getElementById("bZip").setCustomValidity("Please enter your zip code");
document.getElementById("bZip").addEventListener("input", checkValidate)
document.getElementById("cPhone").setCustomValidity("Please enter your phone number");
document.getElementById("cPhone").addEventListener("input", checkValidate)



document.getElementById("bFname").addEventListener("input", checkValidate)
function checkValidate(e){
    e.target.setCustomValidity('');
}




