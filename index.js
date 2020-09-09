var salario = require("./salario");
 /* var salario = {
  salario: (horas,valor) => (h*v),
  costo_extra: (valor,costo_extra) => (v*0.8)
};*/
function salarios(h,v) {
  console.log("salarios igual a  h = " + h +" y v = "+ v);

if (h<=0 || v<=0){
  console.log("Las horas de trabajo deben ser mayores a cinco: h = "+ h +  ", and v =" + v);
}

function costo_extra(v,c){
console.log("el costo_extra es igual a v=" +v+ "y c =" +c);

if (v<=0 || c<=0) {
  console.log("el costo_extra debe ser mayor a ocho: v=" +v+ ",and c =" +c);
}
else {
  console.log("el salario de las  horas de trabajo es:" + salario (h,v));
  console.log("el costo_extra es:" + costo_extra(v,c));
}
}
 salarios(6,9.50);
 salarios(7,9.50);
 salarios(8,9.50);
 
