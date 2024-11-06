type HeaderProps = {
  font: {
    className: string;
  };
};

export default function Header({ font }: HeaderProps) {
  return (
    <div className={`${font.className} bg-[#A29875] h-[70px] flex items-center`}>
      <h1 className="font-rye text-[40px] font-light text-white ml-[25px]">
        MANZZARI
      </h1>
    </div>
  );
}
