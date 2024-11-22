import { registerBlockType } from '@wordpress/blocks';
import './style.scss'; // Import block styles

// Import internal dependencies
import Edit from './edit';
import save from './save'; // Block save function
import metadata from './block.json'; // Block metadata from block.json

// Register the block
registerBlockType( metadata.name, {
  // Block editor functionality
  edit: (props) => {
    return (
      <div>
        <Edit {...props} />
        <Hello />
      </div>
    );
  },

  // Save the block content
  save: (props) => {
    return (
      <div>
        <save {...props} />
        <HelloSaves />
      </div>
    );
  },
});
