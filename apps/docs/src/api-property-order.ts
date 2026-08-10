type OrderableApiProperty = {
  component?: string;
  name: string;
  required?: boolean;
};

const stylePropertyOrder = new Map([
  ['classNames', 0],
  ['styles', 1],
  ['className', 2],
  ['style', 3],
]);

const propertyName = (name: string) => {
  const segments = name.split('.');
  return segments[segments.length - 1] ?? name;
};

const propertyCategory = (name: string) => {
  const leafName = propertyName(name);

  if (stylePropertyOrder.has(leafName)) return 3;
  if (leafName === 'ref') return 2;
  if (/^on[A-Z]/.test(leafName)) return 1;
  return 0;
};

const alphabeticalProperty = (name: string) => {
  const leafName = propertyName(name);

  if (/^default[A-Z]/.test(leafName)) {
    return {
      name: `${leafName.slice(7, 8).toLowerCase()}${leafName.slice(8)}`,
      variant: 1,
    };
  }

  return { name: leafName, variant: 0 };
};

export const comparePropertyNames = (left: string, right: string) => {
  const categoryDifference = propertyCategory(left) - propertyCategory(right);
  if (categoryDifference !== 0) return categoryDifference;

  const leftName = propertyName(left);
  const rightName = propertyName(right);
  const leftStyleOrder = stylePropertyOrder.get(leftName);
  const rightStyleOrder = stylePropertyOrder.get(rightName);

  if (leftStyleOrder != null && rightStyleOrder != null) {
    return leftStyleOrder - rightStyleOrder;
  }

  const leftAlphabetical = alphabeticalProperty(left);
  const rightAlphabetical = alphabeticalProperty(right);
  const nameDifference = leftAlphabetical.name.localeCompare(
    rightAlphabetical.name,
    'en',
    { numeric: true, sensitivity: 'base' }
  );

  return nameDifference || leftAlphabetical.variant - rightAlphabetical.variant;
};

export const qualifiedApiPropertyName = (
  property: OrderableApiProperty
): string =>
  property.component ? `${property.component}.${property.name}` : property.name;

export const orderApiProperties = <Property extends OrderableApiProperty>(
  properties: Property[],
  defaultComponent: string
): Property[] => {
  const componentOrder = new Map<string, number>();

  for (const property of properties) {
    const component = property.component ?? defaultComponent;
    if (!componentOrder.has(component)) {
      componentOrder.set(component, componentOrder.size);
    }
  }

  return [...properties].sort((left, right) => {
    const leftComponent = left.component ?? defaultComponent;
    const rightComponent = right.component ?? defaultComponent;
    const componentDifference =
      (componentOrder.get(leftComponent) ?? 0) -
      (componentOrder.get(rightComponent) ?? 0);
    if (componentDifference !== 0) return componentDifference;

    if (left.required !== right.required) return left.required ? -1 : 1;
    return comparePropertyNames(left.name, right.name);
  });
};

export const orderPropertyEntries = <Value>(
  properties: Record<string, Value>,
  orderedNames: string[] = []
) => {
  const order = new Map(orderedNames.map((name, index) => [name, index]));

  return Object.entries(properties).sort(([left], [right]) => {
    const leftIndex = order.get(left);
    const rightIndex = order.get(right);

    if (leftIndex != null || rightIndex != null) {
      if (leftIndex == null) return 1;
      if (rightIndex == null) return -1;
      return leftIndex - rightIndex;
    }

    return comparePropertyNames(left, right);
  });
};
