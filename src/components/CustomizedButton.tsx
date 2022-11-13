import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {purple} from '@mui/material/colors';
import {FC} from 'react';

const BootstrapButton = styled(Button)({
    fontSize: 14,
    fontWeight: 400,
    boxShadow: 'none',
    textTransform: 'none',
    padding: '10px 32px',
    borderRadius: '10px',
    lineHeight: 1.4,
    backgroundColor: '#5C87DB',
    letterSpacing: 0,
    '&:hover': {
        backgroundColor: '#3E67B7',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#5C87DB',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    '&:disabled': {
        backgroundColor: '#B7BAC1',
    }
});

type Props = ButtonProps & {
    children: React.ReactNode
}

export const CustomizedButton: FC<Props> = props => {
    const {children, ...rest} = props;

    return (
        <BootstrapButton variant={'contained'} {...rest}>
            {children}
        </BootstrapButton>
    );
}

