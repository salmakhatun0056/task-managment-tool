import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import fetcher from '../api';

const Todo = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('get-task')
            setTasks(res.data)
        })()
    }, [])
    console.log(tasks)

    const navigate = useNavigate()
    const handelEditButton = id => {
        navigate(`/task/${id}`)
    }
    const [complete, setComplete] = useState(false)
    const handleCheckBox = () => {
        setComplete(true)
    }


    return (
        <div className=' bg-gray-900 h-screen'>
            <h2 className='text-primary pt-6  text-white text-2xl font-bold text-center'>ALL USERS DAILY TASKS</h2>


            <div className='flex justify-center items-center'>
                <div class="relative w-fit overflow-x-auto shadow-md  sm:rounded-lg  my-8">
                    <table class="lg:w-full  text-sm text-left text-white dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='text-center'>

                                <th scope="col" class="px-6 py-3">
                                    compleate task
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
                        <tbody className='p-8'>

                            {
                                tasks?.map((task, index) =>
                                    <tr className='text-center' key={index}>
                                        <th ><button class="form-check" onClick={() => handleCheckBox(complete)}><input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-black checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" /></button></th>
                                        <td>{task._id}</td>
                                        <td className='px-6'>{task.task}</td>
                                        <td><button onClick={() => handelEditButton(task._id)} className='btn '><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg></button></td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>



            {/* <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:px-12 my-12'>
                {
                    tasks?.map((review, index) => <div key={index} className='card mx-auto w-96 bg-primary shadow-xl'>
                        <div className='p-6'>
                            <h3 className='text-xl font-bold text-black'>{review.task}</h3>
                            <p className='text-black'>{review._id}</p>
                            <div className='card-actions justify-end text-white'>
                                <p>4 days ago</p>
                            </div>
                        </div>
                    </div>)
                }
            </div> */}
        </div>
    );
};

export default Todo;