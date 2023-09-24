import { OnlineChatType } from "../redux/online/onlineTypes";

export const filterDuplicateChats = (arr: OnlineChatType[]) => {
  let unique: OnlineChatType[] = [];

  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
};
