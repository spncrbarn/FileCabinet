window.onload = function () {
    const folders = document.querySelectorAll(".folder");
    const speed = 1;

    // Initialize folder positions and velocities
    const folderPositions = Array.from(folders).map((folder) => {
        const position = {
            top: Math.random() * (window.innerHeight - 100),
            left: Math.random() * (window.innerWidth - 150),
            velocityX: (Math.random() - 0.5) * speed * 2,
            velocityY: (Math.random() - 0.5) * speed * 2,
        };

        folder.style.position = "absolute";
        folder.style.top = `${position.top}px`;
        folder.style.left = `${position.left}px`;

        return position;
    });

    // Function to move folders while respecting bounds
    function moveFolders() {
        folders.forEach((folder, index) => {
            const position = folderPositions[index];

            // Update position based on velocity
            position.top += position.velocityY;
            position.left += position.velocityX;

            // Constrain movement within bounds
            if (position.top <= 0 || position.top >= window.innerHeight - 100) {
                position.velocityY *= -1;
            }
            if (position.left <= 0 || position.left >= window.innerWidth - 150) {
                position.velocityX *= -1;
            }

            folder.style.top = `${position.top}px`;
            folder.style.left = `${position.left}px`;
        });
    }

    // Run the folder movement in intervals
    setInterval(moveFolders, 20);

    // Handle resizing to adjust folder positions, but don't reset velocities
    let resizeTimeout;
    window.onresize = function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalculate folder positions only within the new bounds
            folderPositions.forEach((position, index) => {
                position.top = Math.min(position.top, window.innerHeight - 100);
                position.left = Math.min(position.left, window.innerWidth - 150);
                // Optionally reset position to stay within bounds after resize
                folders[index].style.top = `${position.top}px`;
                folders[index].style.left = `${position.left}px`;
            });
        }, 300); // Adding debounce for better performance
    };

        // Clock setup
    const clock = document.getElementById("clock");
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        clock.textContent = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Make clock clickable and redirect on click
    clock.addEventListener("click", function () {
        window.location.href = "https://github.com/spncrbarn/FileCabinet";
    });
};







