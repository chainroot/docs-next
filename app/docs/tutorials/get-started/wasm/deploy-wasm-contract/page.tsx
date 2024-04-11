import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './deploy-wasm-contract.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Using coreum-js',
    href: '/docs/tutorials/get-started/typescript/coreum-js',
  };
  const nextNavigationItem = {
    label: 'Smart FT with WASM',
    href: '/docs/tutorials/get-started/wasm/smart-ft-with-wasm',
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
