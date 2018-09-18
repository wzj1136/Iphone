window.onload=function () {
    let add=document.querySelectorAll(".add");
    let down=document.querySelectorAll(".content-down");
    console.log(add, down);
    for(let i=0;i<add.length;i++){
        add[i].onclick=function () {
            // for (let j=0;j<add.length;j++){
            //     down[j].style.display="none";
            // }
            down[i].style.display="block"
        }
    }
}