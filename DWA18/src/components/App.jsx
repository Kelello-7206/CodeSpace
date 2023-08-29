import { useState } from 'react'
import { v4 as createdID } from 'uuid'
import React from 'react';

const useTasks  = () =>{
 const [tasks ,setTasks] = useState([]);

const add = (title) => {
   const newTasks = 
   [
    {
        id: createdID(),
        title,
    },
    ... tasks,
   ]
   setTasks(newTasks);
};

const remove = (id) =>{
    const newTask = tasks.filter(item =>{
        return item.id !== id;
    });

    setTasks(newTask);
};

const formSubmit = (event) =>{
    event.preventDefault();
    const { target } = event;
    const data = new FormData(target);
    const { title } = Object.fromEntries(data);
    add(title);

    const newTask = {
        id: createdID(),
        title,

    };

    setTasks([title, ... tasks]);

   target.reset();
}

 return [
    tasks,
    {
        add,
        remove,
        formSubmit,
    }
 ]
}

export const App = () =>{
    const { tasks, formSubmit } = useTasks();
    return (
    <div className='red-button '>
        <form onSubmit={formSubmit}>
            <label>
                <div>New Task</div>
                <input name='title' />
            </label>

            <button type='submit'>SAVE</button>
        </form>

    <ul>
         {tasks.map(({id,title}) => {
            return <li key={id}>
                <span>{title }</span>
                <button onClick={() => remove(id)}>X</button>
                </li>;
        })}
    </ul>
    </div>
    );
}; 