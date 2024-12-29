var inputBill = document.getElementById("bill");
var cashGiven = document.getElementById("cash");
var checkBtn = document.getElementById("btn");
var errMsg = document.getElementById("error");
var noOfNotes = document.querySelectorAll(".no-of-notes");
let remainingAmount = document.getElementById("remainingAmount");
var notes = [2000, 500, 100, 50, 20, 10, 5, 1];

function errorHandle(error) {
    errMsg.style.display = "block";
    errMsg.innerText = error;
}

function hideMessage() {
    errMsg.style.display = "none";
}

function clickHandler() {
    hideMessage();

    // Convert input values to numbers
    let billAmount = parseFloat(inputBill.value);
    let cashAmount = parseFloat(cashGiven.value);

    // Validate inputs
    if (isNaN(billAmount) || isNaN(cashAmount)) {
        errorHandle("Please enter valid numbers for both fields.");
        return;
    }

    if (billAmount <= 0) {
        errorHandle("Please enter a positive bill amount.");
    } else {
        let remaining = cashAmount - billAmount;
        if (remaining < 0) {
            errMsg.style.color = "red";
            errorHandle("Cash given is less than the bill amount. Please provide more cash.");
            remainingAmount.innerText = ""; // Clear the remaining amount display
        } else {
            remainingAmount.innerText = `Remaining Amount: ₹${remaining}`;
            for (var i = 0; i < notes.length; i++) {
                const noteCount = Math.trunc(remaining / notes[i]);
                remaining %= notes[i];
                noOfNotes[i].innerText = noteCount;
            }
        }
    }
}

checkBtn.addEventListener("click", clickHandler);
