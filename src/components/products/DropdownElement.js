import { useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";

function DropdownElement({
  showFields,
  handleFieldChanges,
  handleDropDownShow,
  dropDownShow,
}) {
  const auth = useSelector((state) => state.users);
  return (
    <Formik initialValues={showFields} onSubmit={handleFieldChanges}>
      <Form>
        <div className='dropdown'>
          <button
            type='button'
            className='btn btn-primary dropdown-toogle '
            onClick={handleDropDownShow}
          >
            Change Fields
          </button>

          <div className={"dropdown-menu collapse " + dropDownShow}>
            <div className='form-check mx-4'>
              <label className='form-check-label'>
                <Field
                  type='checkbox'
                  className='form-check-input'
                  name='productName'
                />
                Name
              </label>
            </div>
            <div className='form-check mx-4'>
              <label className='form-check-label'>
                <Field
                  type='checkbox'
                  className='form-check-input'
                  name='productPrice'
                />
                Price
              </label>
            </div>
            <div className='form-check mx-4'>
              <label className='form-check-label'>
                <Field
                  type='checkbox'
                  className='form-check-input'
                  name='productManufacturer'
                />
                Manufacturer
              </label>
            </div>
            {auth.loginSuccess ? (
              <>
                <div className='form-check mx-4'>
                  <label className='form-check-label'>
                    <Field
                      type='checkbox'
                      className='form-check-input'
                      name='productQuantity'
                    />
                    Quantity
                  </label>
                </div>
                <div className='form-check mx-4'>
                  <label className='form-check-label'>
                    <Field
                      type='checkbox'
                      className='form-check-input'
                      name='productDescription'
                    />
                    Description
                  </label>
                </div>
                <div className='form-check mx-4'>
                  <label className='form-check-label'>
                    <Field
                      type='checkbox'
                      className='form-check-input'
                      name='views'
                    />
                    No. of Views
                  </label>
                </div>
              </>
            ) : null}

            <button type='submit' className='btn btn-primary m-4'>
              Save
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default DropdownElement;
