import React from 'react';
import {TextField} from '../../components/TextField/TextField';
import {DatePicker} from '../../components/DatePicker/DatePicker';
import {Button} from '../../components/Button/Button';
import './searchForm.scss';

export const SearchForm = () => {
    return (
        <div className={'search-form'}>
            <div className={'search-form__top'}>
                <TextField
                    label={'Откуда'}
                    placeholder={'Город вылета'}
                />
                <TextField
                    label={'Куда'}
                    placeholder={'Город прилёта'}
                />
                <DatePicker label={'Туда'}/>
                <DatePicker label={'Обратно'}/>
            </div>
            <div className={'search-form__bottom'}>
                <Button>Найти билеты</Button>
            </div>
        </div>
    );
};

