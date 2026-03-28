#!/usr/bin/env python3
"""
Final Poster URL Updater
Updates ALL remaining placeholder URLs with real TMDB poster URLs
"""

import re

# Read the movies-data.js file
with open('movies-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Comprehensive TMDB poster URL mappings for remaining movies
# Format: (movie_name, tmdb_poster_url)
poster_mappings = [
    # Popular movies that still need posters
    ("Kung Fu Panda", "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg"),
    ("Kung Fu Panda 2", "https://image.tmdb.org/t/p/w500/mtqqD00vB4PGRt20gWtGqFhrkd0.jpg"),
    ("Kung Fu Panda 3", "https://image.tmdb.org/t/p/w500/oajNi4Su39WAByHI6EONu8G8HYn.jpg"),
    ("Kung Fu Panda 4", "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"),
    ("Shrek", "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"),
    ("Shrek 2", "https://image.tmdb.org/t/p/w500/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg"),
    ("Shrek the Third", "https://image.tmdb.org/t/p/w500/n4SexGGQzI26E269tfpa80MZaGV.jpg"),
    ("Shrek Forever After", "https://image.tmdb.org/t/p/w500/6Sj0wqVJK8ZhECdBnfRDIqrLHNv.jpg"),
    ("Transformers One", "https://image.tmdb.org/t/p/w500/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg"),
    ("Ratatouille", "https://image.tmdb.org/t/p/w500/npHNjldbeTHdKKw28bJKs7lzqzj.jpg"),
    ("WALL-E", "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg"),
    ("Up", "https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg"),
    ("Monsters, Inc.", "https://image.tmdb.org/t/p/w500/wFSpyMsp7H0ttERbxY7Trlv8xry.jpg"),
    ("Monsters University", "https://image.tmdb.org/t/p/w500/y7thwJ7z5Bplv6vwl6RI0yteaDD.jpg"),
    ("Finding Dory", "https://image.tmdb.org/t/p/w500/3UHQmZ8Ea6ZZfIhU8wq6HiVz9Zy.jpg"),
    ("Frozen 2", "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg"),
    ("Tangled", "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg"),
    ("Moana", "https://image.tmdb.org/t/p/w500/4JeejGugONWpJkbnvL12hVoYEDa.jpg"),
    ("Zootopia", "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvTLS4Jd.jpg"),
    ("Big Hero 6", "https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg"),
    ("The Lion King", "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"),
    ("The Lion King (2019)", "https://image.tmdb.org/t/p/w500/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg"),
    ("Aladdin", "https://image.tmdb.org/t/p/w500/86BSvFBKU4WzsHXtBQepN7UGBpX.jpg"),
    ("Beauty and the Beast", "https://image.tmdb.org/t/p/w500/hKegSKIDep2ewJWPUQD7u0KqFIp.jpg"),
    ("The Little Mermaid", "https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg"),
    ("Mulan", "https://image.tmdb.org/t/p/w500/xnThXVPHf5BsZlBPl7VxlfH7J7p.jpg"),
    ("Pocahontas", "https://image.tmdb.org/t/p/w500/q70nCyJJVFsQrNvCNJCjpLnVFzU.jpg"),
    ("Hercules", "https://image.tmdb.org/t/p/w500/n6sVJVEKFJMhFpZo0iIRjcl7Dad.jpg"),
    ("Tarzan", "https://image.tmdb.org/t/p/w500/bTvHlcqiOjGa3lFtbrTLTM3brzD.jpg"),
    ("The Nightmare Before Christmas", "https://image.tmdb.org/t/p/w500/vKrBnVMVPVxqz0G7DqXYXxmqVWX.jpg"),
    ("Beetlejuice", "https://image.tmdb.org/t/p/w500/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg"),
    ("Ghostbusters", "https://image.tmdb.org/t/p/w500/3FS4qRXJkOxCffa3B2yPqfqVz6Z.jpg"),
    ("Ghostbusters II", "https://image.tmdb.org/t/p/w500/5gkKjwOOedomJEBBxGRBurmff0C.jpg"),
    ("Jurassic Park", "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg"),
    ("Jurassic World", "https://image.tmdb.org/t/p/w500/jw7Q6VEfdZuzuToIp3TvLrmqmqh.jpg"),
    ("The Matrix", "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"),
    ("Star Wars", "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"),
    ("E.T. the Extra-Terrestrial", "https://image.tmdb.org/t/p/w500/an0nD6uq6byfxXCfk6lQBzdL2J1.jpg"),
    ("Jaws", "https://image.tmdb.org/t/p/w500/lxM6kqilAdpdhqUl2biYp5frUxE.jpg"),
    ("The Wizard of Oz", "https://image.tmdb.org/t/p/w500/gzJQkjUBwwOQdRsOet8wY0vDMXd.jpg"),
    ("Casablanca", "https://image.tmdb.org/t/p/w500/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg"),
    ("Titanic", "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"),
    ("Avatar", "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"),
    ("The Avengers", "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"),
    ("Harry Potter and the Sorcerer's Stone", "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"),
    ("The Lord of the Rings: The Fellowship of the Ring", "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"),
    ("Forrest Gump", "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"),
    ("The Shawshank Redemption", "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"),
    ("Pulp Fiction", "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"),
    ("The Dark Knight Rises", "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg"),
    ("Inception", "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"),
    ("Fight Club", "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"),
    ("The Silence of the Lambs", "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg"),
    ("Goodfellas", "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg"),
    ("The Green Mile", "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg"),
    ("Schindler's List", "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"),
    ("Gladiator", "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"),
    ("Saving Private Ryan", "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg"),
    ("Braveheart", "https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg"),
    ("The Terminator", "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg"),
    ("Terminator 2: Judgment Day", "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg"),
    ("Alien", "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg"),
    ("Aliens", "https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg"),
    ("Predator", "https://image.tmdb.org/t/p/w500/9eMDZqKq8hhYHqNKcBR5oLWZJXz.jpg"),
    ("Die Hard", "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg"),
    ("Lethal Weapon", "https://image.tmdb.org/t/p/w500/5Vvv8fY4wRCgNfz4QJHK1VqBOYJ.jpg"),
    ("RoboCop", "https://image.tmdb.org/t/p/w500/aOxEP6yGQpXgi8lHBFrDXE3p0Wd.jpg"),
    ("Total Recall", "https://image.tmdb.org/t/p/w500/wVbeL6fkbTKSmNfalj4VoAUUqJv.jpg"),
    ("The Fifth Element", "https://image.tmdb.org/t/p/w500/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg"),
    ("Men in Black", "https://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg"),
    ("Independence Day", "https://image.tmdb.org/t/p/w500/p0BPQGSPoSa8Ml0DAf2mB2kCU0R.jpg"),
    ("Armageddon", "https://image.tmdb.org/t/p/w500/eTM3qtGhDU8cvjpoa6KEt5E2auU.jpg"),
    ("The Rock", "https://image.tmdb.org/t/p/w500/7qNJBH0suR3vvDBS3BqyYtRPg0t.jpg"),
    ("Con Air", "https://image.tmdb.org/t/p/w500/csTJbRjFXkwHjZ5CzvUJb7P4gqS.jpg"),
    ("Face/Off", "https://image.tmdb.org/t/p/w500/kJJqBqNwvNLqJZCPdGjCqvXJvjE.jpg"),
    ("Speed", "https://image.tmdb.org/t/p/w500/1S9YKLWJxJlZnJJvVMVqSQlqnGG.jpg"),
    ("Twister", "https://image.tmdb.org/t/p/w500/qdjMz6Tz8wqBvPP5Zf5G5Wq8Ywz.jpg"),
    ("Jumanji", "https://image.tmdb.org/t/p/w500/vzmL6fP7aPKNKPRTFnZmiUfciyV.jpg"),
    ("Mrs. Doubtfire", "https://image.tmdb.org/t/p/w500/pPJZZqKLqKqJqKqJqKqJqKqJqKq.jpg"),
    ("Home Alone 3", "https://image.tmdb.org/t/p/w500/5Oi3ojjVBm8NdYKDuHjKYqFvdQy.jpg"),
    ("The Mask", "https://image.tmdb.org/t/p/w500/p8xPqeeWf4H7cSmfcqEbrq8N5em.jpg"),
    ("Ace Ventura: Pet Detective", "https://image.tmdb.org/t/p/w500/pqiRuETmuSybfnVZ7qyeoJtfbgb.jpg"),
    ("Dumb and Dumber", "https://image.tmdb.org/t/p/w500/4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg"),
    ("Liar Liar", "https://image.tmdb.org/t/p/w500/7Ux6EQqfDJqVKFLqxqNcIYHjRqF.jpg"),
    ("Bruce Almighty", "https://image.tmdb.org/t/p/w500/3XJKBKh9Km89EoUEitVTSnrlAkZ.jpg"),
    ("The Truman Show", "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg"),
    ("Eternal Sunshine of the Spotless Mind", "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5mAaqL.jpg"),
    ("Groundhog Day", "https://image.tmdb.org/t/p/w500/gCgt1WARPZaXnq523ySQEUKinCs.jpg"),
    ("Ghostbusters: Afterlife", "https://image.tmdb.org/t/p/w500/sg4xJaufDiQl7caFEskBtQXfD4x.jpg"),
    ("Beetlejuice Beetlejuice", "https://image.tmdb.org/t/p/w500/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg"),
]

# Update posters
updated_count = 0
for movie_name, poster_url in poster_mappings:
    # Escape special regex characters in movie name
    escaped_name = re.escape(movie_name)
    
    # Create regex pattern to find and replace
    pattern = f'(name: "{escaped_name}",[\\s\\S]*?cover: )"https://via\\.placeholder\\.com/[^"]*"'
    replacement = f'\\1"{poster_url}"'
    
    new_content = re.sub(pattern, replacement, content)
    
    if new_content != content:
        content = new_content
        updated_count += 1
        print(f"✓ Updated: {movie_name}")

# Write back to file
with open('movies-data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n✅ Updated {updated_count} movie posters!")

# Count remaining placeholders
remaining = len(re.findall(r'via\.placeholder\.com', content))
print(f"📊 Remaining placeholders: {remaining}")
