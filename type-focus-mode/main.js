var type_area = document.getElementById("type-area");
var focus_div = document.getElementById("focus-div");
var stop_button = document.getElementById("stop-button");
var textarea = document.getElementById("target-textarea");
focus_div === null || focus_div === void 0 ? void 0 : focus_div.focus();
var text = "";
var current_text = ["", ""];
setTimeout(function () { type_area === null || type_area === void 0 ? void 0 : type_area.textContent += " >:("; }, 3000);
stop_button === null || stop_button === void 0 ? void 0 : stop_button.addEventListener("click", function (event) {
    event.preventDefault();
    focus_div.style.display = "none";
    text += current_text[1] == "" ? "" : " " + current_text[1];
    textarea.value = text;
    textarea === null || textarea === void 0 ? void 0 : textarea.style.display = "block";
});
focus_div === null || focus_div === void 0 ? void 0 : focus_div.addEventListener("keydown", function (event) {
    event.preventDefault();
    var key = event.key;
    if (key === "Backspace") {
        current_text[1] = current_text[1].slice(0, -1);
    }
    else if (key === " ") {
        text += " " + current_text[1];
        if (current_text[1].length > 3) {
            current_text[0] = current_text[1];
        }
        else {
            current_text[0] += " " + current_text[1];
        }
        current_text[1] = "";
    }
    else {
        if (key.length == 1) {
            current_text[1] += key;
        }
    }
    type_area === null || type_area === void 0 ? void 0 : type_area.textContent = current_text.join(" ");
    console.log(text);
});
