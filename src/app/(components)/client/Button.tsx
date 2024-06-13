import React from "react"

interface ButtonProps {
    onButtonClick: () => void
    hidden: boolean
    children: React.ReactNode
    className?: string;
}



const Button = ({ onButtonClick, children, hidden, className }: ButtonProps) => {
    return (
        <button className={className} onClick={onButtonClick} hidden={hidden}>
            {children}
        </button>
    )
}

export default Button