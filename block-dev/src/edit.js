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
import { BlockControls, InspectorControls, PanelColorSettings, useBlockProps } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, PanelBody, TextControl, ColorPalette, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

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
export default function Edit({attributes, setAttributes}) {
	const {name, phone, address, nameColor} = attributes;
	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title='Card Details' >
					<TextControl 
						label={ __( 'Name', 'block-dev') }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value })}
					/>
					<TextControl 
						label={ __( 'Phone Number', 'block-dev') }
						value={ phone }
						onChange={ ( phone ) => setAttributes( { name: phone })}
					/>
					<TextControl 
						label={ __( 'Enter You Address', 'block-dev') }
						value={ address }
						onChange={ ( address ) => setAttributes( { name: address })}
					/>
				</PanelBody>
				<PanelColorSettings 
					title={ __( 'Card Fields', 'block-dev') }
					colorSettings={ [
						{
							label: __( 'Name Color', 'block-dev'),
							value: nameColor,
							onChange: ( value ) => setAttributes({ nameColor: value }),
						},
					]}
				/>
			</InspectorControls>
			<h2 style={{color: nameColor}}>{ name }</h2>
			<h2>{ phone }</h2>
			<h2>{ address }</h2>
		</div>
	);
}
