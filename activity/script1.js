let btnContainer = document.querySelector(".add-sheet_btn_container");
let sheetList=document.querySelector(".sheet-list");
let firstSheet = document.querySelector(".sheet");
firstSheet.addEventListener("click",handleSheet)
//day 1
btnContainer.addEventListener("click",function (){
    //cretae sheet
    let AllSheets =document.querySelectorAll(".sheet");
    let lastSheets = AllSheets[AllSheets.length-1];
    let Lastidx = lastSheets.getAttribute("idx");
    Lastidx = Number(Lastidx);
    let NewSheet = document.createElement("div");
    NewSheet.setAttribute("class","sheet");
    NewSheet.setAttribute("idx" `${Lastidx + 1}`);
    NewSheet.innerText = `sheet ${Lastidx + 2}`;
    sheetList.appendChild(NewSheet);
    for( let i=0; i<AllSheets.length; i++){
        AllSheets[i].classList.remove("active");
    }
    NewSheet.classList.add("active");
        //new sheet crate
        NewSheet.addEventListener("click", handleSheet)
})
function handleSheet(e) {
    let sheet = e.currentTarget;
    let AllSheets = document.querySelectorAll(".sheet");
    for( let i=0; i<AllSheets.length; i++){
        AllSheets[i].classList.remove("active");
    }
    sheet.classList.add("active");
}
 