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
    name: "Porto Seco de Uruguaiana",
    position: [-29.7614, -57.0853],
    description:
      "Maior porto seco da América Latina, responsável por 60% das exportações terrestres no sul do Brasil.",
    data: {
      industries: 120,
      meis: 300,
      fiscalTransactions: 50000,
      economicImpact: "Alavanca exportações e movimentação intermunicipal.",
    },
  },
  {
    id: 2,
    name: "Região Metropolitana de Porto Alegre",
    position: [-30.0346, -51.2177],
    description:
      "Principal polo industrial da região sul, movimentando mais de R$ 20 bilhões em transações intermunicipais anualmente.",
    data: {
      industries: 450,
      meis: 1200,
      fiscalTransactions: 100000,
      economicImpact: "Conecta cidades pequenas ao mercado consumidor urbano.",
    },
  },
  {
    id: 3,
    name: "Caxias do Sul",
    position: [-29.1677, -51.1794],
    description:
      "Centro industrial estratégico, ideal para pequenas cidades exportarem produtos manufaturados.",
    data: {
      industries: 250,
      meis: 800,
      fiscalTransactions: 75000,
      economicImpact: "Favorece o escoamento de produtos locais.",
    },
  },
  {
    id: 4,
    name: "Pelotas",
    position: [-31.7654, -52.3375],
    description:
      "Polo de exportação agrícola e industrial, com alta conectividade logística ao Porto Seco de Uruguaiana.",
    data: {
      industries: 200,
      meis: 600,
      fiscalTransactions: 60000,
      economicImpact: "Aumenta a competitividade de pequenos municípios agrícolas.",
    },
  },
  {
    id: 5,
    name: "Santana do Livramento",
    position: [-30.8901, -55.5328],
    description:
      "Fronteira estratégica para integração com o Uruguai, movimentando R$ 10 bilhões em comércio exterior.",
    data: {
      industries: 80,
      meis: 200,
      fiscalTransactions: 30000,
      economicImpact: "Conecta mercados internacionais ao interior do Brasil.",
    },
  },
];

// Definindo conexões entre as cidades
const connections = [
  {
    from: recommendedLocations[0].position, // Uruguaiana
    to: recommendedLocations[1].position, // Porto Alegre
  },
  {
    from: recommendedLocations[1].position, // Porto Alegre
    to: recommendedLocations[2].position, // Caxias do Sul
  },
  {
    from: recommendedLocations[0].position, // Uruguaiana
    to: recommendedLocations[4].position, // Santana do Livramento
  },
  {
    from: recommendedLocations[3].position, // Pelotas
    to: recommendedLocations[0].position, // Uruguaiana
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
        Este mapa destaca as cidades intermediadoras, pequenos municípios, e o impacto do Porto Seco de Uruguaiana.
      </p>
      <div className="w-full h-[500px] rounded-lg overflow-hidden mt-4">
        <MapContainer
          center={[-30.0346, -51.2177]} // Centralizado no Sul do Brasil
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
                  <strong>Transações Fiscais:</strong> {location.data.fiscalTransactions}
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
