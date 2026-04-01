let reminderTime = "";
let medicine = "";

function setReminder() {
    medicine = document.getElementById("medicineName").value;
    reminderTime = document.getElementById("medicineTime").value;

    if (medicine === "" || reminderTime === "") {
        alert("Please enter all details");
        return;
    }

    alert("Reminder set for " + reminderTime);

    checkTime();
}

function checkTime() {
    setInterval(() => {
        let now = new Date();
        let currentTime = now.toTimeString().slice(0,5);

        if (currentTime === reminderTime) {
            showNotification();
        }
    }, 1000);
}

function showNotification() {
    document.getElementById("notificationBox").classList.remove("hidden");
    document.getElementById("notifyText").innerText =
        "Time to take: " + medicine + " 💊";
}

function markDone() {
    saveReport("Done");
    hideNotification();
}

function markNotDone() {
    alert("Reminder again in 1 minute ⏰");

    setTimeout(() => {
        showNotification();
    }, 60000);

    saveReport("Not Done");
    hideNotification();
}

function hideNotification() {
    document.getElementById("notificationBox").classList.add("hidden");
}

function saveReport(status) {
    let list = document.getElementById("reportList");
    let item = document.createElement("li");

    item.textContent = medicine + " - " + status;
    list.appendChild(item);
}