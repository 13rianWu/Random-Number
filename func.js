function gen(){
    let child = document.getElementById("result");
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let quantity = parseInt(document.getElementById("quantity").value);
    let result = document.getElementById("result");
    // 清除上一次的結果
    while (child.firstChild){
        child.removeChild(child.firstChild);
    }
    // 檢查輸入是否正確
    if ( min > max || isNaN(min) || isNaN(max) || isNaN(quantity) ){
        alert('請輸入正確的數字');
        return
    }
    // 產生隨機數字
    for (let i = 0; i < quantity; i++){
        let res = Math.floor(Math.random()*(max-min+1))+min;
        let div = document.createElement("div");
        div.style.margin = "0px 0px 5px 0px";
        let txt = document.createElement("label");
        txt.textContent = res ;
        div.appendChild(txt);
        result.appendChild(div);
    }
}