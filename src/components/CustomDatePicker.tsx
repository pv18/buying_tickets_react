import * as React from 'react';
import {Dayjs} from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import TextField, {TextFieldProps} from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {Input, InputAdornment} from '@mui/material';

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

export const CustomDatePicker = () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={({inputRef, inputProps, InputProps}) => (
                    <FormControl variant="standard">
                        <InputLabel shrink htmlFor="customized-input">
                            {'Туда'}
                        </InputLabel>
                        {/*<CustomizedInput*/}
                        {/*    id="customized-input"*/}
                        {/*    ref={inputRef}*/}
                        {/*    inputProps={inputProps}*/}
                        {/*    startAdornment={*/}
                        {/*        <InputAdornment position='start'>*/}
                        {/*            {InputProps?.endAdornment}*/}
                        {/*        </InputAdornment>*/}
                        {/*    }*/}
                        {/*/>*/}
                        <Input
                            id="customized-input"
                            ref={inputRef}
                            startAdornment={
                                <InputAdornment position="start">
                                    {InputProps?.startAdornment}
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                )}
            />
        </LocalizationProvider>
    );
}
