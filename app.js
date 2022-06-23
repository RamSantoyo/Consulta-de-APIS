document.getElementById('jsonbtn').addEventListener('click', leer)

function buscar(){
    const url =`https://pokeapi.co/api/v2/pokemon/ditto`;
    fetch(url).then((res) =>{
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data.game_indices[0].version.name);
    })
}

function llamar(){ 
     fetch('lectura.json')
     .then(function(res) {
         return res.json();
     }).then(function(data){
        console.log(data);
     })
}

function recorrer(){

    for (let i in json) {
        console.log(json[i].EVENT_NAME_MANAGE.name)
    }

}

function leer(){
    Object.entries(json).forEach(([key, value]) => {
        console.log(key, value)
    });
}

let json = {
    "0":{
     "check":true,
     "OBJECT_ID":{
       "check":false,
       "OBJECT_ID":"OBJECT_ID",
       },
    "nameTable":"TEST1",
    "EVENT_NAME_MANAGE":{
       "check":false,
       "name":"Evento 1",
    }},
   "1":{
    "check":true,
    "OBJECT_ID":{
       "check":false,
       "name":"OBJECT_ID",
    },
    "nameTable":"TEST2",
    "EVENT_NAME_MANAGE":{
       "check":false,
       "name":"Evento 2",
    }
   }
  };
   