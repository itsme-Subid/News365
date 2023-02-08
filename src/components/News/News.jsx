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
      totalPages: 1,
    };
  }
  fetchNews = async () => {
    this.setState({
      loading: true,
    });
    let news = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_KEY1}&language=en&country=in&category=${this.props.category}`
    ).catch(async (err) => {
      return await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_KEY2}&language=en&country=in&category=${this.props.category}`
      ).catch(async (err) => {
        return await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_KEY3}&language=en&country=in&category=${this.props.category}`
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
      </div>
    );
  }
}

export default News;
