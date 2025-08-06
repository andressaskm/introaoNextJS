type CardProps = {
  title: string;
  description: string;
  imageURL: string;
  category: (
    | "Investigador"
    | "Misterioso"
    | "Sobrenatural"
    | "Vítima"
    | "Ambíguo"
    | "Complexo"
  )[];
};

export default function Card({
  title,
  description,
  imageURL,
  category,
}: CardProps) {
  return (
    <div className="bg-amber-800 p-4 rounded-xl hover:shadow-md transition duration-300">
      <h2 className="text-xl text-center font-semibold text-amber-50 mb-2">
        {title}
      </h2>
      <img className="mt-3 rounded-2xl" src={imageURL} alt="" />
      <p className="text-justify text-amber-100 mt-2">{description}</p>
      <p className="mt-4 text-amber-100">
        <strong>Categoria:</strong> {category.join(", ")}
      </p>
    </div>
  );
}
