window.onload = function() {
    const folders = document.querySelectorAll('.folder');
    const speed = 0.5;

    const folderPositions = Array.from(folders).map((folder) => {
        const position = {
            top: Math.random() * (window.innerHeight - 100),
            left: Math.random() * (window.innerWidth - 150),
            velocityX: (Math.random() - 0.5) * speed * 2,
            velocityY: (Math.random() - 0.5) * speed * 2,
        };

        // Apply the initial randomized position immediately
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

    setInterval(moveFolders, 10);

    // Set up clock
    const clock = document.getElementById('clock');
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        clock.textContent = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
};

// Prevent infinite reloading on resize (adds a delay)
let resizeTimeout;
window.onresize = function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        location.reload();
    }, 500); // 500ms delay to avoid excessive reloading
};





