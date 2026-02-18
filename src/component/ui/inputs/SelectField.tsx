import Select, { SingleValue, MultiValue, components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import ErrorsMessage from "../common/ErrorMessage";

interface Option {
  value: string | number;
  label: string;
}

interface SelectFieldProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  control: Control<T>;
  options: Option[];
  isMulti?: boolean;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
  menuPlacement?: "auto" | "top" | "bottom";
  height?: string;
  addNew?: () => void;
  withCheckbox?: boolean;
  hideSelectedOptions?: boolean;
  closeMenuOnSelect?: boolean;
  disabled?: boolean;
  customError?: string;
}

const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    <FaChevronDown style={{ color: "#98A2B3" }} className="text-base" />
  </components.DropdownIndicator>
);

const OptionWithCheckbox = (props: any) => {
  const { isSelected, label, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer"
    >
      <input
        type="checkbox"
        checked={isSelected}
        readOnly
        className="form-checkbox h-4 w-4 rounded border-[#D4CFCC] text-[#705295] focus:ring-[#705295]"
      />
      <label className="text-[14px] text-[#000000]">{label}</label>
    </div>
  );
};

const CustomValueContainer = (props: any) => {
  const { children, selectProps } = props;
  return (
    <components.ValueContainer {...props}>
      {!props.hasValue && (
        <div className="absolute left-4 text-[#999999]/60 text-[14px] pointer-events-none">
          {selectProps.placeholder}
        </div>
      )}
      {children}
    </components.ValueContainer>
  );
};

function SelectField<T extends FieldValues>({
  label,
  name,
  control,
  options,
  isMulti = false,
  placeholder = "Select...",
  error,
  required = false,
  className = "",
  menuPlacement = "auto",
  height = "48px", // Match InputField default height
  addNew,
  withCheckbox = false,
  hideSelectedOptions = false,
  closeMenuOnSelect = true,
  disabled,
  customError,
}: SelectFieldProps<T>) {
  return (
    <div className={`flex flex-col gap-2 w-full text-left ${className}`}>
      {label && (
        <label className="text-[14px] font-medium text-[#000000]">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={required ? { required: `${label} is required` } : {}}
        render={({ field, fieldState: { error: fieldError } }) => (
          <div className="relative w-full">
            <Select
              {...field}
              styles={customStyles(height, !!(fieldError || customError))}
              options={options}
              isMulti={isMulti}
              placeholder={placeholder}
              menuPlacement={menuPlacement}
              hideSelectedOptions={hideSelectedOptions}
              closeMenuOnSelect={closeMenuOnSelect}
              isDisabled={disabled}
              onChange={(selectedOption, actionMeta) => {
                if (isMulti) {
                  const selected = selectedOption as MultiValue<Option>;
                  const selectedValues = selected.map((option) => option.value);
                  field.onChange(selectedValues);
                } else {
                  const singleValue = selectedOption as SingleValue<Option>;
                  if (singleValue?.value === "addNew") {
                    addNew?.();
                  } else {
                    field.onChange(singleValue?.value || null);
                  }
                }
              }}
              value={
                isMulti
                  ? options.filter((option) =>
                      Array.isArray(field.value)
                        ? field.value.includes(option.value)
                        : false,
                    )
                  : options.find((option) => option.value === field.value) ||
                    null
              }
              classNamePrefix="react_select"
              components={{
                DropdownIndicator,
                ...(withCheckbox ? { Option: OptionWithCheckbox } : {}),
                ...(isMulti && withCheckbox
                  ? { ValueContainer: CustomValueContainer }
                  : {}),
              }}
            />
            {(fieldError || customError) && (
              <div className="mt-1">
                <ErrorsMessage
                  title={customError || fieldError?.message}
                  className="text-left"
                />
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default SelectField;

const customStyles = (height: string, hasError: boolean) => ({
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: "white",
    border: `1px solid ${hasError ? "#ef4444" : state.isFocused ? "#D4CFCC" : "#D4CFCC"}`,
    boxShadow: "none",
    borderRadius: "8px", // Match InputField
    padding: "0 8px",
    minHeight: height,
    height: height,
    cursor: state.isDisabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: hasError ? "#ef4444" : "#D4CFCC",
    },
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#99999966", // Match placeholder opacity from InputField
    fontSize: "14px",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "#999999", // Match InputField text color
    fontSize: "14px",
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: "0 8px",
  }),
  input: (base: any) => ({
    ...base,
    color: "#999999",
    fontSize: "14px",
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: "#999999",
    "&:hover": {
      color: "#705295",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "8px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
    border: "1px solid #D4CFCC",
    overflow: "hidden",
    zIndex: 50,
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#F8F7F6"
      : state.isFocused
        ? "#F8F7F6"
        : "white",
    color: "#000000",
    padding: "10px 16px",
    cursor: "pointer",
    fontSize: "14px",
    "&:active": {
      backgroundColor: "#F8F7F6",
    },
  }),
});
