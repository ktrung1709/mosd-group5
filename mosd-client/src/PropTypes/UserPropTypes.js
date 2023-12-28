import PropTypes from "prop-types";
import { Types } from "mongoose"; 
import { moviePropTypes } from "./MoviePropTypes";

export const watchListPropTypes = PropTypes.shape({
    list: PropTypes.arrayOf(moviePropTypes).isRequired,
});

export const userPropTypes = PropTypes.shape({
  _id: PropTypes.instanceOf(Types.ObjectId).isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  activated: PropTypes.bool.isRequired,
  watch_list: watchListPropTypes.isRequired,
  favorite: PropTypes.arrayOf(moviePropTypes).isRequired,
  revent_view: PropTypes.arrayOf(moviePropTypes).isRequired,
});
