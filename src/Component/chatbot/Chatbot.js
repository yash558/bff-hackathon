import React from 'react'

const Chatbot = () => {
    const componentDidMount = () => {
        (function (d, m) {
            var kommunicateSettings =
                { "appId": "b453ca117123e55e49f4fef45ab04505", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});


    }
    return (
        <div>
            <h1>
              
            </h1>
        </div>
    )
}

export default Chatbot