import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";
import { OnChangeHTML } from "@remirror/react";

interface EditorProps {
  onChange: (html: string) => void;
}

const TextEditor: React.FC<EditorProps> = ({ onChange }) => {
  return (
    <div style={{ padding: 16 }}>
      <WysiwygEditor placeholder="Enter text...">
        <OnChangeHTML onChange={onChange} />
      </WysiwygEditor>
    </div>
  );
};

export default TextEditor;