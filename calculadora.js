function kmRodados(distancia, combustivel){
   let totalCombustivel = 0;

   if(combustivel === "gasolina"){
      totalCombustivel = Number(distancia / 16);
      return totalCombustivel;
   }

   if(combustivel === "etanol"){
      totalCombustivel = Number(distancia/ 11);
      return totalCombustivel;
   }
}

module.exports = {kmRodados}; 
