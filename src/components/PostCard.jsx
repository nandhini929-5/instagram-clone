import { useState } from "react"
import { FaHeart, FaRegHeart, FaRegComment, FaRegBookmark, FaBookmark } from "react-icons/fa"
import { IoPaperPlaneOutline } from "react-icons/io5"

function PostCard({ post }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(Number(post.likes))
  const [saved, setSaved] = useState(false)
  const [followed, setFollowed] = useState(false)

  function handleLike() {
    if (liked) {
      setLiked(false)
      setLikes(likes - 1)
    } else {
      setLiked(true)
      setLikes(likes + 1)
    }
  }

  function handleSave() {
    setSaved(!saved)
  }

  return (
    <div className="post">

      {/* Header */}
      <div className="post-header">
        <div className="post-user">
          <img src={post.avatar} alt={post.username} className="post-avatar" />
          <div>
            <div className="post-username">{post.username}</div>
            <div className="post-location">{post.location}</div>
          </div>
        </div>
        <div className="post-header-right">
          <button
            className={`follow-btn ${followed ? "following" : ""}`}
            onClick={() => setFollowed(!followed)}
          >
            {followed ? "Following" : "Follow"}
          </button>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>⋯</span>
        </div>
      </div>

      {/* Post Image */}
      <img src={post.postImage} alt={post.username} className="post-image" />

      {/* Actions */}
      <div className="post-actions">
        <div className="post-actions-left">
          {liked
            ? <FaHeart size={24} color="red" cursor="pointer" onClick={handleLike} />
            : <FaRegHeart size={24} cursor="pointer" onClick={handleLike} />
          }
          <FaRegComment size={24} cursor="pointer" />
          <IoPaperPlaneOutline size={24} cursor="pointer" />
        </div>
        {saved
          ? <FaBookmark size={22} cursor="pointer" onClick={handleSave} />
          : <FaRegBookmark size={22} cursor="pointer" onClick={handleSave} />
        }
      </div>

      <div className="post-likes">{likes.toLocaleString()} likes</div>
      <div className="post-caption">
        <b>{post.username}</b> {post.caption}
      </div>
      <div className="post-time">{post.time}</div>

    </div>
  )
}

export default PostCard