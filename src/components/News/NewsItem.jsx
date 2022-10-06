import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { id, news } = this.props;
    return (
      <>
        <div
          className="card my-5"
          key={id}
          style={{ color: "rgb(var(--dark-color))" }}
        >
          {news.image_url && (
            <img src={news.image_url} className="card-img-top" alt="..." />
          )}
          <div className="card-body">
            <h5 className="card-title">
              {news.title}{" "}
              <span className="badge bg-primary">{news.source_id}</span>
            </h5>
            <p className="card-text">{news.content}</p>
            <p className="card-text">
              <small className="text-muted">Date: {news.pubDate}</small>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
