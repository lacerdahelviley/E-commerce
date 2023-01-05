import logo from "../../components/img/Tora_Logo.png"

function Modal(){

    return (
    <div className="main">
        <div className="header">
            <div>
                <img className="logo" src={logo} alt="Home"></img>
            </div>
            <div className="buttons">
                <button className="button1">BTN</button>
                <button className="button2">BTN2</button>
            </div>
        </div>
    </div>
    );
}

export default Modal;