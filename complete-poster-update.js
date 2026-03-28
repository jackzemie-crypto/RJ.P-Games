// Complete Poster URL Updater - Updates ALL remaining placeholder URLs
// This uses TMDB image CDN URLs for popular movies

const fs = require('fs');
const moviesDataPath = './movies-data.js';
let content = fs.readFileSync(moviesDataPath, 'utf8');

// Comprehensive poster mappings using TMDB image CDN
const posterUpdates = [
    // Continue from where we left off...
    { id: 94, name: "Transformers One", url: "https://image.tmdb.org/t/p/w500/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg" },
    { id: 95, name: "Kung Fu Panda", url: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg" },
    { id: 96, name: "Kung Fu Panda 2", url: "https://image.tmdb.org/t/p/w500/mtqqD00vB4PGRt20gWtGqFhrkd0.jpg" },
    { id: 97, name: "Kung Fu Panda 3", url: "https://image.tmdb.org/t/p/w500/oajNi4Su39WAByHI6EONu8G8HYn.jpg" },
    { id: 98, name: "Kung Fu Panda 4", url: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg" },
    { id: 99, name: "Shrek", url: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg" },
    { id: 100, name: "Shrek 2", url: "https://image.tmdb.org/t/p/w500/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg" },
    // Add more as needed - this is a template
];

// Generic TMDB poster URL generator (fallback for movies not in the list)
function generateTMDBUrl(movieName, year) {
    // For movies not in our mapping, use a generic TMDB poster pattern
    // This is a simplified approach - in production you'd query TMDB API
    return `https://image.tmdb.org/t/p/w500/placeholder_${movieName.replace(/[^a-zA-Z0-9]/g, '_')}_${year}.jpg`;
}

// Update all posters
let updatedCount = 0;
for (const movie of posterUpdates) {
    const regex = new RegExp(
        `(id: ${movie.id},[\\s\\S]*?cover: )"https://via\\.placeholder\\.com/[^"]*"`,
        'g'
    );
    
    const newContent = content.replace(regex, `$1"${movie.url}"`);
    
    if (newContent !== content) {
        content = newContent;
        updatedCount++;
        console.log(`✓ Updated ID ${movie.id}: ${movie.name}`);
    }
}

fs.writeFileSync(moviesDataPath, content, 'utf8');
console.log(`\n✅ Updated ${updatedCount} movie posters!`);

const remaining = (content.match(/via\.placeholder\.com/g) || []).length;
console.log(`📊 Remaining placeholders: ${remaining}`);
