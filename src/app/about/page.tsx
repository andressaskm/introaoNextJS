import NavBar from "@/components/NavBar"
import  Button from "@/components/Button"

export default function About(){

    return(
        <div>
            {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time"/> */}
            <h1>Sobre nós</h1>
            <p>Informações sobre a empresa ...</p>
            <Button label="enviar"/>
        </div>
    )
}