// Tipo para el servicio/producto que vende el usuario
export type BusinessType = 'product' | 'service';

// Países disponibles (empezamos con algunos principales)
export type Country = 
  | 'AR' | 'US' | 'ES' | 'MX' | 'CO' | 'CL' | 'PE' | 'UY' 
  | 'BR' | 'CA' | 'GB' | 'FR' | 'DE' | 'IT' | 'AU' | 'NZ';

// Tipos de marketing que puede estar usando
export type MarketingType = 
  | 'facebook-ads'
  | 'google-ads' 
  | 'seo'
  | 'television'
  | 'radio'
  | 'newspaper'
  | 'other'
  | 'none';

// Rangos de presupuesto mensual
export type BudgetRange = 
  | 'under-5k'
  | '5k-10k'
  | '10k-20k'
  | '20k-35k'
  | '35k-50k'
  | '50k-plus';

// Estado completo del formulario
export interface OnboardingData {
  businessType: BusinessType | null;
  country: Country | null;
  currentMarketing: MarketingType[];
  monthlyBudget: BudgetRange | null;
  stepFive?: DigitalChannels;
  stepSix?: PersonalData;
}

// Información de cada paso
export interface StepInfo {
  id: number;
  title: string;
  subtitle?: string;
  isRequired: boolean;
  isCompleted: boolean;
}

// Props para los componentes de pasos
export interface StepProps {
  data: OnboardingData;
  onUpdate: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

// Props para el indicador de pasos
export interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: StepInfo[];
  onStepClick?: (stepIndex: number) => void;
}

// Opciones para los diferentes pasos
export interface SelectOption {
  id: string;
  label: string;
  value: BusinessType | Country | MarketingType | BudgetRange;
  icon?: string;
  description?: string;
}

// Configuración de países con sus nombres completos
export const COUNTRIES: Record<Country, string> = {
  'AR': 'Argentina',
  'US': 'Estados Unidos',
  'ES': 'España',
  'MX': 'México',
  'CO': 'Colombia',
  'CL': 'Chile',
  'PE': 'Perú',
  'UY': 'Uruguay',
  'BR': 'Brasil',
  'CA': 'Canadá',
  'GB': 'Reino Unido',
  'FR': 'Francia',
  'DE': 'Alemania',
  'IT': 'Italia',
  'AU': 'Australia',
  'NZ': 'Nueva Zelanda'
};

// Configuración de rangos de presupuesto
export const BUDGET_RANGES: Record<BudgetRange, string> = {
  'under-5k': 'Menos de $5k',
  '5k-10k': '$5k - $10k',
  '10k-20k': '$10k - $20k',
  '20k-35k': '$20k - $35k',
  '35k-50k': '$35k - $50k',
  '50k-plus': 'Más de $50k'
};

// Datos de canales digitales (Paso 5)
export interface DigitalChannels {
  instagram?: string;
  facebook?: string;
  website?: string;
  other?: string;
}

// Datos personales (Paso 6)
export interface PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  hasNoCompany?: boolean;
}