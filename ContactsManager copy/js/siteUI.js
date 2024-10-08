let contentScrollPosition = 0;
Init_UI();

function Init_UI() {
    RenderFormBox();
}

function RenderFormBox() {
    $("#start").on("click", async function () {
        
        const serviceUrl = $("#serviceUrl").val();

        
        RenderResults(await API_GetMaths(serviceUrl, "op=+&x=50&y=25"));
        RenderResults(await API_GetMaths(serviceUrl, "op=-&x=50&y=25"));
        RenderResults(await API_GetMaths(serviceUrl, "op=*&x=50&y=25"));
        RenderResults(await API_GetMaths(serviceUrl, "op=/&x=50&y=25"));
        RenderResults(await API_GetMaths(serviceUrl, "op=/&x=0&y=0"));
        RenderResults(await API_GetMaths(serviceUrl, "op=*&x=10&y=abc"));
        RenderResults(await API_GetMaths(serviceUrl, "op=%&x=50&y=7"));
        RenderResults(await API_GetMaths(serviceUrl, "op=!&n=5"));
        RenderResults(await API_GetMaths(serviceUrl, "op=p&n=5"));
        RenderResults(await API_GetMaths(serviceUrl, "op=np&n=5"));
    });

    $("#aide").on("click", async function () {
        const serviceUrl = $("#serviceUrl").val();  
        RenderResults(await API_GetMaths(serviceUrl, "op=?"));
    });
}

function RenderResults(result) {
    if (result) {
        
        if (result.helpUrl) {
            window.location.href = result.helpUrl;  
        } else {
            const jsonString = JSON.stringify(result, null, 2);
            const resultHtml = `<pre class="json-result">OK--> ${jsonString}</pre>`;
            $("#content").append(resultHtml);
        }
    } else {
        renderError("ERREUR--> Requête GET de l'API échouée.");
    }
}
