'use client'
import Map from "@/components/Map"


export default function MapPagge(){
    return (
        <div className="h-screen flex flex-col items-center">
            <h1 className="text-3xl text-center font-bold mb-4">Mapa com Leaflet</h1>
            <p className="text-center">
                Clique nos marcadores para ver os detalhes dos locais.
            </p>
            <Map/>
        </div>
    )
}
