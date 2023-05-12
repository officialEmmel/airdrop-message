let chat = getParameterByName("chat")

let container = document.getElementById("container")
let usesThread = false
let json = null 

let proto = {"chat":[{"author":"Emil","message":"hallo"},{"test":"lol"}]}

if(chat != null || isBlank(chat)){
    try {
        let parsed = JSON.parse(chat)

        let threadcon = document.createElement("div")
        threadcon.className = ("center")
        threadcon.id = "thread"
        let title = document.createElement("h2")
        title.innerHTML = "Thread"
        title.style.textAlign = "center"
        threadcon.append(title)
        for (let i = 0; i < parsed.chat.length-1; i++) {
            const element = parsed.chat[i];
            if(element.message == undefined || element.author == undefined) {tc.append(createError("Lesen der Nachricht fehlgeschlagen","")); }
            if(isEmpty(element.message)||isEmpty(element.author)) {tc.append(createError("Lesen der Nachricht fehlgeschlagen",""));}
            let msg = createMessage(check(element.message),check(element.author))
            msg.style.maxWidth = "100%"
            msg.style.width = "auto"
            if(i != 0) { msg.style.marginTop = "2%" }
            tc.append(msg)
        }
        container.append(tc)

        let element = parsed.chat[parsed.chat.length]
        if(element.message == undefined || element.author == undefined) { tc.append(createError("Lesen der Nachricht fehlgeschlagen","")); }
        if(isEmpty(element.message)||isEmpty(element.author)) { tc.append(createError("Lesen der Nachricht fehlgeschlagen",""));}

        let msg = createMessage(check(element.author), check(element.message))
        msg.style = "border-style: solid; border-color: #0982fc; border-width: 2px; -webkit-animation: popout 1s ease;"
        container.append(msg)
        message = ms
        author = auth
        document.getElementById("motd").innerHTML = getTitle()
        
    }catch (e) {console.error(e);container.append(createError("Lesen des Chats fehlfeschlagen.", "Fehler!"))}
} else {
    let h = document.createElement("h1")
    h.innerHTML = getTitle()
    h.id = "header"
    h.style.fontSize = "xxx-large"
    h.style.fontWeight = "900"
    container.append(h)
    document.getElementById("answer").innerHTML = "<h3>Nachricht senden</h3>"
}

// if(thread != null && thread != "") {
//     try{
//         json = JSON.parse(thread)
//         let hist = json["hist"]
//         let tc = document.createElement("div")
//         tc.className = ("center")
//         tc.id = "thread"
//         let title = document.createElement("h2")
//         title.innerHTML = "Thread"
//         title.style.textAlign = "center"
//         tc.append(title)
//         for (let i = 0; i < hist.length; i++) {
//             const element = hist[i];
//             let msg = createMessage(check(element[0]),check(element[1], 1))
//             msg.style.maxWidth = "100%"
//             msg.style.width = "auto"
//             if(i != 0) { msg.style.marginTop = "2%" }
//             tc.append(msg)
//         }
//         container.append(tc)
//         let element = parsed.chat[parsed.chat.length]
//         if(element.message == undefined || element.author == undefined) {return container.append(createError("Lesen der Nachricht fehlgeschlagen",""))}
//         if(isEmpty(element.message)||isEmpty(element.author)) {return container.append(createError("Lesen der Nachricht fehlgeschlagen",""))}

//         // let auth = (author == null || author == "") ? "Anonym" : check(author)
//         let msg = createMessage(auth, ms)
//         msg.style = "border-style: solid; border-color: #0982fc; border-width: 2px; -webkit-animation: popout 1s ease;"
//         container.append(msg)
//         message = ms
//         author = auth
//         document.getElementById("motd").innerHTML = getTitle()
//     } catch (e) {container.append(createError("Erstellen des Threads fehlfeschlagen.", "Fehler!"))}
// }

// if(message == null || isBlank(message)) {
//     let h = document.createElement("h1")
//     h.innerHTML = getTitle()
//     h.id = "header"
//     h.style.fontSize = "xxx-large"
//     h.style.fontWeight = "900"
//     container.append(h)
//     document.getElementById("answer").innerHTML = "<h3>Nachricht senden</h3>"

// } else {
//     let ms = check(message)
//     let auth = (author == null || author == "") ? "Anonym" : check(author)
//     let msg = createMessage(auth, ms)
//     msg.style = "border-style: solid; border-color: #0982fc; border-width: 2px; -webkit-animation: popout 1s ease;"
//     container.append(msg)
//     message = ms
//     author = auth
//     document.getElementById("motd").innerHTML = getTitle()


//     if(!usesThread) {
//         document.getElementById("sus").href = "shortcuts://run-shortcut?name=AirDrop%20Message&input=text&text="+createThread(check(author), check(message))
//     } else {
//         document.getElementById("sus").href = "shortcuts://run-shortcut?name=AirDrop%20Message&input=text&text="+addToThread(check(author), check(message))
//     }
// }

// let data = null
// const answ = document.querySelector('#answer');
// answ.scrollIntoView()

// answ.addEventListener('click', async () => {data = answer()});

// const share = document.querySelector("#share")

// share.addEventListener("click", async () => {
//     try {
//         await navigator.share(data)
//     } catch(err) {
//         //alert('Error: ' + err)
//     }
// })

// document.getElementById("cancel").addEventListener("click", () => {
//     document.getElementById("container").style.display = "block"
//     document.getElementById("answer").style.display = "block"
//     document.getElementById("share-con").style.display = "none"


// let data = null
// const answ = document.querySelector('#answer');
// answ.scrollIntoView()

// answ.addEventListener('click', async () => {data = answer()});

// const share = document.querySelector("#share")

// share.addEventListener("click", async () => {
//     try {
//         await navigator.share(data)
//     } catch(err) {
//         //alert('Error: ' + err)
//     }
// })

// document.getElementById("cancel").addEventListener("click", () => {
//     document.getElementById("container").style.display = "block"
//     document.getElementById("answer").style.display = "block"
//     document.getElementById("share-con").style.display = "none"


// let data = null
// const answ = document.querySelector('#answer');
// answ.scrollIntoView()

// answ.addEventListener('click', async () => {data = answer()});

// const share = document.querySelector("#share")

// share.addEventListener("click", async () => {
//     try {
//         await navigator.share(data)
//     } catch(err) {
//         //alert('Error: ' + err)
//     }
// })

// document.getElementById("cancel").addEventListener("click", () => {
//     document.getElementById("container").style.display = "block"
//     document.getElementById("answer").style.display = "block"
//     document.getElementById("share-con").style.display = "none"


// let data = null
// const answ = document.querySelector('#answer');
// answ.scrollIntoView()

// answ.addEventListener('click', async () => {data = answer()});

// const share = document.querySelector("#share")

// share.addEventListener("click", async () => {
//     try {
//         await navigator.share(data)
//     } catch(err) {
//         //alert('Error: ' + err)
//     }
// })

// document.getElementById("cancel").addEventListener("click", () => {
//     document.getElementById("container").style.display = "block"
//     document.getElementById("answer").style.display = "block"
//     document.getElementById("share-con").style.display = "none"

//     document.getElementById("new-con").childNodes.forEach((e) => {
//         if(e.id == "msg-container"){
//             e.remove()
//         }
//     })
//     if(getParameterByName("msg") != null || getParameterByName("msg") != ""){return}
//     let h = document.createElement("h1")
//     h.innerHTML = getTitle()
//     h.id = "header"
//     h.style.fontSize = "xxx-large"
//     h.style.fontWeight = "900"
//     document.getElementById("container").append(h)
// })

function createMessage(aut, text) {
    let con = document.createElement("div")
    
    con.className = "center "
    con.id = "msg-container"
    let auth = document.createElement("h3")
    auth.id = "author"
    auth.innerHTML = aut
    let msg = document.createElement("p")
    msg.id = "message"
    msg.innerHTML = text

    con.append(auth)
    con.append(msg) 
    return con
}

function createError(t, msg) {
    let err = createMessage(msg, t)
    err.style = "color: #ff3b30; text-align: center; border-style: solid; border-color: #ff3b30; border-width: 2px; margin-bottom: 2%;"
    return err 
}


function edit() {
    let txt = prompt("Nachricht:", document.getElementById("message").innerHTML)
    if(txt == null){return}
    if(isBlank(txt)){return} 
    let store = localStorage.getItem("name")
    let autor = (store == null) ? "Anonym" : store

    document.getElementById("message").innerHTML = check(txt)

    let threadUrl
    if(!usesThread) {
        if(document.getElementById("message") == null) {threadurl = ""} else {
        threadurl = createThread(document.getElementById("author").innerHTML, document.getElementById("message").innerHTML)}
    } else {
        threadurl = addToThread(author, message)
    }

    let url = window.location.protocol+"//"+window.location.hostname+"/airdrop/?msg="+check(txt)+"&author="+check(autor)+"&thread="+threadurl

    return {
        url: url
    };
}

function edit_aut() {
    let store = localStorage.getItem("name")
    let pre = (store == null) ? "" : store
    let autor = prompt("Autor:", pre)
    if(autor == ""){
        autor = "Anonym"
    } else {
        localStorage.setItem("name",check(autor))
        autor = check(autor)
    }

    document.getElementById("author").innerHTML = autor
    let txt = document.getElementById("message").innerHTML

    let threadUrl
    if(!usesThread) {
        if(document.getElementById("message") == null) {threadurl = ""} else {
        threadurl = createThread(document.getElementById("author").innerHTML, document.getElementById("message").innerHTML)}
    } else {
        threadurl = addToThread(author, message)
    }

    let url = window.location.protocol+"//"+window.location.hostname+"/airdrop/?msg="+check(txt)+"&author="+check(autor)+"&thread="+threadurl

    return {
        url: url
    };
}

function answer() {
    let txt = prompt("Nachricht:")
    if(txt == null){return}
    if(isBlank(txt)){return}
    let store = localStorage.getItem("name")
    let pre = (store == null) ? "" : store
    let autor = prompt("Autor: (Optional, 'Ok' um zu skippen)", pre)
    if(autor == ""){
        autor = "Anonym"
    } else {
        localStorage.setItem("name",check(autor))
        autor = check(autor)
    }
    let threadUrl
    if(!usesThread) {
        if(document.getElementById("message") == null) {threadurl = ""} else {
        threadurl = createThread(document.getElementById("author").innerHTML, document.getElementById("message").innerHTML)}
    } else {
        threadurl = addToThread(author, message)
    }

    let url = window.location.protocol+"//"+window.location.hostname+"/airdrop/?msg="+check(txt)+"&author="+check(autor)+"&thread="+threadurl

    document.getElementById("container").style.display = "none"
    let sharecon = document.getElementById("share-con")
    sharecon.style.display = "block"

    let newcon = document.getElementById("new-con")

    let prev = createMessage(autor, txt)
    prev.style.maxWidth = "100%"
    prev.style.width = "auto"
    prev.children[1].addEventListener("click", () => {
       data = edit()
    })

    prev.children[0].addEventListener("click", () => {
       data = edit_aut()
    })

    newcon.append(prev)


    prev.className = prev.className + " share"

    document.getElementById("answer").style.display = "none"

    return {
        url: url
    };

}

function createThread(name, text) {
    let obj = {hist:[]}
    obj.hist.push([name, text])
    return JSON.stringify(obj)
}

function addToThread(name, text) {
    json.hist.push([name,text])
    return JSON.stringify(json)
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));

}

function check(str) {
    var lt = /</g, 
    gt = />/g, 
    ap = /'/g, 
    ic = /"/g;
    return str.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;").replace("&","und");
}

function isBlank(str) {
return (!str || /^\s*$/.test(str));
}

function getTitle(){
    const list = [
        "Text versenden mit AirDrop",
        "Mit AirDrop Text versenden",
        "AbEr sOwAs giBt eS DoCh sChOn oDeR?!1!",
        "AirDRIP 🥵",
        "AirAirAir",
        "MicDrop Message",
        "U lookin kinda sus.",
        "DropDropDrop",
        "AirMessage Drop",
        "DropMessage Air",
        "AirDrop Pro",
        "AirDrop Pro Max",
        "187",
        "69",
        "Don't MESSage with me",
        "Bullet 🤌",
        "👀",
        "🙃",
        "Caught in 4k 📸",
        "...",
        "Benutz doch einfach Notizen",
        "🤌",
        "☭",
        "🐐",
        "Bronk.",
        "Bruh.",
        "Nein.",
        "Ja.",
        "🤝",
        "(╯°□°）╯︵ ┻━┻",
        "(͡° ͜ʖ ͡°)",
        "¯\_(ツ)_/¯"
    ]
    return list[Math.floor(Math.random()*list.length)];
}