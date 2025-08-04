type CardProps = {
    title: string,
    description: string,
    imageURL: string
}


export default function Card ({title, description, imageURL} : CardProps) {
    return (
        <div className="px-4 py-2 bg-amber-900 text-white text-center rounded-2xl mt-5">
            <h2 className="font-bold">{title}</h2>
            <img className="rounded-2xl"
            src={imageURL}
            alt=""/>
            <p>{description}</p>
        </div>
    )  
}