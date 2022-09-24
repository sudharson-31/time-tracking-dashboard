import UserInfo from "./UserInfo";
import { useState } from 'react'
import CardsGrid from "./CardsGrid";
export default function Dashboard(){
    const [timePeriod, setTimePeriod] = useState("weekly");
    function handleTimeChange(value){
        setTimePeriod(value);
    }
    return(
        <div id="Dashboard">
            <UserInfo  setter={handleTimeChange}/>
            <CardsGrid timePeriod={timePeriod} />
        </div>
    )
}