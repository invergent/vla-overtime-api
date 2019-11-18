class UsersHelpers {
  static refineUserData(user) {
    const {
      staffId, firstname, lastname, middlename, email: emailAddress, phone, altPhone, accountNumber, image, changedPassword, extraMonthsPermitted, extraMonthsData
    } = user;
    const branch = user.branch ? user.branch.name : null;
    const role = user.role ? user.role.name : null;
    let supervisorIdNumber = null;
    let supervisorFirstName = null;
    let supervisorLastName = null;
    let supervisorPhone = null;
    let supervisorEmailAddress = null;
    let bsmIdNumber = null;
    let bsmFirstName = null;
    let bsmLastName = null;
    let bsmPhone = null;
    let bsmEmailAddress = null;
    
    if (user.supervisor) {
      supervisorIdNumber = user.supervisor.idNumber;
      supervisorFirstName = user.supervisor.firstname;
      supervisorLastName = user.supervisor.lastname;
      supervisorPhone = user.supervisor.phone;
      supervisorEmailAddress = user.supervisor.email;
    }

    if (user.BSM) {
      bsmIdNumber = user.BSM.idNumber;
      bsmFirstName = user.BSM.firstname;
      bsmLastName = user.BSM.lastname;
      bsmPhone = user.BSM.phone;
      bsmEmailAddress = user.BSM.email;
    }

    return {
      staffId,
      firstname,
      lastname,
      middlename,
      emailAddress,
      phone,
      altPhone,
      accountNumber,
      image,
      extraMonthsPermitted,
      extraMonthsData,
      role,
      branch,
      changedPassword,
      supervisorIdNumber,
      supervisorFirstName,
      supervisorLastName,
      supervisorPhone,
      supervisorEmailAddress,
      bsmIdNumber,
      bsmFirstName,
      bsmLastName,
      bsmPhone,
      bsmEmailAddress
    };
  }
}

export default UsersHelpers;
