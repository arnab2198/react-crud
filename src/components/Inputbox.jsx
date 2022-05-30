import "../styles/Inputbox.css";
import TextField from "@mui/material/TextField";

const Inputbox = (props) => {
  return (
    <>
      <form>
        <TextField
          id={`standard-${props.inputStat}`}
          inputProps={{ readOnly: props.read }}
          label={props.label}
          variant="standard"
        />
      </form>
    </>
  );
};

export default Inputbox;
