import {
  VerticalNavbar as RFUIVerticalNavbar,
} from "@/islands/molecules/vertical-navbar/index.tsx";

type VerticalNavbarType = {
  route: string;
};

export const VerticalNavbar = ({ route }: VerticalNavbarType) => {
  return <RFUIVerticalNavbar></RFUIVerticalNavbar>;
};
