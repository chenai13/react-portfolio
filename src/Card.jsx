import "./App.css";

function Card(props) {
  return (
    <>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] text-text p-5 w-full max-w-[500px]  transition delay-105 duration-130 ease-in-out hover:-translate-y-1 hover:scale-102 hover:shadow-sm rounded-md drop-shadow-sm font-heebo text-sm font-light">
        <div className="flex justify-between w-57">
          <h1 className="pb-5 pt-5 font-bold text-lg font-inconsolata">
            {props.title}
          </h1>
          <img className="size-14" src={props.img}></img>
        </div>
        <div className="pb-8 flex justify-between w-50 ">
          <p>{props.date}</p>|<p>{props.prg}</p>
        </div>
        <p className="pb-5">{props.p}
        </p>
       
      </div>
      </a>
    </>
  );
}

export default Card;