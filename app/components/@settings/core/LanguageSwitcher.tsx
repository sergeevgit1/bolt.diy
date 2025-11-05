import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useTranslation } from 'react-i18next';
import { useFetcher } from '@remix-run/react';
import { classNames } from '~/utils/classNames';
import { supportedLanguages } from '~/i18n/i18n.config';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const fetcher = useFetcher();

  const handleLanguageChange = (lng: string) => {
    fetcher.submit(
      { lng },
      {
        method: 'post',
        action: '/api/set-locale',
      },
    );
  };

  return (
    <>
      {supportedLanguages.map((lng) => (
        <DropdownMenu.Item
          key={lng}
          className={classNames(
            'flex items-center gap-2 px-4 py-2.5',
            'text-sm text-gray-700 dark:text-gray-200',
            'hover:bg-purple-50 dark:hover:bg-purple-500/10',
            'hover:text-purple-500 dark:hover:text-purple-400',
            'cursor-pointer transition-all duration-200',
            'outline-none',
            'group',
            i18n.language === lng && 'bg-purple-50 dark:bg-purple-500/10 text-purple-500 dark:text-purple-400',
          )}
          onClick={() => handleLanguageChange(lng)}
        >
          {lng.toUpperCase()}
          {i18n.language === lng && <div className="i-ph:check-bold w-4 h-4 ml-auto" />}
        </DropdownMenu.Item>
      ))}
    </>
  );
};

export default LanguageSwitcher;
