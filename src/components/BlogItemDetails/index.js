// Write your JS code here

import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {
    isActive1: false,
    i1: {},
  }

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response1 = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const i = await response1.json()
    const filtered1 = {
      id: i.id,
      title: i.title,
      imageUrl: i.image_url,
      avatarUrl: i.avatar_url,
      author: i.author,
      content: i.content,
      topic: i.topic,
    }

    this.setState({i1: filtered1, isActive1: true})
  }

  renderDetailsOf = () => {
    const {i1} = this.state
    return (
      <div className="itemCon">
        <h1 className="head">{i1.title}</h1>
        <div className="innerCon">
          <div className="profileCon">
            <img src={i1.avatarUrl} className="profile" alt={i1.title} />
            <p>{i1.author}</p>
          </div>

          <img src={i1.imageUrl} className="mainProfile" alt={i1.title} />
          <p>{i1.content}</p>
        </div>
      </div>
    )
  }

  error = () => (
    <div data-testid="loader">
      <Loader type="tailSpin" color="blue" height={50} width={50} />
    </div>
  )

  render() {
    const {isActive1} = this.state

    return isActive1 ? this.renderDetailsOf() : this.error()
  }
}
export default BlogItemDetails
