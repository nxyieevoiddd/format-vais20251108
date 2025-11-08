// 1.uzdevums
// Izveidojiet primitīvu HTML un JS aplikāciju, kas lietotājam ļauj aprēķināt rīņķa līnijas garumu vai laukumu pēc lietotāja ievadītā riņķa rādiusa.
// !! Izmantojiet tikai devdocs.io !!
// devdocs.io nepieciešams iepējot (enable) sadaļu "Web APIs", jo ar Javascript sadaļu vien nepietiks.
// Atslēgas vārdi: document, addEventListener, value, getElementById, innerHTML

// 2.uzdevums
// Izveidojiet primitīvu HTML un JS kalkulātora aplikāciju, kas lietotājam ļauj sareizināt un izdalīt divus skaitļus.
console.log(Output);
const input = document.getElementById("radiusInput");
const calcButton = document.getElementById("calcButton");
const Output = document.getElementById("Output");
calcButton.addEventListener("click", clickHandle);
function clickHandle() {
  Output=radiusInput * 3.14
}