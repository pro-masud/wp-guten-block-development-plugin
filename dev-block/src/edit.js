/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { BlockControls, useBlockProps } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton 
						icon="edit"
						title="Edit"
						onClick={ () => console.log( alert('hello world')) }
					/>
					<ToolbarButton 
						icon="trash"
						title="Trash"
						onClick={ () => console.log( alert('Delete')) }
					/>
				</ToolbarGroup>
				<ToolbarButton 
					icon="edit"
					title="Edit"
					onClick={ () => console.log( alert('hello world')) }
				/>
				<ToolbarButton 
					icon="trash"
					title="Trash"
					onClick={ () => console.log( alert('Delete')) }
				/>
			</BlockControls>
			<div { ...useBlockProps() }>
				<p>lorem</p>
				<p>
					{ __( 'Dev Block – hello from the editor Successfully!', 'dev-block' ) }
				</p>
			</div>
			
		</>
	);
}