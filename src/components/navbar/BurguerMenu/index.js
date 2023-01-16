import style from "./index.module.css";

function Burguer({open, setOpen}) {
  return (
    <>
    <div className={style.Burguer} open = {open} onClick={() => setOpen(!open)} style={{transition: "all 0.3s"}} >
      <div className={style.BurguerMenuBar} style={{transform: open ? "rotate(41deg)" : "rotate(0)"}} />
      <div className={style.BurguerMenuSecondBar} />
      <div className={style.BurguerMenuBar} style={{transform: open ? "rotate(-41deg)" : "rotate(0)"}} />
    </div>
    </>
  );
}

export default Burguer;
