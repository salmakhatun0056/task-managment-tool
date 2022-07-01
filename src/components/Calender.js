import { format } from 'date-fns';
import React, { useState } from 'react';
import { ClassNames, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from 'react-day-picker/dist/style.module.css';


const Calender = () => {
    const [date, setDate] = useState(new Date())
    const classNames: ClassNames = {
        ...styles,
        head: 'custom-head'
    };
    return (
        <div className='text-center my-12'>
            <h1 className='text-2xl font-bold mt-5'>This is Calender</h1>
            <div className='flex items-center justify-center mt-5 '>
                <style>{`.custom-head { color: red }`}</style>
                <DayPicker
                    classNames={classNames}
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
            <p>You have selected: {format(date, "PP")}</p>
        </div>
    );
};

export default Calender;