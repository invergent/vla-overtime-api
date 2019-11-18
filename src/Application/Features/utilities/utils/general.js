export const claimTypeRates = {
  weekday: 150,
  weekend: 800,
  atm: 3000,
  shift: 800
};

export const authErrorCodes = {
  admin: 'ERRADMAUTH',
  staff: 'ERRSTFAUTH',
  lineManager: 'ERRLMRAUTH',
  passwordReset: 'ERRPSRAUTH'
};

export const authRoleName = {
  admin: 'currentAdmin',
  staff: 'currentStaff',
  lineManager: 'lineManager',
  passwordReset: 'currentReset'
};

export const exportDocHeaders = [
  'S/N', 'Staff No', 'Full Name', 'Sol ID', 'Branch', 'Job Function', 'Account Number',
  'Overtime', 'Weekend', 'Shift Duty', 'ATM Duty', 'ATM Support', 'Holiday', 'OutStation Allowance',
  'Amount', 'Status', 'Month of Claim', 'Approved By', 'Approver Email Address'
];

export const claimTypes = [
  'overtime', 'weekend', 'shiftDuty', 'atmDuty', 'atmSupport', 'holiday', 'outstation',
  'Amount', 'Status', 'Month of Claim', 'Approved By', 'Approver Email Address'
];

export const notificationActivities = {
  supervisorApproved: 'Claim approved by supervisor.',
  supervisorDeclined: 'Claim declined by supervisor.',
  BSMApproved: 'Claim approved by BSM.',
  BSMDeclined: 'Claim declined by BSM.',
  supervisorEditRequested: 'Supervisor requested edit.',
  BSMEditRequested: 'BSM requested edit.',
  adminProcessed: 'Claim has been processed.',
  adminPaid: 'Your claim has been paid.'
};

export const companyInfo = {};
