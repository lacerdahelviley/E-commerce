import Search from "../img/loupe.png";
import Style from "./icons.module.scss";
import Button from "../buttons";
import TextField from "../textField";


const Icons = (props) => {
  return (
    <>

      <div className={Style.container}>
        <div className={Style.searchBar}>
          <TextField placeholder="Buscar" />
          <img src={Search} alt="Lupa de pesquisa" />
        </div>
        <Button>Login</Button>
      </div>
    </>
  );
};
export default Icons;
