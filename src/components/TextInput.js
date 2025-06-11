function TextInput({ labelType, label, ref, required, showLabel = true, placeholder, type, pattern }) {
    const inputStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
    };

    const labelStyles = {
        prompt: {
            marginBottom: '8px',
            display: 'block',
            fontWeight: 'normal',
            fontSize: 'medium',
            marginTop: '2px',
        },
        title: {
            marginBottom: '10px',
            fontWeight: 'normal',
            fontSize: 'small',
        },
    };

    return (
        <div>
            {showLabel && (
                <label style={labelStyles[labelType] || labelStyles.title}>
                    {label}
                </label>
            )}
            <input type={type ?? 'text'} ref={ref} placeholder={showLabel ? placeholder : label} style={inputStyle} name={label} required={required ?? true} pattern={pattern} />
        </div>
    );
}

export default TextInput;
