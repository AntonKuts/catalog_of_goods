var arr = {
	"k1" : {
		name: "alex", 
		age: 15
	},
	"k2" : {
		name: "serg", 
		age: 25
	}
};

var out="";
for (var key in arr){
	out += '<div class="cart">';
	out += '<h2>'+arr[key].name+'</h2>';

	out += '</div>';
}
document.querySelector('#out').innerHTML = out;
localStorage.setItem('kkkk', JSON.stringify(arr));
var a = localStorage.getItem('kkkk');
a = JSON.parse(a);
console.log(a);