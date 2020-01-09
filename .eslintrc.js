module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "linebreak-style": ["error", "windows"],
        "react/destructuring-assignment": [0, "never"],
        "jsx-a11y/label-has-for": [ 0, {
            "required": {
                "some": [ "nesting", "id" ]
            }
        }]

    }
};