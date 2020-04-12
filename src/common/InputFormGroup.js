import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';
import '../styles/input-form-group.scss';

const InputFormGroup = ({label, type, placeHolder, value, name, required, change, options = [], inputClassname='input', labelClassname='label'}) => {
    return (
        <FormGroup className="form-group">
            <Label
                className={labelClassname}
            >
                {label}
            </Label>
            <Input
            type={type}
            value={value}
            name={name}
            placeholder={placeHolder}
            required={required}
            onChange={change} 
            className={inputClassname}
            pattern={type==='email'? "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}": null}>
                {
                    options.length > 0
                    ?   options.map((option, i) => <option value={option.value} key={i} >{option.text}</option>)
                    :   null
                }
            </Input>
        </FormGroup>
    );
};
 
export default InputFormGroup;

// defaultValue={options.length > 0 ? options[0].value: null}