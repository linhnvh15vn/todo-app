import { useThemeStore } from '../store/use-theme-store';

export default function Header() {
  const { theme, toggle } = useThemeStore();

  return (
    <header>
      <div className="flex justify-between items-center pt-12 pb-10 lg:pt-20">
        <h1 className="text-xl font-bold tracking-[12px] text-white lg:text-[40px]">
          TODO
        </h1>
        <button type="button" onClick={toggle}>
          <img
            src={
              theme === 'light'
                ? '/images/icon-moon.svg'
                : '/images/icon-sun.svg'
            }
            alt="theme"
          />
        </button>
      </div>
    </header>
  );
}
