export const LaonDetailsOverlay = ({
  openLaonDetails,
  openLaonDetailsHandler,
}) => {
  return (
    <div
      onClick={openLaonDetailsHandler}
      className={`fixed top-0 left-0 z-10 w-full h-screen bg-orange-50/50 transition-all duration-500 ${
        openLaonDetails ? 'block' : 'hidden'
      }`}
    />
  );
};

export const BettershotzDetailsOverlay = ({
  openBettershotzDetails,
  openBettershotzDetailsHandler,
}) => {
  return (
    <div
      onClick={openBettershotzDetailsHandler}
      className={`fixed top-0 left-0 z-10 w-full h-screen bg-orange-50/50 transition-all duration-500 ${
        openBettershotzDetails ? 'block' : 'hidden'
      }`}
    />
  );
};
