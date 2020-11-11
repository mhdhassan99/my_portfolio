let themeDots = document.getElementsByClassName('theme-dot')

for(var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode 
        console.log('clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'white'){
        document.getElementById('theme-style').href = 'default.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
}