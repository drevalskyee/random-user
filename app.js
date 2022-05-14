//get items
const URL = 'https://randomuser.me/api/'
const getUserButton = document.querySelector('#get__user');
const overlayGetUserButton = document.querySelector('#overlay__button');
const userName = document.querySelector('.user__name')
const userPhoto = document.querySelector('.user__avatar')
const userLocation = document.querySelector('.user__location')
let userCountry = document.querySelector('.user__country')
let userCity = document.querySelector('.user__city')
let userState = document.querySelector('.user__state')
const userPhone = document.querySelector('.user__phone')
const userUsername = document.querySelector('.user__username')
//more
const userAge= document.querySelector('.user__age')
const userEmail = document.querySelector('.user__email')
const userStreet= document.querySelector('.user__street')
const userPassword= document.querySelector('.user__password')
const userGender= document.querySelector('.user__gender')
const moreInfoButton = document.querySelector('#moreinfo__user ')
const userFooter = document.querySelector('.user__footer')
const userData = document.querySelector('.user__data')
const userMoreInfo = document.querySelector('.user__moreinfo')
//ovarlay items
const overlay = document.querySelector('.overlay')
const userBlock = document.querySelector('.user')
//listeners
getUserButton.addEventListener('click', fetchUsers)
overlayGetUserButton.addEventListener('click', fetchUsersOverlay)
moreInfoButton.addEventListener('click', addMoreInfo)


 
function fetchUsers() {
    fetch(URL, {
        method: 'get'
    }).then(responce => responce.json())
        .then(data => {
            console.log(data);
            displayUser(data)
        })
        moreInfoButton.textContent = "Info";
        userData.classList.remove('disable')
        userMoreInfo.classList.remove('active');
}

function fetchUsersOverlay() {
    fetch(URL, {
        method: 'get'
    }).then(responce => responce.json())
        .then(data => {
            console.log(data);
            displayUser(data)
        })
        overlay.classList.add('hidden-overlay')
        userBlock.classList.add('active')
    overlayGetUserButton.removeEventListener('click', fetchUsersOverlay)
}

function addMoreInfo() {
    userData.classList.toggle('disable')
    userMoreInfo.classList.toggle('active');
    changeBtnValue()
}

function changeBtnValue(){
    if(userData.classList.contains('disable')) {
        moreInfoButton.textContent = "More"
    } else {
        moreInfoButton.textContent = "Back"
    }
}


function displayUser(data) {
    // get data
    const {title} = data.results[0].name
    const {first} = data.results[0].name
    const {last} = data.results[0].name
    const {large} = data.results[0].picture
    const {city}  = data.results[0].location
    const {country}  = data.results[0].location
    const {state}  = data.results[0].location
    console.log(userCountry, userCity, userState);
    //add data on page
    //photo
    userPhoto.src = large;
    userName.innerHTML =  title + ' ' + first + ' ' + last;
    // lcocation
    userCountry ='Country: ' +  country + '. ';
    userCity ='City: ' +  city + '. ';
    // userState ='State: ' + state + '. ';
    userLocation.innerHTML = userCountry + userCity 
 
    // phone
    const {phone} = data.results[0]
    userPhone.innerHTML ='Phone: ' +  phone
    //user name
    const {username} = data.results[0].login
    userUsername.innerHTML = 'Username: ' + username;
    // more block info
       //email
    const {email} = data.results[0]
    userEmail.innerHTML ='E-mail: ' + email;
    //age
    const {age} = data.results[0].dob
    userAge.innerHTML = 'Age: ' + age;
    // street
    const {name, number} = data.results[0].location.street
    userStreet.innerHTML = 'Street: ' + name + " " + number;

}
