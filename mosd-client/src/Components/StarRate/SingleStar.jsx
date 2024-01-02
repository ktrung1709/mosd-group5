import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const SingleStar = ({ value }) => {
  return (
    <div className="flex gap-2 ">
      <span>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    </div>
  );
};

SingleStar.propTypes = {
  value: PropTypes.number.isRequired,
};

export default SingleStar;
