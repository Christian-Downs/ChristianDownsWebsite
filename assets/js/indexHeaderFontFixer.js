
function checkPage(){
    var doc = document.getElementById('welcome-header')
    if (screen.width <= 658) {
        doc.innerHTML = 'Hello! My name is Christian Downs.<br> Welcome to my website.';
    }
    else
    {
        doc.innerHTML = 'Hello! My name is Christian Downs. Welcome to my website.';
    }
}
