import StoriesRow from './components/StoriesRow'
import PostCard from './components/PostCard'
import BottomNav from './components/BottomNav'
import './App.css'
import user1 from './assets/user1.jpeg'
import user2 from './assets/user2.jpeg'
import user3 from './assets/user3.jpeg'

const posts = [
  {
    id: 1,
    username: "priya_art",
    location: "Chennai, India",
    avatar: user1,
    postImage: user2,
    likes: 1248,
    caption: "Golden hour hits different in Chennai ✨",
    time: "2 hours ago"
  },
  {
    id: 2,
    username: "dev_karan",
    location: "Bangalore, India",
    avatar: user2,
    postImage: user3,
    likes: 892,
    caption: "Shipped my first React project today 🚀",
    time: "5 hours ago"
  },
  {
    id: 3,
    username: "sara_clicks",
    location: "Mumbai, India",
    avatar: user3,
    postImage: user1,
    likes: 3421,
    caption: "Life is beautiful 🌸",
    time: "1 day ago"
  },
]

function App() {
  return (
    <div className="app">
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