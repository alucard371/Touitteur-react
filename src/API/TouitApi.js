    const URL = "192.168.20.81:5000";

    //receive message
    function httpGetMessages(timestamp, callback) {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://' + URL + '/list?ts=' + encodeURIComponent(timestamp), true);
        request.addEventListener('readystatechange', function() {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                callback(JSON.parse(request.responseText));
            }
        });
        request.send();
    }

    //receive trend
    function httpGetTrends(callback) {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://' + URL + '/trending', true);
        request.addEventListener('readystatechange', function() {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                callback(JSON.parse(request.responseText));
            }
        });
        request.send();
    }

    //receive comments
    //GET /comments/list?message_id=[id]
    //Retourne les commentaires du message [id]
    // function httpGetComments(message_id, callback) {
    //     const request = new XMLHttpRequest();
    //     request.open('GET', 'http://' + URL + '/comments/list?message_id=' + encodeURIComponent(message_id), true);
    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
    //             callback(JSON.parse(request.responseText));
    //         }
    //     });
    //     request.send();
    // }

    //POST /comments/send
    //paramètres : name, comment, message_id
    //Ajoute un commentaire au message d'id spécifié (il //suit les mêmes règles que /send)
    // function httpSendComments(name, comments, message_id, callback) {
    //     const request = new XMLHttpRequest();
    //     request.open('POST', 'http://' + URL + 'comments/send', true);
    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
    //             callback(JSON.parse(request.responseText));
    //         }
    //     });
    //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     request.send('name=' + encodeURIComponent(name) + '&comments=' + encodeURIComponent(comments) + '?message_id=' + encodeURIComponent(message_id));
    // }

    //send message
    function httpSendMessage(author, message, callback) {
        const request = new XMLHttpRequest();
        request.open('POST', 'http://' + URL + '/send', true);
        request.addEventListener('readystatechange', function() {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                callback(JSON.parse(request.responseText));
            }
        });
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send('name=' + encodeURIComponent(author) + '&message=' + encodeURIComponent(message));
    }

    // PUT /likes/send
    // paramètres : message_id
    // Ajoute un like au message d'id spécifié
    // function httpAddLike(message_id, callback) {
    //     const request = new XMLHttpRequest();
    //     request.open('PUT', 'http://' + URL + 'likes/send', true);
    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
    //             callback(JSON.parse(request.responseText));
    //         }
    //     });
    //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     request.send('message_id=' + encodeURIComponent(message_id));
    // }

    // DELETE /likes/remove
    // paramètres : message_id
    // Retire un like au message d'id spécifié
    // function httpDeleteLike(message_id, callback) {
    //     const request = new XMLHttpRequest();
    //     request.open('DELETE', 'http://' + URL + 'likes/remove', true);
    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
    //             callback(JSON.parse(request.responseText));
    //         }
    //     });
    //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     request.send('message_id=' + encodeURIComponent(message_id));
    // }


    // GET /likes/top
    // Récupère les messages les plus liké. Récupère [count] messages les plus likés si le paramètre [count] est précisé
    // function httpTopLike(message_id, count, callback) {
    //     const request = new XMLHttpRequest();
    //     request.open('GET', 'http://' + URL + 'likes/top', true);
    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
    //             callback(JSON.parse(request.responseText));
    //         }
    //     });
    //     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     request.send('message_id=' + encodeURIComponent(message_id));
    // }


    export { httpGetMessages, httpSendMessage, httpGetTrends };