import { ReactFinalForm, SingleSelectFieldFF, InputFieldFF, hasValue, SwitchFieldFF, Button } from '@dhis2/ui'
import React from 'react'
import styles from './Form.module.css'

/**
 * This is just a function to demonstrate the values when the form is submitted
 * It takes the form's values (which is an object), transforms it into readable JSON,
 * and then finally displays the values in an alert box
 *
 * @param {Object} values
 * @param {string} values.title
 * @param {string} values.surname
 * @param {string} values.firstname
 * @param {string} values.email
 * @param {string} values.email-confirmation
 * @param {bool} values.newsletter
 */
const alertValues = (values) => {
    const formattedValuesString = JSON.stringify(values, null, 2)
    alert(formattedValuesString)
}

const { Field, Form: RFForm } = ReactFinalForm

export const Form = () => (
    <div>
        <h1>Form</h1>

        <RFForm onSubmit={alertValues}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <Field
                        name="title"
                        label="Title"
                    
                        component={SingleSelectFieldFF}
                        className={styles.title}
                        initialValue= "none"
                        options={[
                            { label: "None", value: "none" },
                        ]}
                        //validate={hasValue}
                    />
                </div>
                    <div className={styles.row}>
                        <Field
                            name="surname"
                            label="surname"
                            component={InputFieldFF}
                            className={styles.surname}
                            validate={hasValue}
                            
                        />

                        
                        <Field
                            name="firstname"
                            label="firstname"

                            component={InputFieldFF}
                            className={styles.firstname}
                            validate={hasValue}
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            name="username"
                            label="username"
                        
                            component={InputFieldFF}
                            className={styles.surname}
                            validate={hasValue}
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            name="password"
                            label="Password"
                        
                            component={InputFieldFF}
                            className={styles.surname}
                            validate={hasValue}
                        /></div>
                        <div className={styles.row}>
                        <Field
                            name="email"
                            label="E-mail address"
                        
                            component={InputFieldFF}
                            className={styles.email}
                            validate={hasValue}
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            name="confirm_email"
                            label="E-mail address"
                            component={InputFieldFF}
                            className={styles.email}
                            validate={hasValue}
                        />
                    </div>
                    <Field
                        type='checkbox'
                        name="newsletter"
                        label="newsletter"
                        component={SwitchFieldFF}
                        initialValue= {false}
                    />
                    <div className={styles.row}>
                    <Button
                        ariaLabel="Button"
                        name="Primary button"
                        //onClick={logger}
                        primary
                        title="Button"
                        value="default"
                    >
                        SUBMIT
                    </Button>
                    </div>
                </form>
            )}
        </RFForm>
    </div>
)
