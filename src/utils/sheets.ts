interface NewsletterData {
  email: string;
  origen: 'hero' | 'super-cta';
}

interface FormularioData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
  other?: string;
}

const WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

export const sendNewsletterLead = async (data: NewsletterData): Promise<boolean> => {
  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors', // Esto evita el preflight CORS
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'newsletter',
        email: data.email,
        origen: data.origen
      }),
    });

    return true;
  } catch (error) {
    console.error('Error enviando lead de newsletter:', error);
    return false;
  }
};

export const sendFormularioLead = async (data: FormularioData): Promise<boolean> => {
  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'formulario',
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        company: data.company || '',
        instagram: data.instagram || '',
        facebook: data.facebook || '',
        website: data.website || '',
        other: data.other || ''
      }),
    });

    return true;
  } catch (error) {
    console.error('Error enviando formulario completo:', error);
    return false;
  }
};