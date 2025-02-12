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
