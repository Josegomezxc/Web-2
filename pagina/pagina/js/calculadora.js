class calculadora{

    /* Esta funcion se reutiliza en los ejercicios: 1 y 7 */
    sumadivisores(arre,valorin){
        let suma=0
        for (let divi = valorin; divi < arre; divi++) {
            if (arre%divi==0) {
                suma=suma+divi
            }
            
        }
        return suma
    }

    // ejercicio 1 reutiliza la funcion sumadivisores
    perfecto(){
        let sumato=0,d=document, arre1=[6,5,25,24,28], acu=0
        for (let i = 0; i < arre1.length; i++) {
            acu=this.sumadivisores(arre1[i],1)
            if (acu==arre1[i]) {
                sumato=sumato+acu
            }
            
        }
        d.getElementById('resp').textContent=`La suma de los numeros perfectos son:${sumato}`
    }
    // ejercicio 2 no reutiliza ninguna funcion
    ejercicio2(){
        let num1=[6,5,25,7,28], acu=[], d=document, band=1, divi=2
        for (let i = 0; i < num1.length; i++) {
            band=1, divi=2
            while (divi < num1[i] && band==1) {
                if (num1[i]%divi==0) {
                    band=0
                }else{
                    divi=divi+1
                }
            }
            if (band==1) {
                acu.push(num1[i])
            }           
        }
        d.getElementById("resp").textContent=`Los numeros primos son:${acu}`
    }

    /* Esta funcion se reutiliza en los ejercicios: 3 y 4 */
    exponente(num1,num2){
        let res=1
        for (let c = 0; c < num2; c++) {
           res=res*num1
        }
        return res
    }
    
    // ejercicio 3 reutiliza la funcion exponente
    ejercicio3(){
        let d=document, base=parseInt(d.getElementById('num1').value)
        let exponen=parseInt(d.getElementById('num2').value)
        let acu=0, resp=[]
        acu=this.exponente(base,exponen)
        resp.push(acu)
        d.getElementById("resp").textContent=`${resp}`
    }
    
    // ejercicio 4 reutiliza la funcion exponente
    ejercicio4(){
       let arre=[4,3,2,5], acu=0, resp=[], d=document
       for (let i = 0; i < arre.length; i++) {
       acu=this.exponente(arre[i],arre[i])
        resp.push(acu)
       }
       d.getElementById("resp").textContent=`${resp}`
    }
    
    // ejercicio 5 no reutiliza ninguna funcion
    tablas(){
        let i=1,resp=0, d=document, num1=parseInt(d.getElementById('num1').value),num2=parseInt(d.getElementById('num2').value)
        for(i=1;i<=num2;i=i+1){
            resp=num1*i
            d.getElementById("resp").textContent=`${num1} x ${i} = ${resp}`
        }
        
    }
    
    // ejercicio 6 no reutiliza ninguna funcion
    ejercicio6(){
        let d=document, num1=parseInt(d.getElementById('num1').value), acu=[]
        let valorin=parseInt(d.getElementById('num2').value)
        for (let divi = valorin; divi < num1; divi++) {
            if (num1%divi==0) {
                acu.push(divi)
            }
        }
        d.getElementById("resp").textContent=`La suma de los divisores es:[${acu}]`
    }

    // ejercicio 7 reutiliza la funcion sumadivisores
    ejercicio7(){
        let suma=0, d=document, acud=0
        let num1=parseInt(d.getElementById('num1').value)
        let valorin=parseInt(d.getElementById('num2').value)
        acud=this.sumadivisores(num1,valorin)
        d.getElementById("resp").textContent=`La suma de los divisores es:${acud}`
    }

    /* Esta funcion se reutiliza en los ejercicios: 8,9,10,11 y 12 */
    digito(num){
        let digito=0
        while(num>0){
            digito=Math.floor(num%10)
            return digito
          
        }
       
    }
    
    // ejercicio 8 reutiliza la funcion digito
    ejercicio8(){
        let acu=0, d=document, num2='', acud=0, inver=[]
        let num1=parseInt(d.getElementById('num1').value)
        while(num1>0){
          acu = this.digito(num1)
          num1= Math.floor(num1/10)
            num2+=acu
        }
        while(num2>0){
            acud = this.digito(num2)
            num2= Math.floor(num2/10)
            inver.push(acud)
            }
        d.getElementById("resp").textContent=`Numero convertido en arreglo:[${inver}]`
    }
    
    // ejercicio 9 reutiliza la funcion digito
    ejercicio9(){
        let acu=0, suma=0, d=document
        let num1=parseInt(d.getElementById('num1').value)
        while (num1>0) {
          acu = this.digito(num1)
          num1= Math.floor(num1/10)
          suma=suma+acu
        }
        d.getElementById("resp").textContent=`La suma de sus digitos es:${suma}`
    }

    // ejercicio 10 reutiliza la funcion digito
    pares(){
        let acu=0, d=document, pares='', acud=0, inver=[]
        let num1=parseInt(d.getElementById('num1').value)
        while(num1>0){
          acu = this.digito(num1)
          num1= Math.floor(num1/10)
          if (acu%2==0) {
            pares+=acu
          }
        }
        while(pares>0){
            acud = this.digito(pares)
            pares= Math.floor(pares/10)
            inver.push(acud)
            }
        d.getElementById("resp").textContent=`Los dígitos pares son:${inver}` 
    }

    // ejercicio 11 reutiliza la funcion digito
    primerdigito(){
        let acu=0, d=document
        let num1=parseInt(d.getElementById('num1').value)
        while(num1>10){
          acu = this.digito(num1)
          num1= Math.floor(num1/10)
       }
       d.getElementById("resp").textContent=`El primer dígito es:${num1}` 
    }

    // ejercicio 12 reutiliza la funcion digito
    ultimodigito(){
        let acu=0, d=document
        let num1=parseInt(d.getElementById('num1').value)
        acu = this.digito(num1)
        d.getElementById("resp").textContent=`El ultimo dígito es:${acu}` 
    }

    /* Esta funcion se reutiliza en los ejercicios: 13 y 14 */
    factorial(num){
        let acu=1
        while (num>0) {
            acu=acu*num
            num=num-1
        }
        return acu
    }


    // ejercicio 13 reutiliza la funcion factorial
    numfact(){
        let d=document, num1=parseInt(d.getElementById('num1').value), resul=0
        resul=this.factorial(num1)
        d.getElementById("resp").textContent=`El numero factorial de ${num1} es:${resul}`
    }

    // ejercicio 14 reutiliza la funcion factorial
    seriefacto(){
        let num1=[3,2,4], acud=0, seri=[], d=document
        for (let i = 0; i < num1.length; i++) {
            acud=this.factorial(num1[i])
            seri.push(acud)
        }
        d.getElementById("resp").textContent=`${seri}`
    }

    // ejercicio 15 no reutiliza ninguna funcion
    rangonum(){
        let rango=[], d=document
        let num1=parseInt(d.getElementById('num1').value)
        let num2=parseInt(d.getElementById('num2').value)
        num1=num1+1
        while (num1<num2) {
            rango.push(num1)
            num1=num1+1
        }
        d.getElementById("resp").textContent=`[${rango}]`
    }

    //funcion para limpiar pantalla
    limpiar(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
}
let cal= new calculadora()