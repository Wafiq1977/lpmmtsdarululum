// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('preloader').classList.add('hidden');
        }, 500);
    });
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // Back to top functionality
    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initialize Swiper for hero slider
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // News data
    const newsData = [
        {
            id: 7,
            title: 'Juara 2 pi Lomba Tingkat (LT) Pramuka',
            date: '10 Juli 2023',
            excerpt: 'Juara 2 pi Lomba Tingkat (LT) Pramuka',
            image: 'assets/images/prestasi.png',
            content: 'Juara 2 pi Lomba Tingkat (LT) Pramuka'
        },
        {
            id: 8,
            title: 'Juara 3 pa Lomba Tingkat (LT) Pramuka tingkat kecamatan',
            date: '10 Juli 2023',
            excerpt: 'Juara 3 pa Lomba Tingkat (LT) Pramuka tingkat kecamatan',
            image: 'assets/images/prestasi (1).png',
            content: 'Juara 3 pa Lomba Tingkat (LT) Pramuka tingkat kecamatan'
        },
        {
            id: 9,
            title: 'Juara 2 pa & pi Lomba Tingkat (LT) Pramuka',
            date: '10 Juli 2023',
            excerpt: 'Juara 2 pa & pi Lomba Tingkat (LT) Pramuka',
            image: 'assets/images/prestasi (2).png',
            content: 'Juara 2 pa & pi Lomba Tingkat (LT) Pramuka'
        },
        {
            id: 10,
            title: 'Lomba Olimpiade Tingkat Kabupaten',
            date: '10 Juli 2023',
            excerpt: 'Lomba Olimpiade Tingkat Kabupaten',
            image: 'assets/images/prestasi (3).png',
            content: 'Lomba Olimpiade Tingkat Kabupaten'
        }
    ];
    
    // Extracurricular data
    const extracurricularData = [
        {
            id: 1,
            name: 'Pramuka',
            icon: 'fa-campground',
            description: 'Kegiatan pramuka mengajarkan keterampilan survival, kepemimpinan, dan kerjasama tim. Siswa akan belajar tentang navigasi, pertolongan pertama, dan berkemah di alam.',
            schedule: 'Sabtu, 07:00 - 10:00',
            image: 'https://picsum.photos/seed/pramuka/800/500.jpg'
        },
        {
            id: 2,
            name: 'Darul Ulum Inggris Clup (DEC)',
            icon: 'fa-language',
            description: 'Darul Ulum English Club (DEC) adalah kegiatan ekstrakurikuler yang fokus pada pengembangan kemampuan bahasa Inggris siswa melalui berbagai aktivitas seperti diskusi, debat, dan presentasi.',
            schedule: 'Jumat, 15:00 - 17:00',
            image: 'https://picsum.photos/seed/english-club/800/500.jpg'
        },
        {
            id: 3,
            name: 'Sholawat Rebana',
            icon: 'fa-drum',
            description: 'Sholawat Rebana adalah kegiatan seni musik Islam yang menggabungkan sholawat dan iringan rebana. Siswa akan belajar tentang seni musik tradisional dan meningkatkan keimanan melalui lagu-lagu religi.',
            schedule: 'Rabu, 15:00 - 17:00',
            image: 'https://picsum.photos/seed/sholawat/800/500.jpg'
        },
        {
            id: 4,
            name: 'Seni Baca Al quran',
            icon: 'fa-book-open',
            description: 'Seni Baca Al-Quran mengajarkan teknik membaca Al-Quran dengan tartil dan tajwid yang benar. Siswa akan belajar tentang seni baca Al-Quran dan meningkatkan keimanan serta ketaqwaan.',
            schedule: 'Selasa, 15:00 - 17:00',
            image: 'https://picsum.photos/seed/quran/800/500.jpg'
        },
        {
            id: 5,
            name: 'Olahraga Prestasi',
            icon: 'fa-trophy',
            description: 'MTS Darul Ulum memiliki ekstrakurikuler olahraga prestasi yang mencakup berbagai cabang olahraga seperti sepak bola, basket, voli, dan atletik. Siswa akan dilatih untuk berkompetisi di tingkat daerah dan nasional.',
            schedule: 'Senin & Kamis, 16:00 - 18:00',
            image: 'https://picsum.photos/seed/sports/800/500.jpg'
        },
        {
            id: 6,
            name: 'KIR',
            icon: 'fa-users',
            description: 'KIR (Karya Ilmiah Remaja) adalah kegiatan penelitian dan pengembangan karya ilmiah siswa. Siswa akan belajar tentang metodologi penelitian, presentasi, dan pengembangan kreativitas ilmiah.',
            schedule: 'Selasa & Jumat, 16:00 - 18:00',
            image: 'https://picsum.photos/seed/research/800/500.jpg'
        },
        {
            id: 7,
            name: 'Kaligrafi',
            icon: 'fa-pen-fancy',
            description: 'Kaligrafi adalah seni menulis indah dengan berbagai gaya tulisan Arab. Siswa akan belajar tentang seni tulis indah, estetika, dan nilai-nilai keindahan dalam seni Islam.',
            schedule: 'Rabu, 15:00 - 17:00',
            image: 'https://picsum.photos/seed/calligraphy/800/500.jpg'
        },
    ];
    
    // Gallery data
    const galleryData = [
        { id: 1, image: 'assets/images/galeri.png', title: 'Kegiatan Sekolah 1', category: 'kegiatan' },
        { id: 2, image: 'assets/images/galeri (1).png', title: 'Kegiatan Sekolah 2', category: 'kegiatan' },
        { id: 3, image: 'assets/images/galeri (2).png', title: 'Kegiatan Sekolah 3', category: 'kegiatan' },
        { id: 4, image: 'assets/images/galeri (3).png', title: 'Kegiatan Sekolah 4', category: 'kegiatan' },
        { id: 5, image: 'assets/images/galeri (4).png', title: 'Kegiatan Sekolah 5', category: 'kegiatan' },
        { id: 6, image: 'assets/images/galeri (5).png', title: 'Kegiatan Sekolah 6', category: 'kegiatan' }
    ];
    
    // Teacher data
    const teacherData = [
        {
            id: 1,
            name: 'Dr. Ahmad Wijaya, M.Pd.',
            position: 'Kepala Sekolah',
            subject: 'Manajemen Pendidikan',
            type: 'guru',
            image: 'https://picsum.photos/seed/teacher1/300/300.jpg',
            email: 'ahmad.wijaya@smanharapanbangsa.sch.id',
            education: 'S2 Pendidikan Manajemen - Universitas Indonesia',
            experience: '15 tahun pengalaman dalam bidang pendidikan'
        },
        {
            id: 2,
            name: 'Drs. Budi Santoso',
            position: 'Wakil Kepala Sekolah Bidang Kurikulum',
            subject: 'Matematika',
            type: 'guru',
            image: 'https://picsum.photos/seed/teacher2/300/300.jpg',
            email: 'budi.santoso@smanharapanbangsa.sch.id',
            education: 'S1 Pendidikan Matematika - Universitas Negeri Jakarta',
            experience: '12 tahun pengalaman mengajar matematika'
        },
        {
            id: 3,
            name: 'Siti Nurjanah, S.Pd.',
            position: 'Wakil Kepala Sekolah Bidang Kesiswaan',
            subject: 'Bahasa Indonesia',
            type: 'guru',
            image: 'https://picsum.photos/seed/teacher3/300/300.jpg',
            email: 'siti.nurjanah@smanharapanbangsa.sch.id',
            education: 'S1 Pendidikan Bahasa Indonesia - Universitas Negeri Jakarta',
            experience: '10 tahun pengalaman mengajar bahasa Indonesia'
        },
        {
            id: 4,
            name: 'Ir. Hendra Kusuma',
            position: 'Wakil Kepala Sekolah Bidang Sarana dan Prasarana',
            subject: 'Fisika',
            type: 'guru',
            image: 'https://picsum.photos/seed/teacher4/300/300.jpg',
            email: 'hedra.kusuma@smanharapanbangsa.sch.id',
            education: 'S1 Pendidikan Fisika - Institut Teknologi Bandung',
            experience: '8 tahun pengalaman mengajar fisika'
        },
        {
            id: 5,
            name: 'Dr. Maya Sari, M.Si.',
            position: 'Guru Biologi',
            subject: 'Biologi',
            type: 'guru',
            image: 'https://picsum.photos/seed/teacher5/300/300.jpg',
            email: 'maya.sari@smanharapanbangsa.sch.id',
            education: 'S2 Biologi - Universitas Indonesia',
            experience: '7 tahun pengalaman mengajar biologi'
        },
        {
            id: 6,
            name: 'Rina Anggraini, S.Pd.',
            position: 'Guru Bahasa Inggris',
            subject: 'Bahasa Inggris',
            type: 'guru',
            image: 'https://picsum.photos/seed/teacher6/300/300.jpg',
            email: 'rina.anggraini@smanharapanbangsa.sch.id',
            education: 'S1 Pendidikan Bahasa Inggris - Universitas Negeri Jakarta',
            experience: '5 tahun pengalaman mengajar bahasa Inggris'
        },
        {
            id: 7,
            name: 'Ahmad Fauzi, S.Kom.',
            position: 'Guru TIK',
            subject: 'Teknologi Informasi dan Komunikasi',
            type: 'guru',
            image: 'https://picsum.photos/seed/teacher7/300/300.jpg',
            email: 'ahmad.fauzi@smanharapanbangsa.sch.id',
            education: 'S1 Teknik Informatika - Universitas Brawijaya',
            experience: '6 tahun pengalaman mengajar TIK'
        },
        {
            id: 8,
            name: 'Dewi Lestari, S.Pd.',
            position: 'Guru Seni Budaya',
            subject: 'Seni Budaya',
            type: 'guru',
            image: 'https://picsum.photos/seed/teacher8/300/300.jpg',
            email: 'dewi.lestari@smanharapanbangsa.sch.id',
            education: 'S1 Pendidikan Seni - Institut Seni Indonesia',
            experience: '4 tahun pengalaman mengajar seni budaya'
        },
        {
            id: 9,
            name: 'Bambang Sutrisno',
            position: 'Staf Administrasi',
            subject: 'Administrasi',
            type: 'admin',
            image: 'https://picsum.photos/seed/staff1/300/300.jpg',
            email: 'bambang.sutrisno@smanharapanbangsa.sch.id',
            education: 'D3 Administrasi Perkantoran',
            experience: '10 tahun pengalaman di bidang administrasi sekolah'
        },
        {
            id: 10,
            name: 'Siti Aminah',
            position: 'Staf Perpustakaan',
            subject: 'Perpustakaan',
            type: 'staff',
            image: 'https://picsum.photos/seed/staff2/300/300.jpg',
            email: 'siti.aminah@smanharapanbangsa.sch.id',
            education: 'D3 Perpustakaan',
            experience: '7 tahun pengalaman di bidang perpustakaan'
        }
    ];
    
    // Function to create news card HTML
    function createNewsCard(news) {
        return `
            <div class="col-lg-4 col-md-6">
                <div class="card news-card h-100" data-news-id="${news.id}">
                    <img src="${news.image}" class="card-img-top" alt="${news.title}">
                    <div class="card-body">
                        <div class="news-date">${news.date}</div>
                        <h5 class="news-title">${news.title}</h5>
                        <p class="news-excerpt">${news.excerpt}</p>
                        <a href="#" class="btn btn-sm btn-outline-primary">Baca Selengkapnya</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Function to create extracurricular card HTML
    function createExtracurricularCard(extracurricular) {
        return `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="card extracurricular-card h-100" data-extracurricular-id="${extracurricular.id}">
                    <div class="extracurricular-icon">
                        <i class="fas ${extracurricular.icon}"></i>
                    </div>
                    <h5 class="extracurricular-title">${extracurricular.name}</h5>
                    <p>Jadwal: ${extracurricular.schedule}</p>
                </div>
            </div>
        `;
    }
    
    // Function to create gallery item HTML
    function createGalleryItem(item) {
        return `
            <div class="col-lg-4 col-md-6 gallery-item-container" data-category="${item.category}">
                <div class="gallery-item" data-gallery-id="${item.id}">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="gallery-overlay">
                        <i class="fas fa-search-plus gallery-icon"></i>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Function to create teacher card HTML
    function createTeacherCard(teacher) {
        return `
            <div class="col-lg-3 col-md-4 col-sm-6 teacher-container" data-type="${teacher.type}">
                <div class="card teacher-card h-100" data-teacher-id="${teacher.id}">
                    <img src="${teacher.image}" class="card-img-top" alt="${teacher.name}">
                    <div class="card-body">
                        <h5 class="teacher-name">${teacher.name}</h5>
                        <p class="teacher-position">${teacher.position}</p>
                        <p class="teacher-subject">${teacher.subject}</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Populate home news section
    const homeNewsContainer = document.getElementById('news-container');
    if (homeNewsContainer) {
        homeNewsContainer.innerHTML = newsData.slice(0, 3).map(news => createNewsCard(news)).join('');
    }
    
    // Populate home extracurricular section
    const homeExtracurricularContainer = document.getElementById('extracurricular-container');
    if (homeExtracurricularContainer) {
        homeExtracurricularContainer.innerHTML = extracurricularData.slice(0, 8).map(extracurricular => createExtracurricularCard(extracurricular)).join('');
    }
    
    // Populate all extracurricular section (dashboard)
    let allExtracurricularContainer = document.getElementById('all-extracurricular-container');
    if (allExtracurricularContainer) {
        allExtracurricularContainer.innerHTML = extracurricularData.map(extracurricular => createExtracurricularCard(extracurricular)).join('');
    }
    
    // Populate home gallery section
    const homeGalleryContainer = document.getElementById('gallery-container');
    if (homeGalleryContainer) {
        homeGalleryContainer.innerHTML = galleryData.slice(0, 6).map(item => createGalleryItem(item)).join('');
    }

    // Populate galeri.html gallery dashboard
    let allGalleryContainer = document.getElementById('all-gallery-container');
    if (allGalleryContainer) {
        allGalleryContainer.innerHTML = galleryData.map(item => createGalleryItem(item)).join('');
    }
    
    // Populate home teachers section
    const homeTeachersContainer = document.getElementById('teachers-container');
    if (homeTeachersContainer) {
        homeTeachersContainer.innerHTML = teacherData.slice(0, 4).map(teacher => createTeacherCard(teacher)).join('');
    }
    
    // Populate all news section
    const allNewsContainer = document.getElementById('all-news-container');
    if (allNewsContainer) {
        allNewsContainer.innerHTML = newsData.map(news => createNewsCard(news)).join('');
    }
    

    

    
    // Populate all teachers section
    const allTeachersContainer = document.getElementById('all-teachers-container');
    if (allTeachersContainer) {
        allTeachersContainer.innerHTML = teacherData.map(teacher => createTeacherCard(teacher)).join('');
    }
    
    // News detail modal functionality
    const newsModal = new bootstrap.Modal(document.getElementById('newsModal'));
    const newsModalBody = document.getElementById('newsModalBody');
    
    // Add click event to news cards
    document.addEventListener('click', function(e) {
        const newsCard = e.target.closest('.news-card');
        if (newsCard) {
            e.preventDefault();
            const newsId = parseInt(newsCard.getAttribute('data-news-id'));
            const news = newsData.find(n => n.id === newsId);
            
            if (news) {
                newsModalBody.innerHTML = `
                    <img src="${news.image}" class="img-fluid mb-3" alt="${news.title}">
                    <h4>${news.title}</h4>
                    <p class="text-muted">${news.date}</p>
                    <p>${news.content}</p>
                `;
                newsModal.show();
            }
        }
    });
    
    // Extracurricular detail modal functionality
    const extracurricularModal = new bootstrap.Modal(document.getElementById('extracurricularModal'));
    const extracurricularModalBody = document.getElementById('extracurricularModalBody');
    
    // Add click event to extracurricular cards
    document.addEventListener('click', function(e) {
        const extracurricularCard = e.target.closest('.extracurricular-card');
        if (extracurricularCard) {
            const extracurricularId = parseInt(extracurricularCard.getAttribute('data-extracurricular-id'));
            const extracurricular = extracurricularData.find(e => e.id === extracurricularId);
            
            if (extracurricular) {
                extracurricularModalBody.innerHTML = `
                    <img src="${extracurricular.image}" class="img-fluid mb-3" alt="${extracurricular.name}">
                    <h4>${extracurricular.name}</h4>
                    <p><strong>Jadwal:</strong> ${extracurricular.schedule}</p>
                    <p>${extracurricular.description}</p>
                `;
                extracurricularModal.show();
            }
        }
    });

    // Add keyboard accessibility for extracurricular cards (Enter key to open modal)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement && activeElement.classList.contains('extracurricular-card')) {
                const extracurricularId = parseInt(activeElement.getAttribute('data-extracurricular-id'));
                const extracurricular = extracurricularData.find(e => e.id === extracurricularId);
                
                if (extracurricular) {
                    extracurricularModalBody.innerHTML = `
                        <img src="${extracurricular.image}" class="img-fluid mb-3" alt="${extracurricular.name}">
                        <h4>${extracurricular.name}</h4>
                        <p><strong>Jadwal:</strong> ${extracurricular.schedule}</p>
                        <p>${extracurricular.description}</p>
                    `;
                    extracurricularModal.show();
                }
            }
        }
    });
    
    // Teacher detail modal functionality
    const teacherModal = new bootstrap.Modal(document.getElementById('teacherModal'));
    const teacherModalBody = document.getElementById('teacherModalBody');
    
    // Add click event to teacher cards
    document.addEventListener('click', function(e) {
        const teacherCard = e.target.closest('.teacher-card');
        if (teacherCard) {
            const teacherId = parseInt(teacherCard.getAttribute('data-teacher-id'));
            const teacher = teacherData.find(t => t.id === teacherId);
            
            if (teacher) {
                teacherModalBody.innerHTML = `
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${teacher.image}" class="img-fluid rounded-circle" alt="${teacher.name}">
                        </div>
                        <div class="col-md-8">
                            <h4>${teacher.name}</h4>
                            <p><strong>Jabatan:</strong> ${teacher.position}</p>
                            <p><strong>Mata Pelajaran:</strong> ${teacher.subject}</p>
                            <p><strong>Email:</strong> ${teacher.email}</p>
                            <p><strong>Pendidikan:</strong> ${teacher.education}</p>
                            <p><strong>Pengalaman:</strong> ${teacher.experience}</p>
                        </div>
                    </div>
                `;
                teacherModal.show();
            }
        }
    });
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let currentImageIndex = 0;
    let filteredGalleryData = [...galleryData];
    
    // Add click event to gallery items
    document.addEventListener('click', function(e) {
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const galleryId = parseInt(galleryItem.getAttribute('data-gallery-id'));
            currentImageIndex = filteredGalleryData.findIndex(item => item.id === galleryId);
            
            if (currentImageIndex !== -1) {
                updateLightbox();
                lightbox.classList.add('active');
            }
        }
    });
    
    // Update lightbox image
    function updateLightbox() {
        const currentItem = filteredGalleryData[currentImageIndex];
        lightboxImage.src = currentItem.image;
        lightboxImage.alt = currentItem.title;
        lightboxCaption.textContent = currentItem.title;
    }
    
    // Close lightbox
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    // Navigate lightbox images
    lightboxPrev.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + filteredGalleryData.length) % filteredGalleryData.length;
        updateLightbox();
    });
    
    lightboxNext.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % filteredGalleryData.length;
        updateLightbox();
    });
    
    // Gallery filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            const filter = this.getAttribute('data-filter');
            const galleryItems = document.querySelectorAll('.gallery-item-container');
            
            if (filter === 'all') {
                filteredGalleryData = [...galleryData];
                galleryItems.forEach(item => {
                    item.style.display = 'block';
                });
            } else {
                filteredGalleryData = galleryData.filter(item => item.category === filter);
                galleryItems.forEach(item => {
                    if (item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Teacher filter functionality
    const teacherFilterButtons = document.querySelectorAll('.teacher-filter-btn');
    teacherFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            teacherFilterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter teacher items
            const filter = this.getAttribute('data-filter');
            const teacherItems = document.querySelectorAll('.teacher-container');
            
            if (filter === 'all') {
                teacherItems.forEach(item => {
                    item.style.display = 'block';
                });
            } else {
                teacherItems.forEach(item => {
                    if (item.getAttribute('data-type') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // News search functionality
    const newsSearch = document.getElementById('news-search');
    const searchBtn = document.getElementById('search-btn');
    
    function filterNews() {
        const searchTerm = newsSearch.value.toLowerCase();
        const filteredNews = newsData.filter(news => 
            news.title.toLowerCase().includes(searchTerm) || 
            news.excerpt.toLowerCase().includes(searchTerm)
        );
        
        if (allNewsContainer) {
            if (filteredNews.length > 0) {
                allNewsContainer.innerHTML = filteredNews.map(news => createNewsCard(news)).join('');
            } else {
                allNewsContainer.innerHTML = '<div class="col-12 text-center"><p>Tidak ada berita yang ditemukan.</p></div>';
            }
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', filterNews);
    }
    
    if (newsSearch) {
        newsSearch.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                filterNews();
            }
        });
    }
    
    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    const contactFormFull = document.getElementById('contact-form-full');
    const successAlert = document.getElementById('success-alert');
    const successMessage = document.getElementById('success-message');
    
    function handleContactForm(form) {
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = form.querySelector('#name').value;
                const email = form.querySelector('#email').value;
                const subject = form.querySelector('#subject').value;
                const message = form.querySelector('#message').value;
                
                // Simple validation
                if (name && email && subject && message) {
                    // Show success message
                    successMessage.textContent = 'Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.';
                    successAlert.style.display = 'block';
                    
                    // Reset form
                    form.reset();
                    
                    // Hide alert after 5 seconds
                    setTimeout(function() {
                        successAlert.style.display = 'none';
                    }, 5000);
                }
            });
        }
    }
    
    handleContactForm(contactForm);
    handleContactForm(contactFormFull);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a page section link
            if (href === '#') {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .gallery-item, .org-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial setup for animation
    document.querySelectorAll('.card, .gallery-item, .org-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation once on page load
    setTimeout(animateOnScroll, 500);
});