import { useState, useEffect } from "react";
// import nombreDistrito from "../assets/distrito.json";

// export const useDistritos = (): string[] => {
//   const [distritos, setDistritos] = useState<string[]>([]);

//   useEffect(() => {
//     fetch("../assets/distritos.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const nombresDistritos = data.map((distrito: { nombre: string }) => distrito.nombre);
//         setDistritos(nombresDistritos);
//       })
//       .catch((error) => console.error("Error al cargar los distritos:", error));
//   }, []);

//   return distritos;
// };

