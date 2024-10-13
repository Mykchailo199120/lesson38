import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            style={styles.input}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

const styles = {
    input: {
        padding: '10px',
        width: '100%',
        maxWidth: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '10px',
    },
};

export default Input;
