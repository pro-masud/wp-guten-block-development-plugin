import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/editor';

// Register the About Block
registerBlockType( 'my-custom-blocks/about', {
    title: 'About Block',
    icon: 'info',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },

    // Editor view
    edit( { attributes, setAttributes } ) {
        const { content } = attributes;
        return (
            <div className="about-block">
                <RichText
                    tagName="p"
                    value={ content }
                    onChange={ ( value ) => setAttributes( { content: value } ) }
                    placeholder="Write about yourself..."
                />
            </div>
        );
    },

    // Frontend view
    save( { attributes } ) {
        return <p>{ attributes.content }</p>;
    },
} );
