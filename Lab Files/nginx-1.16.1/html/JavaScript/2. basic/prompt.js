window.onload = initAll;

function initAll() {
var ans = prompt("Can you please enter something.....")

if(ans){
    alert("You have entered "+ans);
    // document.getElementById("heading").innerText = "you said " + ans;
    document.write("you said "+ans);
}else{
    alert("You refused to enter anything........:(");
}
}