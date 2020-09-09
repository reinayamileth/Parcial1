exports.salario =(horas,valor) => (h*v),
exports.costo_extra = (valor,costo_extra) => (v*0.8);

module.exports = (h,v,callback) => {
    if (h <= 0 || v <= 0)
        setTimeout(() =>
            callback(new Error("Las horas de trabajo deben ser mayores de cinco : h = "
                + h + ", y v = " + v),
            null),
            2000);
    else
        setTimeout(() =>
            callback(null, {
                salario: () => (h*v),
                costo_extra:() => (v*0.8)
            }),
            2000);
