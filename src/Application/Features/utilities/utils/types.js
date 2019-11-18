export const templateNames = Object.freeze({
  Reset: 'Reset',
  FirstApproval: 'First Approval',
  SecondApproval: 'Second Approval',
  NewClaim: 'New Claim',
  EditRequested: 'Edit Requested',
  UpdatedLineManager: 'Claim Updated',
  lineManagerApproved: 'Line Manager Approved',
  lineManagerDeclined: 'Line Manager Declined',
  Cancelled: 'Claim Cancelled',
  Completed: 'Claim Completed',
  Reminder: 'Pending Claim Reminder',
  Activation: 'Activation Email'
});

export const roleNames = Object.freeze({
  supervisor: 'supervisor',
  BSM: 'BSM'
});

export const eventNames = Object.freeze({
  ForgotPassword: 'ForgotPassword',
  NewClaim: 'NewClaim',
  Updated: 'Updated',
  EditRequested: 'EditRequested',
  supervisorApproved: 'supervisorApproved',
  supervisorDeclined: 'supervisorDeclined',
  BSMApproved: 'BSMApproved',
  BSMDeclined: 'BSMDeclined',
  Cancelled: 'Cancelled',
  Reminder: 'Reminder',
  LogActivity: 'LogActivity',
  Completed: 'Completed',
  Activation: 'Activation',
  ResendCrendentials: 'ResendCrendentials'
});

export const activityNames = Object.freeze({
  PasswordReset: 'Requested a PasswordReset.',
  ChangePassword: 'Updated password',
  ChangeBranch: 'Changed branch to {{branchName}}',
  NewClaim: 'Created a new claim',
  Updated: 'Updated claim',
  EditRequested: 'Edit requested',
  Cancelled: 'Cancelled claim'
});
