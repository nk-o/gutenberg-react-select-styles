# Gutenberg react-select Styles

Styles for [`react-select`](https://react-select.com/) that match **WordPress admin / block editor** styling.

Accent colors (focus ring, selected option) use CSS variables so they follow the active admin color scheme and current WP defaults:

- `--wp-components-color-accent`
- `--wp-admin-theme-color` (fallback `#3858e9`)

Previously these used a hard-coded `#007cba`, which no longer matches modern WordPress.

## Usage

```bash
npm i react-select gutenberg-react-select-styles
```

```javascript
import ReactSelect from 'react-select';
import reactSelectStyles from 'gutenberg-react-select-styles';

function ReactComponent() {
    return (
        <ReactSelect
            styles={ reactSelectStyles }
        />
    );
}
```
