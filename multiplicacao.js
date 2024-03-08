
//Multiplicação de Matrizes
//Exercício 2
/*function exibe()
{


    var matriza = [ [1,2],
                    [3,4],
                    ]
            
    var matrizb = [ [2,6],
                    [-1,0],
                    ]

for(let lin=0 ; lin<2 ; lin++){
     for(let col=0; col<2 ; col++){
     
         let x = 0
        for( let aux=0 ; aux<2 ; aux++) {
        x += matriza[lin][aux] * matrizb[aux][col]
        
        }
        document.write (x + " ")
        
        }    
     document.write("<br />")
    }
}*/
//Exercício 3
function exibeMultiplicacao()
{


    var matriza = [ [5,1],
                    [-2,0],]
  
    for(let lin=0 ; lin<2 ; lin++){
        
    for(let col=0; col<2 ; col++){
                        
        let x = 0
        for( let aux=0 ; aux<2 ; aux++) {
        x += matriza[lin][aux] * matriza[aux][col]
                           
        }
        document.write (x + " ")
                           
        }    
    document.write("<br />")
    }
                    
}