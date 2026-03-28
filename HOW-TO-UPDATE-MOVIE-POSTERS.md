# How to Update Movie Posters - Step by Step Guide

## Quick Overview
You need to replace the placeholder URLs in `movies-data.js` with real poster image URLs.

## Step 1: Find Movie Posters

### Recommended Sources (Legal & Free):
1. **TMDB (The Movie Database)** - https://www.themoviedb.org/
   - Search for your movie
   - Right-click on the poster → "Copy image address"
   - Example: `https://image.tmdb.org/t/p/original/[poster-id].jpg`

2. **IMDb** - https://www.imdb.com/
   - Search for your movie
   - Right-click on poster → "Copy image address"

3. **Upload to Your Own Hosting**:
   - Download posters legally
   - Upload to Dropbox/Google Drive/GitHub
   - Get the direct image link

## Step 2: Get Direct Image URLs

### For Dropbox:
- Upload image to Dropbox
- Click "Share" → "Create link"
- Change `?dl=0` to `?dl=1` at the end
- Example: `https://www.dropbox.com/scl/fi/xxxxx/poster.jpg?dl=1`

### For Google Drive:
- Upload image
- Right-click → "Get link" → "Anyone with the link"
- Use format: `https://drive.google.com/uc?export=view&id=[FILE_ID]`

### For GitHub:
- Upload to your repo
- Use raw URL: `https://raw.githubusercontent.com/[user]/[repo]/main/posters/[image].jpg`

## Step 3: Update movies-data.js

Open `movies-data.js` and find the movie you want to update:

### Before:
```javascript
{
    id: 1,
    name: "Deadpool and Wolverine",
    cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Deadpool+and+Wolverine+(2024)",
    url: "https://drive.google.com/file/d/1B_eiKUt7N5OxyUN9c37LG0pxcErP4yJ6/view",
    author: "Unknown",
    year: 2024,
    genre: ["Action"]
}
```

### After:
```javascript
{
    id: 1,
    name: "Deadpool and Wolverine",
    cover: "https://image.tmdb.org/t/p/original/abc123xyz.jpg",  // ← Replace this URL
    url: "https://drive.google.com/file/d/1B_eiKUt7N5OxyUN9c37LG0pxcErP4yJ6/view",
    author: "Unknown",
    year: 2024,
    genre: ["Action"]
}
```

## Step 4: Bulk Update Template

Here's a template to help you organize your work:

```
Movie Name | Current Status | New Poster URL | Done?
-----------|----------------|----------------|------
Deadpool and Wolverine | Placeholder | [paste URL here] | [ ]
Captain America | Placeholder | [paste URL here] | [ ]
Dog Man | Placeholder | [paste URL here] | [ ]
```

## Step 5: Test Your Changes

1. Save `movies-data.js`
2. Open `index.html` in your browser
3. Click on "Movies" tab
4. Check if posters load correctly
5. If a poster doesn't load, check:
   - Is the URL correct?
   - Is it a direct image link?
   - Does it end in `.jpg`, `.png`, or `.webp`?

## Pro Tips

### Batch Processing:
1. Create a folder called `movie-posters` in your project
2. Download all posters with consistent naming: `movie-1.jpg`, `movie-2.jpg`, etc.
3. Upload entire folder to your hosting
4. Use a pattern: `https://your-host.com/movie-posters/movie-[ID].jpg`

### Image Optimization:
- Recommended size: 300x450 pixels (2:3 aspect ratio)
- Format: JPG or WebP for smaller file sizes
- Use tools like TinyPNG to compress images

### Quick Find & Replace:
If you upload all posters to one location, you can use find & replace:
- Find: `https://via.placeholder.com/300x450/1a1a1a/ffffff?text=`
- Replace with your base URL pattern

## Example: Already Working Posters

Some movies already have real posters. Use these as examples:

```javascript
{
    id: 41,
    name: "Iron Man",
    cover: "https://www.dropbox.com/scl/fi/ia7uylbhw3lrkx2qczjdk/Iron_Man_-2008_film-_poster.jpg?rlkey=d1jlafqgohehies361s2rmmrt&st=67f204bk&dl=1",
    // This is a working Dropbox link ✓
}
```

## Need Help?

If you get stuck:
1. Check browser console for errors (F12 → Console tab)
2. Verify the image URL loads in a new browser tab
3. Make sure there are no typos in the URL
4. Ensure the URL is publicly accessible

## Automation Option (Advanced)

If you want to automate this process, you could:
1. Sign up for TMDB API (free)
2. Create a script to fetch posters automatically
3. Let me know if you want help with this approach!

---

**Current Status**: 
- Total Movies: 381
- Movies with Real Posters: ~10
- Movies Needing Updates: ~371

Good luck! 🎬
