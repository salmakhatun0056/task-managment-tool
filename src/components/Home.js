import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../api';

const Home = () => {
    // const textRef = useRef()

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const task = textRef.current.value
    //     console.log(task)

    //     const res = await fetcher.post("add-task", e)
    //     console.log(res)

    //     // fetcher.get('get-task')
    //     //     .then((res) => console.log(res.data))


    //     //     fetch('http://localhost:5000/add-task', {
    //     //         method: 'POST',
    //     //         headers: {
    //     //             'Content-Type': 'application/json',
    //     //         },
    //     //         body: JSON.stringify(task)
    //     //     })
    //     //         .then(res => res.json())
    //     //         .then(result => {
    //     //             console.log(result)

    //     //         })
    // }
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const res = await fetcher.post("add-task", data)
        console.log(res)
    }


    return (

        <div className='text-center font-bold my-12 text-2xl h-80'>
            <h2>This is Home</h2>
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

        </div>
    );
};

export default Home;