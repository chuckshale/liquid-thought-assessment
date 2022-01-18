/**
 @param {string} title - Optional title used to identify dropdown
 @param {function} onChange - called when input value changes
 @param {string} name - used in the event of being dispatched in reducer
 @param {string} value - used to assigned value from user event
 @param {placeholder} value - placeholder text
 @param {type} text - input attribute to define type of input field
 */

type InputChangeEvent = {
    name: string;
    value: string;
};

interface Props {
    type: string;
    onChange({ name, value }: InputChangeEvent): void;
    placeholder: string;
    title: string;
    name: string;
    value: string;
}

const InputField = ({ type, onChange, placeholder, name, title }: Props) => {
    return (
        <>
            <h4>{title}</h4>
            <input
                className="default-input text-field"
                type={type}
                onChange={(e) => onChange({ name, value: e.target.value })}
                placeholder={placeholder}
            />
        </>
    );
};

export default InputField;
