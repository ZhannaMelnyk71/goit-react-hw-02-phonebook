import { Fragment } from "react";

// import css from './Contact.module.css'

export const Contact = ({name,number,id, onDeleteContact}) => {
    return (
        <Fragment>
            <span>{name}: {number}</span>
            <button
                    type="button"
                onClick={() => onDeleteContact(id)}>Delete</button>
        </Fragment>
    )
}