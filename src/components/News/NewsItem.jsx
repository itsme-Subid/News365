import "./NewsItem.css";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { id, news } = this.props;
    let pubDate = new Date(news.pubDate);
    let nowDate = new Date();
    return (
      <>
        <div className="card" key={id}>
          {news.image_url && (
            <div
              className="card-img-top"
              style={{ width: "100%", height: "200px" }}
            >
              <img src={news.image_url} alt="..." />
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
                {((nowDate - pubDate) / 1000 / 60 / 60).toPrecision(2) +
                  " Hours ago"}
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
