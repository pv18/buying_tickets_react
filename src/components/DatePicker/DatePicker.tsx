import React, {ChangeEvent, FC, useMemo, useState} from 'react';
import './datepicker.scss';
import Calendar from 'react-calendar';
import IconCalendarBlue from '../../svgs/calendar-blue.svg';
import IconCalendarGrey from '../../svgs/calendar-grey.svg';
import 'react-calendar/dist/Calendar.css';

type Props = {
    label?: string
}

export const DatePicker: FC<Props> = props => {
    const {label} = props
    const [value, onChange] = useState(new Date());
    const [isShowCalendar, setIsShowCalendar] = useState(false);

    const inputValue = useMemo(() => {
        const date = value.getDate()
        const monthValue = value.getMonth() + 1
        const month = monthValue > 9 ? monthValue : '0' + monthValue
        const year = value.getFullYear().toString().slice(2)

        return `${date}.${month}.${year}`
    }, [value])

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(value)
    }

    return (
        <div className={'datepicker'}>
            <input value={inputValue} onChange={onInputChange} type="text"
                   onClick={() => setIsShowCalendar(!isShowCalendar)}/>
            {label && <label>{label}</label>}
            <img src={isShowCalendar ? IconCalendarBlue : IconCalendarGrey} alt="calendar"/>
            {isShowCalendar && <Calendar onChange={onChange} value={value} prev2Label={null} next2Label={null}/>}
        </div>
    );
};

