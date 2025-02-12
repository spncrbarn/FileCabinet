window.onload = function() {
    const folders = document.querySelectorAll('.folder');

    // Make the folder draggable
    folders.forEach(folder => {
        folder.style.position = "absolute"; // Ensure folders are positioned absolutely
        folder.onmousedown = (e) => {
            let offsetX = e.clientX - folder.getBoundingClientRect().left;
            let offsetY = e.clientY - folder.getBoundingClientRect().top;

            document.onmousemove = (e) => {
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                folder.style.left = `${x}px`;
                folder.style.top = `${y}px`;
            };

            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    });
};
