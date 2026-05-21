import StoriesRow from './components/StoriesRow'
import PostCard from './components/PostCard'
import BottomNav from './components/BottomNav'
//import Header from './components/Header'
import './App.css'

const posts = [
  {
    id: 1,
    username: "priya_art",
    location: "Chennai, India",
    emoji: "👧",
    color: "#FAEEDA",
    image: "🌅",
    likes: 1248,
    caption: "Golden hour hits different in Chennai ✨",
    time: "2 hours ago"
  },
  {
    id: 2,
    username: "dev_karan",
    location: "Bangalore, India",
    emoji: "🧑‍💻",
    color: "#E1F5EE",
    image: "💻",
    likes: 892,
    caption: "Shipped my first React project today 🚀",
    time: "5 hours ago"
  },
]

function App() {
  return (
    <div className="app">
       {/* <Header /> */}
      <div className="feed">
        <StoriesRow />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <BottomNav />
    </div>
  )
}

export default App