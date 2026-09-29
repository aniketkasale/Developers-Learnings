import { useReducer } from "react";

const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    age: "",
    city: "",
  },
  errors: {},
  submitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
        errors: {},
      };

    case "NEXT":
      if (state.step === 1) {
        const errors = {};

        if (!state.formData.name) errors.name = "Name is required";
        if (!state.formData.email) errors.email = "Email is required";

        if (Object.keys(errors).length) {
          return { ...state, errors };
        }
      }

      if (state.step === 2) {
        const errors = {};

        if (!state.formData.age) errors.age = "Age is required";
        if (!state.formData.city) errors.city = "City is required";

        if (Object.keys(errors).length) {
          return { ...state, errors };
        }
      }

      return {
        ...state,
        step: state.step + 1,
        errors: {},
      };

    case "PREVIOUS":
      return {
        ...state,
        step: state.step - 1,
        errors: {},
      };

    case "SUBMIT":
      return {
        ...state,
        submitted: true,
      };

    default:
      return state;
  }
}

export default function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { step, formData, errors, submitted } = state;

  if (submitted) {
    return <h2>Form submitted successfully!</h2>;
  }

  return (
    <div>
      <h2>Step {step}</h2>

      {step === 1 && (
        <>
          <input
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />
          {errors.name && <p>{errors.name}</p>}

          <input
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />
          {errors.email && <p>{errors.email}</p>}
        </>
      )}

      {step === 2 && (
        <>
          <input
            placeholder="Age"
            value={formData.age}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "age",
                value: e.target.value,
              })
            }
          />
          {errors.age && <p>{errors.age}</p>}

          <input
            placeholder="City"
            value={formData.city}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "city",
                value: e.target.value,
              })
            }
          />
          {errors.city && <p>{errors.city}</p>}
        </>
      )}

      {step === 3 && (
        <>
          <h3>Review</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
          <p>City: {formData.city}</p>
        </>
      )}

      <div>
        {step > 1 && (
          <button onClick={() => dispatch({ type: "PREVIOUS" })}>
            Previous
          </button>
        )}

        {step < 3 && (
          <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
        )}

        {step === 3 && (
          <button onClick={() => dispatch({ type: "SUBMIT" })}>Submit</button>
        )}
      </div>
    </div>
  );
}
