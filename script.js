window.onload = function() {
    // Verifica se há uma mensagem na URL (via GET)
    const urlParams = new URLSearchParams(window.location.search);
    const msg = urlParams.get('msg');
    
    if (msg) {
        // Exibe o popup com a mensagem
        alert(msg); 
    }
}