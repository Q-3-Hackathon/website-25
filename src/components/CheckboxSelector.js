function CheckboxSelector({ label, options, onChange, ref }) {
    const handleCheckboxChange = (option) => {
        ref.current.value = Array.isArray(ref.current.value) ? ref.current.value : [];

        if (ref.current.value.includes(option))
            ref.current.value = ref.current.value.filter((item) => item !== option);
        else
            ref.current.value.push(option);

        if (onChange)
            onChange(ref.current);
    };

    return (
        <div className="checkbox-selector">
            <div style={{ fontSize: 'medium' }}>{label}</div>
            {options.map((option) => (
                <label key={option.value} style={{ display: 'block', margin: '5px 0', fontSize: 'small' }}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(option.value)}
                        style={{ marginRight: '10px' }}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}

export default CheckboxSelector;
