window.addEventListener("DOMContentLoaded", event => {
    console.log("DOM CONTENT LOADED"); 

    // fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSDGpYPwVQQMTZWdNQr-4Nzj4M8LVqsqXadIiEY35CgyM9NhSk4Yl7LMJxGMrItZOd25KVpB1GqbAZ5/pub?output=json')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error));
    
    document.querySelectorAll(".nav-toggle").forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            // Toggle the visibility by adding/removing the 'hidden' class
            toggle.classList.toggle('hidden');
    
            // Prevent the click from bubbling up to the document
            event.stopPropagation();
        });
    });
    
    // Click anywhere outside to close all toggles
    document.addEventListener("click", () => {
        document.querySelectorAll(".nav-toggle").forEach(toggle => {
            toggle.classList.add("hidden");
        });
    });

        



  

})