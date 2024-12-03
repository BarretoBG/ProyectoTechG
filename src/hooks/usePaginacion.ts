import { useState } from 'react';

const usePaginacion = (itemsPagina: number, items: any[]) => {
  const [paginas, setpaginas] = useState(1);

  // Calcular el índice de los productos que se mostrarán en la página actual
  const indexOfLastItem = paginas * itemsPagina;
  const indexOfFirstItem = indexOfLastItem - itemsPagina;
  const cantItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Funciones para cambiar de página
  const nextPage = () => {
    if (paginas < totalPaginas) {
      setpaginas(paginas + 1);
    }
  };

  const prevPage = () => {
    if (paginas > 1) {
      setpaginas(paginas - 1);
    }
  };

  const totalPaginas = Math.ceil(items.length / itemsPagina);

  return { cantItems, nextPage, prevPage, paginas, setpaginas, totalPaginas };
};

export default usePaginacion;
