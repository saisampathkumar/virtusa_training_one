var todo_List = ["item 1", "item 2", "item 3", "item 4","item 5", "item 6", "item 7", "item 8", "item 9", "item 10"];
var updated_todo_List = [];
var selected = -1;

var display_list = document.getElementById("list");
var heading = document.createElement("h3");
heading.innerText = "ToDo List";
display_list.appendChild(heading);


// 1. For displaying the details in the list each element with id name and some style properties 

function display_details(){
    for(var i=0; i<todo_List.length; i++)
    {
        var list_item = document.createElement("li");
        display_list.appendChild(list_item);
        list_item.style.listStyle = "none";
        list_item.name = " "
        list_item.id = i+1;
        list_item.innerText = todo_List[i];  
        list_item.onclick = click;
        // list_item.innerText = (i+1)+". "+todo_List[i];
        list_item.name = ""
        list_item.style.backgroundColor = "white";
        list_item.style.fontWeight = "normal";   
    }    
}

display_details();

// 2. To change the color of the item in the list by using item name as main source

function click(){
    var selected_li_style = document.getElementById(this.id);
    if(selected != -1){
        for(var i=0; i<todo_List.length; i++){
            li_item = document.getElementById(i+1);
            console.log(li_item.name);
            li_item.name = ""
            li_item.style.backgroundColor = "white";
            li_item.style.fontWeight = "normal";
            }
        selected_li_style.name = "clicked"
        selected_li_style.style.color = "black";
        selected_li_style.style.backgroundColor = "darkgray";
        selected_li_style.style.fontWeight = "bold";  
        selected = this.id;
        
    }
    else{
        selected_li_style.name = "clicked"
        selected_li_style.style.color = "black";
        selected_li_style.style.backgroundColor = "darkgray";
        selected_li_style.style.fontWeight = "bold";  
        selected = this.id;
    }
    console.log(selected);
}

// EXTRA CREDIT
// 3. Adding Refresh button to the page and making each highlighted item to the unhighlight. 

var refresh_button = document.createElement("button");
refresh_button.innerText = "Reset";
display_list.appendChild(refresh_button);
refresh_button.onclick = refresh;

function refresh(){
    selected = -1;
    display_list.innerHTML = ""
        display_list.appendChild(heading);
        display_details();
        display_list.appendChild(refresh_button);
        display_list.appendChild(delete_button);
        display_list.appendChild(input_item);
        display_list.appendChild(Add_button);
    // for(var j=0; j<todo_List.length; j++)
    // {
    //     var list_item = document.getElementById(j+1);
    //     list_item.name = ""
    //     list_item.style.backgroundColor = "white";
    //     list_item.style.fontWeight = "normal";    
    // }
}

// 4. Adding Delete button to the page and to delete every selected item. 

var delete_button = document.createElement("button");
delete_button.innerText = "Delete";
delete_button.onclick = delete_item;
display_list.appendChild(delete_button);

function delete_item(){
    var deleted_items_list = "";
    var list_item_del = document.getElementById(selected);
    todo_List.splice((selected-1),1);
    display_list.removeChild(list_item_del);
    deleted_items_list = "\""+ list_item_del.innerText + "\"";
    selected = -1;
    console.log("After delete"+selected)

    // updated_todo_List = todo_List;
    // for(var i=0; i<todo_List.length; i++){
    //     var list_item_del = document.getElementById(i+1);
    //     if(list_item_del.name=="clicked"){
    //         deleted_items_list = deleted_items_list + ", "+"\""+ list_item_del.innerText + "\"";
    //         var t = updated_todo_List.indexOf(list_item_del.innerText);
    //         updated_todo_List.splice(t,1);
    //         display_list.removeChild(list_item_del);
    //     }
    // }
    // todo_List = [];
    // todo_List = updated_todo_List;
    // console.log(todo_List);
    // display_list.innerHTML = ""

    // display_list.appendChild(heading);
    // display_details();
    // display_list.appendChild(refresh_button);
    // display_list.appendChild(delete_button);
    // display_list.appendChild(input_item);
    // display_list.appendChild(Add_button);   
    // if(deleted_items_list != ""){
    //     alert("From the List" + deleted_items_list + " is deleted.........")        
    // }else{
    //     alert("Please select any item to delete");
    // }
}

// 5. Adding Add button, input box to the page and adding items to the list from the text of input box. 

var input_item = document.createElement("input");
input_item.id = "input_text";
input_item.placeholder = "Enter todo List Item....."
display_list.appendChild(input_item);

var Add_button = document.createElement("button");
Add_button.innerText = "Add"
Add_button.onclick = add_item;
display_list.appendChild(Add_button);    

function add_item(){
    if(input_item.value != ""){
        todo_List.push(input_item.value);
        var list_item = document.createElement("li");
        display_list.appendChild(list_item);
        list_item.style.listStyle = "none";
        list_item.name = " "
        list_item.id = todo_List.length+1;
        list_item.innerText = input_item.value;  
        list_item.onclick = click;
        list_item.name = ""
        list_item.style.backgroundColor = "white";
        list_item.style.fontWeight = "normal";
        display_list.innerHTML = ""
        display_list.appendChild(heading);
        display_details();
        display_list.appendChild(refresh_button);
        display_list.appendChild(delete_button);
        display_list.appendChild(input_item);
        display_list.appendChild(Add_button);   
    }
}