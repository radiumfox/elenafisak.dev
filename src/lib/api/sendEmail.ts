const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

export async function sendEmail(data: FormData) {
  if(!WEB3FORMS_ACCESS_KEY) {
    throw new Error('Sending email is not supported!');
  }

  const formData = data;
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);

  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    body: formData
  });

  return await response.json();
}
