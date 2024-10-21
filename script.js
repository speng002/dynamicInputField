// dynamic field creation Javascript

const addBtn = document.querySelector(".add");

const inputGroup = document.querySelector(".inp-group");

function removeInput(){
    this.parentElement.remove();
}

function addInput(){
    const nameInput = document.createElement("input");
    nameInput.type="text";
    nameInput.placeholder = "Enter your Name";
    // is this where I add an id?

    const emailInput = document.createElement("input");
    emailInput.type="email";
    emailInput.placeholder="Enter You Email";

    const btn = document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times;";

    btn.addEventListener("click", removeInput);

    const childDiv = document.createElement("div");
    childDiv.className = "flex";

    inputGroup.appendChild(childDiv);
    childDiv.appendChild(nameInput);
    childDiv.appendChild(emailInput);
    childDiv.appendChild(btn);


}



// When I click run the function "addInput". Why is it not "addInput()"?
addBtn.addEventListener("click", addInput);