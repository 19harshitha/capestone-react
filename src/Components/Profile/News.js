import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css"



function News() {
   
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [news, setNews] = useState([]);
    useEffect(()=>{
        const fetchNews = async()=>{
           await fetch("https://newsapi.org/v2/everything?q=apple&from=2023-09-06&to=2023-09-06&sortBy=popularity&apiKey=66855bf0b2934352910cb80ddcd86e88")
                .then(async(data)=>await data.json()).then((res)=>setNews(res.articles[0]))
        }
        fetchNews();
    },[])

    useEffect(() => {
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; 
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })

    return (
        <div className="clip" >
            <img src={news.urlToImage} style={{ height: "60vh", borderRadius: "12px", width: "31vw" }} />
            <div className="mid">
            <p  id="sim">{news.description}</p>
               
            </div>
            <div className="min" >
                <p  id="roc">{news.title}</p>
                <span style={{ color: "white", fontSize: "1.3rem", marginRight: "10px", }}>{date}</span>
                <span style={{ color: "white", fontSize: "1.3rem", marginRight: "10px", }}>{time}</span>
            </div>
        </div>
    )
}

export default News