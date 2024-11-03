import * as S from "./styles";

import Select, {
  DropdownIndicatorProps,
  GroupBase,
  Props,
  components,
} from "react-select";

export interface CustomSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
  label?: string;
  required?: boolean;
  error?: boolean;
}

export const SimpleSelect = function ReactSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: CustomSelectProps<Option, IsMulti, Group>) {
  const DropdownIndicator = (
    props: DropdownIndicatorProps<Option, IsMulti, Group>
  ) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <img
            src="/assets/svg/icon-arrow-down.svg"
            alt="icon arrow down"
            id="arrow-down"
          />
        </components.DropdownIndicator>
      )
    );
  };

  const IndicatorSeparator = () => {
    return null;
  };

  return (
    <S.Container error={props?.error}>
      <S.Label error={props?.error}>
        {props?.label && <span>{props.label}</span>}
        <Select
          {...props}
          components={{
            DropdownIndicator,
            IndicatorSeparator,
          }}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </S.Label>
    </S.Container>
  );
};
