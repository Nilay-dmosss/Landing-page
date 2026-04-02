let allProducts = []; // Tüm ürünler
// Slayt
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const totalSlides = slides.length;


// Dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');
// dot güncelle
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Slayta git
function goToSlide(index) {
    currentSlide = index;
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

// Sonraki slayt
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
}

// otomatik ilerlet
let autoplayInterval = setInterval(nextSlide, 3000);

// Sayfa yüklendiğinde
window.onload = function() {
    loadProducts();
    updateDots(); // dot aktiflik
};

// Slider hover fare-durdurma
document.querySelector('.slider').addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

document.querySelector('.slider').addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 3000);
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// API'den ürünleri çek ve sakla
async function loadProducts() {
    try {
        const response = await fetch('');
        allProducts = await response.json();
        displayProducts(allProducts); // İlk yüklemede tüm ürünleri göster
    } catch (error) {
        console.error('Ürünler yüklenirken hata:', error);
    }
}

// Ürün ekle
// function displayProducts(products) {
//     const container = document.getElementById('products-container');
//     container.innerHTML = ''; // Önceki içeriği temizle
    
//     if (products.length === 0) {
//         container.innerHTML = '<p class="no-results">Sonuç bulunamadı.</p>';
//         return;
//     }
    
//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.className = 'product';
//         productDiv.innerHTML = `
//             <img src="${product.image}" alt="${product.name}">
//             <h3>${product.name}</h3>
//             <p>Özel Fiyat: ${product.price} (İndirimli: ${product.discount})</p>
//         `;
//         container.appendChild(productDiv);
//     });
    
//     // Hover efekti
//     const productElements = container.querySelectorAll('.product');
//     productElements.forEach(product => {
//         product.addEventListener('mouseenter', () => {
//             product.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
//         });
//         product.addEventListener('mouseleave', () => {
//             product.style.boxShadow = 'none';
//         });
//     });
// }

// Arama işlevi
function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}

// Sayfa yüklendiğinde ürünleri yükle
window.onload = loadProducts;
// animasyon
const bgAnimation=document.getElementById
('bgAnimation');
const numberOfColorBoxes = 400;
for(let i=0 ; i < numberOfColorBoxes;i++ ) {
    const colorBox= document.createElement
    ('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}