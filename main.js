import { icList } from "./ic.js";

function whatPackage(icPins) {
    let icPackage = `DIP-${icPins.length}`
    return icPackage;
}

icList.forEach(chip => {
    chip.package = whatPackage(chip.pins);
});

// let textbox = document.getElementById('messages');

let icName = "CD40106";
let targetedIc = icList.find(ic => ic.name === icName);


let icInlineElemnt = document.getElementById("icInline");
icInlineElemnt.setAttribute("url", `assets/${targetedIc.package}.x3d`)


let textElemnt = document.getElementById("textElemnt")
textElemnt.setAttribute("string", `${targetedIc.name}`)

function handlePinClick(pin, elemnt) {
    let message = `
    ${targetedIc.name}
    ${targetedIc.pins[3].num}
    ${targetedIc.pins[3].name}
    ${targetedIc.pins[3].explanation}
    `;
    textElemnt.setAttribute("string", message)
    // textbox.innerHTML = message;

    elemnt.getElementsByTagName('Material')[0].setAttribute('diffuseColor', `0 1 0`)
    setTimeout(() => {
        elemnt.getElementsByTagName('Material')[0].
            setAttribute('diffuseColor', "0.82 0.82 0.78")
        // textbox.innerHTML = "";
    }, 1000)
}

