import React from "react";

export default function Input(props) {
    return (
      <div className={`border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 ${props.class.div}`}>
        <label htmlFor="name" className={`block text-xs font-medium text-gray-900 ${props.class.label}`}>
          {props.text}
        </label>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          className={`block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm ${props.class.input}`}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    )
  }