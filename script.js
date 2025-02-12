window.onload = function() {
    const folders = document.querySelectorAll('.folder-container');  // Select the folder containers
    folders.forEach(folder => {
        const randomTop = Math.random() * (window.innerHeight - 100); // 100 is the height of the image
        const randomLeft = Math.random() * (window.innerWidth - 150); // 150 is the width of the image
        folder.style.top = `${randomTop}px`;
        folder.style.left = `${randomLeft}px`;
    });
};
