import clsx from 'clsx'

interface ButtonProps {
    text: string;
    children: any;
    type: any;
    className: any;
}

export default function Button (props: ButtonProps) {
    const {children, text, className = 'bg-blue-600', type= 'button'} = props;
    return (
        <button {...props} type={type} className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 py-2 px-4 rounded flex items-center text-white gap-x-2'
        )}>
        {text || children}
        </button>
    )
}