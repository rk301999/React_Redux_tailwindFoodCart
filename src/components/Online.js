import { useState,useEffect } from "react";

const useOnlineStatus = () => {
    const[onlineStatus,setOnlineStatus] = useState(true);

    // useEffect(() => {
    //     window.addEventListener("offline",() => {
    //         setOnlineStatus(false);
    //     });

    //     window.addEventListener("online",() => {
    //         setOnlineStatus(true);
    //     });
    // },[]);
    useEffect(()=>{
        window.addEventListener('online', function(e) {
            console.log('And we\'re back :).');
            setOnlineStatus(true);
        }, false);
                    
        window.addEventListener('offline', function(e) {
            console.log('Connection is down.');
            setOnlineStatus(false);
        }, false);
    },[])
    
    return onlineStatus;
}

export default useOnlineStatus;