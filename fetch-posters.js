// TMDB Poster Fetcher Script
// This script helps you fetch movie poster URLs from TMDB API

// STEP 1: Get a free API key from https://www.themoviedb.org/settings/api
// STEP 2: Replace 'YOUR_API_KEY_HERE' below with your actual API key
// STEP 3: Run this script in Node.js: node fetch-posters.js

const API_KEY = 'YOUR_API_KEY_HERE'; // Get free key from TMDB
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // w500 = 500px width

// Sample movies to fetch (add more as needed)
const moviesToFetch = [
    { id: 1, name: "Deadpool and Wolverine", year: 2024 },
    { id: 2, name: "Captain America: The First Avenger", year: 2011 },
    { id: 3, name: "Captain America: Brave New World", year: 2025 },
    { id: 4, name: "Dog Man", year: 2025 },
    { id: 5, name: "Spider-Man: Into the Spider-Verse", year: 2018 },
    { id: 6, name: "Spider-Man: Across the Spider-Verse", year: 2023 },
    { id: 7, name: "Moana 2", year: 2024 },
    { id: 8, name: "The Lego Batman Movie", year: 2017 },
    { id: 9, name: "The Super Mario Bros. Movie", year: 2023 },
    { id: 10, name: "Sonic the Hedgehog", year: 2020 },
    // Add more movies here...
];

async function searchMovie(title, year) {
    try {
        const searchUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}&year=${year}`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            const movie = data.results[0];
            if (movie.poster_path) {
                return `${IMAGE_BASE_URL}${movie.poster_path}`;
            }
        }
        return null;
    } catch (error) {
        console.error(`Error fetching ${title}:`, error.message);
        return null;
    }
}

async function fetchAllPosters() {
    console.log('Fetching movie posters from TMDB...\n');
    
    const results = [];
    
    for (const movie of moviesToFetch) {
        const posterUrl = await searchMovie(movie.name, movie.year);
        
        if (posterUrl) {
            console.log(`✓ ${movie.name} (${movie.year})`);
            console.log(`  Poster: ${posterUrl}\n`);
            results.push({
                id: movie.id,
                name: movie.name,
                year: movie.year,
                posterUrl: posterUrl
            });
        } else {
            console.log(`✗ ${movie.name} (${movie.year}) - Not found\n`);
        }
        
        // Wait 250ms between requests to respect API rate limits
        await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    console.log('\n=== RESULTS ===');
    console.log('Copy and paste these URLs into your movies-data.js file:\n');
    
    results.forEach(movie => {
        console.log(`// ${movie.name} (${movie.year})`);
        console.log(`cover: "${movie.posterUrl}",\n`);
    });
}

// Check if API key is set
if (API_KEY === 'YOUR_API_KEY_HERE') {
    console.log('⚠️  ERROR: Please set your TMDB API key first!');
    console.log('\nSteps to get your API key:');
    console.log('1. Go to https://www.themoviedb.org/signup');
    console.log('2. Create a free account');
    console.log('3. Go to https://www.themoviedb.org/settings/api');
    console.log('4. Request an API key (choose "Developer" option)');
    console.log('5. Copy your API key and paste it in this file\n');
} else {
    fetchAllPosters();
}
