module.exports = {
    control: (styles, state) => {
        let newStyles = Object.assign(styles, {
            cursor: 'pointer',
            minHeight: 40,
            borderRadius: 3,
        });

        if (state.isFocused && !state.isDisabled) {
            newStyles = Object.assign(newStyles, {
                borderColor: '#007cba',
            });
        } else {
            newStyles = Object.assign(newStyles, {
                borderColor: 'var(--wp-components-color-gray-600, #949494)',
                '&:hover': {
                    borderColor: '',
                },
            });
        }

        if (state.isFocused) {
            newStyles = Object.assign(newStyles, {
                boxShadow: '0 0 0 1px #007cba',
                '&:hover': {
                    borderColor: '#007cba',
                },
            });
        }

        return newStyles;
    },
    singleValue: (styles) => {
        const newStyles = Object.assign(styles, {
            color: 'var(--wp-components-color-foreground, #1e1e1e)',
        });

        return newStyles;
    },
    valueContainer: (styles, state) => {
        let newStyles = Object.assign(styles, {
            padding: 0,
            paddingLeft: 10,
        });

        if (state.isMulti) {
            newStyles = Object.assign(newStyles, {
                paddingRight: 7,
                paddingLeft: 7,
            });
        }

        return newStyles;
    },
    input: (styles) => {
        const newStyles = Object.assign(styles, {
            margin: 0,
            height: 30,
            paddingTop: 0,
            paddingBottom: 0,
            input: {
                boxShadow: 'none !important',
            },
        });

        return newStyles;
    },
    dropdownIndicator: (styles) => {
        const newStyles = Object.assign(styles, {
            padding: 3,
            paddingRight: 9,
            color: 'var(--wp-components-color-foreground, #1e1e1e)',
            '&:hover': {
                color: 'var(--wp-components-color-foreground, #1e1e1e)',
            },
            svg: {
                width: 12,
                height: 12,
            },
        });

        return newStyles;
    },
    clearIndicator: (styles) => {
        const newStyles = Object.assign(styles, {
            padding: 5,
            svg: {
                width: 15,
                height: 15,
            },
        });

        return newStyles;
    },
    indicatorSeparator: () => {
        return false;
    },
    multiValue: (styles) => {
        const newStyles = Object.assign(styles, {
            padding: '3px 2px',
            margin: 4,
            marginLeft: 0,
            borderRadius: 1,
            backgroundColor: '#ddd',
        });

        return newStyles;
    },
    multiValueLabel: (styles) => {
        const newStyles = Object.assign(styles, {
            padding: 0,
            color: '#32373c',
            fontSize: '100%',
        });

        return newStyles;
    },
    multiValueRemove: (styles) => {
        const newStyles = Object.assign(styles, {
            padding: 0,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 1,
            width: 'auto',
            height: 'auto',
            backgroundColor: 'transparent',
            color: 'inherit',
            justifyContent: 'center',
            ':hover': {
                backgroundColor: 'transparent',
                color: '#e02e2e',
            },
            svg: {
                width: 14,
                height: 14,
            },
        });

        return newStyles;
    },
    option: (styles, state) => {
        let newStyles = Object.assign(styles, {
            display: 'flex',
            alignItems: 'center',
            padding: '4px 10px',
        });

        if (state.isFocused) {
            newStyles = Object.assign(newStyles, {
                backgroundColor: '#efefef',
            });
        }

        if (state.isSelected) {
            newStyles = Object.assign(newStyles, {
                backgroundColor: '#007cba',
            });
        } else {
            newStyles = Object.assign(newStyles, {
                color: 'var(--wp-components-color-foreground, #1e1e1e)',
            });
        }

        return newStyles;
    },
    menu: (styles) => {
        const newStyles = Object.assign(styles, {
            zIndex: 2,
        });

        return newStyles;
    },
};
