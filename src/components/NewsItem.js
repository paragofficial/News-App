import React, { Component } from 'react'

export class NewsItem extends Component {
 

  render() {
    let {title, description, imageUrl, newsUrl, author , date, source } = this.props;
    
    return (
      <div className='my-3'>
    <div className="card">
      <div style={{display: 'flex' , justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
    <span className="badge rounded-pill bg-danger" >{source}</span>
      </div>
    <img src={!imageUrl?"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=1024x1024&w=is&k=20&c=S9FBe3KUvooZHZktJzr8Nt94wtg56BQTQiqAz8zUK8M=":imageUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}...</h5>

        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {!author?"unknown" :author} on {new Date(date).toString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sn">Read More</a>
    </div>
</div>
      </div>
    )
  }
}

export default NewsItem
