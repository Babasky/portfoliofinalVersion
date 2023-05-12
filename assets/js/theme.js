let themes = document.querySelectorAll('.theme-color div')
let setting = document.querySelector('#theme-icon')
let params = document.querySelector("#hero .theme-color")

setting.onclick = (ev)=>{
    if (params.style.display == 'none') {
        params.style.display = 'block'
    }else{
        params.style.display = 'none'
    }
}

for (let i = 0; i < themes.length; i++) {
    const theme = themes[i];
    theme.style.backgroundColor = theme.className
    theme.onclick = (ev)=>{
        let color = ev.target.className
        document.documentElement.style.setProperty('--main-color', color)
        params.style.display = 'none'   
    }

    
}