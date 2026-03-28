// Main application script for RJ.P Games
let zones = [];
let filteredZones = [];
let currentSort = 'name';
let searchQuery = '';
let currentMovies = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeApp();
        setupEventListeners();
        loadZones();
    } catch (error) {
        console.error('Error initializing app:', error);
        // Show a basic error message
        const container = document.getElementById('container');
        if (container) {
            container.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-muted);">Error loading application. Please refresh the page.</div>';
        }
    }
});

function initializeApp() {
    // Combine movies data from both files
    if (typeof MOVIES_DATA !== 'undefined' && typeof MOVIES_DATA_EXTRA !== 'undefined') {
        window.MOVIES_DATA = [...MOVIES_DATA, ...MOVIES_DATA_EXTRA];
    }
    
    // Set up initial state
    updateZoneCount();
    
    // Load movies data if available
    if (typeof MOVIES_DATA !== 'undefined') {
        currentMovies = MOVIES_DATA;
        loadMovies();
    }
}

function setupEventListeners() {
    // Search functionality
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('input', handleSearch);
    }
    
    // Movies search
    const moviesSearch = document.getElementById('moviesSearch');
    if (moviesSearch) {
        moviesSearch.addEventListener('input', handleMoviesSearch);
    }
    
    // Movies sort
    const moviesSort = document.getElementById('moviesSort');
    if (moviesSort) {
        moviesSort.addEventListener('change', handleMoviesSort);
    }
    
    // Sort functionality
    const sortOptions = document.getElementById('sortOptions');
    if (sortOptions) {
        sortOptions.addEventListener('change', handleSort);
    }
    
    // Filter functionality
    const filterOptions = document.getElementById('filterOptions');
    if (filterOptions) {
        filterOptions.addEventListener('change', handleFilter);
    }
    
    // Tab switching
    setupTabSwitching();
    
    // Settings modal
    setupSettingsModal();
}

function setupTabSwitching() {
    const tabs = document.querySelectorAll('.site-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetPanel = this.getAttribute('aria-controls');
            switchSiteTab(this.dataset.tab);
        });
    });
}

function switchSiteTab(tabName) {
    // Update tab states
    document.querySelectorAll('.site-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    
    document.querySelectorAll('.site-panel').forEach(panel => {
        panel.hidden = true;
    });
    
    // Activate selected tab
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    const activePanel = document.getElementById(`panel-${tabName}`);
    
    if (activeTab && activePanel) {
        activeTab.classList.add('active');
        activeTab.setAttribute('aria-selected', 'true');
        activePanel.hidden = false;
        
        // Load content based on tab
        if (tabName === 'movies') {
            loadMovies();
        } else if (tabName === 'games') {
            loadZones();
        }
    }
}

function loadZones() {
    // This would normally load from an API or data file
    // For now, show loading state
    const container = document.getElementById('container');
    if (container) {
        container.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-muted);">Loading zones...</div>';
        
        // Simulate loading
        setTimeout(() => {
            if (zones.length === 0) {
                container.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-muted);">No zones available. Check back later!</div>';
            }
        }, 1000);
    }
}

function loadMovies() {
    try {
        const moviesGrid = document.getElementById('moviesGrid');
        const moviesCount = document.getElementById('moviesCount');
        
        if (!moviesGrid) {
            console.warn('Movies grid element not found');
            return;
        }
        
        if (typeof MOVIES_DATA === 'undefined' || !Array.isArray(MOVIES_DATA)) {
            console.warn('MOVIES_DATA not available or not an array');
            moviesGrid.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-muted);">Movies data not available</div>';
            return;
        }
        
        // Use the filtering function to display all movies initially
        filterAndDisplayMovies();
    } catch (error) {
        console.error('Error loading movies:', error);
        const moviesGrid = document.getElementById('moviesGrid');
        if (moviesGrid) {
            moviesGrid.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-muted);">Error loading movies</div>';
        }
    }
}

function createMovieCard(movie) {
    const card = document.createElement('a');
    card.className = 'movie-card';
    card.href = '#';
    card.onclick = (e) => {
        e.preventDefault();
        openMovieModal(movie);
    };
    
    const img = document.createElement('img');
    img.className = 'movie-card-img';
    img.src = movie.imageUrl;
    img.alt = movie.title;
    img.loading = 'lazy';
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/300x450/16213e/94a3b8?text=No+Image';
    };
    
    const body = document.createElement('div');
    body.className = 'movie-card-body';
    
    const title = document.createElement('h3');
    title.className = 'movie-card-title';
    title.textContent = movie.title;
    
    const year = document.createElement('div');
    year.className = 'movie-card-year';
    year.textContent = movie.year;
    
    const desc = document.createElement('p');
    desc.className = 'movie-card-desc';
    desc.textContent = movie.description;
    
    body.appendChild(title);
    body.appendChild(year);
    body.appendChild(desc);
    
    card.appendChild(img);
    card.appendChild(body);
    
    return card;
}

function openMovieModal(movie) {
    // Create a simple modal for movie playback
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 1rem;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: var(--surface);
        border-radius: var(--radius-lg);
        padding: 2rem;
        max-width: 500px;
        width: 100%;
        text-align: center;
    `;
    
    content.innerHTML = `
        <h2 style="margin: 0 0 1rem; color: var(--text);">${movie.title}</h2>
        <p style="margin: 0 0 1.5rem; color: var(--text-muted);">${movie.description}</p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button onclick="window.open('${movie.link}', '_blank')" style="background: var(--primary); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: var(--radius); cursor: pointer; font-weight: 600;">
                Watch Movie
            </button>
            <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="background: var(--surface-hover); color: var(--text); border: 1px solid var(--border); padding: 0.75rem 1.5rem; border-radius: var(--radius); cursor: pointer; font-weight: 600;">
                Close
            </button>
        </div>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase();
    filterAndDisplayContent();
}

function handleSort(e) {
    currentSort = e.target.value;
    filterAndDisplayContent();
}

function handleFilter(e) {
    // Filter implementation would go here
    filterAndDisplayContent();
}

function filterAndDisplayContent() {
    // This would filter and sort the current content
    // Implementation depends on the active tab
    const activeTab = document.querySelector('.site-tab.active');
    if (activeTab && activeTab.dataset.tab === 'movies') {
        const searchQuery = document.getElementById('moviesSearch')?.value.toLowerCase() || '';
        const sortType = document.getElementById('moviesSort')?.value || 'title';
        filterAndDisplayMovies(searchQuery, sortType);
    }
}

function handleMoviesSearch(e) {
    const query = e.target.value.toLowerCase();
    filterAndDisplayMovies(query);
}

function handleMoviesSort(e) {
    const sortType = e.target.value;
    filterAndDisplayMovies(document.getElementById('moviesSearch').value.toLowerCase(), sortType);
}

function filterAndDisplayMovies(searchQuery = '', sortType = 'title') {
    if (typeof MOVIES_DATA === 'undefined') return;
    
    let filtered = MOVIES_DATA;
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery) ||
            movie.description.toLowerCase().includes(searchQuery) ||
            movie.year.includes(searchQuery)
        );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        switch (sortType) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'title-desc':
                return b.title.localeCompare(a.title);
            case 'year-desc':
                return parseInt(b.year) - parseInt(a.year);
            case 'year-asc':
                return parseInt(a.year) - parseInt(b.year);
            default:
                return a.title.localeCompare(b.title);
        }
    });
    
    // Update display
    const moviesGrid = document.getElementById('moviesGrid');
    const moviesCount = document.getElementById('moviesCount');
    
    if (moviesGrid) {
        moviesGrid.innerHTML = '';
        filtered.forEach(movie => {
            const movieCard = createMovieCard(movie);
            moviesGrid.appendChild(movieCard);
        });
    }
    
    if (moviesCount) {
        moviesCount.textContent = `${filtered.length} movies`;
    }
}

function setupSettingsModal() {
    // Settings functionality would go here
}

function updateZoneCount() {
    const zoneCount = document.getElementById('zoneCount');
    if (zoneCount) {
        zoneCount.textContent = `${zones.length} zones available`;
    }
}

// Clock functionality for devs page
function updateDevsClock() {
    const clockElement = document.getElementById('devsClock');
    if (clockElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        clockElement.textContent = `${timeString} • ${dateString}`;
    }
}

// Update clock every second
setInterval(updateDevsClock, 1000);
updateDevsClock();

// Global functions that might be called from HTML
window.switchSiteTab = switchSiteTab;
window.filterZones = handleSearch;
window.sortZones = handleSort;
window.filterZones2 = handleFilter;
window.listZones = loadZones;