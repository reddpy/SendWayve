import { useCallback } from "react";
import TextEditor from "./components/texteditor";
import { useState } from "react";
import { Button } from "@mui/material";

const App: React.FC = () => {
  const [saved_message, setSavedMessage] = useState("");
  const handleEditorChange = useCallback((html: string) => {
    if(html !== '<p></p>'){
      setSavedMessage(html);
    }else{
      setSavedMessage("");
    }
  }, []);

  const save_state = () => {
    if(saved_message!==""){
      console.log(saved_message);
    }
  };

  return (
    <>
      <TextEditor onChange={handleEditorChange} />
      <Button onClick={save_state}>Send</Button>
    </>
  );
};

export default App;
