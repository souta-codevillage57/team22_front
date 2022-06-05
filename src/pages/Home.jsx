import '../css/Home.css';
import Article from './Article';
import React from 'react';
import baseUrl from '../apis/baseUrl';
import { useState,useEffect } from 'react';

var list=[
  {"owner":"tester","note":"ハッカソンについての予定です。","url":"https://talent.supporterz.jp/geekcamp/","title":"キックオフMTG@Zoom","date":"2022/05/27/18:00","delete_key":"hensyuu"},
  {"owner":"tester","note":"ハッカソンについての予定です。","url":"https://talent.supporterz.jp/geekcamp/","title":"ハッカソン開会式@Zoom","date":"2022/06/04/11:00","delete_key":"hensyuu"},
  {"owner":"tester","note":"ハッカソンについての予定です。","url":"https://talent.supporterz.jp/geekcamp/","title":"ハッカソン1日目〆会@Zoom","date":"2022/06/04/20:00","delete_key":"hensyuu"},
  {"owner":"tester","note":"ハッカソンについての予定です。","url":"https://talent.supporterz.jp/geekcamp/","title":"ハッカソン2日目朝会@Zoom","date":"2022/06/05/11:00","delete_key":"hensyuu"},
  {"owner":"tester","note":"ハッカソンについての予定です。","url":"https://talent.supporterz.jp/geekcamp/","title":"コードフリーズ","date":"2022/06/05/15:00","delete_key":"hensyuu"},
  {"owner":"tester","note":"ハッカソンについての予定です。","url":"https://talent.supporterz.jp/geekcamp/","title":"成果発表プレゼン資料作成・練習","date":"2022/06/05/15:00","delete_key":"hensyuu"},
  {"owner":"tester","note":"ハッカソンについての予定です。","url":"https://talent.supporterz.jp/geekcamp/","title":"【予選】ハッカソン成果発表@Zoom","date":"2022/06/05/16:00","delete_key":"hensyuu"},
  {"owner":"tester","note":"ハッカソンについての予定です。","url":"https://talent.supporterz.jp/geekcamp/","title":"【決勝】ハッカソン成果発表@Zoom","date":"2022/06/05/17:30","delete_key":"hensyuu"},
  {"owner":"tester","note":"ハッカソンについての予定です。","url":"https://talent.supporterz.jp/geekcamp/","title":"懇談会","date":"2022/06/05/19:00","delete_key":"hensyuu"}
]
function Home() {
  const [contents,setContents] = useState([]);
  useEffect(()=>{
    baseUrl.get("/api/events").then((r)=>{
    setContents(r.data.events)
    })
  },[])
  return (
    <div className="Home">
      <div className="group">
        <div className="search_bar">
            <i className="fas fa-search search_icon"></i>
            <input id="text2" type="text" placeholder="キーワードを入力" />
            <i className="fas fa-times search_icon"></i>
        </div>
      </div>
      {contents.map((i)=>{
        return (
          <Article
            title={i.title}
            date={i.date}
            id={i.id}
          />
        )
      })}
      <a href="/newPost">
        <div className='plus'>
          <i className="fa-solid fa-plus fa-4x"></i>
        </div>
      </a>
    </div>
  );
}

export default Home;
