/**
 * Created by Administrator on 2016/12/15.
 */
import React from 'react';
import $ from 'jquery';
import {render} from 'react-dom';
import NewsList from './NewsList'
import '../css/app.css'
function get(url) {
    return Promise.resolve($.ajax(url));
}
//首次获得的是每天新闻的ID数组，然后嵌套promise拉取前100条数据
get('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(stories) {
    return Promise.all(stories.slice(0, 100).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(function(items) {
    render(<NewsList items={items} />, $('#root')[0]);
}).catch(function(err) {
    console.log('error occur', err);
});