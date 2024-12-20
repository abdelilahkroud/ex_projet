
    
    document.getElementById("myBtn").onclick=function(){

        
    let changeColor = document.getElementById("colors").value;
    document.getElementById("text").style.color =`${changeColor}`;

    let changeBachground = document.getElementById("background_colors").value;
    document.getElementById("text").style.backgroundColor = `${changeBachground}`;

    let changeFontsize = document.getElementById("font_sizes").value
    document.getElementById("text").style.fontSize = `${changeFontsize}`;
    }