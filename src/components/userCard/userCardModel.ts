import { User } from "../../types/user";
import { getUserDOB, getUserFullAddress } from "../../utils/common";

export const textDataBlocks = (user: User, isMobile: boolean) => [
  {
    blockName: user.email,
    blockValue: `${user.name.first} ${user.name.last}`,
    titleWeight: 700,
    style: { 
      width: isMobile ? "calc(100% - 2.5rem)" : "23%", 
      order: isMobile ? 1 : undefined,
      marginBottom: isMobile ? '1rem' : undefined
    },
    withBottomDivider: true
  }, {
    blockName: "Birth date",
    blockValue: getUserDOB(user.dob.date),
    style: { 
      width: isMobile ? "50%" : "11%", 
      order: isMobile ? 3 : undefined,
      paddingLeft: isMobile ? 0 : undefined
    }
  }, {
    blockName: "Address",
    blockValue: getUserFullAddress(user.location),
    style: { 
      width: isMobile ? "60%" : "32%", 
      order: isMobile ? 5 : undefined,
      paddingLeft: isMobile ? 0 : undefined
    }
  }, {
    blockName: "Phone number",
    blockValue: user.phone,
    style: { 
      width: isMobile ? "40%" : "16%", 
      order: isMobile ? 6 : undefined,
      textAlign: "right",
      paddingRight: isMobile ? 0 : undefined
    }
  }, {
    blockName: "Password",
    blockValue: user.login.password,
    style: {
      width: isMobile ? "50%" : "11%",
      order: isMobile ? 4 : undefined,
      textAlign: 'right',
      paddingRight: isMobile ? 0 : undefined
    }
  }
];