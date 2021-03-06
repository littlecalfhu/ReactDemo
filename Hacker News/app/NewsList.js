/**
 * Created by Administrator on 2016/12/20.
 */
import React from 'react';
import NewsItem from './NewsItem';
import NewsHeader from './NewsHeader';
export default class NewsList extends React.Component{
    render(){
        var testData = {
            "by" : "bane",
            "descendants" : 49,
            "id" : 11600137,
            "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
            "score" : 56,
            "time" : 1461985332,
            "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
            "type" : "story",
            "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
        };
        return(
            <div className="newsList">
                <NewsHeader/>
                <div className="newsList-newsItem">
                    {
                        (this.props.items).map(function (item,index) {
                            return(
                                <NewsItem key={index} item={item} rank={index+1}/>
                            );
                        })
                    }
                </div>
                {/*<NewsItem item={testData} rank={1}/>*/}
            </div>
        );
    }
}