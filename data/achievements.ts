export interface Achievement {
  title: string;
  description: string;
  icon: string;
  link: string;
  isHackathon?: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const achievementsData: Achievement[] = [
  {
    title: "1st Place - Hack on Hills 6.0",
    description: "Won 1st place in the Blockchain Track at NIT Hamirpur's flagship national hackathon, competing against 200+ teams. Developed FlexiPay, a privacy-preserving Web3 payment gateway.",
    icon: "🏆",
    link: "https://github.com/agrawal464/FlexiPay",
    isHackathon: true,
  },
  {
    title: "LeetCode Profile",
    description: "Active problem solver with consistent daily streak and participation in weekly contests.",
    icon: "⚡",
    link: "https://leetcode.com/u/agrawal464/",
    stats: [
      { label: "Solved", value: "450+" },
      { label: "Rating", value: "1750+ (Knight)" },
      { label: "Global Rank", value: "Top 4.8%" },
    ],
  },
  {
    title: "Codeforces Profile",
    description: "Regular contestant in Div. 2 / Div. 3 short-format competitive programming contests.",
    icon: "💻",
    link: "https://codeforces.com/profile/agrawal464",
    stats: [
      { label: "Max Rating", value: "1410 (Specialist)" },
      { label: "Contests", value: "35+" },
      { label: "Solved", value: "280+" },
    ],
  },
  {
    title: "CodeChef Profile",
    description: "Engage in monthly rated challenges and coding contests to polish data structure skills.",
    icon: "🏅",
    link: "https://www.codechef.com/users/agrawal464",
    stats: [
      { label: "Rating", value: "1680 (3-Star)" },
      { label: "Contests", value: "Div 2 Active" },
      { label: "Solved", value: "150+" },
    ],
  },
  {
    title: "HackerEarth Profile",
    description: "Consistent problem solver in algorithmic challenges and recruitment hackathons.",
    icon: "🛡️",
    link: "https://www.hackerearth.com/@agrawal464",
    stats: [
      { label: "Overall Rank", value: "Top 6%" },
      { label: "Badge Level", value: "Amateur" },
    ],
  },
];
