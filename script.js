function elementId(id) {
  const catchId = document.getElementById(id);
  return catchId;
}

function elementClass(clsName) {
  let catchClasses = document.getElementsByClassName(clsName);
  return catchClasses;
}

elementId("emergencyNumbers").addEventListener("click", function (e) {
  const checkClass = e.target.className;

  // increase Love Number in the nev bar
  if (checkClass.includes("heart")) {
    let initialLove = Number(elementId("love").innerText);
    initialLove++;
    elementId("love").innerText = initialLove;
  }

  //   Call Buttons Functionality
  if (checkClass.includes("callNow")) {
    const getServiceName =
      e.target.parentElement.parentElement.children[1].innerText;

    const getServiceCallNumber =
      e.target.parentElement.parentElement.children[3].innerText;

    let getAllCoin = Number(elementId("coin").innerText);

    const currentTime = new Date().toLocaleTimeString();

    // redure coin in every call
    getAllCoin -= 20;
    elementId("coin").innerText = getAllCoin;

    // show alert if coin is less then 0
    if (getAllCoin < 0) {
      alert("আপনার যথেষ্ট পরিমাণে কয়েন নেই। কল করতে কমপক্ষে ২০টি কয়েন প্রয়োজন");
      elementId("coin").innerText = 0;
      return;
    }

    // show alert message in every call
    alert(
      "📞 " + " Calling to  " + getServiceName + "  " + getServiceCallNumber
    );

    // create Call History
    const getHistoryParent = elementId("user-selected");
    const makeHistory = document.createElement("div");
    makeHistory.innerHTML = `
        <div
              class="flex justify-between items-center bg-[#FAFAFA] text-[18px] px-3 py-4 mb-4 rounded-lg"
            >
              <div>
                <p class="text-black">${getServiceName}</p>
                <p class="text-[#5C5C5C]">${getServiceCallNumber}</p>
              </div>
              <!-- time -->
              <div>
                <p>${currentTime}</p>
              </div>
        </div>
    `;

    // append the history
    getHistoryParent.appendChild(makeHistory);

    // clear all the history if user click clear button
    elementId("all-clear").addEventListener("click", function () {
      getHistoryParent.innerHTML = "";
    });
  }

  //   Copy Button Functionality
  if (checkClass.includes("copy")) {
    const emServiceNum =
      e.target.closest("div").parentElement.children[3].innerText;

    // increase copy quantity
    let copiedNumber = Number(elementId("copy-quantity").innerText);
    copiedNumber++;
    elementId("copy-quantity").innerText = copiedNumber;

    // show alert msg and do copy in the clip board
    navigator.clipboard
      .writeText(emServiceNum)
      .then(() => {
        alert("নম্বর কপি হয়েছে : " + emServiceNum);
      })
      .catch(() => {
        // fallback method (পুরোনো ব্রাউজারের জন্য)
        const newContainer = document.createElement("textarea");
        newContainer.value = emServiceNum;
        document.body.appendChild(newContainer);
        newContainer.select();
        document.execCommand("copy");
        document.body.removeChild(newContainer);

        alert("নম্বর কপি হয়েছে : " + emServiceNum);
      });
  }
});
