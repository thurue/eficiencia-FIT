const phonemask = document.getElementById("phoneInp")

phonemask.addEventListener("input", () => {
    var limparvalor = phonemask.value.replace(/\D/g, "").substring(0, 11)

    var numerosArray = limparvalor.split("")

    var numeroFormatado = ""

    if (numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0, 1).join("")}`
    }
    if (numerosArray.length > 1) {
        numeroFormatado += `${numerosArray.slice(1, 2).join("")}) `
    }
    if (numerosArray.length > 2) {
        numeroFormatado += `${numerosArray.slice(2, 7).join("")}`
    }
    if (numerosArray.length > 7) {
        numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`
    }
    phonemask.value = numeroFormatado
})