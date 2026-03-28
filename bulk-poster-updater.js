// Bulk Poster URL Updater
// This script updates all placeholder poster URLs with real TMDB poster URLs

const fs = require('fs');

// Read the movies-data.js file
const moviesDataPath = './movies-data.js';
let content = fs.readFileSync(moviesDataPath, 'utf8');

// Common poster URLs for popular movies (using TMDB image CDN and other sources)
const posterMappings = {
    "The SpongeBob SquarePants Movie": "https://image.tmdb.org/t/p/w500/gjZD811kfY1ideNuBFqL6k8R6Lh.jpg",
    "Spider-Man": "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    "Spider-Man 2": "https://image.tmdb.org/t/p/w500/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg",
    "Spider-Man 3": "https://image.tmdb.org/t/p/w500/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg",
    "The Amazing Spider-Man 2": "https://image.tmdb.org/t/p/w500/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
    "Spider-Man: Homecoming": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    "Spider-Man: Far From Home": "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    "Venom": "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    "Venom: Let There Be Carnage": "https://image.tmdb.org/t/p/w500/1MJNcPZy46hIy2CmSqOeru0yr5C.jpg",
    "Toy Story": "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "Toy Story 2": "https://image.tmdb.org/t/p/w500/xNVH7lfmRMDJXJVh5xXUWbFuJ4V.jpg",
    "Home Alone": "https://image.tmdb.org/t/p/w500/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg",
    "Home Alone 2: Lost in New York": "https://image.tmdb.org/t/p/w500/5h4pTlJehoLZLz3B3p3lVr5Zzr3.jpg",
    "Scream": "https://image.tmdb.org/t/p/w500/3O3klyyYpAZBBE4n7IngzTomRDp.jpg",
    "Scream 3": "https://image.tmdb.org/t/p/w500/6ZqcH7Mp5BvYaKv8FxZFLnAcLxC.jpg",
    "It": "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    "The Nun": "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
    "Minions": "https://image.tmdb.org/t/p/w500/dr02BdCNAUPVU07aOodwPYv6HCf.jpg",
    "Minions: The Rise of Gru": "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    "Despicable Me 4": "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    "Wreck-It Ralph": "https://image.tmdb.org/t/p/w500/zK2sFxZcelHJRPVr242rxy5VK4T.jpg",
    "Back to the Future": "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    "Back to the Future Part II": "https://image.tmdb.org/t/p/w500/ulRiWOVJylKLJgDBdKgwVoK401.jpg",
    "An Extremely Goofy Movie": "https://image.tmdb.org/t/p/w500/sLFKKt6Ew0cEJXEsNDXPBjXqfyV.jpg",
    "The Little Rascals": "https://image.tmdb.org/t/p/w500/m2VKyg8N8UhTdftbEw0hQQG87Z7.jpg",
    "White Men Can't Jump (1992)": "https://image.tmdb.org/t/p/w500/2EvFsZ6zzDhRdNuOBEh3sTXnWHS.jpg",
    "Beavis and Butt-Head Do the Universe": "https://image.tmdb.org/t/p/w500/rVKMA2j8m8hWgsDyXOllXp9rSyV.jpg",
    "Plankton: The Movie": "https://image.tmdb.org/t/p/w500/6JL2ymkZJJhGZqiETxJYqYKdYdp.jpg",
    "Superman": "https://image.tmdb.org/t/p/w500/dMJth6hLxNlBZQIWQqkPJWoVNxp.jpg",
    "Minions and More 2": "https://image.tmdb.org/t/p/w500/3VZRp8xrqJHDCLh8R4u8Qe8JQMQ.jpg"
};

// Function to update poster URLs
function updatePosters() {
    let updatedCount = 0;
    
    for (const [movieName, posterUrl] of Object.entries(posterMappings)) {
        // Create regex to find the movie and its placeholder URL
        const regex = new RegExp(
            `(name: "${movieName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",[\\s\\S]*?cover: )"https://via\\.placeholder\\.com/[^"]*"`,
            'g'
        );
        
        const newContent = content.replace(regex, `$1"${posterUrl}"`);
        
        if (newContent !== content) {
            content = newContent;
            updatedCount++;
            console.log(`✓ Updated: ${movieName}`);
        }
    }
    
    // Write back to file
    fs.writeFileSync(moviesDataPath, content, 'utf8');
    console.log(`\n✅ Updated ${updatedCount} movie posters!`);
    
    // Count remaining placeholders
    const remaining = (content.match(/via\.placeholder\.com/g) || []).length;
    console.log(`📊 Remaining placeholders: ${remaining}`);
}

updatePosters();
