import React, { useState } from 'react';
import { MoreVertical, Check, Trash2, Share2, Edit2, CheckCircle } from 'lucide-react';
import initialTasks from '../data/tasksData.json';

const Tasks = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [openMenuId, setOpenMenuId] = useState(null);

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        setOpenMenuId(null);
    };

    const handleMarkComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: true } : task
        ));
        setOpenMenuId(null);
    };

    return (
        <div className="bg-white p-6 rounded-lg h-full flex flex-col">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Tasks</h2>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
                {tasks.map((task) => (
                    <div key={task.id} className="group relative flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center space-x-4 flex-1">
                            <div
                                onClick={() => toggleTask(task.id)}
                                className={`w-5 h-5 rounded border cursor-pointer flex items-center justify-center transition-colors ${task.completed ? 'bg-blue-600 border-blue-600' : 'border-gray-300 hover:border-blue-500'
                                    }`}
                            >
                                {task.completed && <Check size={14} className="text-white" />}
                            </div>
                            <span
                                className={`text-sm text-gray-700 cursor-pointer select-none transition-all ${task.completed ? 'line-through text-gray-400' : ''
                                    }`}
                                onClick={() => toggleTask(task.id)}
                            >
                                {task.title}
                            </span>
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => toggleMenu(task.id)}
                                className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <MoreVertical size={16} />
                            </button>

                            {openMenuId === task.id && (
                                <div className="absolute right-0 top-8 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-10 py-1 animate-in fade-in zoom-in duration-200">
                                    <button
                                        onClick={() => handleMarkComplete(task.id)}
                                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                                    >
                                        <CheckCircle size={14} /> Mark complete
                                    </button>
                                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                                        <Edit2 size={14} /> Edit
                                    </button>
                                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                                        <Share2 size={14} /> Share
                                    </button>
                                    <div className="h-px bg-gray-100 my-1"></div>
                                    <button
                                        onClick={() => handleDelete(task.id)}
                                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                    >
                                        <Trash2 size={14} /> Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Click outside to close menu - simple implementation */}
            {openMenuId && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setOpenMenuId(null)}
                ></div>
            )}
        </div>
    );
};

export default Tasks;
