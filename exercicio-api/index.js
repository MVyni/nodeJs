//PARA FAZER GET NA APIs
function Get(){
    return fetch("https://api-generator.retool.com/RKozdT/data")
    .then((res) => res.json())
    .then((data) => console.log(data));    
}

//PARA FAZER POST NA APIs
async function postData(url = "https://api-generator.retool.com/RKozdT/data", data = "{}") {
    const response = await fetch("https://api-generator.retool.com/RKozdT/data", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"},
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
    });
    return response.json();
}

postData("https://api-generator.retool.com/RKozdT/data", cep = {
    "Ano": "2022",
    "Marca": "Hyundai",
    "Valor": "113.000",
    "Modelo": "HRV",
    "Categoria": "SUV",
    "Quilometragem": "29.000"
} )
.then((res) => {
    console.log(res);
});

//PARA FAZER UM PUT NA APIs
async function putData(url= "https://api-generator.retool.com/RKozdT/data", data= "{}"){
    
    const response = await fetch("https://api-generator.retool.com/RKozdT/data/3", {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    });
    return response.json();
}

putData("https://api-generator.retool.com/RKozdT/data", cep = {
    "Ano": "2019",
    "Marca": "Citroen",
    "Valor": "87.000",
    "Modelo": "C4",
    "Categoria": "sedan",
    "Quilometragem": "47.520"
})
.then((data) => {
    console.log(data);
})

//PARA FAZER UM DELETE NA APIs
async function deleteData(url = "https://api-generator.retool.com/RKozdT/data", data= "{}"){

    const response = await fetch("https://api-generator.retool.com/RKozdT/data", {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    })
    return response.json();
}

deleteData("https://api-generator.retool.com/RKozdT/data", cep)
.then((res) => {
    console.log(res);
});