import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  //first name
  const {
    value: enteredFirst,
    isValid: firstIsValid,
    hasError: firstHasError,
    valueChangeHandler: firstChangeHandler,
    inputBlurHandler: firstBlurHandler,
    reset: firstReset,
  } = useInput((value) => value.trim !== "");
  //last name
  const {
    value: enteredLast,
    isValid: lastIsValid,
    hasError: lastHasError,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: lastReset,
  } = useInput((value) => value.trim !== "");

  //email address
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstIsValid && lastIsValid && emailIsValid) {
    formIsValid = true;
  }

  

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    firstReset();
    lastReset();
    emailReset();
  };

  const firstClasses = firstHasError ? 'form-control invalid' : 'form-control';
  const lastClasses = lastHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirst}
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
          />
          {firstHasError && <p className="error-text">Please enter a valid first name.</p>}
        </div>
        <div className={lastClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLast}
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
          />
          {lastHasError && <p className="error-text">Please enter a valid last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
