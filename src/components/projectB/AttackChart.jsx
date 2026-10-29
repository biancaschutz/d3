const RelativeChart = ({
  maxValue = 140,
  value,
  size = 50,
  thickness = 5,
  color = "#fbd743",
  label = "add a label",
}) => {
  const percent = Math.min(value / maxValue, 1);
  const radius = (size - thickness) / 2; // keep the stroke inside the SVG
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textTransform: "uppercase",
      }}
    >
      <span style={{ fontSize: ".6rem", marginBottom: "5px" }}>{label}</span>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.15))",
          overflow: "visible",
        }}
      >
        {/* background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f0f0f0"
          strokeWidth={thickness}
        />
        {/* filled part */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={`${circumference * percent} ${circumference}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* label in the middle */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={size * 0.22}
        >
          {value}
        </text>
      </svg>
    </div>
  );
};

export default RelativeChart;
