import React from "react";

class NewsItem extends React.Component {
    state = {
        news: [],
        count: this.props.count,
        content: ""
    }

    async componentDidMount() {
        const url = `https://eodhistoricaldata.com/api/news?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&s=AAPL.US&offset=0&limit=${this.state.count}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ news: data })
        console.log(this.news)
    }
    getShortText(content){
        let short = content.slice(0,500)
        return short;
    }
    render() {

        return (
            <div>
                {this.state.news.map((e) => (
                    <div key={e.date} className="newsItem">
                        <h4>{e.title}</h4>
                        <p>{this.getShortText(e.content)}... {/* <a href={}>Read more</a> */}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default NewsItem;