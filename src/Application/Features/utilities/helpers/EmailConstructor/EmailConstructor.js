import EmailService from '../../services/EmailService';

class EmailConstructor {
  static async create(emailDetails) {
    const { email: staffEmailAddress, templateName, directTo } = emailDetails;
    const emailTemplate = await EmailService.fetchEmailTemplateByName(templateName);
    const { htmlMessage, subject } = emailTemplate;

    let toEmailAddress;

    if (directTo) {
      toEmailAddress = emailDetails[directTo].email;
    } else {
      toEmailAddress = staffEmailAddress;
    }

    const personalizedEmail = EmailConstructor.personalizeMessage(emailDetails, htmlMessage);
    return {
      to: toEmailAddress,
      subject,
      html: personalizedEmail
    };
  }

  static async createForMany(reciepients, emailTemplateName) {
    const emailTemplate = await EmailService.fetchEmailTemplateByName(emailTemplateName);
    const { htmlMessage, subject } = emailTemplate;

    const personalizedEmails = reciepients.map((reciepient) => {
      const { email: reciepientEmailAddress } = reciepient;
      const personalizedEmail = EmailConstructor.personalizeMessage(reciepient, htmlMessage);

      return {
        to: reciepientEmailAddress,
        subject,
        html: personalizedEmail
      };
    });

    return personalizedEmails;
  }

  static personalizeMessage(reciepient, htmlMessage) {
    const {
      staffId,
      firstname: staffFirstName,
      lastname: staffLastName,
      urlToken,
      password,
      monthOfClaim,
      amount,
      supervisor,
      BSM,
      currentLineManagerRole,
      directTo
    } = reciepient;
    let supervisorFirstName;
    let supervisorLastName;
    let BSMFirstName;
    let BSMLastName;
    let amountLocale;
    let directToFirstName;

    if (supervisor) {
      supervisorFirstName = supervisor.firstname;
      supervisorLastName = supervisor.lastname;
    }
    if (BSM) {
      BSMFirstName = BSM.firstname;
      BSMLastName = BSM.lastname;
    }
    if (directTo) directToFirstName = reciepient[directTo].firstname;
    if (amount) amountLocale = amount.toLocaleString();

    const approvalMessageLastSentence = currentLineManagerRole === 'supervisor'
      ? 'It is now pending your countersigning supervisor\'s approval'
      : 'It is now being processed by admin';

    return htmlMessage
      .replace(/{{staffFirstName}}/g, staffFirstName)
      .replace(/{{staffLastName}}/g, staffLastName)
      .replace(/{{supervisorFirstName}}/g, supervisorFirstName)
      .replace(/{{supervisorLastName}}/g, supervisorLastName)
      .replace(/{{BSMFirstName}}/g, BSMFirstName)
      .replace(/{{BSMLastName}}/g, BSMLastName)
      .replace(/{{url}}/g, 'overtime.viclawrence.com')
      .replace(/{{hash}}/g, urlToken)
      .replace(/{{amount}}/g, amountLocale)
      .replace(/{{monthOfClaim}}/g, monthOfClaim)
      .replace(/{{staffId}}/g, staffId)
      .replace(/{{password}}/g, password)
      .replace(/{{currentLineManagerRole}}/g, currentLineManagerRole)
      .replace(/{{directToFirstName}}/g, directToFirstName)
      .replace(/{{approvalMessageLastSentence}}/g, approvalMessageLastSentence);
  }
}

export default EmailConstructor;
