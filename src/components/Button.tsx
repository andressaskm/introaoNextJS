
//criamos um tipo para permitir que o componente receba parâmetros, neste caso,
// ele poderá receber uma label
type ButtonProps = {
    label: string
}


export default function Button ({label} : ButtonProps) {
    return (
        <button className="px-4 py-2 bg-blue-400 text-white">
            {label}</button>
    )  
}