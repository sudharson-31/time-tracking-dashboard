import {UserData} from '../Data/UserData'


export default function UserInfo({setter}){
    return(
        <div id="UserInfo">
            <div className="user-details">
                <span className='profile-photo-container'>
                    <img src={process.env.PUBLIC_URL + UserData[0].photoPath} alt="profile photo"></img>
                </span>
                <div className='profile-details'>
                    <div>
                        Report for
                    </div>
                    <div id="Username">
                        {UserData[0].userName}
                    </div>
                </div>
            </div>
            <div className='tracker-options'>   
                <span className='tracker-option' id="Option1" onClick={e=>setter("daily")}>
                    Daily
                </span>
                <span className='tracker-option' id="Option2" onClick={e=>setter("weekly")}>
                    Weekly
                </span>
                <span className='tracker-option' id="Option3" onClick={e=>setter("monthly")}>
                    Monthly
                </span>
            </div>
        </div>
    )
}