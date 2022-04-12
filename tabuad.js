function gerar(){
    var n1 = document.querySelector('input#number1')
    var n2 = document.querySelector('input#number2')
    var t1 = Number(n1.value)
        
    var loc = document.querySelector('textarea#resultado')
    
    if(n1.value.length ==0){
        alert('[ERRO]  Digite um número!')
    } else {
        loc.innerHTML = ''
        if (n2.value.length == 0){
            var t3 = 10 
        } else {
            t3 = Number(n2.value) 
        }
        for ( var t2 = 1; t2 <= t3; t2++ ) {

            
            var total = (t1*t2)

            var s = `${t1} x ${t2} = ${total}`

            loc.innerHTML += s +'\n';
                

        }
    }
}