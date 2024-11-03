import "styled-components";

import { Theme } from "../Global/Theme";

export type ITheme = typeof Theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ITheme {}
}
