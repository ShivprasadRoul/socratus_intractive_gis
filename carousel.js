let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

// Show the first image on load
showImage(currentIndex);
