const fireExtinguishersInformation = {
  fireExtinguisherTypes: [
    {
      id: "FLNB-1",
      name: "Extintores de agua",
      description:
        "Lon agentes extintores de agua son adecuados para extinguir riesgos de fuego Clase A, donde los espacios de aplicación no deben existir uso de electricidad. Actúan para disminuir la temperatura por debajo de la ignición, atacando principalmente mediante el enfriamiento",
      note: "Para combustibles solidos",
      fires: [
        {
          id: "A",
          name: "Clase A",
        },
      ],
    },
    {
      id: "FLNB-2",
      name: "Extintores de Espuma (Agua con AFFF o FFFP)",
      description:
        "Lon agentes extintores de espuma con AFFF o FFFP son adecuados para extinguir riesgos de fuego Clase A y B. Atacan mediante la sofocación, aislado el combustible del oxígeno y enfriamiento",
      note: "Espuma formadora de la película acuosa (AFFF), Espuma de fluoroproteína formadora de película (FFFP), para combustibles sólidos y líquidos",
      fires: [
        {
          id: "A",
          name: "Clase A",
        },
        {
          id: "B",
          name: "Clase B",
        },
      ],
    },
    {
      id: "FLNB-3",
      name: "Extintores de dióxido de carbono (CO2)",
      description:
        "Lon agentes extintores de dióxido de carbono son adecuados solamente para extinguir riesgos de fuego Clase B y C. Atacan mediante un gas inerte incoloro, inodoro, no conductor de electricidad reduciendo la concentración del oxígeno y la fase de vapor del combustible",
      note: "Se usan en sectores de incendio con la existencia de aparatos eléctricos de gran valor, para combustibles líquidos y equipos eléctricos energizados",
      fires: [
        {
          id: "B",
          name: "Clase B",
        },
        {
          id: "C",
          name: "Clase C",
        },
      ],
    },
    {
      id: "FLNB-4",
      name: "Extintores de Polvo Químico Seco",
      description:
        "Los agentes extintores de polvo químico seco son adecuados para extinguir riesgos de fuego Clase A, B y C. Atacan mediante la interrupción de la reacción química del fuego generando una sustancia pegajosa que actúa de barrera entre las superficies de los materiales y el oxigeno",
      note: "El más frecuente en la dotación, además existen agentes extintores de polvo químico seco para fuegos B y C. Para combustibles sólidos, líquidos y equipos eléctricos energizados",
      fires: [
        {
          id: "A",
          name: "Clase A",
        },
        {
          id: "B",
          name: "Clase B",
        },
        {
          id: "C",
          name: "Clase C",
        },
      ],
    },
    {
      id: "FLNB-5",
      name: "Extintores Clase D",
      description:
        "Son agentes extintores de polvo seco, elaborado por materiales solidos en polvo o granulado, para extinguir solamente riesgos de fuego Clase D. Atacan mediante la formación de una cubierta por sofocación y absorción o transferencia del calor",
      note: "Los demás agentes no son aptos para este tipo de fuego. Solo para metales combustibles",
      fires: [
        {
          id: "D",
          name: "Clase D",
        },
      ],
    },
    {
      id: "FLNB-6",
      name: "Extintores Clase K",
      description:
        "Son agentes extintores para cocinas a base de acetato de potasio y agua para extinguir solamente riesgos de fuego Clase K. Atacan mediante una solución que enfría el combustible y la separa del aire",
      note: "Para combustibles de aceites vegetales o grasas, utilizados en sectores para la cocina",
      fires: [
        {
          id: "K",
          name: "Clase K",
        },
      ],
    },
  ],
};

export default fireExtinguishersInformation;
