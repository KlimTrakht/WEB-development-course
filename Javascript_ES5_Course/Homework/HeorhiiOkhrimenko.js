function poligon(value){
    let n;
    n = Math.pow(value, 2)

    function poligonValue(polygonArea){
        if(n >= 2){  
        polygonArea = n + (Math.pow((value - 1), 2)); 
        } else if (n <= 1){
            polygonArea = n;
        }
        return polygonArea;
    }
    return poligonValue();
}
