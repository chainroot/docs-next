
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './unjail-validator.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'How much fund do I need to create a validator?',
    href: '/docs/become-validator/essentials/how-much-fund-to-create-validator',
  };
  const nextNavigationItem = {
    label: 'How to Upgrade My Node',
    href: '/docs/become-validator/upgrades/main-info',
  };

  return (
    <div className="flex flex-col w-full">
      <Component />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default Page;
