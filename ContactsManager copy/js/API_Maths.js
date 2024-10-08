//const API_URL = "https://api-server-5.glitch.me/api/contacts";
const API_URL = "http://127.0.0.1:5000/api/maths";
let currentHttpError = "";

// await api_getmaths(apiurl, "lienmath", showresult)
async function API_StartCalcul(){
    
}

function API_getcurrentHttpError () {
    return currentHttpError; 
}
function API_GetMaths(liensite, lienmath) {
    return new Promise(resolve => {
        $.ajax({
            url: liensite + "?" + lienmath,
            success: result => { currentHttpError = ""; resolve(result); },
            error: (xhr) => { currentHttpError = xhr.responseJSON.error_description; resolve(null); }
        });
    });
}
// http://localhost:5500/wwwroot/contact.html
// http://localhost:5000/api/maths