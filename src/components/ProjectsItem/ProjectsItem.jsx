
export default function ProjectsItem(props) {
    return (
        <div className="ProjectsItem">
    <div className="card-img">
    <img src={props.img} />
    </div>
    <h2>{props.name}</h2>
    <p>{props.desc}</p>
    <p>{props.tech}</p>
    <p>{props.login}</p>
    <div className="card-btns">
    <a href={props.github} target="_blank">View Github</a>
        <a href={props.live} target="_blank">View {props.button}</a>
    </div>
    </div>
    );
}