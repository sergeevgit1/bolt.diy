import type { ActionFunctionArgs } from '@remix-run/cloudflare';
import { i18n } from '~/i18n/i18n.server';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const lng = formData.get('lng');

  if (!lng || typeof lng !== 'string') {
    return new Response('Invalid language', { status: 400 });
  }

  return i18n.setLocale(request, lng);
}
