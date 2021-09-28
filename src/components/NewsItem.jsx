import React from "react";

class NewsItem extends React.Component {
    state = {
        news: [],
        count: this.props.count
    }

    async componentDidMount() {
        const url = `https://eodhistoricaldata.com/api/news?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&s=AAPL.US&offset=0&limit=${this.state.count}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ news: data })
        console.log(data)
    }
    render() {

        return (
            <div>
                {this.state.news.map((e) => (
                    <div key={e.date} className="newsItem">
                        <h4>{e.title}</h4>
                        <p>{e.content}</p>

                    </div>
                ))}
            </div>
        );
    }
}

export default NewsItem;