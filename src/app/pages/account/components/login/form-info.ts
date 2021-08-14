export const FORM_INFO = {
    loginForm: {
        email: {
            label: 'Email',
            placeholder: 'Email Id',
            appearance: 'standard' as const,
            type: 'email',
            hint: 'Eg: someone@gmail.com',
            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            errors: {
                required: 'This field is required',
                pattern: 'Email is invalid',
            },
            classes: {
                inputWrapperClass: '',
                inputClass: '',
                formFieldClass: 'w-100',
                matSuffixIconClass: ''
            }

        },
        password: {
            label: 'Password',
            placeholder: 'Password',
            appearance: 'standard' as const,
            pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            type: 'password',
            matSuffixIcon: 'visibility_off',
            hint: 'Eg: Someone@123',
            errors: {
                required: 'This field is required',
                pattern: 'Password is invalid',
            },
            classes: {
                inputWrapperClass: '',
                inputClass: '',
                formFieldClass: 'w-100',
                matSuffixIconClass: 'c-p'
            }
        }
    },
    signupForm: {
        fname: {
            label: 'First name',
            placeholder: 'First Name',
            appearance: 'standard' as const,
            type: 'text',
            pattern: '',
            hint: 'Eg: Musk',
            errors: {
                required: 'This field is required',
                pattern: '',
            },
            classes: {
                inputWrapperClass: '',
                inputClass: '',
                formFieldClass: 'w-100',
                matSuffixIconClass: ''
            }
        },
        lname: {
            label: 'Last name',
            placeholder: 'Last Name',
            appearance: 'standard' as const,
            type: 'text',
            pattern: '',
            hint: 'Eg: Elon',
            errors: {
                required: 'This field is required',
                pattern: '',
            },
            classes: {
                inputWrapperClass: '',
                inputClass: '',
                formFieldClass: 'w-100',
                matSuffixIconClass: ''
            }
        },
        email: {
            label: 'Email',
            placeholder: 'Email Id',
            appearance: 'standard' as const,
            type: 'email',
            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            hint: 'Eg: someone@gmail.com',
            errors: {
                required: 'This field is required',
                pattern: 'Email is invalid',
            },
            classes: {
                inputWrapperClass: '',
                inputClass: '',
                formFieldClass: 'w-100',
                matSuffixIconClass: ''
            }
        },
        mobileNumber: {
            label: 'Mobile number',
            placeholder: '+91 1234567890',
            appearance: 'standard' as const,
            type: 'number',
            pattern: '',
            hint: '',
            errors: {
                required: 'This field is required',
                pattern: '',
            },
            classes: {
                inputWrapperClass: '',
                inputClass: '',
                formFieldClass: 'w-100',
                matSuffixIconClass: ''
            }
        },
        password: {
            label: 'Password',
            placeholder: 'Password',
            appearance: 'standard' as const,
            pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            type: 'password',
            matSuffixIcon: 'visibility_off',
            hint: 'Eg: Someone@123',
            errors: {
                required: 'This field is required',
                pattern: 'Password is invalid',
            },
            classes: {
                inputWrapperClass: '',
                inputClass: '',
                formFieldClass: 'w-100',
                matSuffixIconClass: 'c-p'
            }
        },
        repassword: {
            label: 'Password',
            placeholder: 'Password',
            appearance: 'standard' as const,
            pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            type: 'password',
            matSuffixIcon: 'visibility_off',
            hint: 'Eg: Someone@123',
            errors: {
                required: 'This field is required',
                pattern: 'Password is invalid',
            },
            classes: {
                inputWrapperClass: '',
                inputClass: '',
                formFieldClass: 'w-100',
                matSuffixIconClass: 'c-p'
            }
        }
    }
}