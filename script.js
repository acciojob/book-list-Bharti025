//your JS code here. If required.
let title=document.getElementById("title");
let author=document.getElementById("author");
let isbn=document.getElementById("isbn");
let button=document.getElementById("submit");
let table=document.getElementsByClassName("table table-striped");
button.addEventListener("click",()=>{
title=title.value;
author=author.value;
isbn=isbn.value;
	
td1=document.createElement("td");
td1.append(title);
td2=document.createElement("td");
td2.append(author);
td3=document.createElement("td");
td3.append(isbn);
let row=document.createElement("tr");
	row.append(td1);
	row.append(td2);
	row.append(td3);
   table[0].append(row);	
})



