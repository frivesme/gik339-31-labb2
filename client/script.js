//Uppgift 6
const url = "http://localhost:3000/users";
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((jsonData) => {
    //Uppgift 7
    const newUl = document.createElement("ul");

    //newUl.id = "newUl";

    jsonData.forEach((user) => {
      const html = `
      <ul id = "newUl" style= "background-color: ${user.color}">
        <p>${user.firstName} ${user.lastName} ${user.username} </p>
       
      </ul>`;

      document.body.insertAdjacentHTML("beforeend", html);
      console.log(jsonData);
    });
  });
