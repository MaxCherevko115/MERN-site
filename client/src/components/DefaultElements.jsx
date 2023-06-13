import { Link } from "react-router-dom";

import "./DefaultElements.css";

export const DefaultInput = ({ name, options }) => {
  return (
    <div className="input-default"> 
      <label className="input-default__label">
        {name}
        <input className="input-default__item" autoComplete="off" {...options}/>
      </label>
    </div>
  )
}

export const DefaultTextarea = ({ name, options }) => {
  return (
    <div className="textarea-default"> 
      <label className="textarea-default__label">
        {name}
        <textarea className="textarea-default__item" {...options}></textarea>
      </label>
    </div>
  )
}

export const DefaultButton = ({ name, options, color }) => {
  color = color || '';

  return (
    <div className="button-default">
      <button
        className={`button-default__item ${color}`}
        {...options}
      >
        {name}
      </button>
    </div>
  )
}

export const DefaultButtonLink = ({ name, options, color }) => {
  color = color || '';

  return (
    <div className="button-default">
      <Link
        className={`button-default__item ${color}`}
        {...options}
      >
        {name}
      </Link>
    </div>
  )
}