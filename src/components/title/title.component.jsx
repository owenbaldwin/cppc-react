import './title.styles.scss';


const Title = ({ title, colour, side }) => {
  return (
      <div className={`separator-container ${side}`}>
        <div className={`separator ${colour}`}/>
        <h1>{title}</h1>
      </div>

  );
};

export default Title;
