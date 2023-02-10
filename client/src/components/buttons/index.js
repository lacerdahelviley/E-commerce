import Style from "./button.module.scss";

const Buttons = (props) => {
  return (
    <>
      <button className={Style.button}>
        {props.children}
      </button>
    </>
  );
};
export default Buttons;
