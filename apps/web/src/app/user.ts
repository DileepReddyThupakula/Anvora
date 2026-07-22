export interface UserProfile {
  name: string;
  firstName: string;
  title: string;
  initials: string;
  status: "online" | "away" | "offline";
}

export const currentUser: UserProfile = {
  name: "Deepu",
  firstName: "Deepu",
  title: "Founder & CEO",
  initials: "DP",
  status: "online",
};
