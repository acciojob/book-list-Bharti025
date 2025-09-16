//your JS code here. If required.
let title=document.getElementById("title");
let author=document.getElementById("author");
let isbn=document.getElementById("isbn");
let button=document.getElementById("submit");
let tableBody=document.getElementById("book-list");

button.addEventListener("click",()=>{

	
td1=document.createElement("td");
td1.append(title.value);
td2=document.createElement("td");
td2.append(author.value);
td3=document.createElement("td");
td3.append(isbn.value);
	let td4 = document.createElement("td");
    
    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", () => {
        row.remove(); // Remove the row when delete button is clicked
    });
    td4.append(deleteButton);

let row=document.createElement("tr");
	row.append(td1);
	row.append(td2);
	row.append(td3);
	row.append(td4);
   tableBody.append(row);
	title.value="";
	author.value="";
	isbn.value="";
})



