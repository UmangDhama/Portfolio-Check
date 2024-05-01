
// Firebase config  
const firebaseConfig = {
  apiKey: "AIzaSyCw44o6fMZLsFjHYXvSLqMKSw2X1a07ZOA",
  authDomain: "portfolio-d5a82.firebaseapp.com",
  projectId: "portfolio-d5a82",
  storageBucket: "portfolio-d5a82.appspot.com",
  messagingSenderId: "622438188732",
  appId: "1:622438188732:web:9c7b507b4306e5872fb2b9",
  measurementId: "G-YR5H3R316F",
  databaseURL: "https://portfolio-d5a82-default-rtdb.firebaseio.com/"
};


// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references
const db = firebase.database();
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', e => {
  
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Construct data object
  const data = {
    name: name,
    email: email,
    message: message
  };

  // Save to Firebase
  db.ref('messages').push(data)
    .then(() => {
      // Show success message  
      successMsg.classList.add('show');

      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 3000);

      // Clear form
      form.reset();
    });

    // Show message 
successMsg.classList.add('show');

// Start fade out after 2 seconds
setTimeout(() => {
  successMsg.classList.add('fade-out');
}, 2000); 


});

















    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-content");

    function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  
}
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
    }

   




    var sidemenu=document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="0";
    }

    function closemenu(){
        sidemenu.style.right="-200px"
    }


