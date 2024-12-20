import PropTypes from "prop-types";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Prop Validation
Chart.propTypes = {
  title: PropTypes.string.isRequired, // Title should be a string and is required
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Data must have 'name' as a string
      [PropTypes.string]: PropTypes.number, // Other keys with numerical values
    })
  ).isRequired, // Data must be an array of objects and is required
  dataKey: PropTypes.string.isRequired, // Key to display in the chart, must be a string
  grid: PropTypes.bool, // Grid is optional but must be a boolean
};

// Default Props (optional but helpful)
Chart.defaultProps = {
  grid: false, // If grid is not provided, default to false
};
