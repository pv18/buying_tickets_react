import React from 'react';

export const Tickets = () => {
    return (
        <div className={'tickets'}>
            <div className={'ticket'}>
                <div className={'ticket__left-bar'}>
                    <div className={'ticket__title'}>Невозвратный</div>
                    <div className={'logo'}>
                        <img src="logo" alt=""/>
                        <span>S7 Airlines</span>
                    </div>
                </div>

                <div className={'ticket__info'}>
                    <div className={'route'}>
                        <div className={'route__time'}>09:20</div>
                        <div className={'route__line'}>линия</div>
                        <div className={'route__time'}>11:05</div>
                        <div className={'baggage'}></div>
                    </div>
                    <div className={'route__options'}></div>
                </div>

                <div className={'ticket__price'}>4150 р.</div>
            </div>
        </div>
    );
};

