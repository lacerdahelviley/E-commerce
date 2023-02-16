import Search from "components/img/loupe.png";
import Style from "./icons.module.scss";
import Button from "components/buttons";
import TextField from "components/textField";


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
