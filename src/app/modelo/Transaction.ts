export interface Tipo {
  tipoId: number;
  tipo: string;
}

export interface Estado {
  estadoId: number;
  estado: string;
}

export interface Pan {
  cardId: number;
  pan: string;
  titular: string;
  cedula: string;
  telefono: string;
  codigoValidacion: number;
  tipo: Tipo;
  estado: Estado;
}

export interface Estado2 {
  estadoId: number;
  estado: string;
}

export interface Transaction {
  transactionId: number;
  pan: Pan;
  referencia: string;
  totalCompra: number;
  direccion: string;
  estado: Estado2;
  fechaCreacion: string;
}