interface ChattingList {
  sendUserId: number;
  message: string;
  notRead: number;
  sendAt: string;
}

export const isInNotReadMessages = (
  userId: number,
  newMessages: Array<ChattingList>,
): boolean => {
  return newMessages.some(
    message => message.sendUserId !== userId && message.notRead === 1,
  );
};
