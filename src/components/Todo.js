import React, { useEffect, useState } from 'react';

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

    // const tasks = useQuery('tasks', () => fetch('http://localhost:5000/get-task').then(res => res.json()))
    // console.log(tasks.data)
    // if (tasks.isLoading) {
    //     return <h2>Loading ...</h2>
    // }

    // const tasks = fetcher.get('get-task')
    return (
        <div>
            <h2 className='text-primary text-2xl font-bold text-center'>Our Customers Reviews</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:px-12 my-12'>
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
            </div>
        </div>
    );
};

export default Todo;