window.onload = function() {
    const folders = document.querySelectorAll('.folder');
    
    // Randomly place the folders within the visible area
    folders.forEach(folder => {
        const randomTop = Math.random() * (window.innerHeight - 100); // Adjust to allow space for images
        const randomLeft = Math.random() * (window.innerWidth - 150); // Adjust to keep inside window
        folder.style.top = `${randomTop}px`;
        folder.style.left = `${randomLeft}px`;
    });

    // Set up the clock
    const clock = document.getElementById('clock');
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        clock.textContent = `${hours} ${minutes} ${seconds}`;
    }
    
    // Update the clock every second
    setInterval(updateClock, 1000);
    // Call the function once to display immediately
    updateClock();
};
