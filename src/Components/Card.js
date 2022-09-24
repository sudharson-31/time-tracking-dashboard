import {TrackerIcon} from '../Data/TrackerIcon'

export default function Card({data, period}){
    function Header(){
        let icon = TrackerIcon.find(item=>item.title==data.title)
        return (
            <img src={process.env.PUBLIC_URL + icon.iconPath} alt={icon.title} />
        )
    }
    function Previous(){
        if(period == "daily"){
            return "Yesterday"
        }
        else if(period == "weekly"){
            return "Last Week"
        }
        else{
            return "Last Month"
        }
    }
    return(
        <div className="card">
            <div id={"Header-"+data.id} className="card-header">
                <Header />
            </div>
            <div id="Card-Content" className='card-content'>
                <div className='header'>
                    <span>{data.title}</span>
                    <span className='options-container'>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path className="ellipses" d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                    </span>
                </div>
                <div className='current-hours'>
                    {data.currentTimeSpent}
                </div>
                <div className='previous-hours'>
                    <Previous /> - {data.previousTimeSpent}
                </div>
            </div>
        </div>
    )
}