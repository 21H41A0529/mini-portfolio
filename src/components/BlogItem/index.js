// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {i} = props
  const {id} = i
  return (
    <Link to={`/blogs/${id}`}>
      <li className="listItem">
        <img src={i.imageUrl} className="image" alt={`item${id}`} />
        <div className="items">
          <p>{i.topic}</p>
          <h1>{i.title}</h1>
          <div className="profileCon">
            <img src={i.avatarUrl} className="profile" alt={`avatar${id}`} />
            <p>{i.author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
