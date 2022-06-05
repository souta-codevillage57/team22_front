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
    // var date=props.ato
    var title=props.title
    var date=Math.trunc((new Date(props.date)-Date.now())/1000)
    if(date<0){
        return 
    }
    // var ato=c(date)
    if(title.length>13){
        title=title.substr(0,13)+"•••"
    }
    return (
        <a href={props.url}>
            <div className='Article'>
                <p className='title'>{title}<span>まで</span></p>
                <p className="date">{b(c(date)[0])}<span>日</span>{b(c(date)[1])}<span>時間</span>{b(c(date)[2])}<span>分</span>{b(c(date)[3])}<span>秒</span></p>
            </div>
        </a>
    );
}
export default Article;
