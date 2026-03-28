// Script to convert gn-math movies format to your format with real posters
// Run this in Node.js: node convert-posters.js

const fs = require('fs');

// Read the gn-math movies file
const gnMathContent = fs.readFileSync('gn-math-DONTDMCA-main/movies-data.js', 'utf8');

// Extract the MOVIES_DATA array
const match = gnMathContent.match(/window\.MOVIES_DATA = \[([\s\S]*)\];/);
if (!match) {
    console.error('Could not find MOVIES_DATA array');
    process.exit(1);
}

// Parse the movies (simple JSON-like parsing)
const moviesText = '[' + match[1] + ']';
const gnMathMovies = eval(moviesText);

// Read your current movies file
const yourMoviesContent = fs.readFileSync('movies-data.js', 'utf8');
const yourMatch = yourMoviesContent.match(/const ALL_MOVIES = \[([\s\S]*)\];/);
if (!yourMatch) {
    console.error('Could not find ALL_MOVIES array');
    process.exit(1);
}

const yourMoviesText = '[' + yourMatch[1] + ']';
const yourMovies = eval(yourMoviesText);

// Create a map of gn-math movies by title for easy lookup
const gnMathMap = {};
gnMathMovies.forEach(movie => {
    const normalizedTitle = movie.title.toLowerCase().trim();
    gnMathMap[normalizedTitle] = movie;
});

// Update your movies with real poster URLs
let updatedCount = 0;
yourMovies.forEach(movie => {
    const normalizedTitle = movie.name.toLowerCase().trim();
    const gnMathMovie = gnMathMap[normalizedTitle];
    
    if (gnMathMovie && gnMathMovie.imageUrl) {
        movie.cover = gnMathMovie.imageUrl;
        updatedCount++;
        console.log(`✓ Updated: ${movie.name}`);
    } else {
        console.log(`✗ No match: ${movie.name}`);
    }
});

// Generate the new movies-data.js content
let newContent = '// Complete movie collection - ALL 381 movies\nconst ALL_MOVIES = [\n';

yourMovies.forEach((movie, index) => {
    newContent += '    {\n';
    newContent += `        id: ${movie.id},\n`;
    newContent += `        name: "${movie.name}",\n`;
    newContent += `        cover: "${movie.cover}",\n`;
    newContent += `        url: "${movie.url}",\n`;
    newContent += `        author: "${movie.author}",\n`;
    newContent += `        year: ${movie.year},\n`;
    newContent += `        genre: ${JSON.stringify(movie.genre)}\n`;
    newContent += '    }';
    if (index < yourMovies.length - 1) {
        newContent += ',';
    }
    newContent += '\n';
});

newContent += '];\n';

// Write the updated file
fs.writeFileSync('movies-data-UPDATED.js', newContent);

console.log(`\n✅ Done! Updated ${updatedCount} out of ${yourMovies.length} movies`);
console.log('📄 New file created: movies-data-UPDATED.js');
console.log('\nNext steps:');
console.log('1. Review movies-data-UPDATED.js');
console.log('2. Backup your current movies-data.js');
console.log('3. Replace movies-data.js with movies-data-UPDATED.js');
