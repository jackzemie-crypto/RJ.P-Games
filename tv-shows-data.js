// Complete TV Shows collection - 30 TV Shows
const ALL_TV_SHOWS = [
    {
        id: 1,
        name: "200 Classic Cartoons",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=200+Classic+Cartoons+(2008)",
        url: "https://drive.google.com/drive/folders/1_placeholder_cartoons",
        author: "Unknown",
        year: 2008,
        genre: ["Animation"]
    },
    {
        id: 2,
        name: "Alice in Borderland",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Alice+in+Borderland+(2020)",
        url: "https://drive.google.com/drive/folders/12m78G5R4YjPUCIDIHJ3VAnK7IJRbSw8A?usp=drive_link",
        author: "Unknown",
        year: 2020,
        genre: ["Action", "Drama", "Thriller"]
    },
    {
        id: 3,
        name: "Avatar: The Last Airbender",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Avatar+The+Last+Airbender+(2005)",
        url: "https://drive.google.com/drive/folders/1OFWN8hASAuNWSn9mK2gANJ0PSQhvIA2r",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 4,
        name: "Abbott Elementary",
        cover: "https://m.media-amazon.com/images/M/MV5BYjU5YTdlZTItNWM5Yi00OGM1LTk1NGItNjY5MGU3Y2JkOWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/13dLvT0_1TkcRmVmF6tZlm80xqeoWhxZp?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Comedy"]
    },
    {
        id: 5,
        name: "Adventure Time",
        cover: "https://m.media-amazon.com/images/M/MV5BMjkxMzIwNmQtMzM5Ni00YWJiLTg4YjQtNjBiN2IxMjZhMGQ2XkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1OwoKydzUQUUp6n-Nh7CCAQXGLfchU8Ta",
        author: "Unknown",
        year: 2010,
        genre: ["Animation", "Adventure", "Comedy"]
    },
    {
        id: 6,
        name: "Adventure Time: Fiona and Cake",
        cover: "https://m.media-amazon.com/images/M/MV5BMzE2MTA5YjQtMzU5Ni00MWY5LWJiMTktOWRjZjZkMDVjYjlkXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1TWYO4e4xYDMVou36cJHASEnJdV4FFkOt",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 7,
        name: "Arcane",
        cover: "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1TKueC2iWAFibt1ih645ZWfQljYODJzs1?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Action", "Drama"]
    },
    {
        id: 8,
        name: "Barbie Life in The Dreamhouse",
        cover: "https://m.media-amazon.com/images/M/MV5BMTg0MDc4MzU4NF5BMl5BanBnXkFtZTgwNjM5MTgyMjE@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/16XksTOld5HoYI8uCgOU8aCHtlAFgERQR?usp=share_link",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 9,
        name: "Batman Beyond",
        cover: "https://m.media-amazon.com/images/M/MV5BMDExYjNiYTYtZDkwZC00NDcxLTk3YWYtMmIyN2ZlZGYyY2E0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1rrz2S1Rc7wEw4jl-6tuKd3-WRZ6mK0-W?usp=share_link",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Action"]
    },
    {
        id: 10,
        name: "Batman The Animated Series",
        cover: "https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/12O2UQcS1Xszcb-9kn-s19ruqvk7xnrf8?usp=sharing",
        author: "Unknown",
        year: 1992,
        genre: ["Animation", "Action"]
    },
    {
        id: 11,
        name: "Beauty In Black",
        cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/Beauty_in_Black_%28TV_series%29.jpg",
        url: "https://drive.google.com/drive/folders/1F2G8LJaV2rJ2pUlvIeGngHEVV2x8mITp?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Drama"]
    },
    {
        id: 12,
        name: "Bluey",
        cover: "https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1QwcWtD6GwWRa58w0wQjIweHHQJf47BOx?usp=share_link",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Family"]
    },
    {
        id: 13,
        name: "Blues Clues",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Blues+Clues+(1996)",
        url: "https://drive.google.com/drive/folders/1vDYQQUT_BEMS779FI2rfC-FnkoUG3g4Y?usp=share_link",
        author: "Unknown",
        year: 1996,
        genre: ["Family", "Educational"]
    },
    {
        id: 14,
        name: "Boondocks",
        cover: "https://m.media-amazon.com/images/M/MV5BYjFjZTAxZTItYjhjZS00MzNkLTk0NDYtYWMxYTQxNTE3YTQxXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1ujarzaX_90FGOiRC15OmXOAgwSbdI_kA",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 15,
        name: "Breaking Bad",
        cover: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1IY6qairkXpK2RXE0UVtqwm5ZjeiGYk3N",
        author: "Unknown",
        year: 2008,
        genre: ["Drama", "Crime", "Thriller"]
    },
    {
        id: 16,
        name: "BoJack Horseman",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=BoJack+Horseman+(2014)",
        url: "https://drive.google.com/drive/folders/1Tw9CC4dRnCJxrgihyuICqLpkMJO3TjCW?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Comedy", "Drama"]
    },
    {
        id: 17,
        name: "Cobra Kai",
        cover: "https://m.media-amazon.com/images/M/MV5BYjA3NDkwNzktNjJkYi00ODNhLWFhYzQtYzk5NjU4MDM0OWZmXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1idzqcZUju0ADDEWnm1D9AC344rIFiGRN?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Comedy", "Drama"]
    },
    {
        id: 18,
        name: "Danny Phantom",
        cover: "https://m.media-amazon.com/images/M/MV5BNjJlNzc4ODktOGVjYS00MTJkLTgzZTYtZGViMDNlNmM2MGE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1iZZSfbqgfu8YDIP-5g8qp8XQ4al5WrDC?usp=share_link",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Action", "Adventure"]
    },
    {
        id: 19,
        name: "Everybody Hates Chris",
        cover: "https://m.media-amazon.com/images/M/MV5BM2U1M2QxZDYtMzgyYS00OWQ5LWIyNGUtMmQ1MGQ2NTU2NzNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1RUZj9WQzdEBYYLeKhD_Y9GRcZbNZMSEy?usp=sharing",
        author: "Unknown",
        year: 2005,
        genre: ["Comedy"]
    },
    {
        id: 20,
        name: "Euphoria",
        cover: "https://m.media-amazon.com/images/M/MV5BZjVlN2M2N2MtOWViZC00MzIxLTlhZWEtMTIwNDIwMzE3ZWJiXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1BVkiWaMVA1mZ1J2bJcnE3_ywvNFg1IKP",
        author: "Unknown",
        year: 2019,
        genre: ["Drama"]
    },
    {
        id: 21,
        name: "Family Guy",
        cover: "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/11W6C-Jqv9iQVasqjfiaYz77puax1UTjH?usp=sharing",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 22,
        name: "Family Matters",
        cover: "https://m.media-amazon.com/images/M/MV5BN2YxNmI0NzgtMGM5Yi00YjJmLThjZmEtYTQ3ZTljYTU4MjdiXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1YX2tgiy_q_-FWYwv5puLRdWOhwlJVTQ3?usp=sharing",
        author: "Unknown",
        year: 1989,
        genre: ["Comedy"]
    },
    {
        id: 23,
        name: "Game of Thrones",
        cover: "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1-kchkgMKhucUCfcyTZ5j5_GS8jWu9TQC?usp=sharing",
        author: "Unknown",
        year: 2011,
        genre: ["Drama", "Fantasy"]
    },
    {
        id: 24,
        name: "Gravity Falls",
        cover: "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1fU-FrVZ12bAZYxtxrofKkEQg2kMrIjm3",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Adventure", "Comedy"]
    },
    {
        id: 25,
        name: "Harley Quinn",
        cover: "https://m.media-amazon.com/images/M/MV5BYWQyMjQzOGMtY2Y0Yy00NjJkLWE3YjItOGEwODE1MWRlMjVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1ap71sKGnRDDqySR6TlfL_sXpwoM5B1Q9?usp=sharing",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Action", "Comedy"]
    },
    {
        id: 26,
        name: "Harvey Birdman",
        cover: "https://m.media-amazon.com/images/M/MV5BMGNkY2YxOGItMDhmYi00Y2E0LWIwNmUtM2FkNzgyY2IyMGNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/140J4Jyv5DvSnrcM7bI9kvqMPUmTR6vZS",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 27,
        name: "Hazbin Hotel",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Hazbin+Hotel+(2024)",
        url: "https://drive.google.com/drive/folders/1FnnwXwhzJgxIFFjp9I0uW6EFknZ8l6U7?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy", "Musical"]
    },
    {
        id: 28,
        name: "Hey Arnold",
        cover: "https://m.media-amazon.com/images/M/MV5BYzhiYTYwM2QtNTlmNy00MGM1LTllM2UtOGJmZTUxMmJmZjdiXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1tvjU4AqKfPOM_wPZA-pJsjYaOKguNaDD?usp=sharing",
        author: "Unknown",
        year: 1996,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 29,
        name: "Inside Job",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Inside+Job+(2021)",
        url: "https://drive.google.com/drive/folders/1IFalooPss60gnsuzVd8C_szewNqEb6VF?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 30,
        name: "INVINCIBLE",
        cover: "https://m.media-amazon.com/images/M/MV5BZjE4ZDU4ZjMtZjliYS00M2ZmLThkNTItN2U3MmJjOGU0NmIxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1S5OH4Rs78nCVUJX7CDrv9OEuW9UOYnvl",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Action", "Drama"]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ALL_TV_SHOWS };
}