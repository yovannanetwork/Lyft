var countries = [
  {
    "nombre": "Afganistán",
	"flag": "img/64/Argentina.png",
    "phone_code": 93
  },
  {
    "nombre": "Albania",
    "phone_code": 355
  },
  {
    "nombre": "Alemania",
    "phone_code": 49
  },
  {
    "nombre": "Algeria",
    "phone_code": 213
  },
  {
    "nombre": "Andorra",
    "phone_code": 376
  },
  {
    "nombre": "Angola",
    "phone_code": 244
  },
  {
    "nombre": "Anguila",
    "phone_code": "1 264"
  },
  {
    "nombre": "Antártida",
    "phone_code": 672
  },
  {
    "nombre": "Antigua y Barbuda",
    "phone_code": "1 268"
  },
  {
    "nombre": "Antillas Neerlandesas",
    "phone_code": 599
  },
  {
    "nombre": "Arabia Saudita",
    "phone_code": 966
  },
  {
    "nombre": "Argentina",
    "phone_code": 54
  },
  {
    "nombre": "Armenia",
    "phone_code": 374
  },
  {
    "nombre": "Aruba",
    "phone_code": 297
  }
]
function init(){
	recorreList();
}
function recorreList(_nombre, _codigo){
	var countryList = document.getElementById("country-list");
	for(var i=0; i<countries.length; i++){
		var html = '<li>'+
					'<img src="64/Australia.png" width="30" alt="">'+ countries.nombre[i]+
					'</li>';
		countryList.innerHTML += countries[i];
	}
}
