module.exports = {
    control: function( styles, state ) {
        var newStyles = Object.assign( styles, {
            cursor: 'pointer',
            minHeight: 30,
        } );

        if ( state.isFocused && ! state.isDisabled ) {
            newStyles = Object.assign( newStyles, {
                borderColor: '#007cba',
            } );
        } else {
            newStyles = Object.assign( newStyles, {
                borderColor: '#7e8993',
                '&:hover': {
                    borderColor: '#7e8993',
                },
            } );
        }

        if ( state.isFocused ) {
            newStyles = Object.assign( newStyles, {
                boxShadow: '0 0 0 1px #007cba',
                '&:hover': {
                    borderColor: '#007cba',
                },
            } );
        }

        return newStyles;
    },
    valueContainer: function( styles ) {
        var newStyles = Object.assign( styles, {
            padding: '0 8px',
        } );

        return newStyles;
    },
    input: function( styles ) {
        var newStyles = Object.assign( styles, {
            margin: 0,
            height: 30,
            paddingTop: 0,
            paddingBottom: 0,
            input: {
                boxShadow: 'none !important',
            },
        } );

        return newStyles;
    },
    dropdownIndicator: function( styles ) {
        var newStyles = Object.assign( styles, {
            padding: 5,
            color: '#555555',
            '&:hover': {
                color: '#555555',
            },
            svg: {
                width: 17,
                height: 17,
            },
        } );

        return newStyles;
    },
    clearIndicator: function( styles ) {
        var newStyles = Object.assign( styles, {
            padding: 5,
            svg: {
                width: 15,
                height: 15,
            },
        } );

        return newStyles;
    },
    indicatorSeparator: function() {
        return false;
    },
    multiValue: function( styles ) {
        var newStyles = Object.assign( styles, {
            padding: '2px 3px',
            borderRadius: 4,
            backgroundColor: '#555d66',
        } );

        return newStyles;
    },
    multiValueLabel: function( styles ) {
        var newStyles = Object.assign( styles, {
            padding: 0,
            color: '#fff',
        } );

        return newStyles;
    },
    multiValueRemove: function( styles ) {
        var newStyles = Object.assign( styles, {
            padding: 0,
            marginLeft: 5,
            color: '#adadad',
            svg: {
                width: 10,
                height: 10,
            },
        } );

        return newStyles;
    },
    option: function( styles, state ) {
        var newStyles = Object.assign( styles, {
            display: 'flex',
            alignItems: 'center',
            padding: '4px 10px',
        } );

        if ( state.isFocused ) {
            newStyles = Object.assign( newStyles, {
                backgroundColor: '#efefef',
            } );
        }

        if ( state.isSelected ) {
            newStyles = Object.assign( newStyles, {
                backgroundColor: '#007cba',
            } );
        }

        return newStyles;
    },
    menu: function( styles ) {
        var newStyles = Object.assign( styles, {
            zIndex: 2,
        } );

        return newStyles;
    },
};
