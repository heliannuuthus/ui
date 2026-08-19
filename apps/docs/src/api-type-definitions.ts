import type {
  ApiProperty,
  ApiTypePreview,
  ComponentDocumentation,
} from './component-docs';
import { orderApiProperties } from './api-property-order';

export type ApiTypeDefinition = ApiTypePreview;

export const apiTypeDefinitionReference = (name: string) =>
  name.replace(/<.*>$/, '');

const platformTypeNames = new Set([
  'AnchorHTMLAttributes',
  'Array',
  'Awaited',
  'Blob',
  'ButtonHTMLAttributes',
  'CalendarProps',
  'CSSProperties',
  'ChangeEvent',
  'ComponentType',
  'ComponentProps',
  'ComponentPropsWithRef',
  'ComponentPropsWithoutRef',
  'ConstructorParameters',
  'Date',
  'Dispatch',
  'Element',
  'Event',
  'Exclude',
  'Extract',
  'FieldPath',
  'FieldPathValue',
  'File',
  'FocusEventHandler',
  'FormEvent',
  'FormInstance',
  'ForwardedRef',
  'HTMLAnchorElement',
  'HTMLAttributeAnchorTarget',
  'HTMLAttributes',
  'HTMLButtonElement',
  'HTMLDivElement',
  'HTMLElement',
  'HTMLInputElement',
  'HTMLInputTypeAttribute',
  'HTMLTextAreaElement',
  'InputHTMLAttributes',
  'InputOTPProps',
  'InstanceType',
  'KeyboardEvent',
  'Link',
  'Map',
  'MouseEvent',
  'MouseEventHandler',
  'NonNullable',
  'Omit',
  'Parameters',
  'Partial',
  'Pick',
  'Promise',
  'React.CSSProperties',
  'React.Key',
  'React.ReactElement',
  'React.ReactNode',
  'React.Ref',
  'ReactElement',
  'ReactNode',
  'Readonly',
  'ReadonlyArray',
  'Record',
  'Ref',
  'RefObject',
  'RegisterOptions',
  'Required',
  'ResponsiveContainerProps',
  'ReturnType',
  'Set',
  'SetStateAction',
  'SpringOptions',
  'SubmitErrorHandler',
  'TextareaHTMLAttributes',
  'ToasterProps',
  'ToastProviderProps',
  'Uncapitalize',
  'Uppercase',
  'Capitalize',
  'Lowercase',
]);

const groupApiProperties = (
  properties: ApiProperty[],
  defaultComponent: string
) => {
  const groups = new Map<string, ApiProperty[]>();

  for (const property of orderApiProperties(properties, defaultComponent)) {
    const component = property.component ?? defaultComponent;
    const group = groups.get(component);

    if (group) group.push(property);
    else groups.set(component, [property]);
  }

  return Array.from(groups, ([component, api]) => ({ api, component }));
};

export const createApiTypeDefinitions = (
  documentationBySlug: Record<string, ComponentDocumentation>
) => {
  const definitions = new Map<string, ApiTypeDefinition>();

  for (const documentation of Object.values(documentationBySlug)) {
    const groups = groupApiProperties(documentation.api, documentation.name);
    const primaryGroup = groups.find(
      (group) => group.component === documentation.name
    );
    const componentTypeName = documentation.name.replace(/[^A-Za-z0-9_$]/g, '');

    if (primaryGroup && componentTypeName) {
      const name = `${componentTypeName}Props`;
      definitions.set(name, { api: primaryGroup.api, name });
    }

    for (const group of groups) {
      if (documentation.typeDefinitionGroups?.includes(group.component)) {
        definitions.set(group.component, {
          api: group.api,
          name: group.component,
        });
      }
    }

    for (const preview of documentation.typePreviews ?? []) {
      definitions.set(apiTypeDefinitionReference(preview.name), preview);
    }
  }

  return definitions;
};

export const apiTypeTokens = (type: string) =>
  type.split(/([A-Za-z_$][A-Za-z0-9_$]*(?:\.[A-Za-z_$][A-Za-z0-9_$]*)*)/g);

export const apiTypeReferences = (type: string) => {
  const withoutLiterals = type.replace(/(['"`])(?:\\.|(?!\1).)*\1/g, '');

  return apiTypeTokens(withoutLiterals).filter((part) =>
    /^[A-Za-z_$][A-Za-z0-9_$]*(?:\.[A-Za-z_$][A-Za-z0-9_$]*)*$/.test(part)
  );
};

export const isCustomApiTypeReference = (reference: string) => {
  if (platformTypeNames.has(reference)) return false;
  if (/^(?:Intl|React|Recharts|NavigationMenuPrimitive)\./.test(reference)) {
    return false;
  }
  if (['Item', 'Key', 'TData', 'Value'].includes(reference)) return false;

  const segments = reference.split('.');
  const name = segments[segments.length - 1] ?? reference;
  return name.length > 1 && /^[A-Z]/.test(name);
};
