import "./NewsItem.css";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { id, news } = this.props;
    const formattedDate = (date) => {
      return new Date() - new Date(date) < 86400000
        ? (new Date() - new Date(date)) / 3600000 < 1
          ? new Date() - new Date(date) < 60000
            ? "Just now"
            : `${Math.floor((new Date() - new Date(date)) / 60000)} minutes ago`
          : `${Math.floor((new Date() - new Date(date)) / 3600000)} hours ago`
        : new Date() - new Date(date) < 86400000
        ? "Today"
        : new Date() - new Date(date) < 172800000
        ? "Yesterday"
        : new Date() - new Date(date) / 172800000 === 1
        ? "a day ago"
        : new Date() - new Date(date) / 172800000 < 7
        ? `${Math.floor((new Date() - new Date(date)) / 172800000)} days ago`
        : new Date() - new Date(date) / 604800000 === 1
        ? "a week ago"
        : new Date() - new Date(date) / 604800000 < 4
        ? `${Math.floor((new Date() - new Date(date)) / 604800000)} weeks ago`
        : new Date() - new Date(date) / 2629746000 === 1
        ? "a month ago"
        : new Date() - new Date(date) / 2629746000 < 12
        ? `${Math.floor((new Date() - new Date(date)) / 2629746000)} months ago`
        : new Date() - new Date(date) / 31556952000 === 1
        ? "a year ago"
        : `${Math.floor(
            (new Date() - new Date(date)) / 31556952000
          )} years ago`;
    };
    return (
      <>
        <div className="card" key={id}>
          {news.image_url && (
            <div
              className="card-img-top"
              style={{ width: "100%", height: "200px" }}
            >
              <img src={news.image_url} alt="" />
            </div>
          )}
          <div className="card-body">
            {news.title && (
              <h5 className="card-title">
                <span>{news.title} </span>
              </h5>
            )}
            <p className="card-text">
              <small className="text-muted">
                {news.source_id && (
                  <span
                    className="card-source"
                    title={`News source: ${news.source_id.toUpperCase()}`}
                  >
                    {news.source_id}
                  </span>
                )}
                {formattedDate(news.pubDate)}
              </small>
            </p>
            {news.description && (
              <p className="card-text">{news.description}</p>
            )}
            <div className="card-footer">
              {news.link && (
                <a
                  href={news.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-button"
                >
                  Read more
                </a>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
