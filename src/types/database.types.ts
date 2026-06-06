// src/types/database.types.ts
// Hand-rolled to match src/services/supabase.ts Database generic.
// Regenerate via `supabase gen types typescript --project-id <id>` if schema changes.

export type Database = {
  public: {
    Tables: {
      med_transactions: {
        Row: {
          id: number;
          created_at: string;
          transaction_date: string; // YYYY-MM-DD
          bill_number: string | null;
          drug_type: string;
          drug_value: number;
          note: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string;
          transaction_date: string;
          bill_number?: string | null;
          drug_type: string;
          drug_value: number;
          note?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string;
          transaction_date?: string;
          bill_number?: string | null;
          drug_type?: string;
          drug_value?: number;
          note?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type MedTransaction = Database['public']['Tables']['med_transactions']['Row'];
