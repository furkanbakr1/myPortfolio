// Tema değiştirici fonksiyonları
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Sayfa yüklendiğinde karanlık tema ile başla
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    // Eğer daha önce tema seçilmemişse veya dark ise
    if (!savedTheme || savedTheme === 'dark') {
        enableDarkTheme();
    }
});

// Tema değiştirici ikona tıklama olayı
themeIcon.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        enableLightTheme();
    } else {
        enableDarkTheme();
    }
});

// Karanlık tema fonksiyonu
function enableDarkTheme() {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
}

// Aydınlık tema fonksiyonu
function enableLightTheme() {
    body.classList.remove('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
}

document.addEventListener('DOMContentLoaded', function() {
    // Beğeni butonları için event listener
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const likeCount = this.querySelector('.like-count');
            const currentLikes = parseInt(likeCount.textContent);
            
            if (this.classList.contains('active')) {
                likeCount.textContent = currentLikes - 1;
                this.classList.remove('active');
            } else {
                likeCount.textContent = currentLikes + 1;
                this.classList.add('active');
            }
        });
    });

    // Yorum toggle butonu için event listener
    const commentToggles = document.querySelectorAll('.comment-toggle');
    
    commentToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const commentsSection = this.closest('.card-body').querySelector('.comments-section');
            commentsSection.classList.toggle('d-none');
        });
    });

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Form gönderimini simüle et
            console.log('Form verileri:', formData);
            
            // Başarılı gönderim mesajı
            alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
            
            // Formu temizle
            contactForm.reset();
        });
    }
});
