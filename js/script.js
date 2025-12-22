// Main Script for Netflix-style Portfolio
document.addEventListener('DOMContentLoaded', () => {
    const contentRows = document.getElementById('contentRows');
    const heroDetail = document.getElementById('heroDetail');
    const detailModal = document.getElementById('detailModal');
    const detailModalClose = document.getElementById('detailModalClose');

    // Render all rows
    portfolioData.forEach(row => {
        const rowElement = createRowElement(row);
        contentRows.appendChild(rowElement);
    });

    // Load featured item on page load (first item from first row)
    if (portfolioData.length > 0 && portfolioData[0].items.length > 0) {
        const featuredItem = portfolioData[0].items[0];
        openHeroDetail(featuredItem);
    }

    // Detail modal close button
    detailModalClose.addEventListener('click', closeDetailModal);

    // Close detail modal when clicking outside
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) closeDetailModal();
    });

    // Close detail modal when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDetailModal();
    });
});

function createRowElement(rowData) {
    const row = document.createElement('div');
    row.className = 'row';

    const title = document.createElement('h2');
    title.className = 'row-title';
    title.textContent = rowData.title;

    const carousel = document.createElement('div');
    carousel.className = 'row-carousel';

    rowData.items.forEach(item => {
        const card = createItemCard(item, rowData.id);
        carousel.appendChild(card);
    });

    row.appendChild(title);
    row.appendChild(carousel);

    return row;
}

function createItemCard(item, rowId) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.style.cursor = 'pointer';

    // If item has an image, display it
    if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.addEventListener('error', () => {
            img.style.display = 'none';
            card.appendChild(createPlaceholder(item.title));
        });
        card.appendChild(img);
    } else {
        card.appendChild(createPlaceholder(item.title));
    }

    const overlay = document.createElement('div');
    overlay.className = 'item-overlay';

    const itemTitle = document.createElement('div');
    itemTitle.className = 'item-title';
    itemTitle.textContent = item.title;

    const itemCategory = document.createElement('div');
    itemCategory.className = 'item-category';
    itemCategory.textContent = item.category || '';

    overlay.appendChild(itemTitle);
    overlay.appendChild(itemCategory);
    card.appendChild(overlay);

    card.addEventListener('click', () => openDetailModal(item));

    return card;
}

function createPlaceholder(text) {
    const placeholder = document.createElement('div');
    placeholder.className = 'item-placeholder';
    placeholder.textContent = text;
    return placeholder;
}

function openHeroDetail(item) {
    const heroDetail = document.getElementById('heroDetail');
    const heroDetailBackground = document.querySelector('.hero-detail-background');
    
    // Set background image
    const imageUrl = item.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23333" width="800" height="400"/%3E%3C/svg%3E';
    heroDetailBackground.style.backgroundImage = `url('${imageUrl}')`;
    
    document.getElementById('heroDetailTitle').textContent = item.title;
    document.getElementById('heroDetailDescription').textContent = item.description;
    document.getElementById('heroDetailCategory').textContent = item.category || 'Portfolio Item';
    document.getElementById('heroDetailDate').textContent = item.date || '';
    
    const link = document.getElementById('heroDetailLink');
    if (item.link) {
        link.href = item.link;
        link.style.display = 'inline-block';
    } else {
        link.style.display = 'none';
    }

    heroDetail.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeHeroDetail() {
    const heroDetail = document.getElementById('heroDetail');
    heroDetail.classList.remove('active');
}

function openDetailModal(item) {
    const detailModal = document.getElementById('detailModal');
    const detailModalBackground = document.getElementById('detailModalBackground');
    const detailModalVideo = document.getElementById('detailModalVideo');
    
    // Always set background image initially
    const imageUrl = item.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23333" width="800" height="600"/%3E%3C/svg%3E';
    detailModalBackground.style.backgroundImage = `url('${imageUrl}')`;
    detailModalBackground.style.opacity = '1';
    
    // Set video if available
    if (item.video) {
        console.log('Video URL:', item.video);
        if (item.video.includes('youtube.com') || item.video.includes('youtu.be')) {
            // Extract video ID and create proper embed URL
            let videoId;
            if (item.video.includes('youtube.com/embed/')) {
                videoId = item.video.split('youtube.com/embed/')[1];
            } else if (item.video.includes('youtu.be/')) {
                videoId = item.video.split('youtu.be/')[1];
            } else if (item.video.includes('youtube.com/shorts/')) {
                // For shorts, the ID is the same but we need to use watch?v= format
                videoId = item.video.split('youtube.com/shorts/')[1];
            } else if (item.video.includes('watch?v=')) {
                videoId = item.video.split('watch?v=')[1];
            }
            
            // Remove any query parameters
            if (videoId) {
                videoId = videoId.split('&')[0].split('?')[0];
            }
            
            console.log('Extracted video ID:', videoId);
            
            // Replace video element with iframe
            const existingIframe = document.getElementById('detailModalIframe');
            if (existingIframe) {
                existingIframe.remove();
            }
            
            const iframe = document.createElement('iframe');
            iframe.id = 'detailModalIframe';
            // Use the watch?v= format instead of /embed/ for better compatibility with shorts
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&modestbranding=1&rel=0`;
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.style.zIndex = '0';
            iframe.style.opacity = '0';
            iframe.style.transition = 'opacity 0.5s ease';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.setAttribute('allowfullscreen', '');
            
            const videoContainer = detailModalVideo.parentNode;
            videoContainer.insertBefore(iframe, detailModalVideo);
            
            console.log('Created iframe with src:', iframe.src);
            
            setTimeout(() => {
                console.log('Fading in iframe');
                iframe.style.opacity = '1';
                detailModalBackground.style.opacity = '0';
            }, 1500);
            
            detailModalVideo.style.display = 'none';
        } else {
            // Regular video file
            console.log('Loading MP4 video:', item.video);
            detailModalVideo.style.display = 'block';
            const existingIframe = document.getElementById('detailModalIframe');
            if (existingIframe) {
                existingIframe.remove();
            }
            
            detailModalVideo.style.opacity = '0';
            detailModalVideo.src = item.video;
            
            // Start video after 1-2 seconds with fade in
            setTimeout(() => {
                console.log('Attempting to play video');
                detailModalVideo.style.transition = 'opacity 0.5s ease';
                detailModalVideo.style.opacity = '1';
                detailModalBackground.style.opacity = '0';
                detailModalVideo.play().catch(err => console.log('Video play failed:', err));
            }, 1500);
        }
    } else {
        detailModalVideo.src = '';
        detailModalVideo.style.opacity = '0';
        const existingIframe = document.getElementById('detailModalIframe');
        if (existingIframe) {
            existingIframe.remove();
        }
    }
    
    document.getElementById('detailModalTitle').textContent = item.title;
    document.getElementById('detailModalDescription').textContent = item.description;
    document.getElementById('detailModalCategory').textContent = item.category || 'Portfolio Item';
    document.getElementById('detailModalDate').textContent = item.date || '';
    
    const link = document.getElementById('detailModalLink');
    if (item.link) {
        link.href = item.link;
        link.style.display = 'inline-block';
    } else {
        link.style.display = 'none';
    }

    detailModal.classList.add('active');
}

function closeDetailModal() {
    const detailModal = document.getElementById('detailModal');
    detailModal.classList.remove('active');
}
