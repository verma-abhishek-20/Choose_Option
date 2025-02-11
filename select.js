    let custom=document.querySelector(".custom_box")
    let select=document.querySelector(".select");
    let option_box=document.querySelector(".option_box")
    let option=document.querySelectorAll(".option");

    select.addEventListener("click",()=>{
         if(option_box.style.display==='block'){
    option_box.style.display='none'
         }
         else{
    option_box.style.display='block'
         }

         option.forEach(optn=>{
    optn.addEventListener("click",()=>{
         select.innerText=optn.innerText;
         option_box.style.display='none'
    })
         })
    })

  