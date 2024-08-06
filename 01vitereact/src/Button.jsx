import getButtonStyleType from "./getButtonStyleType";

function Button({ text = 'Button', buttonType = 'ok', buttonStyle, onclickHandler }) {



    return (
        <button
            className={`p-3 m-1 ${getButtonStyleType(buttonStyle)} transition-all text-white`}
            type={buttonType}
            onClick={onclickHandler}
        >
            {text}
        </button>
    )
}

export default Button;