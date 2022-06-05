import { useState,useEffect } from "react"

function b(a){
    a=String(a)
    if(a.length===1){
        a="0"+a
    }
    return a
}
function c(a){
    var days=Math.trunc(a/24/60/60)
    var hours=Math.trunc((a-days*24*60*60)/60/60)
    var minutes=Math.trunc((a-days*24*60*60-hours*60*60)/60)
    var seconds=a-days*24*60*60-hours*60*60-minutes*60
    return [days,hours,minutes,seconds]
}

function Article(props) {
    var title=props.title
    var date=Math.trunc((new Date(props.date)-Date.now())/1000)
    if(date<0){
        return 
    }
    if(title.length>13){
        title=title.substr(0,13)+"•••"
    }
    const [list,setList]=useState([b(c(date)[0]),b(c(date)[1]),b(c(date)[2]),b(c(date)[3])])
    
    setInterval(() => {
        setList([b(c(date)[0]),b(c(date)[1]),b(c(date)[2]),b(c(date)[3])])
    }, 1000);

    return (
        <a href={props.id}>
            <div className='Article'>
                <p className='title'>{title}<span>まで</span></p>
                <p className="date">{list[0]}<span>日</span>{list[1]}<span>時間</span>{list[2]}<span>分</span>{list[3]}<span>秒</span></p>
            </div>
        </a>
    )
}
export default Article;
