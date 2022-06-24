(function (React, ReactDOM) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const SingupForm = ({ onValidate, onSubmit }) => {
        const [formData, setFormData] = React__default["default"].useState({
            email: '',
            password: '',
            confirmPassword: '',
            isJoinNewsletter: false,
            isValid: false
        });
        const handleChange = (event) => {
            const { name, value, type, checked } = event.target;
            setFormData(formData => validateFormData(Object.assign(Object.assign({}, formData), { [name]: type === 'checkbox' ? checked : value })));
        };
        const userDetailsFromFormData = ({ email, password, isJoinNewsletter }) => ({
            email, password, isJoinNewsletter
        });
        const validateFormData = (formData) => {
            formData.isValid = (!onValidate || onValidate(userDetailsFromFormData(formData)))
                && formData.confirmPassword === formData.password;
            return formData;
        };
        const handleSubmit = (event) => {
            event.preventDefault();
            if (onSubmit) {
                onSubmit(userDetailsFromFormData(formData));
            }
        };
        return (React__default["default"].createElement("form", { className: 'form signup', onSubmit: handleSubmit },
            React__default["default"].createElement("input", { className: 'text', onChange: handleChange, type: 'email', required: true, autoFocus: true, name: 'email', placeholder: 'Email', value: formData.email }),
            React__default["default"].createElement("input", { className: 'text', onChange: handleChange, type: 'password', required: true, name: 'password', placeholder: 'Password', value: formData.password }),
            React__default["default"].createElement("input", { className: 'text', onChange: handleChange, type: 'password', required: true, name: 'confirmPassword', placeholder: 'Confirm password', value: formData.confirmPassword }),
            React__default["default"].createElement("div", { className: 'row checkbox' },
                React__default["default"].createElement("input", { onChange: handleChange, type: 'checkbox', name: 'isJoinNewsletter', id: 'isJoinNewsletter', checked: formData.isJoinNewsletter }),
                React__default["default"].createElement("label", { htmlFor: 'isJoinNewsletter' }, "I want to join the newsletter?")),
            React__default["default"].createElement("button", { className: 'btn submit', disabled: formData.isValid != true }, "Sign up")));
    };

    const handleValidate = ({ email, password }) => (email !== '' && password !== '');
    const handleSubmit = (userDetails) => {
        console.log(userDetails); // send through some API
    };
    ReactDOM__default["default"].render(React__default["default"].createElement(SingupForm, { onValidate: handleValidate, onSubmit: handleSubmit }), document.getElementById('app'));

})(React, ReactDOM);
