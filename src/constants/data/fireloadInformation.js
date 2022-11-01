const weightedFireloadData = {
  shortDefinition:
    "Se refiere a la cantidad de calorías por kilogramo de combustible",
  description:
    "Tomando como referencia a la masa de madera por unidad de superficie, expresada en kg/m2, capaz de desarrollar una cantidad de calor equivalente a la de los materiales contenido en el sector de incendio",
  patron:
    "Como patrón de referencia se considera madera con poder calorífico inferior de 18,4 MJ/kg o 4.400 cal/kg",
  definitionNB58005:
    "Según la NB 58005, cálculo de carga de fuego se realiza mediante la evaluación de la carga de fuego ponderada Qp de una industria o almacenamiento",
  formule: [
    {
      symbol: "Qp",
      description:
        "Carga de fuego ponderada de un sector o área de incendio en Mcal/m2",
    },
    {
      symbol: "Pi",
      description:
        "Peso en kg de cada una de las diferentes materias combustibles (i)",
    },
    {
      symbol: "Hi",
      description:
        "Poder calorífico de cada una de las diferentes materias en Mcal/kg",
    },
    {
      symbol: "Ci",
      description:
        "Coeficiente adimensional que refleja el grado de peligrosidad (por la combustibilidad) de cada uno de los combustibles",
    },
    {
      symbol: "A",
      description: "Superficie construida del local, considerada en m2",
    },
    {
      symbol: "Ra",
      description:
        "Coeficiente adimensional que pondera el riego de activación inherente a la actividad industrial",
    },
    {
      symbol: "n",
      description:
        "El número de materiales que son capaces de liberar energía cuando se oxidad de forma violenta con desprendimiento de calor",
    },
  ],
};

const metodlogy = {
  steps: [
    {
      step: 1,
      description:
        "Sectorización es el proceso para la identificación de áreas con probabilidad de causar incendios dentro de las empresas, denominados sectores de incendio",
    },
    {
      step: 2,
      description:
        "Listado e identificación de combustibles es el proceso de listar cada uno de los materiales combustibles por en cada sector de incendio con su correspondiente peso",
      helper:
        "Los materiales combustibles son aquellos capaces de liberar energía cuando se oxidan de forma violenta con desprendimiento de calor",
    },
    {
      step: 3,
      description:
        "Determinar el poder calorífico de los diferentes materiales combustibles",
    },
    {
      step: 4,
      description:
        "Determinación de coeficientes de Riesgo de Activación (Ra) y Grado de Peligrosidad (Ci)",
    },
    {
      step: 5,
      description: "Calcular la carga de fuego ponderada por cada sector",
    },
  ],
};

export { weightedFireloadData, metodlogy };
