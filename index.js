var deferredprompt;

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js');
}else{
    console.log("não passou");
}

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredprompt = event;
    console.log("Disparou  beforeinstallprompt");
});

function openPrompt() {
    if (deferredprompt) {
        deferredprompt.prompt();
        deferredprompt.userChoice().then(choiseResult => {
            if(choiseResult.outcome === 'dismissed'){
                console.log("PWA não instalado");
            }
            else {
                console.log("PWA a ser instalado");
            }
        });
        deferredprompt = null;
    }
}