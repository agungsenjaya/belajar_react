interface CardProps {
    children: any;
}

function Card(props: CardProps) {
    const {children} = props;
    return (
        <div className={'shadow rounded'}>{children}</div>
    )
}

function Title(props: CardProps) {
    const {children} = props;
    return (
        <div className="px-4 py-2">
            <div className="font-semibold text-xl">
                {children}
            </div>
        </div>
    )
}

function Body(props: CardProps) {
    const {children} = props;
    return (
        <div className="px-4 py-2">
            {children}
        </div>
    )
}

function Footer(props: CardProps) {
    const {children} = props;
    return (
        <div className="px-4 py-2">
            {children}
        </div>
    )
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;