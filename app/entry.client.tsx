import { RemixBrowser } from '@remix-run/react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './i18n/i18n.client';
import { startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';

async function hydrate() {
  await i18n.init();

  startTransition(() => {
    hydrateRoot(
      document.getElementById('root')!,
      <I18nextProvider i18n={i18n.instance}>
        <RemixBrowser />
      </I18nextProvider>,
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
