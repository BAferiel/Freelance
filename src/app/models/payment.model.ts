export interface PaymentResponse {
  success: boolean;
  clientSecret?: string;
  error?: string;
}
