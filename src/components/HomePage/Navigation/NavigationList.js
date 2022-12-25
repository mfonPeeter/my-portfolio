const NavigationList = ({ link, text }) => {
  return (
    <a
      href={link}
      className="transition-colors hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-orange-400 to-orange-700 outline-orange-700"
    >
      <li>{text}</li>
    </a>
  );
};

export default NavigationList;
