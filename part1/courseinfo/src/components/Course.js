
const Header = ({name}) => {
    return (
        <h1>{name}</h1>
    )
}

const Content = ({parts}) => {
    return (
        <>
        {parts.map((part) =>
            <ul key={part.id}>
            <li key={part.id}> {part.name} ({part.exercises}) </li>
            </ul>
        )}
        </>
    )
}

const Course = ({course}) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises;
    const total = course.parts.reduce(reducer, 0)

    return (
        <>
        <Header name={course.name}/>
        <Content parts={course.parts}/>

        <h3>total of {total} exercises</h3>
        </>
    )
}

export default Course;