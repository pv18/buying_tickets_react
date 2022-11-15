import React, {ChangeEvent, KeyboardEvent, DetailedHTMLProps, FC, InputHTMLAttributes} from 'react';
import './textfield.scss';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type Props = DefaultInputPropsType & {
    label?: string
    onChangeText?: (value: string) => void
    onEnter?: () => void
}

export const TextField: FC<Props> = props => {
    const {
        label,
        type,
        onChange,
        onChangeText,
        onKeyDown,
        onEnter,
        ...restProps
    } = props;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyDown && onKeyDown(e);
        onEnter && e.key === 'Enter' && onEnter()
    }

    return (
        <div className={'textfield'}>
            <input
                type="text"
                onChange={onChangeCallback}
                onKeyDown={onKeyDownCallback}
                {...restProps}
            />
            {label && <label>{label}</label>}
        </div>
    );
};

