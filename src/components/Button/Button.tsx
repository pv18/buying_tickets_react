import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import './button.scss';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<Props> = props => {
    const {...allProps} = props
    return (
        <button className={'button'} {...allProps}/>
    );
};

