import helpers from '../helpers';
import services from '../services';
import { templateNames } from '../utils/types';

const {
  Mailer, PasswordResetHelper, ClaimHelpers, krypter, EmailConstructor
} = helpers;
const { ClaimService, ClaimApprovalHistoryService } = services;
const {
  Cancelled, Completed, NewClaim, EditRequested, UpdatedLineManager, FirstApproval,
  SecondApproval, Reminder, Activation
} = templateNames;

class EmailNotifications {
  static async sendNotificationEmail(emailDetails) {
    const email = await EmailConstructor.create(emailDetails);
    return EmailNotifications.sender(email);
  }

  static async sendPasswordResetEmail(staff) {
    const { staffId } = staff;
    const passwordResetHash = PasswordResetHelper.createAndSaveResetHash(staffId);
    return EmailNotifications.sendNotificationEmail(staff, templateNames.Reset, passwordResetHash);
  }

  static sendLineManagerNotifications(staff, templateName, lineManagerRole) {
    const tokenPayload = { id: staff[lineManagerRole].id, role: lineManagerRole };
    const urlToken = krypter.authenticationEncryption('lineManager', tokenPayload);
    const emailDetails = {
      ...staff, templateName, urlToken, directTo: lineManagerRole
    };
    return EmailNotifications.sendNotificationEmail(emailDetails);
  }

  static async sendNotificationEmailToMany(reciepients, templateName) {
    const emails = await EmailConstructor.createForMany(reciepients, templateName);
    return EmailNotifications.sender(emails);
  }

  static notifySupervisorOfNewClaim(staff) {
    EmailNotifications.sendLineManagerNotifications(staff, FirstApproval, 'supervisor');
  }

  static notifyBSMOfApprovedClaim(staff) {
    EmailNotifications.sendLineManagerNotifications(staff, SecondApproval, 'BSM');
  }

  static notifyLineManagerOfUpdatedClaim(staff, lineManagerRole) {
    EmailNotifications.sendLineManagerNotifications(staff, UpdatedLineManager, lineManagerRole);
  }

  // static notifyStaffUpdatedClaim(staff) {
  //   EmailNotifications.sendNotificationEmail({ ...staff, templateName: 'UpdatedStaff' });
  // }

  static notifyStaffOfClaimSubmission(staff) {
    EmailNotifications.sendNotificationEmail({ ...staff, templateName: NewClaim });
  }

  static notifyStaffOfApproval(staff, approvalType, lineManagerRole) {
    const emailDetails = {
      ...staff,
      templateName: `Line Manager ${approvalType}`,
      currentLineManagerRole: lineManagerRole
    };
    EmailNotifications.sendNotificationEmail(emailDetails);
  }

  static notifyStaffCancelled(staff) {
    EmailNotifications.sendNotificationEmail({ ...staff, templateName: Cancelled });
  }

  static notifyStaffEditRequest(staff, lineManagerRole) {
    const emailDetails = {
      ...staff,
      templateName: EditRequested,
      currentLineManagerRole: lineManagerRole
    };
    EmailNotifications.sendNotificationEmail(emailDetails);
  }

  static remindStaffOfPendingClaim(listOfStaff) {
    EmailNotifications.sendNotificationEmailToMany(listOfStaff, Reminder);
  }

  static sendActivationEmail(listOfStaff) {
    EmailNotifications.sendNotificationEmailToMany(listOfStaff, Activation);
  }

  static async notifyStaffCompleted() {
    const completedClaimsWithStaff = await ClaimService.fetchCompletedClaim('Completed');
    const filteredListOfStaff = ClaimHelpers.filterCompletedClaims(completedClaimsWithStaff);
    EmailNotifications.sendNotificationEmailToMany(filteredListOfStaff, 'Completed');

    // update completed claim histories
    ClaimApprovalHistoryService.createApprovalHistoryOnCompletion(filteredListOfStaff);
  }

  static sender(emails) {
    const mailer = new Mailer();
    if (Array.isArray(emails)) return mailer.sendToMany(emails);
    return mailer.send(emails);
  }
}

export default EmailNotifications;
