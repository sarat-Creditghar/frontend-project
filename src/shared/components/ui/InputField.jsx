import { Controller, useFormContext } from "react-hook-form";

const InputField = ({ config }) => {
  const { control, formState: { errors } } = useFormContext();
  const { name, type, label, placeholder, validation, options, rows } = config;

  const error = errors[name];

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field }) => (
          <div>
            {type === "select" ? (
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm font-light font-mono text-base-content">
                  {label} {validation?.required && <span className="text-red-500">*</span>}
                </legend>
                <select 
                  {...field} 
                  defaultValue={placeholder} 
                  className={`select w-full ${error ? 'border-red-500' : ''}`}
                >
                  <option disabled={true} value="">
                    {placeholder}
                  </option>
                  {options?.map((opt, index) => (
                    <option key={index} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </fieldset>
            ) : type === "textarea" ? (
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm text-base-content">
                  {label} {validation?.required && <span className="text-red-500">*</span>}
                </legend>
                <textarea
                  {...field}
                  className={`textarea w-full ${error ? 'border-red-500' : ''}`}
                  placeholder={placeholder}
                  rows={rows || 3}
                />
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </fieldset>
            ) : (
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm text-base-content">
                  {label} {validation?.required && <span className="text-red-500">*</span>}
                </legend>
                <input
                  {...field}
                  type={type}
                  className={`input w-full ${error ? 'border-red-500' : ''}`}
                  placeholder={placeholder}
                />
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </fieldset>
            )}
          </div>
        )}
      />
    </>
  );
};

export default InputField;