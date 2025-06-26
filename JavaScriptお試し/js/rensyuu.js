console.log("JSファイルが読み込まれました");

let dice = Math.floor(Math.random()*6)+1;

switch(dice){
    case 1:
        dice = "SSR";
        break;

    case 2:
        dice = "SR";
        break;
    
    case 3:
        dice = "SR";
        break;
    
    default:
        dice = "R";
        break;
}

console.log(dice);

document.getElementById("gacha").textContent = dice + "が出ました";