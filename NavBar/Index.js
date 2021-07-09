window.onload = ()=>{
    let audio = new Audio("click.mp3");
    let list =  document.getElementsByClassName('list')
    console.log(list)
    let toggle = document.querySelector('.toggle')
    let navbar = document.querySelector('.Mynavbar')
    let j=0;
    for(let i=0; i<list.length; i++){
        
        list[i].onclick = ()=> {
            list[j].className = "list"
            list[i].className = "list active"
            audio.play();
            j = i;
        } 
    }
    
    toggle.onclick = (e)=>{
        toggle.classList.toggle('toogleActive')
        navbar.classList.toggle('shortNav')
        audio.play();
    }
}