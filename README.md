# 🎌 Anime Universe - Your Ultimate Anime Destination

A beautiful, modern anime website featuring trending series, character spotlights, episode updates, fan art galleries, blogs, and reviews. Built with React.js, Python Flask, HTML, and CSS.

## ✨ Features

- 🔥 **Trending Anime** - Discover the most popular anime series
- ⭐ **Character Spotlights** - Explore your favorite characters
- 📺 **Latest Episodes** - Stay updated with new episode releases
- 🎨 **Fan Art Gallery** - Admire amazing fan-created artwork
- 📝 **Anime Blogs** - Read articles and insights about anime
- 💬 **User Reviews** - Share and read reviews from the community
- 🎬 **Live Streaming** - Watch anime previews and trailers
- 📱 **Responsive Design** - Beautiful on all devices

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd anime
   ```

2. **Set up the Backend (Python Flask)**

   **Windows (using Python Launcher):**
   ```bash
   cd backend
   py -m pip install -r requirements.txt
   py app.py
   ```

   **Linux/Mac:**
   ```bash
   cd backend
   pip install -r requirements.txt
   python app.py
   ```

   **Or use the batch file (Windows):**
   - Double-click `start-backend.bat`

   The backend will run on `http://localhost:5000`

3. **Set up the Frontend (React)**

   Open a new terminal window:

   ```bash
   cd frontend
   npm install
   npm start
   ```

   The frontend will run on `http://localhost:3000`

4. **Open your browser**

   Navigate to `http://localhost:3000` to see the website!

## 📁 Project Structure

```
anime/
├── backend/
│   ├── app.py              # Flask API server
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── Trending.js
│   │   │   ├── Characters.js
│   │   │   ├── Episodes.js
│   │   │   ├── FanArt.js
│   │   │   ├── Blogs.js
│   │   │   ├── Reviews.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## 🎨 Technologies Used

- **Frontend:**
  - React.js 18
  - CSS3 (with animations and gradients)
  - HTML5
  - Axios (for API calls)

- **Backend:**
  - Python 3
  - Flask
  - Flask-CORS

## 🌟 Key Features

### Eye-Catching Design
- Gradient backgrounds with animated shapes
- Smooth hover effects and transitions
- Modern glassmorphism UI elements
- Responsive grid layouts
- Beautiful typography with custom fonts

### Interactive Elements
- Smooth scrolling navigation
- Hover animations on cards
- Play buttons on episode thumbnails
- Like counters on fan art
- Star ratings on reviews

### Sample Content
- 6 trending anime series
- 6 character spotlights
- 3 latest episodes
- 4 fan art pieces
- 3 blog posts
- 3 user reviews

## 🔧 Customization

### Adding More Anime Data

Edit `backend/app.py` to add more anime, characters, episodes, fan art, blogs, or reviews to the `ANIME_DATA` dictionary.

### Styling

All component styles are in their respective CSS files in `frontend/src/components/`. The main styles are in `App.css` and `index.css`.

### API Endpoints

- `GET /api/trending` - Get trending anime
- `GET /api/characters` - Get character spotlights
- `GET /api/episodes` - Get latest episodes
- `GET /api/fanart` - Get fan art gallery
- `GET /api/blogs` - Get blog posts
- `GET /api/reviews` - Get user reviews
- `GET /api/anime/<id>` - Get specific anime by ID

## 📝 Notes

- The images use placeholder URLs from Unsplash. Replace them with actual anime images or use an anime API.
- The embedded video is a placeholder. Replace with actual anime streaming content.
- All data is currently static. Connect to a real database for production use.

## 🎯 Future Enhancements

- User authentication
- Real-time updates
- Search functionality
- User profiles
- Comments and discussions
- Watchlist feature
- Integration with anime APIs (Jikan, AniList, etc.)

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Credits

Built with ❤️ for anime lovers everywhere!

---

**Enjoy exploring the Anime Universe! 🎌✨**

