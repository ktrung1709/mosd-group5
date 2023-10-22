import React from "react";
import PropTypes, { any } from "prop-types";

const Title = ({ title, Icon }) => {
  return (
    <div className="w-full flex sm:gap-8 gap-4 items-center">
      <Icon className="sm:w-6 sm:h-6 w-4 h-4 text-subMain" />{" "}
      {/* Sử dụng Icon như một component */}
      <h2 className="sm:text-xl font-bold text-lg">{title}</h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: any,
};

export default Title;
