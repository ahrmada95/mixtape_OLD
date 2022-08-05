import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";


const UserPage = ({userName, userId_}) => {
    const history = useHistory()
    const [collapse, setCollapse] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
/*  this fetch request will have to direct the */
    useEffect(() => {
        const fetchUrl = async () => {
            let req = await fetch(`http://localhost:4001/user/info/${userId_}`)
            let res = await req.json()
            setUserInfo(res)
        }
        fetchUrl()
    },[])

    if (!userInfo){
            return
        }


    const handleLogout = () => {
        history.push('/')
    }
    const handleUserInfoPageShift = () => {
        history.push('/userinfo')
    }

    const handleCollapse = () => {
        setCollapse((collapse) => !collapse)
    }

    //console.log(userInfo.profilePic)
    //console.log(userInfo)
    return (
        <div className="user-page-container">
            <div>
                <h1>Welcome {userName}</h1>
            </div>
            <div className="userpage-image" >
                <img src={userInfo.profilePic} alt="" className='user-info-img' onClick={handleUserInfoPageShift}/>
            </div>
            <div>
                <h3>Friends</h3>
                <div className="friends-container">
                    <div className="friend">
                        {/*for every friend a person has*/}
                       {userInfo.friends.map((friend, index) => {
                            return <p key={index}>{friend}</p>
                        })}
                        <p>{/*userInfo['friends']*/}</p>
                    </div>
                </div>
            </div>
            <div >
                <button onClick={handleCollapse} className="userpage-button">Add New Friend</button>
                
            </div>
            {collapse ? <input type="text" name="search" placeholder="search friend" className="userpage-button" /> : null }
            <div className="userpage-button-container">
                <button onClick={handleLogout} className="userpage-button">Logout</button>
            </div>
        </div>
    )
}

export default UserPage;