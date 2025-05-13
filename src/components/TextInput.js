function TextInput({ label, ref, required, showLabel, placeholder, type }) {
    const inputStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
    };

    return (
        <div>
            {showLabel && <label style={{ marginBottom: '10px', display: 'block', fontWeight: 'normal' }}>{label}</label >}
            <input type={type ?? 'text'} ref={ref} placeholder={showLabel ? placeholder : label} style={inputStyle} name={label} required={required ?? true} />
        </div>
    );
}

export default TextInput;
