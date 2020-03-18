var input_item = document.createElement("input");
input_item.id = "input_text";
input_item.placeholder = "Enter todo List Item....."

var insert_button = document.createElement("button");
insert_button.innerText = "Add"
insert_button.onclick = display_details;

var display_list = document.getElementById("list"); 
console.log(display_list);
display_list.appendChild(input_item);
display_list.appendChild(insert_button);

var delete_button = document.createElement("button");
delete_button.innerText = "Delete"
delete_button.onclick = delete_item;
display_list.appendChild(delete_button);

var refresh_button = document.createElement("button");
refresh_button.innerText = "Reset"
refresh_button.onclick = refresh;
display_list.appendChild(refresh_button);


var todo_List = ["item 1", "item 2", "item 3", "item 4","item 5", "item 6", "item 7", "item 8", "item 9", "item 10"];
var updated_todo_List = [];

function display_details(){
    if(input_item.value != ""){
        todo_List.push(input_item.value);
        display_list.innerHTML = "";
        refresh();
    }
}

function refresh(){
    display_list.innerHTML = "";

    display_list.appendChild(input_item);
    display_list.appendChild(insert_button);
    display_list.appendChild(delete_button);
    display_list.appendChild(refresh_button);

    for(var i=0; i<todo_List.length; i++){
        var list_item = document.createElement("li");
        display_list.appendChild(list_item);
        list_item.style.listStyle = "none";
        list_item.name = ""
        list_item.id = i+1;
        list_item.onclick = click;
        // list_item.innerText = (i+1)+". "+todo_List[i];  
        list_item.innerText = todo_List[i];  
    }
}

function click(){
    var li_style = document.getElementById(this.id);
    if(li_style.name == ""){
        li_style.name = "clicked"
        li_style.style.color = "black";
        li_style.style.backgroundColor = "darkgray";
        li_style.style.fontWeight = "bold";    
    }
    else if(li_style.name = "clicked"){
        li_style.name = ""
        li_style.style.color = "black";
        li_style.style.backgroundColor = "white";
        li_style.style.fontWeight = "normal";    
    }
}

function delete_item(){
    updated_todo_List = todo_List;
    for(var i=0; i<todo_List.length; i++){
        var list_item_del = document.getElementById(i+1);
        if(list_item_del.name=="clicked"){
            var t = updated_todo_List.indexOf(list_item_del.innerText);
            updated_todo_List.splice(t,1);
            display_list.removeChild(list_item_del);
        }
    }
    todo_List = [];
    todo_List = updated_todo_List;
    refresh();
}