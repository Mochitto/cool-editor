const testDiv = document.getElementById("testdiv")

let content = document.createTextNode("HELLO")
let span = document.createElement("span")
span.appendChild(content)
span.classList.add("hello")

function testEquality() {
    return testDiv.children[0].isEqualNode(span)
}

console.log(testEquality())