window.onload = async() => {
    document.body.style.backgroundColor = "#37306B";
    
    //small font if input container overflow
     document.querySelectorAll('*').forEach(el => {
        if (el.scrollWidth > el.clientWidth) {
            document.body.style.fontSize = "10px";
        }
    });

};