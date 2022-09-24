import Card from "./Card";
import {TimeTrackerData} from '../Data/TimeTrackerData'

export default function CardsGrid({timePeriod}){
    let period = [];
    if(timePeriod === 'daily'){period = TimeTrackerData[0].daily}
    if(timePeriod === 'weekly'){period = TimeTrackerData[0].weekly}
    if(timePeriod === 'monthly'){period = TimeTrackerData[0].monthly}
    return(
        <div id="Tracker-Grid" className="tracker-grid">
            {
                period.map((e,i)=>{
                    return(
                        <Card key={i} data={e} period={period} />
                    )
                })
            }
        </div>
    )
}