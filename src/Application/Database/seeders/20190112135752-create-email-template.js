const headerAndFooterContent = require('../seederHelper/emailTemplateHeaderAndFooter');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('EmailTemplate', [{
    name: 'Reset Staff',
    description: 'Reset passwords',
    subject: 'Password Reset',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>Password Reset</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Dear {{staffFirstName}},</p>
                                  <p>You requested for a password reset. Let's help you regain access to your account. Please click the button below.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="button-wrapper">
                            <tr>
                              <td>
                                <a href="{{url}}/confirm-reset-request?hash={{hash}}" target="_blank">Reset password</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'New Claim Line Manager',
    description: 'Notify line manager of newly submitted claim',
    subject: 'New Overtime Claim Request',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>New Overtime Claim request</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Dear {{lineManagerFirstName}},</p>
                                  <p><strong>{{staffFirstName}} {{staffLastName}}</strong> just submitted an overtime claim. Your approval is required to commence processing the claim.</p>
                                  <p>Click the button below to access all pending claims awaiting your approval.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="button-wrapper">
                            <tr>
                              <td>
                                <a href="{{url}}/line-manager/verify?hash={{hash}}" target="_blank">View pending claims</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Claim Updated Line Manager',
    description: 'Notify line manager of staff claim update',
    subject: 'Claim Updated',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>Claim Updated</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Dear {{lineManagerFirstName}},</p>
                                  <p><strong>{{staffFirstName}} {{staffLastName}}</strong>'s claim has been updated as requested.</p>
                                  <p>Click the button below to access all pending claims awaiting your approval.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="button-wrapper">
                            <tr>
                              <td>
                                <a href="{{url}}/line-manager/verify?hash={{hash}}" target="_blank">View pending claims</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'New Claim Staff',
    description: 'Notify staff of newly submitted claim',
    subject: 'Overtime Claim Request Submitted Successfully!',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>New Overtime Claim request</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Dear {{staffFirstName}},</p>
                                  <p>Your new overtime claim request was created successfully. Ensure you follow up on your line managers for prompt approval and processing of your claim.</p>
                                  <p>You can click the button below to see the progress of your pending claim.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="button-wrapper">
                            <tr>
                              <td>
                                <a href="{{url}}/staff/pending-claim" target="_blank">View pending claims</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Line Manager Approved Staff',
    description: 'Notify staff when line manager approves claim',
    subject: 'Claim Request: Line Manager Approval',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>Claim request Approval</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Dear {{staffFirstName}},</p>
                                  <p>Your overtime claim request has been approved by your line manager. It is now being processed by admin.</p>
                                  <p>You can click the button below to see the progress of your pending claim.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="button-wrapper">
                            <tr>
                              <td>
                                <a href="{{url}}/staff/pending-claim" target="_blank">View pending claim</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Line Manager Declined Staff',
    description: 'Notify staff when line manager declines claim',
    subject: 'Claim Request: Supervisor Approval',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>Claim request Approval</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Dear {{staffFirstName}},</p>
                                  <p>Your overtime claim request has been declined by your line manager. Please liaise with your line manager and create a new claim request if you need to.</p>
                                  <p>Thank you.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Claim Cancelled Staff',
    description: 'Notify staff when staff cancels claim request',
    subject: 'Claim Request Cancelled',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>Claim Request Cancelled</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Hi {{staffFirstName}},</p>
                                  <p>Your pending claim request was successfully cancelled. Feel free to create another claim anytime.</p>
                                  <p>Thank you.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Edit Requested Staff',
    description: 'Notify staff when line manager requests edit staffs claim',
    subject: 'Edit Requested',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>Edit Requested</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Hi {{staffFirstName}},</p>
                                  <p>Your line manager requested edit on your pending claim. Please update your claim request as requested.</p>
                                  <p>Thank you.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="button-wrapper">
                            <tr>
                              <td>
                                <a href="{{url}}/staff/pending-claim" target="_blank">Go to claim</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Claim Completed Staff',
    description: 'Notify staff when claim request has been processed',
    subject: 'Claim Request Completed',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>Claim Request Completed</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Hi {{staffFirstName}},</p>
                                  <p>Your claim request has been processed. Your account would be credited with an additional value of ₦{{amount}} as payment for your overtime claim for the month of {{monthOfClaim}}.</p>
                                  <p>Thank you.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Pending Claim Reminder Staff',
    description: 'Notify staff of claim yet to be approved',
    subject: 'Pending Claim Reminder',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>Claim Request Pending</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Hi {{staffFirstName}},</p>
                                  <p>Please be reminded that your claim is yet to be approved. It is important that you follow up with your line managers for approval, so your claim can be processed.</p>
                                  <p>Time is running out.</p>
                                  <p>Thank you.</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Activation Email Staff',
    description: 'Send staff login details',
    subject: 'Welcome to V-Timer',
    htmlMessage: `<html lang="en" dir="ltr">
      ${headerAndFooterContent('header')}
      <body>
        <table class="cover">
          <tr>
            <td>
              <table class="content-wrapper">
                <tr>
                  <td>
                    <table class="header">
                      <tr>
                        <td>
                          <img src="https://res.cloudinary.com/invergent/image/upload/v1565715079/overtime/viclawrence/logo.png" alt="Logo">
                        </td>
                      </tr>
                    </table>
                    <hr>
                    <table class="body">
                      <tr>
                        <td>
                          <h2>Welcome to V-Timer</h2>
                          <table class="paragraphs">
                            <tr>
                              <td>
                                <div>
                                  <p>Hi {{staffFirstName}},</p>
                                  <p>We are excited to welcome you to the new <a href="{{url}}/login" target="_blank">V-Timer</a> application for managing your overtime requests.</p>
                                  <p>Below are your login details (unique to you). Please do not share!</p>
                                  <p class="no-margin">StaffId: {{staffId}}</p>
                                  <p class="no-margin">Password: {{password}}</p>
                                  <p>Use the login credentials to login to your account <a href="{{url}}/login" target="_blank">here</a>.</p>
                                  <p>See you inside!</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: queryInterface => queryInterface.dropTable('EmailTemplate')
};
