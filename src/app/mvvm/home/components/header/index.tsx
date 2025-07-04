import { useHeaderModel } from "./header.model";
import { HeaderView } from "./header.view";

export interface HeaderProps {
  selectedCategory?: string;
  handleCategoryChange: (category: string) => void;
}

export function Header(props: HeaderProps) {
  const modelProps = useHeaderModel()

  return <HeaderView {...modelProps} {...props} />
}