import { useRef } from 'react';

const WorkPiece = ({ userWork, setUserWork, work, light, dark } : { userWork:any, setUserWork:any, work: any, light: string, dark: string }) => {
  const buttonsCard = useRef<HTMLDivElement>(null); 

  const handleClickingOptions = () => {
    if(buttonsCard.current)
    if(buttonsCard.current.classList.contains('hide')) buttonsCard.current.classList.remove('hide');
    else buttonsCard.current.classList.add('hide');
  }

  const focusOut = () => {
    if(buttonsCard.current) buttonsCard.current.classList.add('hide');
  }

  const DeletePieceOfWork = async (work : any) => {
    const id = work._id;
    try {
      const response = await fetch(`http://localhost:8080/${work.type}/delete/${id}`, {
        method: "DELETE"
      });
      if(!response.ok) throw new Error(`${response.status}`)
      setUserWork(userWork.filter((work: any)=>work._id !== id));
    } catch (error : any) {
      console.log({status: 'failed deleting a piece of work', error: error.message});
    }
  };

  return (
    <div className="work-card" style={{backgroundColor: light}}>
      <div className="card-info">
        <h2><span>Title:</span> {work.title}</h2>
        <p style={{color: dark}}>{work.type}</p>
      </div>
      <button className="options-button" onClick={handleClickingOptions} onBlur={focusOut}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" fill={dark}><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
      </button>
      <div ref={buttonsCard} className="buttons-card hide" style={{borderColor: dark}}>
        <button className="edit-card">Edit</button>
        <button className="edit-card">download</button>
        <button className="delete-card" onClick={()=>DeletePieceOfWork(work)}>Delete</button>
      </div>
    </div>
  );
}

export default WorkPiece;