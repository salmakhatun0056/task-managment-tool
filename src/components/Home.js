import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import fetcher from '../api';
import { toast } from 'react-toastify';

const Home = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('get-task')
            setTasks(res.data)
        })()
    }, [])
    console.log(tasks)

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const res = await fetcher.post("add-task", data)
        reset()
        console.log(res)
        toast('You added your daily task')
    }

    const navigate = useNavigate()
    const handelEditButton = id => {
        navigate(`/task/${id}`)
    }


    return (
        <div className=' bg-gray-900'>
            <div className='text-center   text-2xl '>
                <h1 className='text-2xl py-6 font-bold text-white'>WRITE YOUR DAILY TASK</h1>
                <div className='lg:w-1/2 mx-auto'>
                    {/* <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Task</label> */}
                    <form onSubmit={handleSubmit(onSubmit)} className="relative mb-6">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input {...register("task")} type="text" id="input-group-1" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="add your daily task" />
                    </form>

                </div>
                <div>
                    <h2 className='text-primary text-2xl font-bold text-center text-white'>ALL USERS DAILY TASKS</h2>
                    <div className='flex justify-center items-center'>
                        <div class="relative w-fit overflow-x-auto shadow-md  sm:rounded-lg  my-8">
                            <table class="lg:w-full  text-sm text-left text-white dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className='text-center'>

                                        <th scope="col" class="px-6 py-3">
                                            S/L
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            User id
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Daily Task
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Edit Task
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='py-8'>

                                    {
                                        tasks?.map((task, index) =>
                                            <tr className='text-center' key={index}>
                                                <th >{index + 1}</th>
                                                <td>{task._id}</td>
                                                <td className=' px-6'>{task.task}</td>
                                                <td><button onClick={() => handelEditButton(task._id)} className='btn '><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg></button></td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;