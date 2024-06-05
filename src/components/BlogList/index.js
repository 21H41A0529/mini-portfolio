// Write your JS code here

import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    isActive: false,
    list: [],
  }

  componentDidMount() {
    this.getBlogs()
  }

  getBlogs = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const filtered = data.map(i => ({
      id: i.id,
      title: i.title,
      imageUrl: i.image_url,
      avatarUrl: i.avatar_url,
      author: i.author,
      topic: i.topic,
    }))

    this.setState({list: [...filtered], isActive: true})
  }

  render() {
    const {isActive, list} = this.state
    return (
      <div>
        <img src="" alt="profile" />
        <h1>Wade Warren</h1>
        <p>Software Developer at UK</p>
        <ul>
          {isActive ? (
            list.map(i => <BlogItem key={i.id} i={i} />)
          ) : (
            <div data-testid="loader">
              <Loader type="tailSpin" color="blue" height={50} width={50} />
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList
