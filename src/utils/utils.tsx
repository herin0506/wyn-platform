export const getCurrentYear = (): number => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

export const shouldForwardProp = <CustomProps extends Record<string, any>>(
  props: Array<keyof CustomProps>,
  prop: PropertyKey,
): boolean => !props.includes(prop as string);
