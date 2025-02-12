window.onload = function() {
    const folders = document.querySelectorAll('.folder');

    folders.forEach(folder => {
        let isDragging = false;
        let offsetX, offsetY;

        folder.onmousedown = function(e) {
            isDragging = true;
            offsetX = e.clientX - folder.getBoundingClientRect().left;
            offsetY = e.clientY - folder.getBoundingClientRect().top;

            // Prevent text selection
            document.body.style.userSelect = "none";

            document.onmousemove = function(e) {
                if (isDragging) {
                    const x = e.clientX - offsetX;
                    const y = e.clientY - offsetY;

                    folder.style.left = `${x}px`;
                    folder.style.top = `${y}px`;
                }
            };

            document.onmouseup = function() {
                isDragging = false;
                document.onmousemove = null;
                document.onmouseup = null;

                // Allow text selection again
                document.body.style.userSelect = "auto";
            };
        };
    });
};
window.onload = function() {
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
