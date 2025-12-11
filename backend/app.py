from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample anime + drama data
ANIME_DATA = {
    "trending": [
        {
            "id": 1,
            "title": "Demon Slayer",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600",
            "rating": 9.5,
            "episodes": 44,
            "status": "Ongoing",
            "description": "Follow Tanjiro Kamado as he becomes a demon slayer to save his sister Nezuko."
        },
        {
            "id": 2,
            "title": "Attack on Titan",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600",
            "rating": 9.8,
            "episodes": 75,
            "status": "Completed",
            "description": "Humanity fights for survival against the Titans in this epic saga."
        },
        {
            "id": 3,
            "title": "Jujutsu Kaisen",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=601",
            "rating": 9.3,
            "episodes": 24,
            "status": "Ongoing",
            "description": "Yuji Itadori joins a secret organization of Jujutsu Sorcerers."
        },
        {
            "id": 4,
            "title": "One Piece",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=601",
            "rating": 9.7,
            "episodes": 1000,
            "status": "Ongoing",
            "description": "Monkey D. Luffy and his crew search for the ultimate treasure."
        },
        {
            "id": 5,
            "title": "My Hero Academia",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=602",
            "rating": 9.2,
            "episodes": 113,
            "status": "Ongoing",
            "description": "Izuku Midoriya dreams of becoming a hero in a world of superpowers."
        },
        {
            "id": 6,
            "title": "Naruto",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=602",
            "rating": 9.4,
            "episodes": 720,
            "status": "Completed",
            "description": "Naruto Uzumaki's journey to become the Hokage of his village."
        }
    ],
    "characters": [
        {
            "id": 1,
            "name": "Tanjiro Kamado",
            "anime": "Demon Slayer",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400",
            "description": "A kind-hearted boy who becomes a demon slayer to save his sister."
        },
        {
            "id": 2,
            "name": "Eren Yeager",
            "anime": "Attack on Titan",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=401",
            "description": "A determined soldier fighting for humanity's freedom."
        },
        {
            "id": 3,
            "name": "Yuji Itadori",
            "anime": "Jujutsu Kaisen",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=402",
            "description": "A high school student who becomes a Jujutsu Sorcerer."
        },
        {
            "id": 4,
            "name": "Monkey D. Luffy",
            "anime": "One Piece",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=403",
            "description": "A pirate with rubber powers seeking the One Piece treasure."
        },
        {
            "id": 5,
            "name": "Izuku Midoriya",
            "anime": "My Hero Academia",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=404",
            "description": "A quirkless boy who inherits the power of the world's greatest hero."
        },
        {
            "id": 6,
            "name": "Naruto Uzumaki",
            "anime": "Naruto",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=405",
            "description": "A ninja with a dream to become the Hokage of Konoha."
        }
    ],
    "episodes": [
        {
            "id": 1,
            "anime": "Demon Slayer",
            "title": "Episode 44: Hashira Training Arc",
            "episodeNumber": 44,
            "releaseDate": "2024-01-15",
            "thumbnail": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=700",
            "description": "The Hashira training begins as Tanjiro faces new challenges."
        },
        {
            "id": 2,
            "anime": "Jujutsu Kaisen",
            "title": "Episode 24: Shibuya Incident Finale",
            "episodeNumber": 24,
            "releaseDate": "2024-01-20",
            "thumbnail": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=701",
            "description": "The epic conclusion of the Shibuya Incident arc."
        },
        {
            "id": 3,
            "anime": "My Hero Academia",
            "title": "Episode 113: The Final War Begins",
            "episodeNumber": 113,
            "releaseDate": "2024-01-18",
            "thumbnail": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=702",
            "description": "The heroes prepare for the ultimate battle against All For One."
        }
    ],
    "fanArt": [
        {
            "id": 1,
            "title": "Tanjiro Water Breathing",
            "artist": "AnimeFan123",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
            "likes": 1250,
            "anime": "Demon Slayer"
        },
        {
            "id": 2,
            "title": "Eren's Transformation",
            "artist": "ArtMaster",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=801",
            "likes": 2100,
            "anime": "Attack on Titan"
        },
        {
            "id": 3,
            "title": "Jujutsu Kaisen Squad",
            "artist": "DigitalArtist",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=802",
            "likes": 980,
            "anime": "Jujutsu Kaisen"
        },
        {
            "id": 4,
            "title": "Luffy Gear 5",
            "artist": "OnePieceFan",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=803",
            "likes": 3200,
            "anime": "One Piece"
        }
    ],
    "blogs": [
        {
            "id": 1,
            "title": "Top 10 Anime of 2024",
            "author": "AnimeCritic",
            "date": "2024-01-10",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900",
            "excerpt": "Discover the most anticipated anime releases of 2024 and why they're worth watching.",
            "content": "2024 has been an incredible year for anime fans. From action-packed shonen to emotional dramas, this year's lineup has something for everyone..."
        },
        {
            "id": 2,
            "title": "The Evolution of Anime Art Styles",
            "author": "ArtEnthusiast",
            "date": "2024-01-05",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=901",
            "excerpt": "How anime art has transformed from the 80s to modern day, exploring different techniques and trends.",
            "content": "Anime art styles have evolved dramatically over the decades. From the classic cel animation of the 80s to today's digital masterpieces..."
        },
        {
            "id": 3,
            "title": "Understanding Anime Genres",
            "author": "AnimeGuide",
            "date": "2024-01-01",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=902",
            "excerpt": "A comprehensive guide to anime genres for newcomers and veterans alike.",
            "content": "Anime encompasses a wide variety of genres, each with its own unique characteristics and appeal..."
        }
    ],
    "reviews": [
        {
            "id": 1,
            "anime": "Demon Slayer",
            "rating": 9.5,
            "reviewer": "AnimeLover99",
            "date": "2024-01-15",
            "title": "A Masterpiece of Animation",
            "content": "Demon Slayer sets a new standard for animation quality. The fight scenes are breathtaking, and the story is emotionally engaging.",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000"
        },
        {
            "id": 2,
            "anime": "Attack on Titan",
            "rating": 9.8,
            "reviewer": "TitanFan",
            "date": "2024-01-12",
            "title": "The Perfect Ending",
            "content": "Attack on Titan concludes with one of the most satisfying endings in anime history. A true masterpiece from start to finish.",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1001"
        },
        {
            "id": 3,
            "anime": "Jujutsu Kaisen",
            "rating": 9.3,
            "reviewer": "JJKFan",
            "date": "2024-01-08",
            "title": "Action-Packed Excellence",
            "content": "Jujutsu Kaisen delivers non-stop action with incredible animation and a compelling story. A must-watch for action anime fans.",
            "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1002"
        }
    ],
    "dramas": [
        {"id": 1, "title": "Your Lie in April", "episodes": 22, "rating": 9.0, "status": "Completed", "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600", "description": "A touching story of music, loss, and love."},
        {"id": 2, "title": "Violet Evergarden", "episodes": 13, "rating": 9.1, "status": "Completed", "image": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=601", "description": "A journey of a former soldier learning to feel again."},
        {"id": 3, "title": "Clannad: After Story", "episodes": 22, "rating": 9.2, "status": "Completed", "image": "https://images.unsplash.com/photo-1500534314218-6bfa0c63e1f2?w=602", "description": "Family, growth, and heartbreaking life lessons."},
        {"id": 4, "title": "Anohana", "episodes": 11, "rating": 8.8, "status": "Completed", "image": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=603", "description": "Friends reunite to fulfill a promise to a lost friend."},
        {"id": 5, "title": "Fruits Basket", "episodes": 63, "rating": 9.0, "status": "Completed", "image": "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=604", "description": "Healing and romance with a family under a zodiac curse."},
        {"id": 6, "title": "A Silent Voice", "episodes": 1, "rating": 9.0, "status": "Movie", "image": "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=605", "description": "A bully seeks redemption with the girl he hurt."},
        {"id": 7, "title": "March Comes in Like a Lion", "episodes": 44, "rating": 9.0, "status": "Ongoing", "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=606", "description": "A young shogi pro finds family and purpose."},
        {"id": 8, "title": "Orange", "episodes": 13, "rating": 8.5, "status": "Completed", "image": "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=607", "description": "Friends try to change the fate of someone they love."},
        {"id": 9, "title": "Toradora!", "episodes": 25, "rating": 8.7, "status": "Completed", "image": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=608", "description": "Opposites attract in this heartfelt rom-com."},
        {"id": 10, "title": "Kaguya-sama: Love is War", "episodes": 37, "rating": 9.0, "status": "Ongoing", "image": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=609", "description": "Two geniuses battle in love's mind games."},
        {"id": 11, "title": "Horimiya", "episodes": 13, "rating": 8.6, "status": "Completed", "image": "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=610", "description": "Sweet slice-of-life romance with hidden sides."},
        {"id": 12, "title": "Your Name", "episodes": 1, "rating": 9.1, "status": "Movie", "image": "https://images.unsplash.com/photo-1500534314218-6bfa0c63e1f2?w=611", "description": "Two strangers share a mysterious connection across time."}
    ]
}


@app.route("/api/trending", methods=["GET"])
def get_trending():
    return jsonify(ANIME_DATA["trending"])


@app.route("/api/characters", methods=["GET"])
def get_characters():
    return jsonify(ANIME_DATA["characters"])


@app.route("/api/episodes", methods=["GET"])
def get_episodes():
    return jsonify(ANIME_DATA["episodes"])


@app.route("/api/fanart", methods=["GET"])
def get_fanart():
    return jsonify(ANIME_DATA["fanArt"])


@app.route("/api/blogs", methods=["GET"])
def get_blogs():
    return jsonify(ANIME_DATA["blogs"])


@app.route("/api/reviews", methods=["GET"])
def get_reviews():
    return jsonify(ANIME_DATA["reviews"])


@app.route("/api/dramas", methods=["GET"])
def get_dramas():
    return jsonify(ANIME_DATA["dramas"])


@app.route("/api/anime/<int:anime_id>", methods=["GET"])
def get_anime(anime_id: int):
    anime = next((a for a in ANIME_DATA["trending"] if a["id"] == anime_id), None)
    if anime:
        return jsonify(anime)
    return jsonify({"error": "Anime not found"}), 404


if __name__ == "__main__":
    app.run(debug=True, port=5000)

