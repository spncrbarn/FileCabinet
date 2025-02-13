window.onload = function() {
    const folders = document.querySelectorAll('.folder');

    // Delay randomization slightly for smoother load
    setTimeout(() => {
        // Randomly place the folders within the visible area
        folders.forEach(folder => {
            const randomTop = Math.random() * (window.innerHeight - 100); // Adjust to allow space for images
            const randomLeft = Math.random() * (window.innerWidth - 150); // Adjust to keep inside window
            folder.style.top = `${randomTop}px`;
            folder.style.left = `${randomLeft}px`;
        });
    }, 100); // 100ms delay for smoother animation

    // Set up the clock
    const clock = document.getElementById('clock');
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();  // Get hours in 24-hour format
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        // Determine AM/PM
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12;  // The hour '0' should be '12'

        // Format time with leading zeros for minutes and seconds
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        clock.textContent = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;  // Regular time with AM/PM
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
    // Call the function once to display immediately
    updateClock();
};

// Function to refresh the page
function refreshPage() {
    location.reload();  // Reload the page
}


