console.log(data);

var div_json = document.getElementById('json');


for (var i = 0; i < data.length; i++) {
	var elem = document.createElement('div');
	elem.innerHTML = '<span onclick=mafunction(i)>'+data[i].nom+'</span>';
	elem.innerHTML += '<span>'+data[i].prenom+'</span>';
	elem.innerHTML += '<span>'+data[i].javascript+'</span>';
	elem.innerHTML += '<span>'+data[i].fav_web+'</span>';
	div_json.appendChild(elem);
	}

	function mafunction(i) {
		getElementById
	};

