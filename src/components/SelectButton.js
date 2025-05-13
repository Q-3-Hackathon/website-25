function SelectButton({ label, ref, options, required }) {
    const selectStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
        backgroundColor: '#fff',
    };

    return (
        <div>
            <label>
                <select ref={ref} style={selectStyle} name={label} required={required ?? true}>
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
