import { createContext, useState } from "react";

const NotificationContext = createContext({
    notification: null,
    showNotification: function() {notificationData},
    hideNotification: function() {}
});


export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState()

    function showNotificationHandler(props) {
        setActiveNotification(notificationData)
    }

    function hideNotificationHandler(){
        setActiveNotification(null)
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    }
    
    return (
        <NotificationContext.Provider>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext
