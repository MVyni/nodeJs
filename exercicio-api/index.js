function Get(){
    return fetch("https://api-generator.retool.com/RKozdT/data")
    .then((res) => res.json())
    .then((data) => console.log(data));    
}