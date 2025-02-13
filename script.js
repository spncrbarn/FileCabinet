window.onload = function() {
    const folders = document.querySelectorAll('.folder');
    const speed = 0.5; // Speed of folder movement
    
    // Initialize folder positions and velocities
    const folderPositions = Array.from(folders).map(() => ({
        top: Math.random() * (window.innerHeight - 100),
        left: Math.random() * (window.innerWidth - 150),
        velocityX: Math.random() * speed + 1, // Horizontal speed
        velocityY: Math.random() * speed + 1, // Vertical speed
    }));

    function moveFolders() {
        folders.forEach((folder, index) => {
            // Get the current position and velocity of the folder
            const position = folderPositions[index];

            // Update the folder position
            position.top += position.velocityY;
            position.left += position.velocityX;

            // Check for collision with the window edges and reverse velocity if necessary
            if (position.top <= 0 || position.top >= window.innerHeight - 100) {
                position.velocityY = -position.velocityY;  // Reverse vertical direction
            }
            if (position.left <= 0 || position.left >= window.innerWidth - 150) {
                position.velocityX = -position.velocityX;  // Reverse horizontal direction
            }

            // Apply the new position to the folder
            folder.style.top = `${position.top}px`;
            folder.style.left = `${position.left}px`;
        });
    }

    // Call the moveFolders function every 10ms for smooth movement
    setInterval(moveFolders, 10);

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

// Function to refresh the page when the window is resized
window.onresize = function() {
    location.reload();
};




