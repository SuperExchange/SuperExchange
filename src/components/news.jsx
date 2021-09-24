import React from "react";

export default class News extends React.Component {
        state = { 
            title : null,
            content : null,
            date : null,
        }
    
    async componentDidMount() {
        const url = "https://eodhistoricaldata.com/api/news?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&s=AAPL.US&offset=0&limit=10";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({content: data[0].content})
        this.setState({title: data[0].title})
        this.setState({date: data[0].date})
    }
    render() { 

        return ( <div>
        
            {Object.keys(this.state).map(key => 
            <div>{this.state[key]}</div>,
            
            )};   
        </div> );
    }
}
