var body_tag = document.getElementById("list")

var list_tag = document.createElement("li");


var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);



// var arr_list = ["Eat Food", "Watch Tv", "drive car"];
// var arr_list_string = ""

// function insert_item(){
//     reset()
//     var new_element = document.getElementById("item").value;
//     console.log(new_element);
//     arr_list.push(new_element);
//     console.log(arr_list);
//     display_items();
// }


// // function display_items(){
// //     arr_list_string = "";
// //     for(var i=0; i<arr_list.length;i++){
// //         arr_list_string = arr_list_string +" "+ (i+1) +". "+ arr_list[i]+"<br/>";
// //     }
// //     document.write(arr_list_string);
// // }

// function display_items() {

//     listElement = document.getElementById('display_list');

//     numberOfListItems = arr_list.length;
    
//     listItem = document.getElementById(List_item);
    
//     i=0;

//     for (i = 0; i < numberOfListItems; ++i) {

//         listItem = document.createElement('li');

//         listItem.innerHTML = arr_list[i];

//         // listItem.onclick = click_change();

//         listElement.appendChild(listItem);
//     }
    
// }

// function reset(){
//     // document.getElementById('display_list').innerHTML= " ";
//     listElement = document.getElementById('display_list');

//     listElement.innerHTML = " ";

//     numberOfListItems = arr_list.length;
    
//     // listItem = document.getElementById(List_item);
// }
	
