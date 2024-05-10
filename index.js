document.sett
function change(event) 
{
    let main=document.querySelector(".mainimg"); 
    main.setAttribute("src",event.target.getAttribute("src"));
}
