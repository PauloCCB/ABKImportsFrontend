export interface Solicitud {
  id: string;
  cliente: string;
  fecha: string;
}


export interface ColumnasDetallesDeCotizacionAdmin {
  id: string;
  name: string;
  quantity: number;
  size: string;
  color: string;
  url: string;
  comment: string;
  weight: string;
  volume: string;
  number_of_boxes: number;
  attachments: string[];
  responses: any[];
  status: string;
}


export interface ProductoItem {
  id: string;
  nombre: string;
  comentarioCliente: string;
  cliente: string;
  cantidad: number;
  especificaciones: string;
  estadoRespuesta: "No respondido" | "Respondido" | "Observado";
  precioUnitario: number;
  recomendaciones: string;
  comentariosAdicionales: string;
  archivos: File[];
  fecha: string;
  url: string;
}

// Estado para respuestas de cotización
export interface QuotationResponse {
  id: string;
  pUnitario: string;
  incoterms: string;
  precioTotal: string;
  precioExpress: string;
  servicioLogistico: string;
  tarifaServicio: string;
  impuestos: string;
  recomendaciones: string;
  comentariosAdicionales: string;
  archivos: File[];
}



export interface AdminQuotationResponse {
  id: string;
  logistics_service: string;
  unit_price: number;
  incoterms: string;
  total_price: number;
  express_price: number;
  service_fee: number;
  taxes: number;
  recommendations: string;
  additional_comments: string;
  weight: number | null;
  volume: number | null;
  number_of_boxes: number | null;
  international_freight: number| null;
  customs_clearance: number | null;
  delivery: number | null;
  other_expenses: number | null;
  files: File[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  type: "admin" | "user"; // Asumí que puede ser solo admin o user, puedes añadir otros tipos si es necesario
}

export interface Product {
  id: string;
  name: string;
  quantity: number;
  size: string;
  color: string;
  url: string;
  comment: string;
  service_type: string;
  weight: string;
  volume: string;
  number_of_boxes: number;
  attachments: string[]; // Array de URLs
}

export interface StatusHistory {
  id: string;
  status: string;
  observations: string[]; // Asumí que es un array de observaciones
  timestamp: string; // Fecha ISO
}

export interface QuotationById {
  id: string;
  user: User;
  products: Product[];
  status: string;
  statusHistory: StatusHistory[];
  createdAt: string; // Fecha ISO
  updatedAt: string; // Fecha ISO
}

export interface DetallesTabProps {
  selectedQuotationId: string;
}

export interface ProductResponse {
  id: string;
  supplier: string;
  unitPrice: string;
  totalPrice: string;
  expressPrice: string;
  servicePrice: string;
  taxes: string;
  incoterms: string;
  logisticsService: string;
  deliveryTime: string;
  recommendations: string;
  notes: string;
}