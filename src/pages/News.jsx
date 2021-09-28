import NewsItem from "../components/NewsItem";
import "../css/News.css"

const News = () => {
    return (
        <div className="news">
            <h1>News</h1>
            <NewsItem count={4} />
        </div>
    );
};

export default News;
