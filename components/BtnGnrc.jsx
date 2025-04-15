import "./BtnGnrc.css";

const BtnGrnc = (props) => {
  return (
    <div className="mainBtn" {...props}>
      {props.txt}
    </div>
  );
};

export default BtnGrnc;
