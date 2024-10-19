const stackedImages = document.getElementById('stackedImages');
const images = stackedImages.getElementsByTagName('img');
let currentIndex = 0;

function startSlideshow() {
    setInterval(() => {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('active');
        }
        images[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % images.length;
    }, 3000);
}

window.onload = function () {
    startSlideshow();
    createBalloons(20);  // Thêm 20 bong bóng vào trang ngay khi tải
    setInterval(() => createBalloons(5), 5000); // Tạo 5 bong bóng mới mỗi 5 giây
};

// Tạo nhiều bong bóng bay lên
function createBalloons(count) {
    const balloonContainer = document.querySelector('.balloon-container');
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên trên trục x
        balloon.style.animationDuration = `${Math.random() * 5 + 5}s`; // Thời gian bay ngẫu nhiên từ 5 đến 10 giây
        balloonContainer.appendChild(balloon);
    }
}

// Ngăn không cho cuộn trang
document.body.style.overflow = 'hidden'; // Ẩn thanh cuộn
document.body.style.height = '100vh'; // Đặt chiều cao của body bằng chiều cao của viewport
