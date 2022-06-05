import '../css/Home.css';
import Article from './Article';
// import axios from "axios";

var contents=[
  {url:"/",title:"キックオフMTG@Zoom",date:"2022/05/27/18:00",ato:"00:00:00:00"},
  {url:"/",title:"ハッカソン開会式@Zoom",date:"2022/06/04/11:00",ato:"00:00:00:00"},
  {url:"/",title:"ハッカソン1日目〆会@Zoom",date:"2022/06/04/20:00",ato:"00:00:00:00"},
  {url:"/",title:"ハッカソン2日目朝会@Zoom",date:"2022/06/05/11:00",ato:"00:00:00:00"},
  {url:"/",title:"コードフリーズ",date:"2022/06/05/15:00",ato:"00:00:00:00"},
  {url:"/",title:"成果発表プレゼン資料作成・練習",date:"2022/06/05/15:00",ato:"00:00:00:00"},
  {url:"/",title:"【予選】ハッカソン成果発表@Zoom",date:"2022/06/05/16:00",ato:"00:00:00:00"},
  {url:"/",title:"【決勝】ハッカソン成果発表@Zoom",date:"2022/06/05/17:30",ato:"00:00:00:00"},
  {url:"/",title:"懇談会",date:"2022/06/05/19:00",ato:"00:00:00:00"}
]

function Home() {
  return (
    <div className="Home">
      <div class="group">
        <div class="search_bar">
            <i class="fas fa-search search_icon"></i>
            <input id="text2" type="text" placeholder="キーワードを入力" />
            <i class="fas fa-times search_icon"></i>
        </div>
      </div>
      {contents.map((i)=>{
        return (
          <Article
            title={i.title}
            date={i.date}
            ato={i.ato}
            explain={i.explain}
            url={i.url}
          />
        )
      })}
      <a href="/">
        <div className='plus'>
          <i class="fa-solid fa-plus fa-4x"></i>
        </div>
      </a>
    </div>
  );
}

export default Home;
