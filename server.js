let allProducts = []; // Tüm ürünler al

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// ürün çek tut // display İlk yüklemede tüm ürünleri göster
async function loadProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/products');
        allProducts = await response.json();
        displayProducts(allProducts); 
    } catch (error) {
        console.error('Ürünler yüklenirken hata:', error);
    }
}

// Ürünleri DOM'a ekle
function displayProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Önceki içeriği temizle
    
    if (products.length === 0) {
        container.innerHTML = '<p class="no-results">Sonuç bulunamadı.</p>';
        return;
    }
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Özel Fiyat: ${product.price} (İndirimli: ${product.discount})</p>
        `;
        container.appendChild(productDiv);
    });
    
    // Hover efekti ekle
    const productElements = container.querySelectorAll('.product');
    productElements.forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        product.addEventListener('mouseleave', () => {
            product.style.boxShadow = 'none';
        });
    });
}

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
 document.addEventListener("DOMContentLoaded",() => {
    const carousel = document.querySelectorAll('.carousel');
    const slides = document.querySelectorAll('.slide');
   const dotsContainer = document.querySelector('.dots');
    const indicatorsContainer = document.querySelector('.indicators');

   let currentIndex = 0;
    let slideInterval;
    const slideCount = slides.length;
    let isDragging=false;
    let startPos=0;
     letcurrentTranslate=0;
    let animationId=0;
    //indicators
    slides.forEach((_,index)=> {
        const indicator= document.createElement("div");
       indicator.classList.add("indicator");
        if(index === 0) indicator.classList.add("active");
        indicator.addEventListener("click",() => gotoSlide(index));
        indicatorsContainer.appendChild(indicator);

     });
    const indicators=document.querySelectorAll(".indicator");
     //oto-start
     startSlidesShow();
 })
// // //mobile touch
 slides.forEach((slide, index) => {
// // //mouse web
 slide.addEventListener("mousedown", dragStart(index));
 slide.addEventListener("mouseup", dragEnd );
 slide.addEventListener("mouseleave", dragEnd );
 slide.addEventListener("mousemove", drag);
// // // //mobile touch evnt
 slide.addEventListener("touchstart", dragStart(index));
 slide.addEventListener("touchend", dragEnd );
 slide.addEventListener("touchmove", drag);
 });
// // //prevt slayt res
 document.querySelectorAll(".slide img").forEach((img) => {
    img.addEventListener("dragstart", (e) => e.preventDefault());
 });
 function startSlidesShow(){
     slideInterval = setInterval(() => {
       gotoSlide(currentIndex + 1 );
    },5000);
}
 function resetSlideTimer(){
     clearInterval(slideInterval);
    slideInterval = setInterval(() => {
       gotoSlide(currentIndex + 1);
    }, 5000);
 }
 function gotoSlide(index) {
     //el ile wrapping
    if(index < 0) {
       index = slideCount - 1 ;
    }else if (index <= slideCount) {
        index=0;
    }
// // //     //carousel pozisyon
    caraousel.style.transform = 'translateX(-${index * 100}%)';
// // // //update active class
 slides.forEach((slide) => slide.classList.remove("active"));
slides[index].classList.add("active");
// // // //updt indicators
 indicators.forEach((ind) => ind.classList.remove("active"));
 indicators[index].classList.add("active");
 currentIndex =index;
 }