import * as React from 'react';
import {FC} from 'react';
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CustomizedInput = styled(InputBase)(({theme}) => ({
    '&. MuiInputBase-formControl ': {
        width: '208px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: '16px',
        letterSpacing: 0,
    },
    'label + &': {
        marginTop: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
        width: 'auto',
        height: 'auto',
        borderRadius: 10,
        position: 'relative',
        backgroundColor: '#FFF',
        color: '#B7BAC1',
        border: '1px solid #ced4da',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: '16px',
        padding: '12px 32px 12px 12px',
        '&:hover': {
            color: '#5C5C5C',
        },
        '&::placeholder': {
            color: '#B7BAC1',
        },
        '&:focus': {
            borderColor: '#5C87DB',
        },
    },
}));

type Props = {
    value?: string
    placeholder?: string
    label?: string
    onChange?: (value: string) => void
}

export const Input: FC<Props> = props => {
    const {
        value,
        placeholder = '',
        label = '',
        onChange,
        ...rest
    } = props;

    return (
        <FormControl variant="standard">
            <InputLabel shrink htmlFor="customized-input">
                {label}
            </InputLabel>
            <CustomizedInput
                id="customized-input"
                defaultValue={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                {...rest}
            />
        </FormControl>
    );
}

