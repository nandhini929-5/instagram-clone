import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import user1 from "../assets/user1.jpeg"
import user2 from "../assets/user2.jpeg"
import user3 from "../assets/user3.jpeg"
import "./StoriesRow.css"

const stories = [
  { id: 1, username: "Your Story", image: user1, isYours: true },
  { id: 2, username: "priya_art", image: user2 },
  { id: 3, username: "ravi.pic", image: user3 },
  { id: 4, username: "hari", image: user1 },
  { id: 5, username: "priya_art", image: user2 },
  { id: 6, username: "ravi.pic", image: user3 },
]

function StoriesRow() {
  const [activeStory, setActiveStory] = useState(null)

  const handleStoryClick = (story) => {
    if (story.isYours) return // Your Story click panna open aagaadhu
    setActiveStory(story)
    setTimeout(() => {
      setActiveStory(null) // 3 seconds la auto close
    }, 3000)
  }

  return (
    <>
      {/* Fullscreen Story View */}
      {activeStory && (
        <div className="story-fullscreen" onClick={() => setActiveStory(null)}>
          <img src={activeStory.image} alt={activeStory.username} className="story-fullscreen-img" />
          <span className="story-fullscreen-name">{activeStory.username}</span>
        </div>
      )}

      {/* Stories Row */}
      <div className="stories-row">
        {stories.map((story) => (
          <div key={story.id} className="story" onClick={() => handleStoryClick(story)}>
            <div className={`story-ring ${story.isYours ? "your-story" : ""}`}>
              <img src={story.image} alt={story.username} className="story-avatar" />
              {/* Plus icon only on Your Story */}
              {story.isYours && (
                <div className="story-plus">
                  <FaPlus size={10} color="white" />
                </div>
              )}
            </div>
            <span className="story-name">{story.username}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default StoriesRow