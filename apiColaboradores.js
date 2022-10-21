const listUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response. json();
    let tableBody=``;
    users.forEach((user,index) => {
        
        tableBody += `<tr> 
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        </tr>`;
    });
    document.getElementById("tableBody_Users").innerHTML = tableBody;
};

window.addEventListener("load",function(){
    listUsers();
});
