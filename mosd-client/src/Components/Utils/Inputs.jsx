import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

export const Message = ({ label, placeholder }) => {
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <textarea
                className="w-full h-40 mt-2 p-6 bg-main border border-border rounded"
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};

Message.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export const Select = ({ label, options, onChange }) => {
    return (
        <>
            <label className="text-border font-semibold">{label}</label>
            <select
                className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded"
                onChange={onChange}
            >
                {options.map((o, i) => (
                    <option key={i} value={o.value}>
                        {o.title}
                    </option>
                ))}
            </select>
        </>
    );
};

Select.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export const Input = ({ label, placeholder, type, bg }) => {
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <input
                required
                type={type}
                placeholder={placeholder}
                className={`w-full text-sm mt-2 p-5 border border-border rounded text-white ${bg ? "bg-main" : "bg-dry"
                    }`}
            />
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bg: PropTypes.bool,
};

export const Uploader = () => {
    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        maxSize: 100000,
        onDrop: (acceptedFiles) => {
            alert(acceptedFiles[0].name);
        },
    });

    return (
        <div className="w-full text-center">
            <div
                {...getRootProps()}
                className="px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
            >
                <input {...getInputProps()} />
                <span className="mx-auto flex-colo text-subMain text-3xl">
                    <FiUploadCloud />
                </span>
                <p className="text-sm mt-2">Drag your image here</p>
                <em className="text-xs text-border">
                    (only .jpg and .png files will be accepted)
                </em>
            </div>
        </div>
    );
};

