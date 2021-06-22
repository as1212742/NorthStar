/** @format */
import SideNavigation, {
  SideNavigationItemType,
} from "aws-northstar/components/SideNavigation";

const navigationItems = [
  { type: SideNavigationItemType.LINK, text: "ECS Calculator", href: "/ECS" },
  {
    type: SideNavigationItemType.LINK,
    text: "EKS Calculator",
    href: "/Pods",
  },
  { type: SideNavigationItemType.DIVIDER },
  {
    type: SideNavigationItemType.LINK,
    text: "Documentation",
    href: "https://aws.amazon.com/blogs/containers/amazon-ecs-vs-amazon-eks-making-sense-of-aws-container-services/",
  },
];

const navigation = (
  <SideNavigation
    header={{
      href: "/",
      text: "Home",
    }}
    items={navigationItems}
  />
);

export default navigation;
