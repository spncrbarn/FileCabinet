window.onload = function () {
    const folders = document.querySelectorAll(".folder");
    const speed = 1; // Increased speed for smoother motion

    const folderPositions = Array.from(folders).map((folder) => {
        const position = {
            top: Math.random() * (window.innerHeight - 100),
            left: Math.random() * (window.innerWidth - 150),
            velocityX: (Math.random() - 0.5) * speed * 2,
            velocityY: (Math.random() - 0.5) * speed * 2,
        };

        // Apply the initial randomized position immediately
        folder.style.position = "absolute";
        folder.style.top = `${position.top}px`;
        folder.style.left = `${position.left}px`;

        return position;
    });

    function moveFolders() {
        folders.forEach((folder, index) => {
            const position = folderPositions[index];

            position.top += position.velocityY;
            position.left += position.velocityX;

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

    setInterval(moveFolders, 20); // Smooth movement with a slightly longer interval

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
};

// **Fix: Reposition folders on resize instead of full reload**
let resizeTimeout;
window.onresize = function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        document.querySelectorAll(".folder").forEach(folder => {
            folder.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            folder.style.left = `${Math.random() * (window.innerWidth - 150)}px`;
        });
    }, 300); // 300ms debounce for better performance
};





