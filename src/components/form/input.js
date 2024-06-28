import { Input } from "theme-ui";

export default function InputField({ error, ...rest }) {
  return <Input {...rest} sx={error ? styles.error : styles.input} />;
}

const styles = {
  input: {
    width: " 100%",
    border: "2px solid ",
    borderRadius: "7px",
    marginBottom: "0.5rem",
    transition: "0.3s",
    color: "text",
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(000, 000, 000, 0.5)",
    p: ["20px !important ", "30px"],
  },
  "&:autofill": {
    color: "white !important ",
  },
  error: {
    width: " 100%",
    boxSizing: "border-box",
    border: "2px solid ",
    borderColor: "borderColor",
    padding: " 0.8rem 1rem",
    borderRadius: "7px",
    marginBottom: "0.5rem",
    transition: "0.3s",
    color: "text",
    borderColor: "#ff4136",
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    boxShadow:
      " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },

  "&:placeholder": {
    color: "#a7a7a7",
  },
};
