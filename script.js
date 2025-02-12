window.onload = function() {
    const folders = document.querySelectorAll('.folder');
    folders.forEach(folder => {
        const randomTop = Math.random() * (window.innerHeight - 100); // Adjust to keep inside window
        const randomLeft = Math.random() * (window.innerWidth - 150); // Adjust to keep inside window
        folder.style.top = `${randomTop}px`;
        folder.style.left = `${randomLeft}px`;
    });
};
