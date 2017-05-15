 var goods = {
   12321: {
     "name": "Перфоратор",
     "producer": "Bosch",
     "name2": "BFG 3000",
     "cost_1": 3550,
     "cost_2": 3394,
     "batteries": 1,
     "image": "bosch3000.jpg",
     "new": 0
   },
   12322: {
     "name": "Перфоратор",
     "producer": "Bosch",
     "name2": "BFG 6000",
     "cost_1": 3500,
     "cost_2": 2500,
     "batteries": 1,
     "image": "bosch6000.jpg",
     "new": 1
   },
   12323: {
     "name": "Перфоратор",
     "producer": "Bosch",
     "name2": "BFG 2900",
     "cost_1": 3700,
     "cost_2": 3491,
     "batteries": 1,
     "image": "bosch2900.jpg",
     "new": 0
   },
   12324: {
     "name": "Перфоратор",
     "producer": "TexAc",
     "name2": "TA-01-352",
     "cost_1": 1399,
     "cost_2": 1279,
     "batteries": 1,
     "image": "tex352.jpg",
     "new": 0
   },
   12325: {
     "name": "Перфоратор",
     "producer": "Craft",
     "name2": "CBH 1100",
     "cost_1": 22500,
     "cost_2": 15500,
     "batteries": 1,
     "image": "craft1110.jpg",
     "new": 1
   },
   76423: {
     "name": "Перфоратор",
     "producer": "Днепр-М",
     "name2": "ПЕУ-2485",
     "cost_1": 1199,
     "cost_2": 1069,
     "batteries": 0,
     "image": "dnepr85.jpg",
     "new": 0
   },
   76424: {
     "name": "Перфоратор",
     "producer": "Титан",
     "name2": "БП75-24",
     "cost_1": 0,
     "cost_2": 1285,
     "batteries": 0,
     "image": "titan.jpg",
     "new": 1
   },
   76425: {
     "name": "Перфоратор",
     "producer": "Metabo",
     "name2": "KHE 2444",
     "cost_1": 4434,
     "cost_2": 3299,
     "batteries": 0,
     "image": "metabo.jpg",
     "new": 0
   }
 };


 function fun0() {
   var z = 0;
   for (var key in goods) {
     if (goods[key].cost_2 > z) {
       z = goods[key].cost_2;
     }
   }
   document.getElementById('fprice').max = z;
   document.getElementById('fprice').value = z;
   fun1();
   fun2();
 }



 function fun1() {
   var mprice = document.getElementById('fprice').value;
   document.getElementsByClassName('outMaxPr')[0].innerHTML = ' 0 - ' + mprice;
 }




 function fun2() {
   var out = ""
   var mprice = document.getElementById('fprice').value;
   for (var key in goods) {
     if (goods[key].cost_2 <= mprice) {
       out += '<div class="cart">';
       out += '<img class = "img" src="images/' + goods[key].image + '" alt="Перфоратор">';
       out += '<h2 class="BFGName">' + goods[key].name + ' ' + goods[key].producer + '</h2>';
       out += '<h2 class="BFGName">' + goods[key].name2 + '</h2>';
       out += '<h2 class="BFGPPrice">' + ((goods[key].cost_1 == 0) ? '' : goods[key].cost_1) + '</h2>';
       out += '<h2 class="BFGPrice">' + goods[key].cost_2 + '</h2>';
       out += ((goods[key].new == 0) ? '' : '<img class = "newflag2" src="images/newflag.png" alt="new">');
       out += '</div>';
     }
   }
   document.getElementById('out').innerHTML = out

 }

 var prod1 = document.getElementById('Bosch');
 var prod2 = document.getElementById('TexAc');
 var prod3 = document.getElementById('Craft');
 var prod4 = document.getElementById('Днепр-М');
 var prod5 = document.getElementById('Титан');
 var prod6 = document.getElementById('Metabo');

 function fun3() {

   if (prod1.checked) {
     var prodM = prod1.value;
   }
   if (prod2.checked) {
     var prodM = prod2.value;
   }
   if (prod3.checked) {
     var prodM = prod3.value;
   }
   if (prod4.checked) {
     var prodM = prod4.value;
   }
   if (prod5.checked) {
     var prodM = prod5.value;
   }
   if (prod6.checked) {
     var prodM = prod6.value;
   }
   var out = ""
   for (var key in goods) {
     if (goods[key].producer == prodM) {
       out += '<div class="cart">';
       out += '<img class = "img" src="images/' + goods[key].image + '" alt="Перфоратор">';
       out += '<h2 class="BFGName">' + goods[key].name + ' ' + goods[key].producer + '</h2>';
       out += '<h2 class="BFGName">' + goods[key].name2 + '</h2>';
       out += '<h2 class="BFGPPrice">' + ((goods[key].cost_1 == 0) ? '' : goods[key].cost_1) + '</h2>';
       out += '<h2 class="BFGPrice">' + goods[key].cost_2 + '</h2>';
       out += ((goods[key].new == 0) ? '' : '<img class = "newflag2" src="images/newflag.png" alt="new">');
       out += '</div>';
     }
   }
   document.getElementById('out').innerHTML = out;
 }

 var power = document.getElementById('Battery');
 var pow = 2;

 function fun4() {
   if (power.checked) {
     pow = 1;
   } else {
     pow = 0;
   }
   var out = ""
   for (var key in goods) {
     if (goods[key].batteries == pow) {
       out += '<div class="cart">';
       out += '<img class = "img" src="images/' + goods[key].image + '" alt="Перфоратор">';
       out += '<h2 class="BFGName">' + goods[key].name + ' ' + goods[key].producer + '</h2>';
       out += '<h2 class="BFGName">' + goods[key].name2 + '</h2>';
       out += '<h2 class="BFGPPrice">' + ((goods[key].cost_1 == 0) ? '' : goods[key].cost_1) + '</h2>';
       out += '<h2 class="BFGPrice">' + goods[key].cost_2 + '</h2>';
       out += ((goods[key].new == 0) ? '' : '<img class = "newflag2" src="images/newflag.png" alt="new">');
       out += '</div>';
     }
   }
   document.getElementById('out').innerHTML = out;
 }

 var nm = {};
 var z = [];
 var t = [];
 var a = [];
 var y = [];

 function fun5() {
   for (var i = 0; i < 8; i++) {
     z[i] = 0;
     t[i] = 0;
     a[i] = 0;
     y[i] = 0;
     for (var key in goods) {
       if (goods[key].cost_2 > z[i]) {
         z[i] = goods[key].cost_2;
         y[i] = goods[key];
         a[i] = key;
       }
     }
     nm[i] = y[i];
     delete goods[a[i]];
   }
   var out = ""
   for (var key in nm) {
     out += '<div class="cart">';
     out += '<img class = "img" src="images/' + nm[key].image + '" alt="Перфоратор">';
     out += '<h2 class="BFGName">' + nm[key].name + ' ' + nm[key].producer + '</h2>';
     out += '<h2 class="BFGName">' + nm[key].name2 + '</h2>';
     out += '<h2 class="BFGPPrice">' + ((nm[key].cost_1 == 0) ? '' : nm[key].cost_1) + '</h2>';
     out += '<h2 class="BFGPrice">' + nm[key].cost_2 + '</h2>';
     out += ((nm[key].new == 0) ? '' : '<img class = "newflag2" src="images/newflag.png" alt="new">');
     out += '</div>';
   }
   document.getElementById('out').innerHTML = out;
 }


 function fun6() {
   var s = 0;
   for (var key in goods) {
     if (goods[key].cost_2 > s) {
       s = goods[key].cost_2;
     }
   }
   for (var i = 0; i < 7; i++) {
     z[i] = s;
     t[i] = 0;
     a[i] = 0;
     y[i] = 0;
     for (var key in goods) {
       if (goods[key].cost_2 < z[i]) {
         z[i] = goods[key].cost_2;
         y[i] = goods[key];
         a[i] = key;
       }
     }
     nm[i] = y[i];
     delete goods[a[i]];
   }
   var out = ""
   for (var key in nm) {
     out += '<div class="cart">';
     out += '<img class = "img" src="images/' + nm[key].image + '" alt="Перфоратор">';
     out += '<h2 class="BFGName">' + nm[key].name + ' ' + nm[key].producer + '</h2>';
     out += '<h2 class="BFGName">' + nm[key].name2 + '</h2>';
     out += '<h2 class="BFGPPrice">' + ((nm[key].cost_1 == 0) ? '' : nm[key].cost_1) + '</h2>';
     out += '<h2 class="BFGPrice">' + nm[key].cost_2 + '</h2>';
     out += ((nm[key].new == 0) ? '' : '<img class = "newflag2" src="images/newflag.png" alt="new">');
     out += '</div>';
   }
   document.getElementById('out').innerHTML = out;
 }

 document.getElementById('fprice').oninput = fun1;
 document.getElementById('fprice').onchange = fun2;
 document.getElementById('fproducer').onchange = fun3;
 document.getElementById('fpower').onchange = fun4;
 document.getElementById('button1').onclick = fun5;
 document.getElementById('button2').onclick = fun6;
 fun0();

 // Kuts Anton 14.05.2017
