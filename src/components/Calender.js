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
        <div className='text-center  bg-gray-900 h-screen'>
            <div >
                <h1 className='text-2xl font-bold pt-6 text-white'>THIS IS CALENDER</h1>
                <div className='flex items-center justify-center mt-5 '>
                    <style>{`.custom-head { color: red }`}</style>
                    <DayPicker
                        className='text-white'
                        classNames={classNames}
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
                <p className='text-white py-6'>You have selected: {format(date, "PP")}</p>
            </div>
        </div>
    );
};

export default Calender;