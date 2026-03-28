// Complete movie collection - ALL 381 movies
const ALL_MOVIES = [
   
    {
        id: 1,
        name: "Deadpool and Wolverine",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Deadpool+and+Wolverine+(2024)",
        url: "https://drive.google.com/file/d/1B_eiKUt7N5OxyUN9c37LG0pxcErP4yJ6/view",
        author: "Unknown",
        year: 2024,
        genre: ["Action"]
    },
    {
        id: 2,
        name: "Captain America: The First Avenger",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Captain+America+The+First+Avenger+(2011)",
        url: "https://drive.google.com/file/d/1n_-YoXC2sFts08F4W2inaW1AGobt1C2y/view?usp=sharing",
        author: "Unknown",
        year: 2011,
        genre: ["Action", "Adventure"]
    },
    {
        id: 3,
        name: "Captain America: Brave New World",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Captain+America+Brave+New+World+(2025)",
        url: "https://drive.google.com/file/d/1pJ5N0z8bQFpqeMx2UrZqrU1526ygzxDm/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Action", "Adventure"]
    },
    {
        id: 4,
        name: "Dog Man",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Dog+Man+(2025)",
        url: "https://drive.google.com/file/d/1fGpb8UBbynGx9NaHDc5wPzYjjUAD7gLW/view",
        author: "Unknown",
        year: 2025,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 5,
        name: "Spider-Man: Into the Spider-Verse",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Spider-Man+Into+the+Spider-Verse+(2018)",
        url: "https://drive.google.com/file/d/1V3Bq0lrDQUxJay5DDs3gK69ZvRNb1j2u/view",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Action"]
    },
    {
        id: 6,
        name: "Spider-Man: Across the Spider-Verse",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Spider-Man+Across+the+Spider-Verse+(2023)",
        url: "https://drive.google.com/file/d/1Sd1l_LhKRp_2OE5gRJJyPubnZjJccLgQ/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Action"]
    },
    {
        id: 7,
        name: "Moana 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Moana+2+(2024)",
        url: "https://drive.google.com/file/d/1khAaDGsMt8pAGqtIPJERCqM_PgpiLShO/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 8,
        name: "The Lego Batman Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Lego+Batman+Movie+(2017)",
        url: "https://drive.google.com/file/d/1Xn4F4GNvfKOljko2ZE_JUQcBWIHhO0ql/view",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 9,
        name: "The Super Mario Bros. Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Super+Mario+Bros+Movie+(2023)",
        url: "https://drive.google.com/file/d/1q2pk3lo5VIDWKQq2lCh_UTC_V9Zkv-_X/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 10,
        name: "Sonic the Hedgehog",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Sonic+the+Hedgehog+(2020)",
        url: "https://drive.google.com/file/d/1h1hi-3Hn1awll6u51WQnGjkHqm3uJejF/view",
        author: "Unknown",
        year: 2020,
        genre: ["Action", "Adventure"]
    },
    {
        id: 11,
        name: "Sonic the Hedgehog 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Sonic+the+Hedgehog+2+(2022)",
        url: "https://drive.google.com/file/d/1cXe1a5ueZU9U_QZBU1-XpgNK0s6wi4o6/view",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Adventure"]
    },
    {
        id: 12,
        name: "Sonic the Hedgehog 3",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Sonic+the+Hedgehog+3+(2024)",
        url: "https://drive.google.com/file/d/1-zHQI9U47xaDtLR9qNpHGBmk63Nnc07b/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Adventure"]
    },
    {
        id: 13,
        name: "Sonic OVA",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Sonic+OVA+(1996)",
        url: "https://drive.google.com/file/d/1_vnuQWGnvMa4uvt9c2MVYYznq_FjgHav/view",
        author: "Unknown",
        year: 1996,
        genre: ["Animation", "Action"]
    },
    {
        id: 14,
        name: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=TMNT+Mutant+Mayhem+(2023)",
        url: "https://drive.google.com/file/d/1IZNQlKBJi5HwRJDokQ-YuxfteFKgLZI5/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Action"]
    },
    {
        id: 15,
        name: "Inside Out",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Inside+Out+(2015)",
        url: "https://drive.google.com/file/d/1BEPGPg_iR7L5QFJ91SizjlA6khwj6j1e/view",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 16,
        name: "Inside Out 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Inside+Out+2+(2024)",
        url: "https://drive.google.com/file/d/148ae2JtLzIZwy-AKjtRgLZPNf3vEmQOE/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 17,
        name: "The Lego Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Lego+Movie+(2014)",
        url: "https://drive.google.com/file/d/1j2kFu1apjVp0E2_xojdiqASlQOc8RBit/view",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 18,
        name: "The Lego Movie 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Lego+Movie+2+(2019)",
        url: "https://drive.google.com/file/d/1_sb4Ogn-0xQX3Znf21COpLMrfs_x6Nuv/view",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 19,
        name: "The Regular Show: The Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Regular+Show+Movie+(2015)",
        url: "https://drive.google.com/file/d/1q1PFmdU3DJRopHbRU5Xmg2zJxA3hjfzX/view?usp=sharing",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 20,
        name: "Scooby-Doo! and the Witch's Ghost",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1_hkjpVLPviBFV8320Drj4jjC9DfSzueB/view?usp=drive_link",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 21,
        name: "Scooby-Doo",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Scooby-Doo+(2002)",
        url: "https://drive.google.com/file/d/1mwMlE9sWCZLVtQ4ljJEeLxtVrKknnfUB/view?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Comedy", "Mystery"]
    },
    {
        id: 22,
        name: "Scooby-Doo 2: Monsters Unleashed",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1VXxo8cvPI7-zigV3FR5JP3-C2WSXvkXt/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Comedy", "Mystery"]
    },
    {
        id: 23,
        name: "Scooby-Doo! and Krypto, Too!",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1A3KkhmxtAok0WhO2iaSR4GPwOWBs_T6w/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 24,
        name: "Scooby-Doo! Music of the Vampire",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1w88R5d11KA2RHZjDMF44PGiVTC-aSOVU/view?usp=drive_link",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 25,
        name: "Straight Outta Nowhere: Scooby-Doo! Meets Courage the Cowardly Dog",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Zh_wuLiteAQpM9MYo3CKdmjvPv11QDtB/view?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 26,
        name: "Scooby-Doo! Frankencreepy",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/16C2WJoTqTo_6uk28EHxGW0ZP3IhHv8XW/view?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 27,
        name: "Scooby-Doo! Haunted Holidays",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ZfMbvwDt282Fy6R0lkPxxdg80sdGInqt/view?usp=drive_link",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 28,
        name: "Scooby-Doo! in Where's My Mummy?",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1xsSHSR4XkvHqsJBgFVxBDnBgfS24JUvA/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 29,
        name: "Scooby-Doo! Moon Monster Madness",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1uCF6cq6_ZVy5TSNX2FRQAC923Q7qMW1J/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 30,
        name: "Scooby-Doo! and the Legend of the Vampire",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1V7dZ668NX5phvFK2jK_TnLH4ouoTSwxp/view?usp=drive_link",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 31,
        name: "Scooby-Doo and the Cyber Chase",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Yy740jq-YYGWMqLOMafB0ihcL11HVdO4/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 32,
        name: "Scooby-Doo and the Alien Invaders",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ESXgNjFYNYCwCsoMRxPRlZuhNNYaxZDz/view?usp=drive_link",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Mystery"]
    },
    {
        id: 33,
        name: "Scooby-Doo Goes Hollywood",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1GkXfdC_nRSW_7esZeydw59kPjHhc7m3z/view?usp=drive_link",
        author: "Unknown",
        year: 1979,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 34,
        name: "Five Nights at Freddy's",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1tyzXrXFux15AXpZxtiM61p1R1zO6NbSF/view",
        author: "Unknown",
        year: 2023,
        genre: ["Horror"]
    },
    {
        id: 35,
        name: "Five Nights At Freddy's 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/16qbI4SsI7sgv2osM_r6bGkNoj1gtjX6T/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Horror"]
    },
    {
        id: 36,
        name: "Willy Wonka & the Chocolate Factory",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1hYH5eFoapAh_9LJZwNREIta4hWBvBAdK/view",
        author: "Unknown",
        year: 1971,
        genre: ["Family", "Musical"]
    },
    {
        id: 37,
        name: "Oppenheimer",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1GLqywDPqfZSLmLAiKC8j2l0o52cAGP8S/view",
        author: "Unknown",
        year: 2023,
        genre: ["Drama", "History"]
    },
    {
        id: 38,
        name: "The Bad Guys",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Ep4I8JdvH8NlbcqxiNMA8c7U_UAOpewT/view",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 39,
        name: "The Bad Guys 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1V9yPZr0YlrSthlfU2Df3mgrs9Mcnok4q/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 40,
        name: "Barbie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1K88LvZ6q9KRwsdiVQ72Wrh5DQqWVLkd3/view",
        author: "Unknown",
        year: 2023,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 41,
        name: "Iron Man",
        cover: "https://www.dropbox.com/scl/fi/ia7uylbhw3lrkx2qczjdk/Iron_Man_-2008_film-_poster.jpg?rlkey=d1jlafqgohehies361s2rmmrt&st=67f204bk&dl=1",
        url: "https://drive.google.com/file/d/1etZlXVkk2dmSbB5m2J4EK80c7FggVF4V/view",
        author: "Unknown",
        year: 2008,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 42,
        name: "Iron Man 2",
        cover: "https://www.dropbox.com/scl/fi/uzk3a5tns2ddhvc8zg255/MV5BYWYyOGQzOGYtMGQ1My00ZWYxLTgzZjktZWYzN2IwYjkxYzM0XkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=jo9a7p4midx1ah0y2qw2fxidx&st=tvisen1p&dl=1",
        url: "https://drive.google.com/file/d/1u1glpdPyZvJ1MAgTrxAnTrS8Wvys3Bdt/view",
        author: "Unknown",
        year: 2010,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 43,
        name: "Iron Man 3",
        cover: "https://www.dropbox.com/scl/fi/n3rfvl45n1c77n6yz8dz9/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTgwNzM2NjcyOQ-._V1_FMjpg_UX1000_.jpg?rlkey=nfvtg4t9azcqwy58z5k7e6wpt&st=3doq8h5u&dl=1",
        url: "https://drive.google.com/file/d/1f7AlYvxrURwU7138fr2CzyTmN0qK43rp/view",
        author: "Unknown",
        year: 2013,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 44,
        name: "Teen Titans: Trouble in Tokyo",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1LZ4gHDxFw3OAbO55sfd0xDMyYTF_91sT/view",
        author: "Unknown",
        year: 2006,
        genre: ["Animation", "Action"]
    },
    {
        id: 45,
        name: "The Flash",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ApUHMkZM-j3vM-rSG-kvjk3KuvJNAsXp/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 46,
        name: "Who Framed Roger Rabbit",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/13qCLa-UbWgLKDkm5EYs7y3-n5NVx7-73/view",
        author: "Unknown",
        year: 1988,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 47,
        name: "Black Panther",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1wdUOiz7tI3R5vTz779h7CesAW5h0kUh1/view",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Adventure"]
    },
    {
        id: 48,
        name: "Diary of a Wimpy Kid",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Ue1CO7ytynvfWaucCDckWaH4smgpB28e/view",
        author: "Unknown",
        year: 2010,
        genre: ["Comedy", "Family"]
    },
    {
        id: 49,
        name: "Diary of a Wimpy Kid: Rodrick Rules",
        cover: "https://www.dropbox.com/scl/fi/uef6ksbtfp7y72rvu12j6/MV5BMTcxNDYwOTEzMl5BMl5BanBnXkFtZTcwOTA3MzY3NA-._V1_.jpg?rlkey=9bbc2hq3ibhndr6ce3lqlzsjv&st=8i3zzgnw&dl=1",
        url: "https://drive.google.com/file/d/1rKRsgdNioFs3rtkZai7Gz97FtAX0jdJ_/view",
        author: "Unknown",
        year: 2011,
        genre: ["Comedy", "Family"]
    },
    {
        id: 50,
        name: "Diary of a Wimpy Kid: Dog Days",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/0B6fv-OkwXRTzZ090UHlWcHY2dkk/view?resourcekey=0-TgoMzBEyMorySYhDqB9uGA",
        author: "Unknown",
        year: 2012,
        genre: ["Comedy", "Family"]
    },
    {
        id: 51,
        name: "Captain America: The Winter Soldier",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1TanQJC8ws1tk_dyW05HzfNtaBgBxKPPx/view?usp=drivesdk",
        author: "Unknown",
        year: 2014,
        genre: ["Action", "Thriller"]
    },
    {
        id: 52,
        name: "Ford v Ferrari",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1NPB0oCsIuiPAc471b_XOGDnchbCZ72yh/view",
        author: "Unknown",
        year: 2019,
        genre: ["Drama", "Sport"]
    },
    {
        id: 53,
        name: "Wicked",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1fG4xZ8p6mptdbf-Vji5rhlIoXeKG6Dcd/view",
        author: "Unknown",
        year: 2024,
        genre: ["Musical", "Fantasy"]
    },
    {
        id: 54,
        name: "Wicked: For Good",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/15_hovtVOgCS5m-YgrtbqE7l21Dbcm_Xg/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Musical", "Fantasy"]
    },
    {
        id: 55,
        name: "Minecraft: The Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1jpCB0o5aQI1pam7Eg4GW0VEGKi6z-RHB/view",
        author: "Unknown",
        year: 2025,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 56,
        name: "Mufasa: The Lion King",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1yQk-dgii93W2ZWfBxCORDQUj7bqzj7gr/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Drama"]
    },
    {
        id: 57,
        name: "The Wild Robot",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1_N9iHDAM3RbU2a0GTfgcNXDGuZDT_yZ-/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 58,
        name: "South Park: Joining the Panderverse",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/18WPSLAkLd7xTWJJonaCoRYKvkYJWw981/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 59,
        name: "Borderlands",
        cover: "https://www.dropbox.com/scl/fi/8qdlutuj9dos2w5thv1p5/MV5BMDhkMzQzZmQtOGQ1NS00Y2FhLTkzYjAtNWE1MmRiOWM1MjUzXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=mkoczxtg679bbzsldg7sp7xxc&st=j71a8fop&dl=1",
        url: "https://drive.google.com/file/d/1AgTOBADfQftPEIhiG8bRL2fkQsmIAmSb/view",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Comedy"]
    },
    {
        id: 60,
        name: "Terrifier",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1_pQ3kbz_a8l3B7SKfdP9dYQwKax0WHUD/view",
        author: "Unknown",
        year: 2016,
        genre: ["Horror"]
    },
    {
        id: 61,
        name: "Terrifier 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1_Jjo7rOcCkYt3UryVkV2XvTfrL4QvHTE/view",
        author: "Unknown",
        year: 2022,
        genre: ["Horror"]
    },
    {
        id: 62,
        name: "Terrifier 3",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1sAj4FqfEIzHPIW7ZUPGGSOFTTaJr5AGI/view",
        author: "Unknown",
        year: 2024,
        genre: ["Horror"]
    },
    {
        id: 63,
        name: "The Day The Earth Blew Up",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1EDmMpex-Xs1V9CT4J4UarVDEs0zRyLqt/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 64,
        name: "The Underdoggs",
        cover: "https://www.dropbox.com/scl/fi/2b3m0c5husuhwm7z3or74/Underdoggs_poster.jpg?rlkey=w8kfa8wqw5ffei7nkz6kcbg84&st=0068c08p&dl=1",
        url: "https://drive.google.com/file/d/18qSFllMJr4gLotZx7-XIhMxLXlU2l1UD/view",
        author: "Unknown",
        year: 2024,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 65,
        name: "Alien: Romulus",
        cover: "https://www.dropbox.com/scl/fi/rylalrbkjgfhm1et1eqyj/Alien_Romulus_2024_-poster.jpg?rlkey=w0i19ej1kt8ksp6botibr0pxf&st=thr689eu&dl=1",
        url: "https://drive.google.com/file/d/122SQiB6invgpsu7KpWiYbix5KPUW2WN4/view",
        author: "Unknown",
        year: 2024,
        genre: ["Horror", "Sci-Fi"]
    },
    {
        id: 66,
        name: "Migration",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1pV4ujRFH3wIRE0GPZAWeEMFmnLMzvwYE/view",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 67,
        name: "South Park: The End of Obesity",
        cover: "https://www.dropbox.com/scl/fi/2q2q6b6tnp6daku7yc28f/South_Park_The_End_of_Obesity.jpg?rlkey=auh8irc4fxnqjymulg9zstusw&st=m6cmq8av&dl=1",
        url: "https://drive.google.com/file/d/1k_Bk1E4vLdzymXcGOA92axzicOgmarFp/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 68,
        name: "Cocaine Bear",
        cover: "https://www.dropbox.com/scl/fi/vs19rooh55jdfkr25h6ak/MV5BMjg3MmNiNWQtOWI1OS00MjE2LWFhYzYtMWY0NWRhZmVkMGFiXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=xqxk9suonebgtlrf5iu3h482k&st=4l6miu3f&dl=1",
        url: "https://drive.google.com/file/d/1vrClp3nIYkdIBRPzZDxxq7ICIOWHioAh/view",
        author: "Unknown",
        year: 2023,
        genre: ["Comedy", "Thriller"]
    },
    {
        id: 69,
        name: "Detective Pikachu",
        cover: "https://www.dropbox.com/scl/fi/re37586v68y8y0qq7kyl0/-mon_Detective_Pikachu_teaser_poster.jpg?rlkey=zlwb1mjl98m4dppujehri1otx&st=grggi7r0&dl=1",
        url: "https://drive.google.com/file/d/1q5wcbuy536XQKTBAF7ImApMAlNMVHM5T/view",
        author: "Unknown",
        year: 2019,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 70,
        name: "Beavis and Butt-Head Do America",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1BTKq8RC65IOZVgI0VfdRekLzVY_SMKQ_/view?usp=sharing",
        author: "Unknown",
        year: 1996,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 71,
        name: "American Psycho",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1XLbBFM6yQ48V1yXIfrenbhpMyZeUryV7/view",
        author: "Unknown",
        year: 2000,
        genre: ["Drama", "Thriller"]
    },
    {
        id: 72,
        name: "Space Jam",
        cover: "https://www.dropbox.com/scl/fi/wgxc7i8ekj8frz6olu8vs/MV5BZGQ3ZDk0M2MtZDNmNi00OWE3LThiODUtMTU3NmVjMTA0ZGQyXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=ea7opi435qdmvz8cah9wjtz78&st=hkojq77k&dl=1",
        url: "https://drive.google.com/file/d/1K7_z3vNvLOBRMnxr7J0jYf-4FlLms70K/view",
        author: "Unknown",
        year: 1996,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 73,
        name: "Space Jam: A New Legacy",
        cover: "https://www.dropbox.com/scl/fi/wfctkpx9di9hx4gia76lc/SpaceJamANewLegacyOfficialPoster.jpg?rlkey=o5spkyzqumpwbtqa1643iugrz&st=66blryo7&dl=1",
        url: "https://drive.google.com/file/d/1v2xqKQcAvndfcqsctZH73NR2AjFXsrUr/view",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 74,
        name: "Interstellar",
        cover: "https://www.dropbox.com/scl/fi/51zml3kk8f9hfmy9ufie5/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc-._V1_.jpg?rlkey=1idesuay1es1a1z7aptgtife2&st=er19c5aa&dl=1",
        url: "https://drive.google.com/file/d/1rjx6-12dB11LWwj5jFEFX2QMuZiEVUFk/view",
        author: "Unknown",
        year: 2014,
        genre: ["Sci-Fi", "Drama"]
    },
    {
        id: 75,
        name: "Pixels",
        cover: "https://www.dropbox.com/scl/fi/hhdaaa8gx4qtat00bof0v/PixelsOfficialPoster.jpg?rlkey=86aiir0kfi10ezmlic6t1hkrf&st=uvu0hb1e&dl=1",
        url: "https://drive.google.com/file/d/1J0qrB84b2-uI9Trqk9rPRHZvPuH_gdOK/view",
        author: "Unknown",
        year: 2015,
        genre: ["Action", "Comedy"]
    },
    {
        id: 76,
        name: "South Park: Bigger, Longer & Uncut",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1lS4FEithc1bSHzfCW-Yt3cpeQOloaZBc/view",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 77,
        name: "South Park: Post Covid",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1w9f4WudGBkXyYTWReinBq7QqaWfHfZTo/view",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 78,
        name: "Piece by Piece",
        cover: "https://www.dropbox.com/scl/fi/6vjc3e5ujf65vz8pjwmqr/MV5BMjUxMjE2YWQtY2YwMS00MTdkLTg0ZWQtMTQ0NzExY2U4NGZkXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=dkxlz6xx9q1e25xo471ftmu7h&st=uy7apgbm&dl=1",
        url: "https://drive.google.com/file/d/1-jDMQ_cuszKjHUqWJJ8SykiHGTcsjlX6/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Documentary"]
    },
    {
        id: 79,
        name: "Deadpool",
        cover: "https://www.dropbox.com/scl/fi/s7etndvr7zq2fdl37lk3y/Deadpool_-2016_poster.png?rlkey=wz84wtyrxzyentatjkj8gueiz&st=w4a4xs8v&dl=1",
        url: "https://drive.google.com/file/d/17QTeEVPc-E4YsWm-tQ4toG-DpLefpx4E/view",
        author: "Unknown",
        year: 2016,
        genre: ["Action", "Comedy"]
    },
    {
        id: 80,
        name: "Deadpool 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1tF1C-2tktolFSAJaLG0C2sE_2sGyH3YI/view",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Comedy"]
    },
    {
        id: 81,
        name: "Tyler Perry's Madea's Big Happy Family",
        cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Madea%27s_Big_Happy_Family_Poster.jpg",
        url: "https://drive.google.com/file/d/1okgnOOn7fMk8JtNaePOZa9hU0CEuO_ox/view?usp=sharing",
        author: "Unknown",
        year: 2011,
        genre: ["Comedy"]
    },
    {
        id: 82,
        name: "Boo! A Madea Halloween",
        cover: "https://www.dropbox.com/scl/fi/c88abvzgfpnrrhgi0pljd/MV5BMTUxNTE2MTM0NF5BMl5BanBnXkFtZTgwNjE5MTIxMDI-._V1_QL75_UX190_CR0-2-190-281_.jpg?rlkey=zefa7tpxmtspn5twumoxqwf09&st=4tcxaquz&dl=1",
        url: "https://drive.google.com/file/d/12b-Jxqp6kiWuFeCOYbTXgWi5ka3B7kGI/view",
        author: "Unknown",
        year: 2016,
        genre: ["Comedy", "Horror"]
    },
    {
        id: 83,
        name: "Madea's Destination Wedding",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Mb8GuPdo9NaUOYnY5Cqyi9myVAydYtRl/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Comedy"]
    },
    {
        id: 84,
        name: "Smile",
        cover: "https://www.dropbox.com/scl/fi/sl21795mdwqbfm3oxbru2/MV5BNTlmOWI2ZDctZDM4Ny00YzljLTlmYTAtOTgxZmI5MGU1Yzk3XkEyXkFqcGc-._V1_.jpg?rlkey=jg1hco0h14c35hz7imhi01c8e&st=mqc6sp59&dl=1",
        url: "https://drive.google.com/file/d/1J3-6Qgkhk0MPBpsTvgQp6O209EVL2iJH/view",
        author: "Unknown",
        year: 2022,
        genre: ["Horror"]
    },
    {
        id: 85,
        name: "Smile 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1PeOUtsdJfWRqJvGwBhRmeBc2fLiQyTJY/view",
        author: "Unknown",
        year: 2024,
        genre: ["Horror"]
    },
    {
        id: 86,
        name: "Twisters",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/12UeDOq7tCcbfvEo_EtzkL3Gxho45UOl4/view",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Thriller"]
    },
    {
        id: 87,
        name: "A Quiet Place: Day One",
        cover: "https://www.dropbox.com/scl/fi/ovgpyo48x22x25b70a7ir/MV5BMDdjZTljZWMtMDIwNi00MTA5LTkxZmItNmY0NDA3ZDM0N2M2XkEyXkFqcGc-._V1_.jpg?rlkey=l2w7gf7rxl0t1l0bepzxutb0k&st=983ceec4&dl=1",
        url: "https://drive.google.com/file/d/1YEt3ZJoK6SeV0CjH6vVJJvoKQ6oyStpE/view",
        author: "Unknown",
        year: 2024,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 88,
        name: "Cars",
        cover: "https://www.dropbox.com/scl/fi/1z3ciqnpzudaguwqbc2ep/Cars_2006.jpg?rlkey=07pig9tiqvr202kzsri46j8s6&st=ntj611p6&dl=1",
        url: "https://drive.google.com/file/d/106N7zd611ShtPMOx97XwFSxkg8theQLN/view",
        author: "Unknown",
        year: 2006,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 89,
        name: "Cars 2",
        cover: "https://www.dropbox.com/scl/fi/larb382c1rnyx5it18b9y/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA-._V1_FMjpg_UX1000_.jpg?rlkey=78pemjyc1k7o6yrjberja0jfi&st=3bavzhu9&dl=1",
        url: "https://drive.google.com/file/d/1YinG1kmgSqWI5kQwfDsQO6vK1xzM6K7o/view",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 90,
        name: "Cars 3",
        cover: "https://www.dropbox.com/scl/fi/kt80faj4j7o5fl3avfj7g/p_cars3_19643_3ab8aca1.jpg?rlkey=g3zz93nam2stp67o5t0bcw2ki&st=w98zvdzw&dl=1",
        url: "https://drive.google.com/file/d/1AyxjkNdXzke5aY3GnOwAAabrsEc4msXS/view",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 91,
        name: "The Lego Ninjago Movie",
        cover: "https://www.dropbox.com/scl/fi/5aq3m32t1agz36rjp2gnk/images.jpg?rlkey=tfi4h23k5ebsi5v3tumxnbbp5&st=3a54jjt2&dl=1",
        url: "https://drive.google.com/file/d/1wQIj-ZVsTxgTktceYFgyFei_XX-eXAt-/view",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Action"]
    },
    {
        id: 92,
        name: "Turbo",
        cover: "https://www.dropbox.com/scl/fi/fzb58obw6giaozhgrr3ua/MV5BMTA4NTgwMjM5MzheQTJeQWpwZ15BbWU3MDg2ODA1ODk-._V1_.jpg?rlkey=ulx0gvgwgmuibyjxzcu9pgcae&st=xjmks8oi&dl=1",
        url: "https://drive.google.com/file/d/1IgeNjhQouNWwUnd6a2Qb0r6XmIjOxdfA/view?usp=sharing",
        author: "Unknown",
        year: 2013,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 93,
        name: "Us",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ij57VuW6Bjxq713L53oKgAIx4iR8yoVB/view",
        author: "Unknown",
        year: 2019,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 94,
        name: "Transformers One",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/10cwJT2ssiHVBeRWMdEVHKt0bhk8PVOHY/view",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Action"]
    },
    {
        id: 95,
        name: "Shrek",
        cover: "https://www.dropbox.com/scl/fi/6ah5ai9owpyj3zgunha1b/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=ycbj9vjrkgfsrarppveqzc056&st=6dcqef89&dl=1",
        url: "https://drive.google.com/file/d/1ps_r1YV8y5h93_mUu4OFlPVVkPzT0Rui/view",
        author: "Unknown",
        year: 2001,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 96,
        name: "Mortal Kombat",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1temXH9CFHCd7gjIsu8TMCFiqxMy8jXfj/view",
        author: "Unknown",
        year: 2021,
        genre: ["Action", "Fantasy"]
    },
    {
        id: 97,
        name: "Major Payne",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1HOBF8qYxnEXjbjouFThL4B3ttoBiNUOY/view",
        author: "Unknown",
        year: 1995,
        genre: ["Comedy"]
    },
    {
        id: 98,
        name: "Thor: Ragnarok",
        cover: "https://www.dropbox.com/scl/fi/7xrunnfnzgp8ro1orpqg1/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI-._V1_.jpg?rlkey=1lkvruxp6qfp06euoisuc2fmj&st=7qu7n920&dl=1",
        url: "https://drive.google.com/file/d/1RqAtiuHbEphQTki4GolLXncnpboseZmv/view?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Comedy"]
    },
    {
        id: 99,
        name: "Zootopia",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1HYeIrbf8A-vfvJsvYP59AQzG9l8nt03h/view",
        author: "Unknown",
        year: 2016,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 100,
        name: "Zootopia 2",
        cover: "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/file/d/1-PX9OZ8C3YrvjFtGhnH-YRO8kz75chAW/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 101,
        name: "The SpongeBob SquarePants Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/11mVla6Y3qLX4pplfnxMavSczJ200_8dl/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 102,
        name: "Saving Bikini Bottom: The Sandy Cheeks Movie",
        cover: "https://resizing.flixster.com/YPxmePH0javyxa_6obXzzGlwgGM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RkOTdlZjJmLTQ0M2QtNDE2Yy04ZWYyLWZjOTdiOGRmMDk4My5qcGc=",
        url: "https://drive.google.com/file/d/17fAM9sipu3BPElFpqFrG3ukYahbUEZQJ/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 103,
        name: "Plankton: The Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1GhJnl35m05XYpjooWoxeg0lw54VpjCEx/view?usp=drive_link",
        author: "Unknown",
        year: 2025,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 104,
        name: "Superman",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1nO646VaJQBN725tPVe9TLFnLBFPJ-jbL/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Action", "Adventure"]
    },
    {
        id: 105,
        name: "Avengers: Infinity War",
        cover: "https://www.dropbox.com/scl/fi/n0m9lddipro8al8at1pp5/Avengers_Infinity_War_poster.jpg?rlkey=y8pm491al2jezeuk5g5velk2b&st=gez6ur5v&dl=1",
        url: "https://drive.google.com/file/d/1zpl7Dngm7ESW_yLZvcQMm9AhmR1izyus/view?usp=sharing",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Adventure"]
    },
    {
        id: 106,
        name: "Avengers: Endgame",
        cover: "https://www.dropbox.com/scl/fi/6960dcl1s0tn4g27f0oim/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM-._V1_FMjpg_UX1000_.jpg?rlkey=c7je20mvdls88tyr6rv5cpvqc&st=j1chpl50&dl=1",
        url: "https://drive.google.com/file/d/1bqXaAnYlzvDN8Ic21OTHu7mQ2eBsEBha/view?usp=sharing",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Adventure"]
    },
    {
        id: 107,
        name: "Spider-Man",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1sqWGrmbGc5lBmoFbtfMSIaqb60eXppvF/view",
        author: "Unknown",
        year: 2002,
        genre: ["Action", "Adventure"]
    },
    {
        id: 108,
        name: "Spider-Man 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1yV7ZmEkfOVOLdV51wN6vSeDf3_tQqBvf/view",
        author: "Unknown",
        year: 2004,
        genre: ["Action", "Adventure"]
    },
    {
        id: 109,
        name: "Spider-Man 3",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ExTfRPC3YGmCSg8W2uFSYkUMw7a1vcTR/view",
        author: "Unknown",
        year: 2007,
        genre: ["Action", "Adventure"]
    },
    {
        id: 110,
        name: "The Amazing Spider-Man",
        cover: "https://www.dropbox.com/scl/fi/y9jzf700ot68a4oa46p0k/The_Amazing_Spider-Man_-film-_poster.jpg?rlkey=haw4kfono86zfbqfew9p70n73&st=qj4ouuh9&dl=1",
        url: "https://drive.google.com/file/d/1Xf8xZcY3kneGFln8NPsQMt7CLtmGhEeD/view",
        author: "Unknown",
        year: 2012,
        genre: ["Action", "Adventure"]
    },
    {
        id: 111,
        name: "The Amazing Spider-Man 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1hnYa-Pkxqu6Qhhp56QXE34Rnctia_3yw/view",
        author: "Unknown",
        year: 2014,
        genre: ["Action", "Adventure"]
    },
    {
        id: 112,
        name: "Spider-Man: Homecoming",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1jGHx1i3EqHKmQmE42APmxUk4bYHrINQ_/view",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Adventure"]
    },
    {
        id: 113,
        name: "Spider-Man: Far From Home",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1vPNUTkubVVmguVfwstRQm5xgbkRRii6z/view",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Adventure"]
    },
    {
        id: 114,
        name: "Spider-Man: No Way Home",
        cover: "https://www.dropbox.com/scl/fi/nqpads9ou4kjb9xnendrf/Spider-Man_No_Way_Home_poster.jpg?rlkey=pi9wlrjkdfjtmdeali6yszqos&st=la942sha&dl=1",
        url: "https://drive.google.com/file/d/1mUF4PcT0_ZKofV0KHHdjxgTQdhF2BliQ/view",
        author: "Unknown",
        year: 2021,
        genre: ["Action", "Adventure"]
    },
    {
        id: 115,
        name: "Venom",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1iRN197XeJCQnZGza599ZTXsayEG1mdRB/view",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 116,
        name: "Venom: Let There Be Carnage",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1N6kL0SF4qR6wFpwfGIZUZjFnz3lQDGGz/view",
        author: "Unknown",
        year: 2021,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 117,
        name: "Toy Story",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1fW6Ov5NIaRh4h78-qBpWeln_Vs9oEXOQ/view?usp=sharing",
        author: "Unknown",
        year: 1995,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 118,
        name: "Toy Story 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1k3RVDc_Vah1H9lFsXQZJ6mE3KqdDcK_T/view?usp=sharing",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 119,
        name: "Toy Story 3",
        cover: "https://www.dropbox.com/scl/fi/xuu1o6pgj1r6o6udwz937/Toy_Story_3_poster.jpg?rlkey=6led78gy5scox91s8sjmtb6eu&st=ysr3sas7&dl=1",
        url: "https://drive.google.com/file/d/12OyWGGokKPPKQLtjsLXB42q6acvLV7qt/view?t=1",
        author: "Unknown",
        year: 2010,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 120,
        name: "Toy Story 4",
        cover: "https://www.dropbox.com/scl/fi/61vtpt07aykw241c87ns2/Toy_Story_4_poster.jpg?rlkey=ytpwdaf9e3o8hxf08m4fq4v3e&st=u7tqekuw&dl=1",
        url: "https://drive.google.com/file/d/1-3BhV5qghqkqn2-xvlawSEvFNLvejMpn/view",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 121,
        name: "Top Gun: Maverick",
        cover: "https://www.dropbox.com/scl/fi/7g76mxl68ag5l8mq166aw/Top_Gun_Maverick_Poster.jpg?rlkey=w8z8dhi6n5c3p44emoaec1b8r&st=btx7kn8s&dl=1",
        url: "https://drive.google.com/file/d/1nmGDHktR96jkaYl2lf-d-XTtNtFh4PTv/view",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Drama"]
    },
    {
        id: 122,
        name: "A Goofy Movie",
        cover: "https://www.dropbox.com/scl/fi/7i0du953nx9zzvdzc1ess/A_Goofy_Movie_poster.jpg?rlkey=jj3yz1rpf0mpq256lzjwh883g&st=daz6j3u6&dl=1",
        url: "https://drive.google.com/file/d/1ify_EMaQW-ZAn2F0STztn2AGU-jE7aHL/view",
        author: "Unknown",
        year: 1995,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 123,
        name: "An Extremely Goofy Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/14ksjNU4K06d4hmBgURx_Oh9JD_Nzpb5I/view?usp=sharing",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 124,
        name: "Home Alone",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1l7dSSnBmw9Fnku5lxl7zYk7CsQa4JU3d/view",
        author: "Unknown",
        year: 1990,
        genre: ["Comedy", "Family"]
    },
    {
        id: 125,
        name: "Home Alone 2: Lost in New York",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1sH3RXs-OiYr7ROKCtmB5miWVpX9G2b4Q/view",
        author: "Unknown",
        year: 1992,
        genre: ["Comedy", "Family"]
    },
    {
        id: 126,
        name: "Scream",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1pPzT8Ri09tg11w_9SPBhtDQuq7KH26XH/view?usp=sharing",
        author: "Unknown",
        year: 1996,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 127,
        name: "Scream 2",
        cover: "https://www.dropbox.com/scl/fi/t5em8vl7q6zo67ei3da7i/Scream_2.jpg?rlkey=8dxv14zuvsawd2665nu6ikyts&st=a703pf27&dl=1",
        url: "https://drive.google.com/file/d/16TD5egSCItF4mL1rcPS6n5oDrOTpUbGT/view?usp=sharing",
        author: "Unknown",
        year: 1997,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 128,
        name: "Scream 3",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1i79Tg-esuzP4KBdyC4DUJsh_9XpWJgpY/view?usp=sharing",
        author: "Unknown",
        year: 2000,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 129,
        name: "Scream 4",
        cover: "https://www.dropbox.com/scl/fi/qjyolk2j5vy7pgr3cllty/Scream4Poster.jpg?rlkey=juk3t9jpxwergn0dhfk89h4oq&st=j3eym3f2&dl=1",
        url: "https://drive.google.com/file/d/11Nleq_MM9hhFYFxw_jI9YVAWmUxdjT4A/view?usp=sharing",
        author: "Unknown",
        year: 2011,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 130,
        name: "Scream (2022)",
        cover: "https://www.dropbox.com/scl/fi/eno7nijxi6i5g5tjzp7cf/Scream2022film.jpg?rlkey=x1gndjloxxc2nwefhdn6k84t0&st=4dczrs67&dl=1",
        url: "https://drive.google.com/file/d/1WGU_asa-pD9tkZI5YK72qsAPksvkkDJN/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 131,
        name: "Scream VI",
        cover: "https://www.dropbox.com/scl/fi/tpfcjmpt2usr17k9mjbk5/Scream_VI_poster.jpg?rlkey=zx8f5y3vqt682c0j3kj23e5np&st=kglhr7rb&dl=1",
        url: "https://drive.google.com/drive/folders/1hkelXNLx1nac4EhdU1LZyQn4y_z8zkiP",
        author: "Unknown",
        year: 2023,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 132,
        name: "It",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1BhQDbp8lXDwS-Q-pq4axufeZI-5TklpR/view?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Horror"]
    },
    {
        id: 133,
        name: "It Chapter Two",
        cover: "https://www.dropbox.com/scl/fi/g06sw6lge2qbztqff41n3/ItChapterTwoTeaser.jpg?rlkey=yp9ww1udes4o21s51ksj6e9s2&st=qml8wyu0&dl=1",
        url: "https://drive.google.com/file/d/1oKaFEyWb5bq2_y9mU-RwA9Tt9bfSJys6/view?usp=sharing",
        author: "Unknown",
        year: 2019,
        genre: ["Horror"]
    },
    {
        id: 134,
        name: "The Nun",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1f54gZFt1PT6TllWwa-5SjtkRuOITxLNs/view?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Horror"]
    },
    {
        id: 135,
        name: "Beavis and Butt-Head Do the Universe",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/18Y0uInnJ7cNwwGsbJWlH3zPr4LtccmyR/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 136,
        name: "Henry Danger: The Movie",
        cover: "https://www.dropbox.com/scl/fi/c64653mht2lmd8goha7lx/Henry_Danger_The_Movie_Poster.png?rlkey=7vlfng51om8s5nybcfr4qo1o4&st=1leczcr5&dl=1",
        url: "https://drive.google.com/file/d/1siTn1l8gYcgh3nbITJVAiCUZrDdQG-wD/view?usp=sharing",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Comedy"]
    },
    {
        id: 137,
        name: "Gladiator",
        cover: "https://www.dropbox.com/scl/fi/qqdmx1cyflflkm3cn20mt/Gladiator_-2000_film_poster.png?rlkey=t1smwff0rwqlugfwzbjwks909&st=q957bip0&dl=1",
        url: "https://drive.google.com/file/d/1Hd90lotAZQPfB8rfJ219MTTe9xy59TZ0/view",
        author: "Unknown",
        year: 2000,
        genre: ["Action", "Drama"]
    },
    {
        id: 138,
        name: "Gladiator II",
        cover: "https://www.dropbox.com/scl/fi/8rg40mmttcfv3nt8sxnfj/Gladiator_II_-2024-_poster.jpg?rlkey=44r5l4unuzjq0n0mreqhvmq62&st=8h0rbkaf&dl=1",
        url: "https://drive.google.com/file/d/1Ji_gULD2I1eReo2_mf9_0EMKYy0GwFHC/view",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Drama"]
    },
    {
        id: 139,
        name: "Minions",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Wz1VPwDHWA3t8n54e-YpRM18ad1mQuSG/view",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 140,
        name: "Minions: The Rise of Gru",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1lrJNkBON3H_5n8lF3WKCaUT6AUl9qbh4/view",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 141,
        name: "Minions and More 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1SH1liTGeW3xZT37iIIzNmyIyqNZVEaWT/view?usp=drive_link",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 142,
        name: "Despicable Me 4",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1siki1wYP3LpfjFpUT8Z9lJuJzl7MdBhX/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 143,
        name: "M3GAN",
        cover: "https://www.dropbox.com/scl/fi/b8g18123piymxit8vk7e7/M3GAN_Poster.jpg?rlkey=0awe2343tw0v6zwnfyuu9tmpi&st=ezun8tdm&dl=1",
        url: "https://drive.google.com/file/d/1MMl1EYr_OYdc9R-va2IIdPUmkqcj1UpR/view",
        author: "Unknown",
        year: 2022,
        genre: ["Horror", "Sci-Fi"]
    },
    {
        id: 144,
        name: "The Little Rascals",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1eiY3r9KqM3Dmjtq38eRtR_eJFSGeciPz/view",
        author: "Unknown",
        year: 1994,
        genre: ["Comedy", "Family"]
    },
    {
        id: 145,
        name: "Ant-Man and the Wasp: Quantumania",
        cover: "https://www.dropbox.com/scl/fi/zz0449lgrqllpbf0j2e52/Blue_Beetle_-film-_poster.jpg?rlkey=gnk91admj7ixeizr90iytu6es&st=r2rx3fhc&dl=1",
        url: "https://drive.google.com/file/d/1AW3Zm8256tzZ-37lmgYmIGse4knu8IdA/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 146,
        name: "Blue Beetle",
        cover: "https://www.dropbox.com/scl/fi/zz0449lgrqllpbf0j2e52/Blue_Beetle_-film-_poster.jpg?rlkey=gnk91admj7ixeizr90iytu6es&st=r2rx3fhc&dl=1",
        url: "https://drive.google.com/file/d/1T2XMXtDAlohPcGdi-u2p9zXF9Os9zkY1/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 147,
        name: "Home",
        cover: "https://www.dropbox.com/scl/fi/i5bn04vm02d7coqusm36z/Home_-2015_film-_poster.jpg?rlkey=978810ebdduqp3vgezwlnqdcd&st=xrmea84x&dl=1",
        url: "https://drive.google.com/file/d/1PvzOPEZp09GjSj3PEDuxb0Y1ceQvo1AX/view",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 148,
        name: "Wreck-It Ralph",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/11NQ1_ecO2FTIhofVPIfakshgSBnR6ngC/view",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 149,
        name: "Ralph Breaks the Internet",
        cover: "https://www.dropbox.com/scl/fi/hvxsrjrr05kecylmbj3qz/Ralph_Breaks_the_Internet_-2018_film_poster.png?rlkey=6xqj9shaw6rivkmt2fpq1kyf3&st=1blcnhgb&dl=1",
        url: "https://drive.google.com/file/d/1MQMWT5mYBF07GXiqgzAU8h9BcFe0phu9/view",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 150,
        name: "White Men Can't Jump (1992)",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1MXghG0Dnn9XJ9iSGE6-bIuM7vysIxBfy/view",
        author: "Unknown",
        year: 1992,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 151,
        name: "The Lorax",
        cover: "https://www.dropbox.com/scl/fi/rsjcbqx48x9w7ixg7lyf8/Lorax_teaser_poster.jpg?rlkey=lg5s470yi2xadh8mml1v0x4d8&st=drq4ny4a&dl=1",
        url: "https://drive.google.com/file/d/1Kl4ieKALPoEYbllsRy7V8AYiPtJATg7W/view?usp=sharing",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 152,
        name: "White Men Can't Jump (2023)",
        cover: "https://www.dropbox.com/scl/fi/yunmhoma6lr4alo8nemvf/White_men_cant_jump_2023.png?rlkey=lb2lg4hgnd17k6fobgcnsbdiq&st=5kl93v1y&dl=1",
        url: "https://drive.google.com/file/d/1-WrSZaYE3Sq_bHifzyd4UJP7tc6Ea0Ur/view",
        author: "Unknown",
        year: 2023,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 153,
        name: "The Batman",
        cover: "https://www.dropbox.com/scl/fi/006blxoep735f1xsfo2ty/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc-._V1_FMjpg_UX1000_.jpg?rlkey=e2wjbx8jiys52k425mdzus6nv&st=4mj0y56a&dl=1",
        url: "https://drive.google.com/file/d/16si_yvGyZn5mgvNIHil5xXOR3I8RaTKb/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Crime"]
    },
    {
        id: 154,
        name: "Back to the Future",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1uF72lGglIGHt-bkPY_PQXcrk1ja0JzZ7/view?usp=sharing",
        author: "Unknown",
        year: 1985,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 155,
        name: "Back to the Future Part II",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1vmA2LTkSzbtUJve8TTy2UVkPAfHMtGwK/view",
        author: "Unknown",
        year: 1989,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 156,
        name: "Back to the Future Part III",
        cover: "https://www.dropbox.com/scl/fi/kyoxnwx23ejm34pthhm1b/Back_to_the_Future_Part_III.jpg?rlkey=4k8dm8enjm4smo56sg8e4r0fx&st=r744gwut&dl=1",
        url: "https://drive.google.com/file/d/16A4hzHFTcNduq6F-u4zQw7iTha5aEKD-/view",
        author: "Unknown",
        year: 1990,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 157,
        name: "Guardians of the Galaxy Vol. 3",
        cover: "https://www.dropbox.com/scl/fi/kdvxh0289yv6sfj3qgkbu/Guardians_of_the_Galaxy_Vol._3_poster.jpg?rlkey=j8wetwdey9c1zrzbmfbzoizs5&st=mqqx42d2&dl=1",
        url: "https://drive.google.com/file/d/1pFavPs7Mi9rx_BrAjxbeHNWg7ClAB2_K/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Adventure"]
    },
    {
        id: 158,
        name: "The Dark Knight",
        cover: "https://www.dropbox.com/scl/fi/dlbt4rw3oasxpw4dit6sy/The_Dark_Knight_-2008_film.jpg?rlkey=5anaankzjrc3julp9lsf8eeaz&st=iq502ya5&dl=1",
        url: "https://drive.google.com/file/d/1CZvw1MgSLVQR9Z9L8qpl8j1oI7DnMDWr/view",
        author: "Unknown",
        year: 2008,
        genre: ["Action", "Crime"]
    },
    {
        id: 159,
        name: "The Godfather",
        cover: "https://www.dropbox.com/scl/fi/sf7zqkmwszilmkiktx1a3/Godfather_ver1.jpg?rlkey=u6alzbuee2twjksjfy2acjayi&st=gyhdwcpr&dl=1",
        url: "https://drive.google.com/file/d/1xvoWT4fa3OGjov7mxBj3Geou3iinPvE2/view?usp=sharing",
        author: "Unknown",
        year: 1972,
        genre: ["Crime", "Drama"]
    },
    {
        id: 160,
        name: "The Godfather Part II",
        cover: "https://www.dropbox.com/scl/fi/uotecfms8g3m4i6vw986k/Godfather_part_ii.jpg?rlkey=ygj4hkmqaj2buueemawt55kok&st=2fkod7ay&dl=1",
        url: "https://drive.google.com/file/d/1N_J07djJSdfRoykvlxPUariYa45nfKff/view?usp=sharing",
        author: "Unknown",
        year: 1974,
        genre: ["Crime", "Drama"]
    },
    {
        id: 161,
        name: "The Incredibles",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg/250px-The_Incredibles_%282004_animated_feature_film%29.jpg",
        url: "https://drive.google.com/file/d/1XZrELbZbBqHShrCiPr4I4_pmOeT_gvwY/view",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Action"]
    },
    {
        id: 162,
        name: "Incredibles 2",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Incredibles_2_%282018_animated_film%29.jpg/250px-Incredibles_2_%282018_animated_film%29.jpg",
        url: "https://drive.google.com/file/d/1XZ0pSe4bccOpJeF_VkXhkOhxQ3Tzp8RB/view",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Action"]
    },
    {
        id: 163,
        name: "Yo-kai Watch Movie: It's the Secret of Birth, Meow!",
        cover: "https://upload.wikimedia.org/wikipedia/en/5/58/Yo-Kai_Watch_Tanj%C5%8D_no_Himitsu_da_Nyan%21_poster.jpeg",
        url: "https://drive.google.com/drive/folders/1zT6oqWBTJUpYfkU4ocRKtnc_UEcD0KSc?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation"]
    },
    {
        id: 164,
        name: "Yo-kai Watch the Movie - The Great King Enma and the Five Tales, Meow!",
        cover: "https://upload.wikimedia.org/wikipedia/en/0/04/Eiga_Yo-Kai_Watch_Enma_Daioh_to_Itsutsu_no_Monogatari_da_Nyan%21_poster.jpeg",
        url: "https://drive.google.com/drive/folders/1HT7fYeNLZznNJ1f2ruaRk9Q2pNZnQ7FZ?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation"]
    },
    {
        id: 165,
        name: "Yo-Kai Watch: the Movie: The Flying Whale and the Grand Adventure of the Double Worlds, Meow!",
        cover: "https://m.media-amazon.com/images/M/MV5BYWRiMmUwMTAtYjEzYi00NDQwLTk5YTUtMDQ1MWEyMzkxNThhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://drive.google.com/drive/folders/1Ue0xhF-YhUtgu42DsJETbyJ0KxGlWaqi?usp=sharing",
        author: "Unknown",
        year: 2016,
        genre: ["Animation"]
    },
    {
        id: 166,
        name: "Yo-kai Watch Shadowside: The Return of the Oni King!",
        cover: "https://livedoor.sp.blogimg.jp/youkaijinjya/imgs/6/8/6893b107.jpg",
        url: "https://drive.google.com/drive/folders/1ITSWePMRNo5fqIRmpDm8w9BC98K0ul0S?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Animation"]
    },
    {
        id: 167,
        name: "Yo-kai Watch the Movie: Forever Friends",
        cover: "https://m.media-amazon.com/images/M/MV5BNDhiOTZmMDItODYwYy00OGRkLThiN2QtZTlkN2M3YzMyMzNjXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/drive/folders/1oyYc6a_zBF-ah7RijEoWgSrOyQcYj3KT?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Animation"]
    },
    {
        id: 168,
        name: "Yo-kai Watch Jam: Yo-kai Academy Y - Can a Cat Be a Hero?",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1agaUOrpagc2qgxTBQirz086vP1RlFF6G/view?usp=sharing",
        author: "Unknown",
        year: 2019,
        genre: ["Animation"]
    },
    {
        id: 169,
        name: "Pokémon: The First Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1_5PiiaO_lwVMh3_4Px-TU0modiH11V8r/view",
        author: "Unknown",
        year: 1998,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 170,
        name: "Pokémon The Movie 2000",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1AoToS8Ettg_wVvjDxQz3BiWLu-ewi6RG/view?usp=drive_link",
        author: "Unknown",
        year: 1999,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 171,
        name: "Pokémon 3: The Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/13fTi-G4RAShFYX_UK0GMP4byLOjL8Tzf/view?usp=drive_link",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 172,
        name: "Pokémon 4Ever",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1BE--u5k8B7YLOuAhwm-HV2kjy2cchfSC/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 173,
        name: "Pokémon Heroes",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1W98n3aU8Ad4PDHe9Z_1DzxvWy3i2jSR4/view?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 174,
        name: "Pokémon: Jirachi, Wish Maker",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1yrnL1o47TUJrs37KXj6XwdwuJMwig5Yg/view?usp=drive_link",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 175,
        name: "Pokémon: Destiny Deoxys",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/10n-r278IQVFulwHRVZSoZ8QHYTLpR0T5/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 176,
        name: "Pokémon: Lucario and the Mystery of Mew",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1DGWSLLeneKVXA6F9U9J7AbzA7iGpXywA/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 177,
        name: "Pokémon: Giratina & the Sky Warrior",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1xvRPznwbkzDZMSHDFr-R4JLpvH45jR9g/view?usp=drive_link",
        author: "Unknown",
        year: 2008,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 178,
        name: "Pokémon: Black - Victini and Reshiram",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ONsADI2D1QtmyFpyW4zIo8zFDBrO4OL2/view?usp=drive_link",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 179,
        name: "Pokémon: White - Victini and Zekrom",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1p2abgfDqQ-5eDtoKU0A_TCApI0SIaPQ6/view?usp=drive_link",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 180,
        name: "Pokémon the Movie: Diancie and the Cocoon of Destruction",
        cover: "https://m.media-amazon.com/images/M/MV5BMTY2OTc4NTU1OF5BMl5BanBnXkFtZTcwMTg0MzI1MQ@@._V1_FMjpg_UX1000_.jpg",
        url: "#",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 181,
        name: "Pokémon: Hoopa and the Clash of Ages",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1aH2Ivp60TpCGVc8RcXpf4-ywN4GICKEa/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 182,
        name: "Pokémon the Movie: Volcanion and the Mechanical Marvel",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1LtS0Qupkv4L3aYFoPXSdEgYiL0VF0FIg/view?usp=drive_link",
        author: "Unknown",
        year: 2016,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 183,
        name: "Pokémon the Movie: I Choose You!",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1UKCK7zdXb374ZiDB-79zubOVtBU-8Q2D/view?usp=drive_link",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 184,
        name: "Pokémon the Movie: The Power of Us",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1H6OdAhiap0D_T5ayTNy_Z8DZTHhU8-lw/view?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 185,
        name: "Pokémon: Mewtwo Strikes Back Evolution",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/17faKYkcJ9wTp2ZWXx9w-s0oC8603ukZ_/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 186,
        name: "Pokémon Detective Pikachu",
        cover: "https://encrypted-tbn0.gstati...(truncated)...",
        url: "#",
        author: "Unknown",
        year: 2019,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 187,
        name: "Beetlejuice",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "#",
        author: "Unknown",
        year: 1988,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 188,
        name: "Beetlejuice Beetlejuice",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1OsCtW4NUV94utDNxmFejUFoH6euf8Ind/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 189,
        name: "Birds of Prey",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1AShi8tLLzbPiPO6vDokf8ew-qBbzh5Pb/view?usp=sharing",
        author: "Unknown",
        year: 2020,
        genre: ["Action", "Comedy"]
    },
    {
        id: 190,
        name: "Boyz n the Hood",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1fCv2dJuy8k_NQWAxbNRxqW0_zKetF-uy/view",
        author: "Unknown",
        year: 1991,
        genre: ["Drama", "Crime"]
    },
    {
        id: 191,
        name: "The Blackening",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1VBG7WXqeiZ3BSvPuWUPCL1_iF9znvPI5/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Comedy", "Horror"]
    },
    {
        id: 192,
        name: "The Black Phone",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/140S8bCV6Ht2WticzegM_jfRayS2_Mvn_/view?usp=sharing",
        author: "Unknown",
        year: 2021,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 193,
        name: "Coraline",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1TFiL16cNmQmG5pSi-s6od4xgymFqK1kJ/view",
        author: "Unknown",
        year: 2009,
        genre: ["Animation", "Fantasy"]
    },
    {
        id: 194,
        name: "Creed",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1w9nVBGOKDax-xCr-caqekW4hcjRUQWZA/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Drama", "Sport"]
    },
    {
        id: 195,
        name: "Creed II",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1KnW-KW6LV-fH0S0R_2sbsEKkKhSFK-OP/view",
        author: "Unknown",
        year: 2018,
        genre: ["Drama", "Sport"]
    },
    {
        id: 196,
        name: "Creed III",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1j8pGyNx9PHk_Gicns9JlDaX82qBIi1_m/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Drama", "Sport"]
    },
    {
        id: 197,
        name: "Coco",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/194M4dGCwh1hTxVM1-_axnLSdt4trnbK2/view?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 198,
        name: "Child's Play",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1FPO2K8Oqb1O3qm1qb57NhZHhaGCvQjAz/view?usp=sharing",
        author: "Unknown",
        year: 1988,
        genre: ["Horror"]
    },
    {
        id: 199,
        name: "Corpse Bride",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1AHqrYm4cItyiEquPHJV5z3H81Cc0cCfI/view?usp=sharing",
        author: "Unknown",
        year: 2005,
        genre: ["Animation", "Fantasy"]
    },
    {
        id: 200,
        name: "Captain Underpants: The First Epic Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1BW7yv_y4uk99Nsjbc--z1beQ_bYYmUXk/view?usp=share_link",
        author: "Unknown",
        year: 2017,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 201,
        name: "Dungeons & Dragons: Honor Among Thieves",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1iX6QbaV3Oi_yGDvqRcFvrJ4_gzIOisnT/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Adventure"]
    },
    {
        id: 202,
        name: "Descendants: The Rise of Red",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/14uIYHn4xepm1GLF2USxyBkUE6nQfueoE/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Adventure", "Comedy"]
    },
    {
        id: 203,
        name: "Dune: Part Two",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/14VeNSqVtt5gcibZOfjPcjkBoasPrpiEG/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Drama"]
    },
    {
        id: 204,
        name: "The Mighty Ducks",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1MKL3dbjVCDH4cmnPtBoT8SeQeoK8bRYN/view?usp=drive_link",
        author: "Unknown",
        year: 1992,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 205,
        name: "D2: The Mighty Ducks",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1xqucoWKrHYKgkPtIH504nV_QWrezUcC9/view?usp=drive_link",
        author: "Unknown",
        year: 1994,
        genre: ["Comedy", "Sport"]
    },
    {
        id: 206,
        name: "Elf",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1-cJP_6uvuboesHkiYPgfIg49eKvsBsF0/view?usp=sharing",
        author: "Unknown",
        year: 2003,
        genre: ["Comedy", "Family"]
    },
    {
        id: 207,
        name: "The Evil Dead",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1E2Epz2Y7Ji5xCnKT0RtqMz7r0ENBT4YB/view?usp=drivesdk",
        author: "Unknown",
        year: 1981,
        genre: ["Horror"]
    },
    {
        id: 208,
        name: "Evil Dead II",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1BklK_O-rTRNrk0q7xOhXt_LEiBmmYan8/view?usp=drivesdk",
        author: "Unknown",
        year: 1987,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 209,
        name: "8 Mile",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/13KF2oQ-b1WRvbjL0vMMAMlI0Vj8TYBuM/view?usp=sharing",
        author: "Unknown",
        year: 2002,
        genre: ["Drama", "Music"]
    },
    {
        id: 210,
        name: "Friday",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1SKE9sQ-DnHRRVGxU10Qk2QJ1Ws2jvv5M/view?usp=share_link",
        author: "Unknown",
        year: 1995,
        genre: ["Comedy"]
    },
    {
        id: 211,
        name: "Finding Nemo",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1jP7PoHapLf_S_n75Afdc0RvzSwRqPcwm/view?usp=sharing",
        author: "Unknown",
        year: 2003,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 212,
        name: "Friday the 13th",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Tu0WxRUC-gADzYFEnSvudZ3MZ7Y735jH/view?usp=drive_link",
        author: "Unknown",
        year: 1980,
        genre: ["Horror"]
    },
    {
        id: 213,
        name: "Friday the 13th Part 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ROenMVwRyMGW0EIsf4Xg67EvRAAT5kcX/view?usp=drive_link",
        author: "Unknown",
        year: 1981,
        genre: ["Horror"]
    },
    {
        id: 214,
        name: "Friday the 13th Part III",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Ak82TmSBG3_lpbUgsDq22AcZ5gzGvTTB/view?usp=drive_link",
        author: "Unknown",
        year: 1982,
        genre: ["Horror"]
    },
    {
        id: 215,
        name: "Friday the 13th: The Final Chapter",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1M2OD-EPO3AjkzwYNvJLXCNe4B7y6bmM6/view?usp=drive_link",
        author: "Unknown",
        year: 1984,
        genre: ["Horror"]
    },
    {
        id: 216,
        name: "Friday the 13th: A New Beginning",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1cB43qNpCCf90tHch87EC4hBywV0Ao5-V/view?usp=drive_link",
        author: "Unknown",
        year: 1985,
        genre: ["Horror"]
    },
    {
        id: 217,
        name: "Friday the 13th Part VI: Jason Lives",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Yug3RMr7f8z5P7TjxWgRN0geoWL7UnU4/view?usp=drive_link",
        author: "Unknown",
        year: 1986,
        genre: ["Horror"]
    },
    {
        id: 218,
        name: "Friday the 13th Part VII: The New Blood",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1CG5Te-vXcvPrEuJtQsN3HZigm6bz33Os/view?usp=drive_link",
        author: "Unknown",
        year: 1988,
        genre: ["Horror"]
    },
    {
        id: 219,
        name: "Friday the 13th Part VIII: Jason Takes Manhattan",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1oRePBRxnrhk8feVEE3OtTNnE0Y70a4ZN/view?usp=drive_link",
        author: "Unknown",
        year: 1989,
        genre: ["Horror"]
    },
    {
        id: 220,
        name: "Jason Goes to Hell: The Final Friday",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1mvOr1kr0lX3XzbYIVJps-Mkz7UxjLUhP/view?usp=drive_link",
        author: "Unknown",
        year: 1993,
        genre: ["Horror"]
    },
    {
        id: 221,
        name: "Jason X",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1f_m_NTsYbbVFh1FBqXC1TOuS_4Yp6uSd/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Horror", "Sci-Fi"]
    },
    {
        id: 222,
        name: "Frozen",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1XIuN4Zp35mW0iN4p0ME5APxH18-6Zqft/view?usp=drive_link",
        author: "Unknown",
        year: 2013,
        genre: ["Animation", "Musical"]
    },
    {
        id: 223,
        name: "Frozen II",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1hpUpKEdeT9ta-8FjSpMUAXw17E-8uwIY/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Animation", "Musical"]
    },
    {
        id: 224,
        name: "Good Burger",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1jucPocCb8aq23Bh-GFLcniAk-k5UU-wC/view",
        author: "Unknown",
        year: 1997,
        genre: ["Comedy"]
    },
    {
        id: 225,
        name: "Good Burger 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1TOjPbqSF5UqnPrn1zFqEWvkUeBNiyMax/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Comedy"]
    },
    {
        id: 226,
        name: "Ghostbusters",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Kur_TXv1AOx8hhs0qGc_IwZXKmWvD6Y7/view",
        author: "Unknown",
        year: 1984,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 227,
        name: "Ghostbusters: Frozen Empire",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1JSj4AbrcqmjOLKWJJS7u7IxyMGJiQmzY/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 228,
        name: "Grease",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1W77S931ShuhZ2RVeiNrfdQQUcR4pKsD0/view?usp=drive_link",
        author: "Unknown",
        year: 1978,
        genre: ["Musical", "Romance"]
    },
    {
        id: 229,
        name: "Garfield: The Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1xMRDhscsmtcrECXXuOsqpAADTHJ0FxGS/view",
        author: "Unknown",
        year: 2004,
        genre: ["Comedy", "Family"]
    },
    {
        id: 230,
        name: "Hidden Figures",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1sfjv_SEQZQ4QPgPAeS8xckKHORr3gLiG/view",
        author: "Unknown",
        year: 2016,
        genre: ["Drama", "History"]
    },
    {
        id: 231,
        name: "Hotel Transylvania",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1gZ4FVX5GLCSv2-i_sabXWhgl9u_3FeOB/view",
        author: "Unknown",
        year: 2012,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 232,
        name: "Hotel Transylvania 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1LZI5E52J_R_Cx6f3EXLl-BAn6vuhUduD/view",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 233,
        name: "Hotel Transylvania 3: Summer Vacation",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1aS3rHee1w5zNTGGmSFM57DSVlC1hSvIs/view",
        author: "Unknown",
        year: 2018,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 234,
        name: "Hotel Transylvania: Transformania",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1_Ujbv8ONdcmV8TrYw8WzTwdD93deiiZp/view",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 235,
        name: "Hercules",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1sXad7VvXVn7qIilwdspq5RtjmInpa7mQ/view?usp=sharing",
        author: "Unknown",
        year: 1997,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 236,
        name: "Hamilton",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1c47Nko9vdJfe-KKF4nkpd-U-aMT_ZaQe/view?usp=sharing",
        author: "Unknown",
        year: 2020,
        genre: ["Musical", "Drama"]
    },
    {
        id: 237,
        name: "Harry Potter and the Sorcerer's Stone",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1bJMKhvzwuVfAYECLheyA_h38T9oYvkgX/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 238,
        name: "Harry Potter and the Chamber of Secrets",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1AC6j5pNVDl6fcvdT3e3hsAUkkBU-o3xD/view?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 239,
        name: "Harry Potter and the Prisoner of Azkaban",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Zu15ykGtc1xxKIKfAeUV_L1vAbCt--zO/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 240,
        name: "Harry Potter and the Goblet of Fire",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1yYxqmSv99zFBsJkT0cZYd4C4PTNC9bUU/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 241,
        name: "Harry Potter and the Order of the Phoenix",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1eVK_s8Sp-Gvv1J65ocyLbwyqC7vkuoFK/view?usp=drive_link",
        author: "Unknown",
        year: 2007,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 242,
        name: "Harry Potter and the Half-Blood Prince",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1QfAnvJtU3oR7IV2CrN2qRx4vFThjbbe1/view?usp=drive_link",
        author: "Unknown",
        year: 2009,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 243,
        name: "Harry Potter and the Deathly Hallows – Part 1",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/17UlhT2qVX10O8AksEEdWuaUqoVF78-oH/view?usp=drive_link",
        author: "Unknown",
        year: 2010,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 244,
        name: "Harry Potter and the Deathly Hallows – Part 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/16jXkeJny6L8MrC_7issz4AtANAzNDJqw/view?usp=drive_link",
        author: "Unknown",
        year: 2011,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 245,
        name: "High School Musical",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1tg84YPuUqFUMlVpGzjkhoEehBHV8W9ZF/view?usp=drive_link",
        author: "Unknown",
        year: 2006,
        genre: ["Musical", "Comedy"]
    },
    {
        id: 246,
        name: "High School Musical 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1iE1foAQrNAMJJg3aOd37GECWBkXmAEi7/view?usp=share_link",
        author: "Unknown",
        year: 2007,
        genre: ["Musical", "Comedy"]
    },
    {
        id: 247,
        name: "High School Musical 3: Senior Year",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1aGq7saEhWkyACQlOmGIAmylSTeEOL864/view?usp=share_link",
        author: "Unknown",
        year: 2008,
        genre: ["Musical", "Comedy"]
    },
    {
        id: 248,
        name: "Hairspray",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/12X1rfnx0NrQUAhDRLRQxKdaqvAi_LqJa/view?usp=sharing",
        author: "Unknown",
        year: 2007,
        genre: ["Musical", "Comedy"]
    },
    {
        id: 249,
        name: "I Know What You Did Last Summer",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1sSPtR3lcvTcjtDHvv3sOHw8qHbuaeQY1/view?usp=sharing",
        author: "Unknown",
        year: 1997,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 250,
        name: "Indiana Jones and the Dial of Destiny",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1BuNmXFmhFBoSKvcnbi5W1_hQkVLTrzwu/view?usp=sharing",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Adventure"]
    },
    {
        id: 251,
        name: "The Instigators",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1LPBpsJpE56zpdSZUi8f6tEkHPzaMceYo/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Comedy"]
    },
    {
        id: 252,
        name: "Thirteen",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/10HMzcDDav-A9xTydLioxLEfcou7SICYL/view?usp=sharing",
        author: "Unknown",
        year: 2003,
        genre: ["Drama"]
    },
    {
        id: 253,
        name: "Jurassic Park",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1QGXy2lJU4B0z4s7zPSOLizN8jMHfnZQm/view",
        author: "Unknown",
        year: 1993,
        genre: ["Adventure", "Sci-Fi"]
    },
    {
        id: 254,
        name: "The Lost World: Jurassic Park",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/15okru5XkkghrsKUfQJaFUTUHxHF_o9a1/view?usp=drive_link",
        author: "Unknown",
        year: 1997,
        genre: ["Adventure", "Sci-Fi"]
    },
    {
        id: 255,
        name: "Jurassic Park III",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1W9RJS1N_rBcNFAA73Y3B6leLhhjXXY9k/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Adventure", "Sci-Fi"]
    },
    {
        id: 256,
        name: "Jurassic World",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1oD0MwA_C9OVb7HeO70m9gAAs-dbm9SJG/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Action", "Adventure"]
    },
    {
        id: 257,
        name: "Jurassic World Dominion",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1x84uwAQzm7-j9MhDdNF5sb_jCRQFhjIa/view?usp=drive_link",
        author: "Unknown",
        year: 2022,
        genre: ["Action", "Adventure"]
    },
    {
        id: 258,
        name: "Jurassic World: Rebirth",
        cover: "https://www.dropbox.com/scl/fi/1qsdnk4bgzys2s73j79kk/Jurassic_World_Rebirth_poster.jpg?rlkey=awafkakx81wynmq0erbmsx09z&st=u4zifiyi&dl=1",
        url: "https://drive.google.com/file/d/1x0n_tZPq79HxAnV2ZwnVPTkBenFGZjx-/view?usp=sharing",
        author: "Unknown",
        year: 2025,
        genre: ["Action", "Adventure"]
    },
    {
        id: 259,
        name: "Joker",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1czY5u0zA3TPQh97OFth_1GkaK9nUo-Lq/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Crime", "Drama"]
    },
    {
        id: 260,
        name: "Joker: Folie à Deux",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1wiipkIcZ8r4itPij4w7CpOvC6uz-2wCS/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Crime", "Drama"]
    },
    {
        id: 261,
        name: "Jingle All the Way",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1gdQba6i5IcBe7_a4eyU75cuAkbyJEpt4/view?usp=share_link",
        author: "Unknown",
        year: 1996,
        genre: ["Comedy", "Family"]
    },
    {
        id: 262,
        name: "John Wick",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1o-u405CtHzkRFAjDRxnlwIV1MKzmpQYa/view",
        author: "Unknown",
        year: 2014,
        genre: ["Action", "Thriller"]
    },
    {
        id: 263,
        name: "John Wick: Chapter 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1gzsZEVTNEb93tSa0nuzlpR2n20D4Dyx9/view",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Thriller"]
    },
    {
        id: 264,
        name: "John Wick: Chapter 3 - Parabellum",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1CsIZrKGXn557DdOJrdz5ty7nkg0i4CWR/view",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Thriller"]
    },
    {
        id: 265,
        name: "John Wick: Chapter 4",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/10LUlcX6Hu9pn3c3xmPlfJOf20Qjwgxq_/view",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Thriller"]
    },
    {
        id: 266,
        name: "Kill Bill: Vol. 1",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1O7IPP73pLpqj6qH4mfqjDhwNbeDMSU7N/view?usp=drive_link",
        author: "Unknown",
        year: 2003,
        genre: ["Action", "Thriller"]
    },
    {
        id: 267,
        name: "Kill Bill: Vol. 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1p5DfNhB87k8bE-OQi7ELONmPkIhJIjC-/view?usp=sharing",
        author: "Unknown",
        year: 2004,
        genre: ["Action", "Thriller"]
    },
    {
        id: 268,
        name: "Kung Fu Panda 4",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1boIeWj09LNCdGhmasx5f5YnClj0IyDWe/view?usp=drive_link",
        author: "Unknown",
        year: 2024,
        genre: ["Animation", "Action"]
    },
    {
        id: 269,
        name: "The Karate Kid",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1tMJAooF8bG9ghav9CU4GPYF3t07ySMXL/view?usp=sharing",
        author: "Unknown",
        year: 1984,
        genre: ["Action", "Drama"]
    },
    {
        id: 270,
        name: "Labyrinth",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/13TgTB15A99LLWI_ROcci18FT8ijuq8RC/view?usp=drivesdk",
        author: "Unknown",
        year: 1986,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 271,
        name: "Leprechaun",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1pktrP3sKl90GQnM6wpRmxqlxgkv4sYaP/view?usp=drivesdk",
        author: "Unknown",
        year: 1993,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 272,
        name: "Leprechaun 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1gVMT8Aad2F51JdRYkjwkTw7tH88zgZxg/view?usp=drivesdk",
        author: "Unknown",
        year: 1994,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 273,
        name: "Leprechaun 3",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Tzy2eFt1almlNxZkXfiOVvA-hkGLCvch/view?usp=drivesdk",
        author: "Unknown",
        year: 1995,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 274,
        name: "Leprechaun 4: In Space",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/153R-JCEBqmgs3WrcHkEabTynjwa0Ryxs/view?usp=drivesdk",
        author: "Unknown",
        year: 1997,
        genre: ["Horror", "Comedy"]
    },
    {
        id: 275,
        name: "Miraculous World: New York – United HeroeZ",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1jTfxqP7BrcbIv5SVAxHP7FFIdt8A51ZJ/view?usp=share_link",
        author: "Unknown",
        year: 2020,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 276,
        name: "Maleficent",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1yx66GkjBaCwjcMNoovV8w9yPNlZ7Q4Gu/view?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Fantasy", "Adventure"]
    },
    {
        id: 277,
        name: "Mean Girls",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Hab49OuPK37MngOtQolLsVIzJ4AK9cNA/view?usp=sharing",
        author: "Unknown",
        year: 2004,
        genre: ["Comedy"]
    },
    {
        id: 278,
        name: "Moana",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Zkep5HZHk6daQhYjAN5Y9fBGy-K9dCu3/view?usp=drive_link",
        author: "Unknown",
        year: 2016,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 279,
        name: "Mulan",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ye-qQ6ZmBW98Xab4sjDJw1oxmUw_piBz/view?usp=sharing",
        author: "Unknown",
        year: 1998,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 280,
        name: "Norbit",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1PUIzjrlfRen4M7CqwIcmVdABNBpMWt5s/view",
        author: "Unknown",
        year: 2007,
        genre: ["Comedy"]
    },
    {
        id: 281,
        name: "Mighty Morphin Power Rangers: The Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1e-f3lzrTrRV3iVT7Ft-KLSd6fHbyUT2i/view",
        author: "Unknown",
        year: 1995,
        genre: ["Action", "Adventure"]
    },
    {
        id: 282,
        name: "The Peanuts Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/16Ze08q_XKmANPNYreDVZnEbZEZTSLwOa/view?usp=share_link",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 283,
        name: "The Polar Express",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/19KYYKqlEQyEuUTUQv32U53WoIDvKTRrx/view?usp=sharing",
        author: "Unknown",
        year: 2004,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 284,
        name: "PAW Patrol: The Mighty Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/13PKSmF1dnXkByra1B5NLarzB_ux4cU0T/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 285,
        name: "Power Rangers",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1bAS1zgiXsYJVXzhra9Fg2PHWBbVDU8lJ/view?usp=sharing",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Adventure"]
    },
    {
        id: 286,
        name: "Ready Player One",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1vCPMrNGFL3Kyf1J4qaySzKnACtg8eAqj/view?usp=drivesdk",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Adventure"]
    },
    {
        id: 287,
        name: "Rio",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1DIHKkPm7JVwOWWgM5RvYgOhAbFXWOAhf/view?usp=share_link",
        author: "Unknown",
        year: 2011,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 288,
        name: "Rio 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/12oiUUNl2_I7l1GsXLD74FA0wJlrRX7v_/view?usp=share_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 289,
        name: "Real Steel",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1zamnVJgx2cGGc4r2w9jWiEqRIG9WJREE/view",
        author: "Unknown",
        year: 2011,
        genre: ["Action", "Drama"]
    },
    {
        id: 290,
        name: "Ratatouille",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1kjVDdXtZ3-O0SndMHeIwMXe4jNZJ4w2C/view?usp=sharing",
        author: "Unknown",
        year: 2007,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 291,
        name: "Ron's Gone Wrong",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1nKl-oBgmnWygnF7xm6CfSWikp22ElVZY/view?usp=share_link",
        author: "Unknown",
        year: 2021,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 292,
        name: "Rambo III",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1KDIkm6VSTb_QrvSb8Gvbus8z-L3BGySI/view?usp=sharing",
        author: "Unknown",
        year: 1988,
        genre: ["Action", "Adventure"]
    },
    {
        id: 293,
        name: "The Rugrats Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/157WJal3P65gdyFlDbP4DcRfNku-Oursg/view",
        author: "Unknown",
        year: 1998,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 294,
        name: "Rugrats in Paris: The Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1w3PdNgN0AXDmG1CYRv7v0kMYrC1Ywu_0/view",
        author: "Unknown",
        year: 2000,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 295,
        name: "Romeo + Juliet",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/12_qQEuH75vHIqFjIwmDlawqQmav5RG-u/view?usp=drive_link",
        author: "Unknown",
        year: 1996,
        genre: ["Drama", "Romance"]
    },
    {
        id: 296,
        name: "Rush Hour",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ZcBKqjCxKjyddbVmb8sdOtCo-14v6fTp/view?usp=drive_link",
        author: "Unknown",
        year: 1998,
        genre: ["Action", "Comedy"]
    },
    {
        id: 297,
        name: "Rush Hour 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1mnNpYvlG_QNVxpq8LniD4hOPLPinnBEP/view?usp=sharing",
        author: "Unknown",
        year: 2001,
        genre: ["Action", "Comedy"]
    },
    {
        id: 298,
        name: "Rush Hour 3",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1fIOuM1hV1Ga0O6eQrhvozLNc35Rw-XB8/view?usp=sharing",
        author: "Unknown",
        year: 2007,
        genre: ["Action", "Comedy"]
    },
    {
        id: 299,
        name: "Saw",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1nZn3QfKiiZgg4nx3GRA4-K6obuJLlepm/view?usp=drive_link",
        author: "Unknown",
        year: 2004,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 300,
        name: "Saw II",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1eQLt5qFXYBjdvN05Jryfkc0MUF6eLZfS/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 301,
        name: "Saw III",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1afqsupX8WtCzEt3AbeKe_Ffwfb4oXzsa/view?usp=drive_link",
        author: "Unknown",
        year: 2006,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 302,
        name: "Saw IV",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1XmKqBrU4I1QqPnKG5WGpVImeTFvBjy0n/view?usp=drive_link",
        author: "Unknown",
        year: 2007,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 303,
        name: "Saw V",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Rng7E07HcEPZmWvxYHk2gnrhArp_0MsS/view?usp=drive_link",
        author: "Unknown",
        year: 2008,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 304,
        name: "Saw VI",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1v_fqql_iAIszlP5qG5735UX8NVGXXFud/view?usp=drive_link",
        author: "Unknown",
        year: 2009,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 305,
        name: "Scrooged",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1zmDJ-0X5qV2niOZe7ZsL_sPk6w7XvDnr/view?usp=drivesdk",
        author: "Unknown",
        year: 1988,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 306,
        name: "Scream 7",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1RtaN8_Xsodf4Ub5K_yRp6eOx62tbj7Ap/view?usp=drivesdk",
        author: "Unknown",
        year: 2026,
        genre: ["Horror", "Mystery"]
    },
    {
        id: 307,
        name: "Shazam!",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/111DMVHuhGLLFunQ1ixi_OG8ui0ckXbfU/view?usp=share_link",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Comedy"]
    },
    {
        id: 308,
        name: "Shazam! Fury of the Gods",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1LC17KNt1pxG1zJ43CwIBNGXaCN3cmLPc/view?usp=share_link",
        author: "Unknown",
        year: 2023,
        genre: ["Action", "Adventure"]
    },
    {
        id: 309,
        name: "Suicide Squad",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1m2m6kudeN5pivaeCWfMR88xXEyZg8nFK/view?usp=sharing",
        author: "Unknown",
        year: 2016,
        genre: ["Action", "Adventure"]
    },
    {
        id: 310,
        name: "The Suicide Squad",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/11nKqV7QKkATlvO7pt8eHlfS32rSHeOVZ/view?usp=sharing",
        author: "Unknown",
        year: 2021,
        genre: ["Action", "Adventure"]
    },
    {
        id: 311,
        name: "Star Wars: Episode II – Attack of the Clones",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1u0ZRN7s8rgAMYtvnGf3zTjpM7Fu6TmW_/view?usp=drive_link",
        author: "Unknown",
        year: 2002,
        genre: ["Action", "Adventure"]
    },
    {
        id: 312,
        name: "Star Wars: Episode III – Revenge of the Sith",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1lEszWnr2BinTfzBGqtoDV1W9wMIlTQtb/view?usp=drive_link",
        author: "Unknown",
        year: 2005,
        genre: ["Action", "Adventure"]
    },
    {
        id: 313,
        name: "Star Wars: Episode IV – A New Hope",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1nDgCNAuFgSI6fDKbRZFkDhzViib1ixYS/view?usp=drive_link",
        author: "Unknown",
        year: 1977,
        genre: ["Action", "Adventure"]
    },
    {
        id: 314,
        name: "Star Wars: Episode V – The Empire Strikes Back",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1q0Jof59Il_So2z5Q38ANn55qB2GCpOx3/view?usp=drive_link",
        author: "Unknown",
        year: 1980,
        genre: ["Action", "Adventure"]
    },
    {
        id: 315,
        name: "Star Wars: The Last Jedi",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1vCdep3QXu8GE9IaNUdVmCGLiG24kFrWb/view?usp=drive_link",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Adventure"]
    },
    {
        id: 316,
        name: "Star Wars: The Force Awakens",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1D-T-C4PNPbZ61wiHqXgQlQqYy_NTcsKa/view?usp=drive_link",
        author: "Unknown",
        year: 2015,
        genre: ["Action", "Adventure"]
    },
    {
        id: 317,
        name: "Star Wars: The Rise of Skywalker",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1viDV-Gu6yGHOpyaDefPH3Id9fXSHuTsi/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Action", "Adventure"]
    },
    {
        id: 318,
        name: "Solo: A Star Wars Story",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1cVMCqyg7byeajsDkn4cyHQe7SSLfxVPL/view?usp=drive_link",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Adventure"]
    },
    {
        id: 319,
        name: "Star Wars: The Clone Wars",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/16dO2t6nMYzRFTKGBVByMPYtru6kwix7H/view?usp=drive_link",
        author: "Unknown",
        year: 2008,
        genre: ["Animation", "Action"]
    },
    {
        id: 320,
        name: "Snitch",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/17hMZl5qq3Khflm_xUYZW9b8nGCJ6OBfA/view?usp=sharing",
        author: "Unknown",
        year: 2013,
        genre: ["Action", "Drama"]
    },
    {
        id: 321,
        name: "Scary Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1-61Fls8_MDTVq3r5dHP58joVRiUloxZQ/view?usp=drive_link",
        author: "Unknown",
        year: 2000,
        genre: ["Comedy"]
    },
    {
        id: 322,
        name: "Scary Movie 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Jmeyjhlpg6A-W-XJPoqC8uhtWztuQe-F/view?usp=drive_link",
        author: "Unknown",
        year: 2001,
        genre: ["Comedy"]
    },
    {
        id: 323,
        name: "Scary Movie 3",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1KN1dzjj-d6MhY47MIgWdT2Au10Ft7Bf1/view?usp=drive_link",
        author: "Unknown",
        year: 2003,
        genre: ["Comedy"]
    },
    {
        id: 324,
        name: "Scary Movie 4",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1pgH5VfJEi5NRVEtp2y_vZMSOk_rh3Har/view?usp=drive_link",
        author: "Unknown",
        year: 2006,
        genre: ["Comedy"]
    },
    {
        id: 325,
        name: "Sleepy Hollow",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/18gseXON5RP2ipsWcd0XGZH9k4TyaeYYR/view?usp=drive_link",
        author: "Unknown",
        year: 1999,
        genre: ["Fantasy", "Horror"]
    },
    {
        id: 326,
        name: "The Lion King",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1GrJxp4D9XrmYBG_bqRgp1UvQaapyjoV7/view",
        author: "Unknown",
        year: 1994,
        genre: ["Animation", "Drama"]
    },
    {
        id: 327,
        name: "The Lion King II: Simba's Pride",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1-sT4cdDqG6tt4wI0ba7Z3FhDoX8ded8L/view",
        author: "Unknown",
        year: 1998,
        genre: ["Animation", "Drama"]
    },
    {
        id: 328,
        name: "The Sandlot",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1G9qRpMiBq5HD-vqKQs9sq8csZCFccaiD/view",
        author: "Unknown",
        year: 1993,
        genre: ["Comedy", "Family"]
    },
    {
        id: 329,
        name: "The Green Mile",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/drive/folders/1Yaled5HTPlCdoX_7MAhu937sGTlP7PV4",
        author: "Unknown",
        year: 1999,
        genre: ["Drama", "Fantasy"]
    },
    {
        id: 330,
        name: "The Brave Little Toaster",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1qZxoOGQTxqwlJtOQbwN8jeyD_yVvX7yc/view?usp=share_link",
        author: "Unknown",
        year: 1987,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 331,
        name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/14TYyfl0ogVnDyw_yKCrU_jKGPIDBM3Nu/view?usp=share_link",
        author: "Unknown",
        year: 2005,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 332,
        name: "The Chronicles of Narnia: Prince Caspian",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1DxOEqY1EzxcJYSNk2s6xXLf2SSP-hTRI/view?usp=share_link",
        author: "Unknown",
        year: 2008,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 333,
        name: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/12_UK0B8umPhjw5c5WOge3PtcGoDB9Uk2/view?usp=share_link",
        author: "Unknown",
        year: 2010,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 334,
        name: "The Princess Bride",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1YnPym55TCYUgdEe65MHELL13ygweFutT/view?usp=drivesdk",
        author: "Unknown",
        year: 1987,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 335,
        name: "The Wizard of Oz",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ZfNxrVWB0U1Nwsrc03i5v9vGJtMJ9Ts3/view?usp=drivesdk",
        author: "Unknown",
        year: 1939,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 336,
        name: "Return to Oz",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1qINcGAx8SUBfoh3O-HeVLetY_rSVueAG/view?usp=drivesdk",
        author: "Unknown",
        year: 1985,
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 337,
        name: "Transformers",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/17FH0E-XliQ0VAWNnxrwkvhUrCCGLKx2A/view?usp=share_link",
        author: "Unknown",
        year: 2007,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 338,
        name: "Transformers: Dark of the Moon",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/19dfiTEEqIVE9cxVBsyNVoG5c4UebhS0F/view?usp=share_link",
        author: "Unknown",
        year: 2011,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 339,
        name: "Transformers: Age of Extinction",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1evgnLc_0TRlHQ8_tcMcZYaYY-2_RmKWZ/view?usp=share_link",
        author: "Unknown",
        year: 2014,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 340,
        name: "Transformers: The Last Knight",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1b9ZHT2vDIp-JJ9JD0PWbEbyU1bDZMcPl/view?usp=share_link",
        author: "Unknown",
        year: 2017,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 341,
        name: "Bumblebee",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1wqi9Wk--koq0SqRkoVZWXLVJBtABkjPy/view?usp=share_link",
        author: "Unknown",
        year: 2018,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 342,
        name: "Tron",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1hbhWcI11gA5EcXAxXGJkIjzq7VQIpZGp/view?usp=drivesdk",
        author: "Unknown",
        year: 1982,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 343,
        name: "Teenage Mutant Ninja Turtles",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ivJXBaVGvN_HQJf-h46ko2DjyHHBZMH1/view",
        author: "Unknown",
        year: 1990,
        genre: ["Action", "Adventure"]
    },
    {
        id: 344,
        name: "Teenage Mutant Ninja Turtles II: The Secret of the Ooze",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Bp9ioxFqOCfmEbQM90cbLcFAn9bPysDu/view",
        author: "Unknown",
        year: 1991,
        genre: ["Action", "Adventure"]
    },
    {
        id: 345,
        name: "Teenage Mutant Ninja Turtles III",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1gdIpjtTCHV_a8p9KPQaQg1ljIcanpu5S/view",
        author: "Unknown",
        year: 1993,
        genre: ["Action", "Adventure"]
    },
    {
        id: 346,
        name: "Turning Red",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1joF2I_zdjepCD9ukmjV672HTICUfp4tO/view",
        author: "Unknown",
        year: 2022,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 347,
        name: "Teenage Mutant Ninja Turtles: Out of the Shadows",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1Bp9ioxFqOCfmEbQM90cbLcFAn9bPysDu/view",
        author: "Unknown",
        year: 2016,
        genre: ["Action", "Adventure"]
    },
    {
        id: 348,
        name: "TMNT",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/18iqYAOVbRHOT7jzJ3sqlyxi8RS5AH5sM/view?usp=sharing",
        author: "Unknown",
        year: 2007,
        genre: ["Animation", "Action"]
    },
    {
        id: 349,
        name: "The Good Dinosaur",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1vELzmz9u6vQ18YtMipK9nSWJhZLP6KaH/view?usp=sharing",
        author: "Unknown",
        year: 2015,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 350,
        name: "The Little Mermaid",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1GM7QyJzFwEKM2fM42SWb7oIRN2UPUzqM/view?usp=sharing",
        author: "Unknown",
        year: 1989,
        genre: ["Animation", "Musical"]
    },
    {
        id: 351,
        name: "The Brady Bunch Movie",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/18i5j4gguKnfjNXVcfPKLz3GbxaiWbhrh/view?usp=drive_link",
        author: "Unknown",
        year: 1995,
        genre: ["Comedy"]
    },
    {
        id: 352,
        name: "The Purge",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1PFz-u8_kVFY8Z--NyloACB1DUwiT0oK4/view?usp=drive_link",
        author: "Unknown",
        year: 2013,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 353,
        name: "The Purge: Election Year",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1TmtXANeLZHYqnxcjn5JsiO2LMi6J7H_z/view?usp=drive_link",
        author: "Unknown",
        year: 2016,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 354,
        name: "The Purge: Anarchy",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1d7FFXzRf0u7L23AqH-HsUua_kA8a_edQ/view?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 355,
        name: "Purge of Kingdoms",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1tfdoWD6V8uopSbpIE5GJUg0dZI-2P-yD/view?usp=drive_link",
        author: "Unknown",
        year: 2019,
        genre: ["Comedy"]
    },
    {
        id: 356,
        name: "The Forever Purge",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1gl4AuWnS848wnWlbH9ToOi7Ga1OV7y_1/view?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Horror", "Thriller"]
    },
    {
        id: 357,
        name: "A Very Brady Sequel",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/139xwpHkb9tF64bSc0PnKZMBGtdCHh7pW/view?usp=drive_link",
        author: "Unknown",
        year: 1996,
        genre: ["Comedy"]
    },
    {
        id: 358,
        name: "The Mask",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/13IzLS6dOFDxCk_mNWpttFncqs1hQoJ3L/view?usp=sharing",
        author: "Unknown",
        year: 1994,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 359,
        name: "The Addams Family",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/19ZYLs_076nTJtl7bEUtkwpfbwwj-GevJ/view?usp=sharing",
        author: "Unknown",
        year: 1991,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 360,
        name: "The Little Mermaid",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1sFYkkRX85JK-a2LRl8_QmZPhYkYIn6KG/view",
        author: "Unknown",
        year: 2023,
        genre: ["Fantasy", "Musical"]
    },
    {
        id: 361,
        name: "The Smurfs 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1FYgtU8rAKF32RjDRgYqODXzOHV0mQuBy/view?usp=share_link",
        author: "Unknown",
        year: 2013,
        genre: ["Animation", "Comedy"]
    },
    {
        id: 362,
        name: "The Book of Life",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1_MkoFWTqhvJM4YNqGFzSabwKSSL4fa55/view?usp=drive_link",
        author: "Unknown",
        year: 2014,
        genre: ["Animation", "Adventure"]
    },
    {
        id: 363,
        name: "The Nightmare Before Christmas",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1BPYV-xYt77pQYztFM14VHk3wBZZ_l0ng/view?usp=sharing",
        author: "Unknown",
        year: 1993,
        genre: ["Animation", "Fantasy"]
    },
    {
        id: 364,
        name: "Twilight",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1YEIurV6IBGg7IYqTE9EX2vHLUQeEfBjH/view?usp=sharing",
        author: "Unknown",
        year: 2008,
        genre: ["Fantasy", "Romance"]
    },
    {
        id: 365,
        name: "The Twilight Saga: Breaking Dawn – Part 1",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1GTUALkIJ4mkxae00sdbQdGUhUl4i8lGm/view?usp=drive_link",
        author: "Unknown",
        year: 2011,
        genre: ["Fantasy", "Romance"]
    },
    {
        id: 366,
        name: "The Twilight Saga: Breaking Dawn – Part 2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/12J1e35T-HQtLoTvfs70-TlZ4oJsXsxvX/view?usp=drive_link",
        author: "Unknown",
        year: 2012,
        genre: ["Fantasy", "Romance"]
    },
    {
        id: 367,
        name: "The Menu",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/14Audx3RqZPMTyLzErPzkKuCQPVWhTC0y/view?usp=sharing",
        author: "Unknown",
        year: 2022,
        genre: ["Thriller", "Comedy"]
    },
    {
        id: 368,
        name: "The Princess and the Frog",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1PIQExpRvAPANHRDAZ-On7ld9je2O-5He/view?usp=sharing",
        author: "Unknown",
        year: 2009,
        genre: ["Animation", "Musical"]
    },
    {
        id: 369,
        name: "The Greatest Showman",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1ErElLX4tetXsqWfpivPg3JlEht4ERibn/view?usp=drive_link",
        author: "Unknown",
        year: 2017,
        genre: ["Musical", "Drama"]
    },
    {
        id: 370,
        name: "Tangled",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1eirKJt3ulfEusRJ6OM0jwpJ_YbL8iExC/view?usp=sharing",
        author: "Unknown",
        year: 2010,
        genre: ["Animation", "Musical"]
    },
    {
        id: 371,
        name: "War Dogs",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/drive/u/0/folders/1dAcCk18ksPVX1vOSmwuwXA8IFoYpZ6eX?ths=true",
        author: "Unknown",
        year: 2016,
        genre: ["Comedy", "Drama"]
    },
    {
        id: 372,
        name: "Wish",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1KOmgE1jMV0jT2QkWFFd3ieEzwf4GbVOw/view?usp=drive_link",
        author: "Unknown",
        year: 2023,
        genre: ["Animation", "Musical"]
    },
    {
        id: 373,
        name: "West Side Story",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1CBGr82HWTP2XM-HJPURXFGV1uqE5-ip-/view?usp=drive_link",
        author: "Unknown",
        year: 1961,
        genre: ["Musical", "Romance"]
    },
    {
        id: 374,
        name: "West Side Story",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1XCfKDI8cKvYQO2UGFOKBe5qlmcL8Vsry/view?usp=drive_link",
        author: "Unknown",
        year: 2021,
        genre: ["Musical", "Romance"]
    },
    {
        id: 375,
        name: "X-Men",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1BIJIiG8fdpyudl-1vXHIU3TBb3XMXJaa/view",
        author: "Unknown",
        year: 2000,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 376,
        name: "X2",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/16fA19e1MhAZaUaosRHey_c1VAZoM1iB8/view",
        author: "Unknown",
        year: 2003,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 377,
        name: "X-Men: The Last Stand",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/176dVR22sSEaJMY5TfITCW9TIC2fNYBMm/view",
        author: "Unknown",
        year: 2006,
        genre: ["Action", "Sci-Fi"]
    },
    {
        id: 378,
        name: "Zapped",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1gO0OtMfAoVUaZGxX825aH48OySgHYd5n/view?usp=sharing",
        author: "Unknown",
        year: 2014,
        genre: ["Comedy", "Fantasy"]
    },
    {
        id: 379,
        name: "Hoppers",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1NkmCNf5CUML_KZvNi4fgGKA8r7fpXIdd/view?usp=drive_link",
        author: "Unknown",
        year: 2026,
        genre: ["Sci-Fi"]
    },
    {
        id: 380,
        name: "Red One",
        cover: "https://m.media-amazon.com/images/M/MV5BMjA4NDkwNzktNjJkYi00ODNhLWFhYzQtYzk5NjU4MDM0OWZmXkEyXkFqcGc@._V1_.jpg",
        url: "https://drive.google.com/file/d/1_placeholder_red_one/view?usp=sharing",
        author: "Unknown",
        year: 2024,
        genre: ["Action", "Comedy"]
    },
    {
        id: 381,
        name: "Joe's College Road Trip",
        cover: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Movie+Poster",
        url: "https://drive.google.com/file/d/1bIHwYf80n_DovwE2D7irPbgkyaVZOChx/view?usp=drive_link",
        author: "Unknown",
        year: 2026,
        genre: ["Comedy"]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ALL_MOVIES };
}
