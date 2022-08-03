import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";


const UserPage = ({userName, userId}) => {
    const history = useHistory()
    const [collapse, setCollapse] = useState(false)
/*  this fetch request will have to direct the */
    useEffect(() => {
        const fetchUrl = async () => {
            let req = await fetch(`http://localhost:4001/user/info/${userId}`)
            let res = await req.json()
            console.log(res)
        }
        fetchUrl()
    },[])


/*
    const handleLogout = () => {
        history.push('/')
    }
*/

    const handleCollapse = () => {
        setCollapse((collapse) => !collapse)
    }



    return (
        <div className="user-page-container">
            <div>
                <h1>Welcome {userName}</h1>
            </div>
            <div>
                <img src='{/*Display user image here passed from user url in Apps/Player */}' alt="" />
            </div>
            <div>
                <h3>friends</h3>
                <div className="friends-container">
                    <div className="friend">
                        {/*for every friend a person has*/}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleCollapse}>add new friend</button>
                {collapse ? <input type="text" name="search" placeholder="search friend" /> : null }
            </div>
            <div>
                <button /*onClick={handleLogout}*/>Logout</button>
            </div>
        </div>
    )
}

export default UserPage;