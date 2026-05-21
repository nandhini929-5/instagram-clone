const stories = [
  { id: 1, username: "Your Story", emoji: "🧑", color: "#E6F1FB" },
  { id: 2, username: "priya_art", emoji: "👧", color: "#FAEEDA" },
  { id: 3, username: "ravi.pic", emoji: "🧒", color: "#EAF3DE" },
  { id: 4, username: "sara_clicks", emoji: "👩", color: "#FBEAF0" },
  { id: 5, username: "dev_karan", emoji: "🧑‍💻", color: "#E1F5EE" },
]

function StoriesRow() {
  return (
    <div className="stories-row">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <div className="story-ring">
            <div className="story-avatar" style={{ background: story.color }}>
              {story.emoji}
            </div>
          </div>
          <span className="story-name">{story.username}</span>
        </div>
      ))}
    </div>
  )
}

export default StoriesRow