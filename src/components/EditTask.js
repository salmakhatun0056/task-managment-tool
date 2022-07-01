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

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const res = await fetcher.put(`edit-task/${id}`, data)
        console.log(res)
        reset()

    }
    const editTask = async (data) => {

    }
    return (
        <div className='bg-gray-900 h-5/6'>
            <div className='lg:w-1/2 mx-auto py-24 '>
                <form onSubmit={handleSubmit(onSubmit)} class="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-white font-bold mb-2 text-center text-2xl" for="username">
                            Edit Task
                        </label>
                        <input {...register("task")} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={tasks.task} />
                    </div>

                    <div class="flex items-center justify-center">
                        <button class="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit Edit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default EditTask;