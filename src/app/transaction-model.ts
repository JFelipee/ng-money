export interface Transaction {
  id?: number;
  description: string;
  amount: number;
  type: 'E' | 'S';
  date?: string; // ou qualquer outro campo relevante
}
