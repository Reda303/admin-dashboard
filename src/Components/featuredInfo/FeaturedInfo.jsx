import "./featuredInfo.css";
import { ArrowDownward as ArrowDownwardIcon, ArrowUpward as ArrowUpwardIcon } from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,615</span>
          <span className="featuredMoneyRate">
            -11.2 <ArrowDownwardIcon className="negative" />
          </span>
        </div>
        <span className="featuredcomp">Compared to last month.</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,352</span>
          <span className="featuredMoneyRate">
            -1.7 <ArrowDownwardIcon className="negative" />
          </span>
        </div>
        <span className="featuredcomp">Compared to last month.</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,281</span>
          <span className="featuredMoneyRate">
            +2.1 <ArrowUpwardIcon className="positive" />
          </span>
        </div>
        <span className="featuredcomp">Compared to last month.</span>
      </div>
    </div>
  );
}
