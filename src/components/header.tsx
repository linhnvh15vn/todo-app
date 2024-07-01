export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center pt-12 pb-10 lg:pt-20">
        <h1 className="text-xl font-bold tracking-[12px] text-white text-[40px]">
          TODO
        </h1>
        <img src="/images/icon-moon.svg" alt="theme" />
      </div>
    </header>
  );
}
