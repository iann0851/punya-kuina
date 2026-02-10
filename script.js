onload = () => {
    document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const envelope = document.querySelector(".envelope");
const lidOne = document.querySelector(".lid.one");
const lidTwo = document.querySelector(".lid.two");
const letter = document.querySelector(".letter");
const spotifyEmbed = document.querySelector(".spotify-embed");

openBtn.addEventListener("click", () => {
    // Animate envelope opening
    lidOne.style.transform = "rotateX(90deg)";
    lidOne.style.transitionDelay = "0s";
    
    lidTwo.style.transform = "rotateX(180deg)";
    lidTwo.style.transitionDelay = "0.25s";
    
    // Move letter up
    letter.style.transform = "translateY(-50px)";
    letter.style.transitionDelay = "0.5s";
    
    // Hide envelope after letter appears
    setTimeout(() => {
        envelope.style.opacity = "0";
        envelope.style.transition = "opacity 0.5s ease-in-out";
    }, 800);
    
    // Show Spotify embed after letter appears
    setTimeout(() => {
        spotifyEmbed.classList.add("show");
    }, 1000);
    
    // Show close button, hide open button
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
    
    // Add opened class
    wrapper.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    // Hide Spotify embed first
    spotifyEmbed.classList.remove("show");
    
    // Show envelope again
    envelope.style.opacity = "1";
    envelope.style.transition = "opacity 0.3s ease-in-out";
    
    // Reset animations with delays
    setTimeout(() => {
        lidOne.style.transform = "rotateX(0deg)";
        lidOne.style.transitionDelay = "0.25s";
        
        lidTwo.style.transform = "rotateX(90deg)";
        lidTwo.style.transitionDelay = "0s";
        
        // Move letter back
        letter.style.transform = "translateY(0)";
        letter.style.transitionDelay = "0s";
    }, 300);
    
    // Show open button, hide close button
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
    
    // Remove opened class
    wrapper.classList.remove("open");
});
