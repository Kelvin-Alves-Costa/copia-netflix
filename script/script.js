let question = [...document.querySelectorAll(".question")]
let display = [...document.querySelectorAll(".none")]
let symbol = [...document.querySelectorAll(".plus")]
question.map((e)=>{
    e.addEventListener("click", (event)=>{
        let pai = event.target
        filho = pai.children
        let ultimo_filho = pai.children.length-1
        let filhoDiv = filho[ultimo_filho]
        filhoDiv.classList.toggle("visibility")

        symbolAdd = undefined
        let contador = 0
        symbol.map((e)=>{
            while (true){
                if(contador > ultimo_filho){
                    contador = 0
                    break
                }else{
                    if(e === filho[contador]){
                        symbolAdd = e
                        break
                    }else{
                        contador = contador + 1
                    }
                }
            }
        })
        if (symbolAdd !== undefined){
            if(symbolAdd.textContent === 'close'){
                symbolAdd.textContent = 'add'
            }else{
                symbolAdd.textContent = 'close'
            }
        }
        
    })
})
