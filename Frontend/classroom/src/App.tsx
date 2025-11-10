import "./global.css"

import { Button } from "./components/button"

export function App(){
  return(

   <div> 
      <h1>Boas vindas</h1>
     <Button
        name="Adicionar"
        // onClick={()=>alert("Teste")}
      />

     <Button
        name="Subtrair"
        // onClick={()=>alert("Teste")}
      />

    </div>
  )
}