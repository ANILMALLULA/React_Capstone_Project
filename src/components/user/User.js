function User() {
  const auth = JSON.parse(localStorage.getItem("user-info"));

  return (
    <div className='container shadow-lg py-5 my-5'>
      <table className={`table rounded-lg text-center`}>
        <tbody>
          <tr>
            <td>
              <p>First Name</p>
            </td>
            <th>
              <h5>{auth.fname}</h5>
            </th>
          </tr>

          <tr>
            <td>
              <p>Last Name</p>
            </td>
            <th>
              <h5>{auth.lname}</h5>
            </th>
          </tr>

          <tr>
            <td>
              <p>Email</p>
            </td>
            <th>
              <h5>{auth.email}</h5>
            </th>
          </tr>

          <tr>
            <td>
              <p>Company</p>
            </td>
            <th>
              <h5>Wipro</h5>
            </th>
          </tr>

          <tr>
            <td>
              <p>Location</p>
            </td>
            <th>
              <h5>{auth.location}</h5>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default User;
