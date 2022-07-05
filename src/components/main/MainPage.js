import React, { Component } from 'react'
import Card from '../cards/Card'
import "./MainPage.css"
import axios from 'axios'

export class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status:"not Found",
            totalItem:0,
            news:[],
        }
    }

    componentDidMount(){
        let func = async () =>{
            try{
                const res = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-06-05&sortBy=publishedAt&apiKey=a89e083f5cf447618215e136d50a10f0");
                this.setState({
                    status:res.data.status,
                    totalItem:res.data.totalResults,
                    news:res.data.articles,   
                })
            }
            catch{
                console.log("error 404");
            }
        }
        func();        
    }

    render() {
        return (
            <>
            <div className="stats">
                <div className="status">{this.state.status}</div>
                <div className="total">{this.state.totalItem}</div> 
            </div>
            <div className='main'>
                {
                    this.state.news.map((news)=>(
                        <Card obj={{
                            title:news.title,
                            img:news.urlToImage,
                            author:news.author,
                            description:news.description,
                            content:news.content,
                            publishedAt:news.publishedAt,
                            url:news.url,
                        }}/>
                    ))
                }
            </div>
            </>
        )
    }
}

export default MainPage