import "./News.css";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "../Loading/Loading";

export class News extends Component {
  article = [];
  constructor(props) {
    super(props);
    this.state = {
      news: this.article,
      loading: true,
      page: 1,
      totalPages: 1,
    };
  }
  fetchNews = async () => {
    this.setState({
      loading: true,
    });
    let news = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_12002c8e6df9a490b63a54c68d2c5a2238546&language=en&country=in&category=${this.props.category}&page=${this.state.page}`
    ).catch(async (err) => {
      return await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_11982d15958bd3acfdd11346baceaeefba638&language=en&country=in&category=${this.props.category}&page=${this.state.page}`
      ).catch(async (err) => {
        return await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_11997bb3d19563dba67e9680df5ecf5829c4b&language=en&country=in&category=${this.props.category}&page=${this.state.page}`
        );
      });
    });
    let parsedNews = await news.json();
    this.setState({
      news: parsedNews.results,
      totalPages: parsedNews.totalResults / 10,
      loading: false,
    });
    this.article = parsedNews.results;
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.props.category !== prevProps.category
    ) {
      this.fetchNews();
    }
  }
  componentDidMount = this.fetchNews;
  render() {
    return (
      <div className="container">
        <h1 style={{ textTransform: "capitalize" }}>top headlines today </h1>
        {this.state.loading && <Loading />}
        <div className="news">
          {!this.state.loading &&
            this.state.news.map((element, index) => {
              return <NewsItem key={index} news={element} />;
            })}
        </div>
        <div className="buttons">
          <button
            disabled={this.state.page <= 1}
            onClick={() => {
              window.scroll(0, 0);
              this.state.page > 1 &&
                this.setState({
                  page: this.state.page - 1,
                });
            }}
          >
            Previous
          </button>
          <button
            disabled={this.state.totalPages === this.state.page}
            onClick={() => {
              window.scroll(0, 0);
              this.setState({
                page: this.state.page + 1,
              });
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
