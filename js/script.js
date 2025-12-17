// Main Script for Netflix-style Portfolio
document.addEventListener('DOMContentLoaded', () => {
    const contentRows = document.getElementById('contentRows');
    const heroDetail = document.getElementById('heroDetail');
    const heroDetailClose = document.getElementById('heroDetailClose');

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

    // Hero detail close button
    heroDetailClose.addEventListener('click', closeHeroDetail);

    // Close hero detail when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeHeroDetail();
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

    card.addEventListener('click', () => openHeroDetail(item));

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
    
    document.getElementById('heroDetailImage').src = item.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23333" width="800" height="400"/%3E%3C/svg%3E';
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
