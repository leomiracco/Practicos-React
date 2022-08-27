import "./deleteAllButton.css";

export const DeleteAllButton = ({onRemoveAllTask})=>{
  return (
    <button className="button-remove-all" onClick={()=>onRemoveAllTask()}>
      Borrar Todo
    </button>
  )
};