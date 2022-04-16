import "./styles.scss";
type Props = {
  fill: () => void;
  clean: () => void;
};
const ButtonsBar: React.FC<Props> = ({ fill, clean }) => {
  return (
    <div className="buttons-bar">
      <button onClick={() => fill()}>Заполнить</button>
      <button onClick={() => clean()}>Очистить</button>
    </div>
  );
};

export default ButtonsBar;
