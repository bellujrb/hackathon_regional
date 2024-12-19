"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.DivIcon({
  html: `
    <div style="
      background-color: #4caf50;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #ffffff;
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
    ">
      <span style="color: white; font-size: 12px; font-weight: bold;">★</span>
    </div>
  `,
  className: "",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

interface RecommendedLocation {
  id: number;
  name: string;
  position: LatLngTuple;
  description: string;
  data: {
    industries: number;
    meis: number;
    fiscalTransactions: number;
    economicImpact: string;
  };
}

const recommendedLocations: RecommendedLocation[] = [
  {
    id: 1,
    name: "Alegrete",
    position: [-29.7844, -55.7903],
    description:
      "Centro regional importante, com conexão logística para pequenos municípios do entorno.",
    data: {
      industries: 85,
      meis: 250,
      fiscalTransactions: 9575470,
      economicImpact: "Facilita a distribuição de produtos agrícolas e industriais para a região.",
    },
  },
  {
    id: 2,
    name: "Barra do Quaraí",
    position: [-30.2060, -57.5483],
    description:
      "Ponto estratégico para integração com o Uruguai, potencializando o comércio internacional.",
    data: {
      industries: 20,
      meis: 50,
      fiscalTransactions: 2000000,
      economicImpact: "Conecta mercados internacionais ao interior do Brasil.",
    },
  },
  {
    id: 3,
    name: "Manoel Viana",
    position: [-29.5853, -55.4841],
    description:
      "Município agrícola com alta dependência de cidades intermediadoras para escoamento de produção.",
    data: {
      industries: 15,
      meis: 30,
      fiscalTransactions: 3000000,
      economicImpact: "Facilita o escoamento de produtos agrícolas para mercados maiores.",
    },
  },
  {
    id: 4,
    name: "Uruguaiana",
    position: [-29.7614, -57.0853],
    description:
      "Maior porto seco da América Latina, essencial para exportações terrestres no sul do Brasil.",
    data: {
      industries: 120,
      meis: 300,
      fiscalTransactions: 15000000,
      economicImpact: "Alavanca exportações e movimentação intermunicipal.",
    },
  },
];

// Definindo conexões entre as cidades
const connections = [
  {
    from: recommendedLocations[0].position, // Alegrete
    to: recommendedLocations[1].position, // Barra do Quaraí
  },
  {
    from: recommendedLocations[1].position, // Barra do Quaraí
    to: recommendedLocations[3].position, // Uruguaiana
  },
  {
    from: recommendedLocations[0].position, // Alegrete
    to: recommendedLocations[2].position, // Manoel Viana
  },
  {
    from: recommendedLocations[2].position, // Manoel Viana
    to: recommendedLocations[3].position, // Uruguaiana
  },
];

export default function OverviewDashboard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-lg font-bold">Mapa de Locais Recomendados</h3>
      <p>
        Este mapa destaca as cidades intermediadoras, pequenos municípios, e o impacto econômico e logístico da região sul do Brasil.
      </p>
      <div className="w-full h-[500px] rounded-lg overflow-hidden mt-4">
        <MapContainer
          center={[-29.7614, -57.0853]} // Centralizado na região sul
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {recommendedLocations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              icon={customIcon}
            >
              <Popup>
                <strong>{location.name}</strong>
                <p>{location.description}</p>
                <p>
                  <strong>Indústrias:</strong> {location.data.industries}
                  <br />
                  <strong>MEIs:</strong> {location.data.meis}
                  <br />
                  <strong>Transações Fiscais:</strong> R$ {location.data.fiscalTransactions.toLocaleString()}
                  <br />
                  <strong>Impacto Econômico:</strong> {location.data.economicImpact}
                </p>
              </Popup>
            </Marker>
          ))}
          {connections.map((connection, index) => (
            <Polyline
              key={index}
              positions={[connection.from, connection.to]}
              color="#4caf50"
              weight={3}
              dashArray="5,10"
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
