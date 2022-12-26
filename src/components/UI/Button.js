export const ButtonSmall = ({ link, text }) => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={link}
      className="relative px-12 py-4 text-white font-bold uppercase bg-gradient-to-r from-orange-400 to-orange-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-orange-500 after:to-orange-700 after:rounded-full after:-z-10 after:duration-500 hover:from-orange-500 hover:to-orange-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
    >
      {text}
    </a>
  );
};

const Button = ({ link, text }) => {
  return (
    <a
      href={link}
      className="relative inline-block px-12 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-xl text-white font-bold uppercase rounded-full shadow-lg outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-orange-500 after:to-orange-700 after:rounded-full after:-z-10 after:duration-500 hover:from-orange-500 hover:to-orange-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate lg:px-16 lg:py-4"
    >
      {text}
    </a>
  );
};

export default Button;
