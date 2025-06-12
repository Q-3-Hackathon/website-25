function SelectButton({ label, ref, options, required, onChange, labelType = 'title', showLabel = true }) {
    const selectStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
        backgroundColor: '#fff',
    };

    const labelStyles = {
        prompt: {
            marginBottom: '10px',
            display: 'block',
            fontWeight: 'normal',
            fontSize: 'medium',
        },
        title: {
            marginBottom: '10px',
            fontWeight: 'normal',
            fontSize: 'small',
        },
    };

    return (
        <div>
            <label>
                <span style={labelStyles[labelType] || labelStyles.title}>
                    {showLabel ? label : ''}
                </span>
                <select ref={ref} style={selectStyle} name={label} required={required ?? true} onChange={onChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default SelectButton;
