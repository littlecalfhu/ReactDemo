/**
 * Created by Administrator on 2016/12/20.
 */
import React from 'react';
import '../css/NewsItem.css';
import URL from 'url'
import ImageGrayArrow from '../images/grayarrow.gif'
export default class NewsItem extends React.Component{
    getDomain(){
        return URL.parse(this.props.item.url).hostname;
    }
    getTitle(){
        return (
            //标题和来源地址
            <div className="newsItem-title">
                <a className="newsItem-titleLink" href={this.props.item.url?this.props.item.url: 'https://news.ycombinator.com/item?id=' + this.props.item.id}>{this.props.item.title}</a>
                {/*判断标题是否有来源地址，若有来源地址则显示*/}
                {this.props.item.url&&<span className="newsItem-domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>}
            </div>
        );
    }
    //评论连接
    getCommentLink(){
        var commentText = 'discuss';
        if(this.props.item.kids && this.props.item.kids.length){
            commentText = this.props.item.kids.length + '  comment';
        }
        return (
            <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{commentText}</a>
        );
    }
    getSubtext(){
        return(
            <div className="newsItem-subtext">
                {this.props.item.score} points by &nbsp;
                <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> &nbsp;
                {this.getTime(this.props.item.time)} | {this.getCommentLink()}
            </div>
        );
    }
    getTime(time){
        return new Date(parseInt(time)*1000).toLocaleString().substr(0.17);
    }
    getRank(){ //序号
        return(
            <div className="newsItem-rank">
                {this.props.rank}
            </div>
        );
    }
    getVote(){ //投票
        return(
            <div className="newsItem-vote">
                <a href={'https://news.ycombinator.com/vote?for='+ this.props.item.id + '&dir=up&goto=news'}>
                    <img src={ImageGrayArrow} width="10" />
                </a>
            </div>
        );
    }
    render(){
        return(
            <div className="newsItem">
                {this.getRank()}
                {this.getVote()}
                <div className="newsItem-itemText">
                    {this.getTitle()}
                    {this.getSubtext()}
                </div>
            </div>
        );
    }
}