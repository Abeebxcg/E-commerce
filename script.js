var userItems = [];

// function to add items
function addItems() {
  var itemsArr = {
    item: itemInput.value,
    price: itemPrice.value,
    amount: itemAmount.value,
    displayError() {
      document.getElementById("error").style.display = "block";
    },

    displaySuccess() {
      document.getElementById("success").style.display = "block";
    },
  };

  if (
    itemInput.value != "" &&
    itemPrice.value != "" &&
    itemAmount.value != ""
  ) {
    userItems.push(itemsArr);
    displayItems();
    itemsArr.displaySuccess();
    document.getElementById("error").style.display = "none";

    document.getElementById("alwaysDisplay").style.display = "none";
    console.log(userItems);
    itemInput.value = "";
    itemPrice.value = "";
    itemAmount.value = "";
    itemInput.focus();
  } else {
    itemsArr.displayError();
    document.getElementById("success").style.display = "none";
  }
}

// function to display in a table
function displayItems() {
  display.innerHTML = `
  <tr>
  <td class="px-2">S/N</td>
  <td class="px-2">Item(s)</td>
  <td class="px-2">Price(s)</td>
  <td class="px-2">Volume(s)</td>
  <td class="px-2">Rate(s)</td>
  <td class="px-2 text-center">Actions</td>
 </tr>
    `;
  // in other to display the various items added
  for (let i = 0; i < userItems.length; i++) {
    display.innerHTML += `
        <tr>
        <td class="px-2 py-1 text-center">${i + 1}</td>
        <td class="px-2 py-1 text-center">${userItems[i].item}</td>
        <td class="px-2 py-1 text-center">${userItems[i].price}</td>
        <td class="px-2 py-1 text-center">${userItems[i].amount}</td>
        <td class="px-2 py-1 text-center">${
          userItems[i].amount * userItems[i].price
        } </td>
        <td class="px-2 py-1 text-center">
        <button type="button" class="btn btn-danger btn-sm"  onclick="deleteItems(${i})">Delete</button>
        <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success btn-sm"  onclick="editItems(${i})">Edit</button>
        </td>
       </tr>
        `;
  }
}

// function to delte specific items
function deleteItems(index) {
  userItems.splice(0, userItems.length);
  displayItems();
}

// function to edit a particular item

function editItems(index) {
  editedindex = index;
}

function saveEditItems(index) {
  var editedArr = {
    item: itemName.value,
    price: itemPr.value,
    amount: itemVal.value,
  };
  userItems.splice(editedindex, 1, editedArr);
  displayItems();
  itemName.value = "";
  itemPr.value = "";
  itemVal.value = "";
  itemName.focus();
}
