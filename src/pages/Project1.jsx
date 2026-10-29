import CohortBars from "../charts/project1/BarChart";
import data from "../data/cohortStudents";

export default function Project1() {
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Who in the 🌎 is learning d3?</h1>
      <div>
        <CohortBars data={data} />
      </div>
      <div style={{ paddingTop: "20px", fontSize: ".5rem" }}>
        Task: Using d3 and AI, build a horizontal barplot that visualizes the
        number of students from each country who enrolled in the first cohort of
        this course.
        <p>
          AI Disclaimer: I used Claude to understand the React-side
          implementation of scale functions scaleLinear() and scaleBand(),
          render the flag icons, and the CSS animations.
        </p>
      </div>
    </div>
  );
}
