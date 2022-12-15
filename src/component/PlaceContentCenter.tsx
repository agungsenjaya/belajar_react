
interface PlaceProps {
    children: any;
}
export default function PlaceContentCenter(props: PlaceProps) {
    const {children} = props;
    return (
        <div className="bg-black h-screen text-white">
            {children}
        </div>
    )
}