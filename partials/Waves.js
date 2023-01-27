const Waves = ({ currentColor, rotated }) => {
  return (
    <div
      className={`     
      waves
      color-${currentColor}
      ${rotated ? "rotated" : ""}
      `}
    >
      <svg
        className="vector"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 27.1774L60 21.3174C120 15.3474 240 3.79243 360 0.766138C480 -2.26015 600 3.79243 720 16.9155C840 30.2037 960 50.5624 1080 49.1868C1200 47.8112 1320 24.1511 1380 12.5137L1440 0.766138V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V27.1774Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Waves;
