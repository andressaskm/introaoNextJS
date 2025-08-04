'use client';

import { useState, useEffect } from "react";

type Picture = {
  imageUrl: string;
};

export default function DogPage() {
  const [picture, setPicture] = useState<Picture | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPicture = async () => {
    setLoading(true);
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setPicture({ imageUrl: data.message });
    setLoading(false);
  };

  useEffect(() => {
    fetchPicture();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Random Dog 🐶</h1>

      {loading ? (
        <p>Carregando imagem...</p>
      ) : picture ? (
        <img
          src={picture.imageUrl}
          alt="Random Dog"
          className="rounded-lg shadow-lg max-w-sm mb-4"
        />
      ) : (
        <p>Erro ao carregar imagem.</p>
      )}

      <button
        onClick={fetchPicture}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
        disabled={loading}
      >
        {loading ? "Carregando..." : "Nova imagem"}
      </button>
    </div>
  );
}
