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
            <div>
                <img src={userInfo.profilePic} alt="" />
            </div>
            <div>
                <h3>friends</h3>
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
            <div>
                <button onClick={handleCollapse}>add new friend</button>
                {collapse ? <input type="text" name="search" placeholder="search friend" /> : null }
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default UserPage;