const Skills = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-full px-3 py-2 bg-zinc-200 text-gray-800 font-semibold rounded-full transform transition-transform hover:scale-105 sm:py-2.5 md:py-3">
      <span>{text}</span>
    </div>
  );
};

export default Skills;
