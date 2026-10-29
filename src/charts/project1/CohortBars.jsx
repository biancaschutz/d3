import * as d3 from "d3";
import s from "../../styles/project1.module.css";

const SVG_WIDTH = 1000;
const SVG_HEIGHT = 800;

const MARGIN = { top: 10, right: 40, bottom: 10, left: 160 };

const innerWidth = SVG_WIDTH - MARGIN.left - MARGIN.right;
const innerHeight = SVG_HEIGHT - MARGIN.top - MARGIN.bottom;

function CohortBars({ data }) {
  const dataMax = d3.max(data, (c) => c.students);

  const xScale = d3.scaleLinear().domain([0, dataMax]).range([0, innerWidth]);
  const yScale = d3
    .scaleBand()
    .domain(data.map((c) => c.country))
    .range([0, innerHeight])
    .padding(0.2);

  return (
    <svg
      viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="xMinYMin meet"
      style={{
        width: "100%",
        maxWidth: SVG_WIDTH,
        height: "auto",
        maxHeight: "80svh",
        alignSelf: "start",
      }}
    >
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        {data.map((c, i) => {
          const delay = `${i * 20}ms`;

          const y = yScale(c.country);
          const barHeight = yScale.bandwidth();
          const barWidth = xScale(c.students);

          const iconRadius = barHeight / 2 - 2;
          const iconCenterX = barWidth - iconRadius * 1.25;
          const iconCenterY = y + barHeight / 2;
          // start the slide with the flag just inside the bar's left edge, not at zero
          const flagStartX = iconRadius * 1.25;
          const flagDx = Math.min(0, flagStartX - iconCenterX);
          return (
            <g key={c.country}>
              {/* used AI for addition of icons, animation*/}

              <rect
                style={{ animationDelay: delay }}
                x={0}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="rgba(83, 221, 108, 1)"
                className={s.bar}
              />
              <g
                className={s.flag}
                style={{ "--dx": `${flagDx}px`, animationDelay: delay }}
              >
                <defs>
                  <clipPath id={`flag-${c.code}`}>
                    <circle cx={iconCenterX} cy={iconCenterY} r={iconRadius} />
                  </clipPath>
                </defs>
                <image
                  href={`https://flagcdn.com/w40/${c.code}.png`}
                  x={iconCenterX - iconRadius}
                  y={iconCenterY - iconRadius}
                  width={iconRadius * 2}
                  height={iconRadius * 2}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#flag-${c.code})`}
                />
                <circle
                  cx={iconCenterX}
                  cy={iconCenterY}
                  r={iconRadius}
                  fill="none"
                  stroke="white"
                  strokeWidth={1}
                />
              </g>

              <text
                x={-6}
                y={y + barHeight / 2}
                fontSize={20}
                textAnchor="end"
                dominantBaseline="middle"
                fill="white"
              >
                {c.country}
              </text>

              <text
                x={barWidth + 4}
                y={y + barHeight / 2}
                dominantBaseline="middle"
                fontSize={20}
                fill="white"
                className={s.flag}
                style={{ "--dx": `${-barWidth}px`, animationDelay: delay }}
              >
                {c.students}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export default CohortBars;
