import services from '../services';
import { notificationActivities } from '../utils/general';
import { eventNames } from '../utils/types';
import pusher from './pusher';
import helpers from '../helpers';

const { ClaimHelpers } = helpers;
const { NotificationService, ClaimService } = services;
const { EditRequested } = eventNames;

class InAppNotifications {
  static notifyStaffOfApproval(staff, approvalType, lineManagerRole, claimId) {
    return InAppNotifications.recordAndNotifyStaff(staff, approvalType, lineManagerRole, claimId);
  }

  static notifyStaffEditRequest(staff, lineManagerRole, claimId) {
    return InAppNotifications.recordAndNotifyStaff(staff, 'EditRequested', lineManagerRole, claimId);
  }

  static notifyStaffCompleted() {
    return InAppNotifications.recordAndNotifyManyStaff();
  }

  static recordAndNotifyStaff(staff, approvalType, lineManagerRole, claimId) {
    const message = notificationActivities[`${lineManagerRole}${approvalType}`];

    pusher.trigger(`${staff.staffId}`, approvalType, { message });

    const notification = {
      activity: message, type: approvalType, userId: staff.id, claimId
    };
    return NotificationService.createNotification(notification);
  }

  static async recordAndNotifyManyStaff() {
    const completedClaimsWithStaff = await ClaimService.fetchPendingClaims('Completed');
    const filteredListOfStaff = ClaimHelpers.filterCompletedClaims(completedClaimsWithStaff);

    return filteredListOfStaff.forEach((staff) => {
      InAppNotifications.recordAndNotifyStaff(staff, 'Processed', 'admin', staff.claimId);
    });
  }
}

export default InAppNotifications;
