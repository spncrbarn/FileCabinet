window.onload = function() {
    const folders = document.querySelectorAll('.folder');
    const folderLinks = [
        'https://www.example1.com',
        'https://www.example2.com',
        'https://www.example3.com',
        'https://www.example4.com',
    ];

    // Assign random positions to each folder on page load
    folders.forEach((folder, index) => {
        const randomTop = Math.random() * (window.innerHeight - 100);
        const randomLeft = Math.random() * (window.innerWidth - 150);
        folder.style.top = `${randomTop}px`;
        folder.style.left = `${randomLeft}px`;

        // Add click functionality to each folder
        folder.onclick = () => {
            window.location.href = folderLinks[index];
        };

        // Make the folder draggable
        folder.onmousedown = (e) => {
            let offsetX = e.clientX - folder.getBoundingClientRect().left;
            let offsetY = e.clientY - folder.getBoundingClientRect().top;

            // When the user moves the mouse, update the folder position
            document.onmousemove = (e) => {
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                folder.style.left = `${x}px`;
                folder.style.top = `${y}px`;
            };

            // Stop moving the folder when the user releases the mouse button
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    });
};
