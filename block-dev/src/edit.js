import { useState } from '@wordpress/element';
import { TextControl } from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
  const [text, setText] = useState(attributes.text || 'Hello, World!');

  const handleChange = (newText) => {
    setText(newText);
    setAttributes({ text: newText });
  };

  return (
    <div>
      <TextControl
        label="Your Text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Edit;
