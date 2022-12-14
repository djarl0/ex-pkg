function Shortcut(hotkey,action){
    window.addEventListener("keydown", function (e){
        if(e.key===hotkey){
            action();
        };
    });
};
function Alert(title, content, option){
    var modal = document.createElement("div");
    document.body.appendChild(modal);
    modal.style = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    font-family: Poppins;
    z-index: 99999999;
    `;
    var container = document.createElement("div");
    modal.appendChild(container);
    container.style = `
    padding: 10px;
    text-align: left;
    width: fit-content;
    max-width: 600px;
    background: rgb(235,250,255);
    z-index: 999999999;
    border-radius: 10px;
    `;
    var outercontent1 = document.createElement("span");
    container.appendChild(outercontent1);
    outercontent1.innerHTML = title + "<br>";
    outercontent1.style = `
    font-size: 30px;
    text-transform: capitalize;
    `;
    var outercontent2 = document.createElement("span");
    container.appendChild(outercontent2);
    outercontent2.innerHTML = content + "<br>" + "<br>";
    outercontent2.style = `
    display: block;
    position: white-space: pre;
    `;
    var opt = document.createElement("span");
    container.appendChild(opt);
    opt.innerHTML = option;
    opt.style = `
    float: right;
    color: #fff;
    background: rgb(75,100,255);
    width: min-content;
    padding: 4px 15px;
    border-radius: 5px;
    cursor: pointer;
    `;
    opt.addEventListener("mouseover", function (){
        opt.style.background = "rgb(45,100,200)";
        opt.style.color = "#eee";
    });
    opt.addEventListener("mouseleave", function (){
        opt.style.background = "rgb(75,100,255)";
        opt.style.color = "#fff";
    });
    opt.addEventListener("click", function (){
        document.body.removeChild(modal);
    });
};