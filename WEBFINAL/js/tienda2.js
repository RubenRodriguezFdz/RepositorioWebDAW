/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function seleccionarProd(elemento) {
    var element = elemento.parentElement.previousSibling.previousSibling.childNodes;
    var input = element[1];
    var valor = $(input).val();
    var idAttr = input.getAttribute("id");

    alert(valor);
//    alert(padre.nodeName);
//    alert(padre.nodeType);
//    alert(padre.nodeValue);
//        var t = document.getElementById("top");
//var hijo = padre.firstChild;
//    var idAttr = hijo.getAttribute("id");
////    alert(idAttr.value == "top")
//    alert(padre.value);

}