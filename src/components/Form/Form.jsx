import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { DiscordIconForm } from 'components/Icons/DiscordIconForm';
import { MetaMaskIcon } from 'components/Icons/MetaMaskIcon';
import css from './Form.module.css';
import { useState } from 'react';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Wrong discord')
    .matches(/^@/, 'Username must start with @'),
  walletAddress: Yup.string()
    .required('Wrong address')
    .matches(/^[a-zA-Z0-9@_.-]+$/, 'Invalid wallet address format')
    .min(10, 'Wallet address must be at least 10 characters')
    .max(25, 'Wallet address must not exceed 25 characters'),
});

const initialValues = { username: '', walletAddress: '' };

export const FormComponent = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form values:', values);
      //alert('Form submitted successfully!'); or other notofication
      resetForm();
      setSubmitted(true);

      // Change button text from Minted to Mint after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className={css.containerForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, errors, touched }) => (
          <Form autoComplete="off" className={css.formBox}>
            <div className={css.inputBox}>
              <label htmlFor="username"></label>
              <div className={css.iconBox}>
                <DiscordIconForm />
              </div>
              <div>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className={`${css.inputForm} ${
                    errors.username && touched.username ? css.error : ''
                  }`}
                  placeholder="@Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className={css.errorMessage}
                />
              </div>
            </div>
            <div className={css.inputBox}>
              <label htmlFor="walletAddress"></label>
              <div className={css.iconBox}>
                <MetaMaskIcon />
              </div>
              <div>
                <Field
                  type="text"
                  id="walletAddress"
                  name="walletAddress"
                  className={`${css.inputForm} ${
                    errors.walletAddress && touched.walletAddress
                      ? css.error
                      : ''
                  }`}
                  placeholder="1x28601vsdfg31543cs"
                />
                <ErrorMessage
                  name="walletAddress"
                  component="div"
                  className={css.errorMessage}
                />
              </div>
            </div>
            <button
              type="submit"
              aria-label="Submit form button"
              className={css.formBtn}
            >
              {submitted ? 'Minted' : isValid ? 'Mint' : 'Error'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// variant 2
// import walletAddressValidator from 'wallet-address-validator';

// const walletAddress = (message = 'Invalid wallet address') => ({
//   name: 'walletAddress',
//   message,
//   test: value => walletAddressValidator.validate(value, 'bitcoin'),
// });

// const validationSchema = Yup.object().shape({
//   walletAddress: Yup.string()
//     .required('Wallet address is required')
//     .test(walletAddress()),
// });
