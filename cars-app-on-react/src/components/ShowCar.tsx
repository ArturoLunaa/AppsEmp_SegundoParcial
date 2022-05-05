type ShowCarProps = {
    model: string,
    brand: string,
    year: number
}

export default function ShowCar(props: ShowCarProps){
 return <p>This is a {props.model}! made by {props.brand}, in {props.year}</p>
}
