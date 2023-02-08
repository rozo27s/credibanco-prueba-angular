export interface Tipo {
  tipoId: number;
  tipo: string;
}

export interface Estado {
  estadoId: number;
  estado: string;
}

export interface Card {
  cardId: number;
  pan: string;
  titular: string;
  cedula: string;
  telefono: string;
  codigoValidacion: number;
  tipo: Tipo;
  estado: Estado;
}
