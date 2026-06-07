function InputField({
  label,
  type = "text",
  placeholder = ""
}) {
  return (
    <div className="input-group">

      <label className="floating-label">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
      />

    </div>
  );
}

export default InputField;