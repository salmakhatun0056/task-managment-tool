import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import fetcher from '../api';
import { useForm } from 'react-hook-form';

const EditTask = () => {
    const { id } = useParams()

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetcher.get(`get-task/${id}`)
            setTasks(res.data)
        })()
    }, [])
    console.log(tasks)

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const res = await fetcher.post("add-task", data)
        console.log(res)
    }
    return (
        <div className='lg:w-1/2 mx-auto mt-12'>
            <form onSubmit={handleSubmit(onSubmit)} className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input {...register("task")} value={tasks.task} type="text" id="input-group-1" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </form>
        </div>
    );
};

export default EditTask;