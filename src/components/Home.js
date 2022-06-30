import React, { useRef } from 'react';

const Home = () => {
    const textRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(textRef.current.value)


        fetch('https://ancient-caverns-35503.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(textRef)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged) {
                    alert('Your task added')
                }
            })
    }


    return (

        <div className='text-center font-bold my-12 text-2xl h-80'>
            <h2>This is Home</h2>
            <div className='lg:w-1/2 mx-auto'>
                {/* <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Task</label> */}
                <form onSubmit={handleSubmit} className="relative mb-6">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input ref={textRef} type="text" id="input-group-1" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="add your daily task" />
                </form>

            </div>

        </div>
    );
};

export default Home;