import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types"
import { categoryPropTypes } from "../../PropTypes/categoryPropTypes";
import { userPropTypes } from "../../PropTypes/UserPropTypes";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

// rows
const Rows = (data, i, users, OnEditFunction) => {
  return (
    <tr key={i}>
      {(
        // Categories
        <>
          <td className={`${Text} font-bold`}>{data._id}</td>
          <td className={`${Text}`}>
            {data.createAt ? data.createAt : "1, Jan 2023"}
          </td>
          <td className={`${Text}`}>{data.title}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button
              onClick={() => OnEditFunction(data)}
              className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2"
            >
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
              <MdDelete />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

// table
function CategoryList({ data, users, OnEditFunction }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {(
              <>
                <th scope="col" className={`${Head}`}>
                  ID
                </th>
                <th scope="col" className={`${Head}`}>
                  Created Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Category Name
                </th>
              </>
            )}

            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((data, i) => Rows(data, i, users, OnEditFunction))}
        </tbody>
      </table>
    </div>
  );
}

CategoryList.propTypes = {
  data: categoryPropTypes.isRequired,
  users: userPropTypes.isRequired,
  OnEditFunction: PropTypes.func.isRequired
}

export default CategoryList;
